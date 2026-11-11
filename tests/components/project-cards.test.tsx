import { render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

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
			title: 'Unlinked',
			text: 'No links yet',
			imagePath: '/none.png',
		},
	],
}))

import ProjectsCards from '@/components/ui/project-cards'

describe('ProjectsCards', () => {
	it('renders a card per project with its image and links', () => {
		render(<ProjectsCards />)
		const headings = screen.getAllByRole('heading', { level: 3 })
		expect(headings.map((h) => h.textContent)).toEqual([
			'Live App',
			'Unlinked',
		])

		const live = headings[0].closest('.group') as HTMLElement
		expect(within(live).getByAltText('Live App preview')).toHaveAttribute(
			'src',
			'/live.png',
		)
		expect(
			within(live).getByRole('link', { name: /Visit/ }),
		).toHaveAttribute('href', 'https://live.example.com')
		expect(
			within(live).getByRole('link', { name: /Code/ }),
		).toHaveAttribute('href', 'https://github.com/x/live')

		const unlinked = headings[1].closest('.group') as HTMLElement
		expect(within(unlinked).getByText('No links yet')).toBeTruthy()
		expect(within(unlinked).queryAllByRole('link')).toHaveLength(0)
	})
})
