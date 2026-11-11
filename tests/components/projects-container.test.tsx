import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/components/ui/carousels/carousel-projects', () => ({
	CarouselProjects: () => <div data-testid="carousel" />,
}))
vi.mock('@/components/ui/project-cards', () => ({
	default: () => <div data-testid="cards" />,
}))

import ProjectsContainer from '@/components/ui/projects-container'
import ProjectContainerLeft from '@/components/ui/projects-container-image-left'
import ProjectContainerRight from '@/components/ui/projects-container-image-right'
import { setWindowWidth } from '../utils'

describe('ProjectsContainer', () => {
	afterEach(() => setWindowWidth(1024))

	it('shows a grid of cards on wide screens', () => {
		setWindowWidth(1200)
		render(<ProjectsContainer />)
		expect(screen.getByRole('heading', { name: 'Projects' })).toBeTruthy()
		expect(screen.getByTestId('cards')).toBeTruthy()
		expect(screen.queryByTestId('carousel')).toBeNull()
	})

	it('shows a carousel on small screens', () => {
		setWindowWidth(600)
		render(<ProjectsContainer />)
		expect(screen.getByTestId('carousel')).toBeTruthy()
		expect(screen.queryByTestId('cards')).toBeNull()
	})
})

describe.each([
	['ProjectContainerLeft', ProjectContainerLeft],
	['ProjectContainerRight', ProjectContainerRight],
])('%s', (_name, Container) => {
	const props = {
		title: 'Budget',
		text: 'A budgeting app',
		imagePath: '/budget.png',
		gitHubUrl: 'https://github.com/Pmacdon15/Budget',
		linkText: 'Pmacdon15/Budget',
	}

	it('links to the project on GitHub and its website', () => {
		render(<Container {...props} website="https://budget.patmac.ca" />)
		expect(screen.getByRole('heading', { name: 'Budget' })).toBeTruthy()
		expect(screen.getByText('A budgeting app')).toBeTruthy()
		expect(screen.getByAltText('Content Image')).toHaveAttribute(
			'src',
			'/budget.png',
		)
		expect(
			screen.getByRole('link', { name: 'Pmacdon15/Budget' }),
		).toHaveAttribute('href', props.gitHubUrl)
		expect(
			screen.getByRole('link', { name: 'https://budget.patmac.ca' }),
		).toHaveAttribute('href', 'https://budget.patmac.ca')
	})

	it('leaves out the website line when there is none', () => {
		render(<Container {...props} />)
		expect(screen.getAllByRole('link')).toHaveLength(1)
		expect(screen.queryByText(/Visit the website/)).toBeNull()
	})
})
