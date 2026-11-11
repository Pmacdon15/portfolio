import { describe, expect, it } from 'vitest'
import { formSchema } from '@/lib/zod/schemas'

const valid = {
	full_name: 'Jane Doe',
	email: 'jane@example.com',
	message: 'I would love to chat about a job.',
}

const errorsFor = (values: Record<string, string>) => {
	const result = formSchema.safeParse({ ...valid, ...values })
	return result.success ? [] : result.error.issues.map((i) => i.message)
}

describe('formSchema', () => {
	it('accepts a complete message', () => {
		expect(formSchema.parse(valid)).toEqual(valid)
	})

	it.each([
		[{ full_name: 'Jo' }, 'Full Name must be at least 3 characters.'],
		[
			{ full_name: 'x'.repeat(26) },
			'Full Name must be at most 25 characters.',
		],
		[{ email: 'not-an-email' }, 'Enter your email'],
		[
			{ email: `${'x'.repeat(45)}@example.com` },
			'Email must be at most 50 characters.',
		],
		[{ message: 'too short' }, 'Message must be at least 20 characters.'],
		[
			{ message: 'x'.repeat(201) },
			'Message must be at most 200 characters.',
		],
	])('rejects %o', (values, message) => {
		expect(errorsFor(values)).toContain(message)
	})
})
