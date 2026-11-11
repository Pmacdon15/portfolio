import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { createElement } from 'react'
import { afterEach, vi } from 'vitest'

// next/link expects a mounted Next router; a plain anchor is enough for tests.
// Clicks don't navigate, since jsdom can't load another document.
vi.mock('next/link', () => ({
	default: ({
		href,
		children,
		onClick,
		...rest
	}: Record<string, unknown> & { onClick?: (e: MouseEvent) => void }) =>
		createElement(
			'a',
			{
				href,
				onClick: (event: MouseEvent) => {
					onClick?.(event)
					event.preventDefault()
				},
				...rest,
			},
			children as never,
		),
}))

// next/image needs the image optimizer; a plain <img> keeps the props visible.
vi.mock('next/image', () => ({
	default: ({
		src,
		alt,
		blurDataURL: _blur,
		placeholder: _placeholder,
		...rest
	}: Record<string, unknown>) => createElement('img', { alt, src, ...rest }),
}))

// jsdom lacks these browser APIs, which Radix and Embla rely on.
class ObserverStub {
	observe() {}
	unobserve() {}
	disconnect() {}
	takeRecords() {
		return []
	}
}
globalThis.ResizeObserver ??= ObserverStub as unknown as typeof ResizeObserver
globalThis.IntersectionObserver ??=
	ObserverStub as unknown as typeof IntersectionObserver

if (typeof window !== 'undefined' && !window.matchMedia) {
	window.matchMedia = (query: string) =>
		({
			matches: false,
			media: query,
			onchange: null,
			addListener: () => {},
			removeListener: () => {},
			addEventListener: () => {},
			removeEventListener: () => {},
			dispatchEvent: () => false,
		}) as MediaQueryList
}

process.env.TZ = 'UTC'

afterEach(() => {
	cleanup()
	vi.useRealTimers()
})
