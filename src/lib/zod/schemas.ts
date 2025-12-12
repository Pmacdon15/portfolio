import z from 'zod'

export const formSchema = z.object({
	full_name: z
		.string()
		.min(3, 'Full Name must be at least 3 characters.')
		.max(25, 'Full Name must be at most 25 characters.'),
	email: z
		.email('Enter your email')
		.min(3, 'Email must be at least 3 characters.')
		.max(50, 'Email must be at most 50 characters.'),
	message: z
		.string()
		.min(20, 'Message must be at least 20 characters.')
		.max(200, 'Message must be at most 200 characters.'),
})
