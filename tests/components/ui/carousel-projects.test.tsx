import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

const plugin = vi.hoisted(() => ({ stop: vi.fn(), play: vi.fn() }))
vi.mock('embla-carousel-autoplay', () => ({ default: vi.fn(() => plugin) }))
vi.mock('embla-carousel-react', () => ({ default: () => [vi.fn(), undefined] }))
vi.mock('@/lib/utils/projects', () => ({
	projects: [
		{
			id: 1,
			title: 'Live App',
			text: 'Has a site and code',
			imagePath: '/live.png',
			url: 'https://live.example.com',
			githubUrl: 'https://github.com/x/live',
		},
		{
			id: 2,
			title: 'Code Only',
			text: 'Only code',
			imagePath: '/code.png',
		},
	],
}))

import Autoplay from 'embla-carousel-autoplay'
import { CarouselProjects } from '@/components/ui/carousels/carousel-projects'
import { setWindowWidth } from '../../utils'

const fullScreen = () => screen.queryByAltText('Full Screen Image')

describe('CarouselProjects', () => {
	afterEach(() => setWindowWidth(1024))

	it('shows each project with only the links it has', () => {
		render(<CarouselProjects />)
		const [live, codeOnly] = screen.getAllByRole('group')

		expect(within(live).getByRole('heading')).toHaveTextContent('Live App')
		expect(
			within(live)
				.getAllByRole('link')
				.map((a) => a.getAttribute('href')),
		).toEqual(['https://live.example.com', 'https://github.com/x/live'])
		expect(within(codeOnly).queryAllByRole('link')).toHaveLength(0)
		expect(Autoplay).toHaveBeenCalledWith({
			delay: 3000,
			stopOnInteraction: true,
		})
	})

	it('shows the arrows on wide screens and hides them on small ones', () => {
		setWindowWidth(1200)
		const { unmount } = render(<CarouselProjects />)
		expect(screen.getByRole('button', { name: 'Next slide' })).toBeTruthy()
		unmount()

		setWindowWidth(500)
		render(<CarouselProjects />)
		expect(screen.queryByRole('button', { name: 'Next slide' })).toBeNull()
		expect(
			screen.queryByRole('button', { name: 'Previous slide' }),
		).toBeNull()
	})

	it('pauses autoplay while hovered', () => {
		render(<CarouselProjects />)
		const region = screen.getByRole('region')
		fireEvent.mouseEnter(region)
		expect(plugin.stop).toHaveBeenCalled()
		fireEvent.mouseLeave(region)
		expect(plugin.play).toHaveBeenCalled()
	})

	it('opens an image full screen on click and closes it on click', () => {
		render(<CarouselProjects />)
		fireEvent.click(
			screen.getByRole('button', { name: 'View Live App image' }),
		)
		expect(fullScreen()).toHaveAttribute('src', '/live.png')

		fireEvent.click(fullScreen() as HTMLElement)
		expect(fullScreen()).toBeNull()
	})

	it('opens with Enter or Space and closes with Escape', () => {
		render(<CarouselProjects />)
		const thumb = screen.getByRole('button', {
			name: 'View Code Only image',
		})

		fireEvent.keyDown(thumb, { key: 'a' })
		expect(fullScreen()).toBeNull()

		fireEvent.keyDown(thumb, { key: 'Enter' })
		expect(fullScreen()).toHaveAttribute('src', '/code.png')

		const overlay = fullScreen()?.parentElement as HTMLElement
		fireEvent.keyDown(overlay, { key: 'Enter' })
		expect(fullScreen()).not.toBeNull()
		fireEvent.keyDown(overlay, { key: 'Escape' })
		expect(fullScreen()).toBeNull()

		fireEvent.keyDown(thumb, { key: ' ' })
		expect(fullScreen()).not.toBeNull()
	})
})
