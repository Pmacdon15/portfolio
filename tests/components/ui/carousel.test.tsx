import { act, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

type Listener = (api: unknown) => void

const embla = vi.hoisted(() => {
	const listeners = new Map<string, Listener>()
	const api = {
		canScrollPrev: vi.fn(() => false),
		canScrollNext: vi.fn(() => true),
		scrollPrev: vi.fn(),
		scrollNext: vi.fn(),
		on: vi.fn((event: string, fn: Listener) => listeners.set(event, fn)),
		off: vi.fn(),
	}
	return { api, listeners, current: api as typeof api | undefined }
})

const useEmblaCarousel = vi.hoisted(() =>
	vi.fn((_opts: unknown, _plugins?: unknown) => [vi.fn(), embla.current]),
)
vi.mock('embla-carousel-react', () => ({ default: useEmblaCarousel }))

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

function renderCarousel(props: Parameters<typeof Carousel>[0] = {}) {
	return render(
		<Carousel {...props}>
			<CarouselContent data-testid="content">
				<CarouselItem>One</CarouselItem>
				<CarouselItem>Two</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>,
	)
}

const prev = () => screen.getByRole('button', { name: 'Previous slide' })
const next = () => screen.getByRole('button', { name: 'Next slide' })

describe('Carousel', () => {
	beforeEach(() => {
		embla.current = embla.api
		embla.listeners.clear()
		embla.api.canScrollPrev.mockReturnValue(false)
		embla.api.canScrollNext.mockReturnValue(true)
	})

	it('renders a horizontal carousel region with slides', () => {
		renderCarousel({ opts: { loop: true } })
		const region = screen.getByRole('region')
		expect(region).toHaveAttribute('aria-roledescription', 'carousel')
		expect(screen.getAllByRole('group')).toHaveLength(2)
		expect(screen.getByTestId('content')).toHaveClass('-ml-4')
		expect(screen.getAllByRole('group')[0]).toHaveClass('pl-4')
		expect(useEmblaCarousel).toHaveBeenCalledWith(
			{ loop: true, axis: 'x' },
			undefined,
		)
	})

	it('lays out vertically', () => {
		renderCarousel({ orientation: 'vertical' })
		expect(useEmblaCarousel).toHaveBeenCalledWith({ axis: 'y' }, undefined)
		expect(screen.getByTestId('content')).toHaveClass('flex-col')
		expect(screen.getAllByRole('group')[0]).toHaveClass('pt-4')
		expect(prev()).toHaveClass('rotate-90')
		expect(next()).toHaveClass('rotate-90')
	})

	it('enables the buttons from the api and updates on select', () => {
		renderCarousel()
		expect(prev()).toBeDisabled()
		expect(next()).toBeEnabled()
		expect(embla.api.on).toHaveBeenCalledWith(
			'reInit',
			expect.any(Function),
		)

		embla.api.canScrollPrev.mockReturnValue(true)
		embla.api.canScrollNext.mockReturnValue(false)
		act(() => embla.listeners.get('select')?.(embla.api))

		expect(prev()).toBeEnabled()
		expect(next()).toBeDisabled()
	})

	it('scrolls with the buttons and arrow keys', () => {
		embla.api.canScrollPrev.mockReturnValue(true)
		renderCarousel()

		fireEvent.click(prev())
		fireEvent.click(next())
		expect(embla.api.scrollPrev).toHaveBeenCalledTimes(1)
		expect(embla.api.scrollNext).toHaveBeenCalledTimes(1)

		const region = screen.getByRole('region')
		fireEvent.keyDown(region, { key: 'ArrowLeft' })
		fireEvent.keyDown(region, { key: 'ArrowRight' })
		fireEvent.keyDown(region, { key: 'Enter' })
		expect(embla.api.scrollPrev).toHaveBeenCalledTimes(2)
		expect(embla.api.scrollNext).toHaveBeenCalledTimes(2)
	})

	it('hands the api to setApi and unsubscribes on unmount', () => {
		const setApi = vi.fn()
		const { unmount } = renderCarousel({ setApi })
		expect(setApi).toHaveBeenCalledWith(embla.api)
		unmount()
		expect(embla.api.off).toHaveBeenCalledWith(
			'select',
			expect.any(Function),
		)
	})

	it('ignores the select handler being called without an api', () => {
		renderCarousel()
		act(() => embla.listeners.get('select')?.(undefined))
		expect(next()).toBeEnabled()
	})

	it('waits for embla to create its api', () => {
		embla.current = undefined
		const setApi = vi.fn()
		renderCarousel({ setApi })

		expect(setApi).not.toHaveBeenCalled()
		expect(prev()).toBeDisabled()
		expect(next()).toBeDisabled()
		// Without an api the arrow keys do nothing.
		fireEvent.keyDown(screen.getByRole('region'), { key: 'ArrowRight' })
		expect(embla.api.scrollNext).not.toHaveBeenCalled()
		fireEvent.keyDown(screen.getByRole('region'), { key: 'ArrowLeft' })
		expect(embla.api.scrollPrev).not.toHaveBeenCalled()
	})

	it('throws when a part is used outside <Carousel>', () => {
		vi.spyOn(console, 'error').mockImplementation(() => {})
		expect(() => render(<CarouselItem />)).toThrow(
			'useCarousel must be used within a <Carousel />',
		)
	})
})
