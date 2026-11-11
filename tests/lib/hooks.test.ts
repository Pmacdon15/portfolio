import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import useIsSmallScreen from '@/lib/utils/hooks'
import { setWindowWidth } from '../utils'

describe('useIsSmallScreen', () => {
	afterEach(() => setWindowWidth(1024))

	it('is true at 880px and below, and follows resizes', () => {
		setWindowWidth(1200)
		const { result } = renderHook(() => useIsSmallScreen())
		expect(result.current).toBe(false)

		act(() => setWindowWidth(880))
		expect(result.current).toBe(true)

		act(() => setWindowWidth(881))
		expect(result.current).toBe(false)
	})

	it('stops listening for resizes on unmount', () => {
		const remove = vi.spyOn(window, 'removeEventListener')
		const { unmount } = renderHook(() => useIsSmallScreen())
		unmount()
		expect(remove).toHaveBeenCalledWith('resize', expect.any(Function))
	})
})
