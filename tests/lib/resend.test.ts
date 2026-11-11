import { beforeEach, describe, expect, it, vi } from 'vitest'

const { send, apiKeys } = vi.hoisted(() => {
	process.env.RESEND_API_KEY = 're_test_key'
	return { send: vi.fn(), apiKeys: [] as unknown[] }
})
vi.mock('resend', () => ({
	Resend: function Resend(key: unknown) {
		apiKeys.push(key)
		return { emails: { send } }
	},
}))

import { EmailTemplate } from '@/components/ui/email-templates/contact-email'
import { sendEmail } from '@/lib/actions/resend'

const values = {
	full_name: 'Jane Doe',
	email: 'jane@example.com',
	message: 'I would love to chat about a job.',
}

describe('sendEmail', () => {
	beforeEach(() => {
		vi.spyOn(console, 'log').mockImplementation(() => {})
		vi.spyOn(console, 'error').mockImplementation(() => {})
	})

	it('creates the Resend client once with the API key', () => {
		expect(apiKeys).toEqual(['re_test_key'])
	})

	it('emails the message to Patrick with a reply-to of the sender', async () => {
		send.mockResolvedValue({ data: { id: 'email_1' }, error: null })

		await expect(sendEmail(values)).resolves.toEqual({ id: 'email_1' })

		expect(send).toHaveBeenCalledWith({
			from: 'Contact Form <contact@contact.patmac.ca>',
			to: ['patrick@patmac.ca'],
			subject: 'Contact Form Filled Out',
			react: EmailTemplate({
				name: values.full_name,
				email: values.email,
				message: values.message,
			}),
			replyTo: values.email,
		})
	})

	it('refuses an invalid form without calling Resend', async () => {
		await expect(sendEmail({ ...values, email: 'nope' })).rejects.toThrow(
			'Error sending email: invalid form',
		)
		expect(send).not.toHaveBeenCalled()
	})

	it('throws the Resend error', async () => {
		const error = { name: 'validation_error', message: 'bad from' }
		send.mockResolvedValue({ data: null, error })

		await expect(sendEmail(values)).rejects.toThrow(
			`Error sending email: ${JSON.stringify(error)}`,
		)
		expect(console.error).toHaveBeenCalledWith('Error ', error)
	})
})
