import { QueryClientProvider } from '@tanstack/react-query'
import { act, renderHook, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'

const sendEmail = vi.hoisted(() => vi.fn())
vi.mock('@/lib/actions/resend', () => ({ sendEmail }))

import { useSendMessage } from '@/lib/mutations/send-message'
import { createQueryClient } from '../utils'

const values = {
	full_name: 'Jane Doe',
	email: 'jane@example.com',
	message: 'I would love to chat about a job.',
}

function wrapper({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={createQueryClient()}>
			{children}
		</QueryClientProvider>
	)
}

describe('useSendMessage', () => {
	it('sends the form values and calls onSuccess', async () => {
		sendEmail.mockResolvedValue({ id: 'email_1' })
		const onSuccess = vi.fn()
		const { result } = renderHook(() => useSendMessage({ onSuccess }), {
			wrapper,
		})

		act(() => result.current.mutate(values))

		await waitFor(() => expect(onSuccess).toHaveBeenCalled())
		expect(sendEmail).toHaveBeenCalledWith(values)
	})

	it('passes a failure to onError', async () => {
		const error = new Error('boom')
		sendEmail.mockRejectedValue(error)
		const onError = vi.fn()
		const { result } = renderHook(() => useSendMessage({ onError }), {
			wrapper,
		})

		act(() => result.current.mutate(values))

		await waitFor(() => expect(onError).toHaveBeenCalled())
		expect(onError.mock.calls[0][0]).toBe(error)
	})

	it('works without callbacks', async () => {
		sendEmail.mockResolvedValue({ id: 'email_1' })
		const { result } = renderHook(() => useSendMessage(), { wrapper })

		act(() => result.current.mutate(values))

		await waitFor(() => expect(result.current.isSuccess).toBe(true))
	})
})
