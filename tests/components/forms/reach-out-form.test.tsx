import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

const sendEmail = vi.hoisted(() => vi.fn())
vi.mock('@/lib/actions/resend', () => ({ sendEmail }))
const toast = vi.hoisted(() => ({ success: vi.fn(), error: vi.fn() }))
vi.mock('sonner', () => ({ toast }))

import { ReachOutForm } from '@/components/ui/forms/reach-out-form'
import { renderWithClient } from '../../utils'

const values = {
	full_name: 'Jane Doe',
	email: 'jane@example.com',
	message: 'I would love to chat about a job.',
}

async function fillAndSubmit() {
	const user = userEvent.setup()
	await user.type(screen.getByLabelText('Full Name'), values.full_name)
	await user.type(screen.getByLabelText('Email'), values.email)
	await user.type(screen.getByLabelText('Message'), values.message)
	await user.click(screen.getByRole('button', { name: 'Submit' }))
}

describe('ReachOutForm', () => {
	it('shows each field with its placeholder', () => {
		renderWithClient(<ReachOutForm />)
		expect(screen.getByLabelText('Full Name')).toHaveAttribute(
			'placeholder',
			'John Doe',
		)
		expect(screen.getByLabelText('Email')).toHaveAttribute(
			'placeholder',
			'j.doe@example.com',
		)
		expect(screen.getByLabelText('Message').tagName).toBe('TEXTAREA')
	})

	it('shows validation errors and sends nothing', async () => {
		const user = userEvent.setup()
		renderWithClient(<ReachOutForm />)
		await user.type(screen.getByLabelText('Full Name'), 'Jo')
		await user.click(screen.getByRole('button', { name: 'Submit' }))

		expect(
			await screen.findByText('Full Name must be at least 3 characters.'),
		).toBeTruthy()
		expect(screen.getByText('Enter your email')).toBeTruthy()
		expect(
			screen.getByText('Message must be at least 20 characters.'),
		).toBeTruthy()
		expect(screen.getByLabelText('Full Name')).toHaveAttribute(
			'aria-invalid',
			'true',
		)
		expect(sendEmail).not.toHaveBeenCalled()
	})

	it('sends the message, thanks the sender and clears the form', async () => {
		sendEmail.mockResolvedValue({ id: 'email_1' })
		renderWithClient(<ReachOutForm />)
		await fillAndSubmit()

		await waitFor(() =>
			expect(toast.success).toHaveBeenCalledWith('Email Sent', {
				description: 'Your message has been sent to me thank you!',
			}),
		)
		expect(sendEmail).toHaveBeenCalledWith(values)
		expect(screen.getByLabelText('Full Name')).toHaveValue('')
		expect(screen.getByLabelText('Message')).toHaveValue('')
	})

	it('shows the error message when sending fails', async () => {
		sendEmail.mockRejectedValue(new Error('Resend is down'))
		renderWithClient(<ReachOutForm />)
		await fillAndSubmit()

		await waitFor(() =>
			expect(toast.error).toHaveBeenCalledWith('Error Sending Email', {
				description: 'Resend is down',
			}),
		)
		expect(screen.getByLabelText('Full Name')).toHaveValue(values.full_name)
	})

	it('falls back to a generic message for a non-Error failure', async () => {
		sendEmail.mockRejectedValue('nope')
		renderWithClient(<ReachOutForm />)
		await fillAndSubmit()

		await waitFor(() =>
			expect(toast.error).toHaveBeenCalledWith('Error Sending Email', {
				description: 'An error occurred while sending your message.',
			}),
		)
	})
})
