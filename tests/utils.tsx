import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import type { ReactElement } from 'react'

export function createQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: { retry: false },
			mutations: { retry: false },
		},
	})
}

export function renderWithClient(ui: ReactElement) {
	const client = createQueryClient()
	return render(
		<QueryClientProvider client={client}>{ui}</QueryClientProvider>,
	)
}

/** Sets the jsdom window width and tells listeners it changed. */
export function setWindowWidth(width: number) {
	Object.defineProperty(window, 'innerWidth', {
		configurable: true,
		value: width,
		writable: true,
	})
	window.dispatchEvent(new Event('resize'))
}
