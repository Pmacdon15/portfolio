import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils/utils'

describe('cn', () => {
	it('joins class names and drops falsy values', () => {
		expect(
			cn('a', false, undefined, null, 'b', { c: true, d: false }),
		).toBe('a b c')
	})

	it('lets later Tailwind classes win over earlier ones', () => {
		expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
	})
})
