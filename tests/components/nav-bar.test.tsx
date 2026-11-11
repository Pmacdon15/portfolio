import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

const usePathname = vi.hoisted(() => vi.fn(() => '/'))
vi.mock('next/navigation', () => ({ usePathname }))

import NavBar from '@/components/ui/nav-bar'

const toggle = () =>
	screen.getByRole('button', { name: 'Toggle navigation menu' })
const link = (name: string) => screen.getByRole('link', { name })
const current = () => toggle().previousElementSibling?.textContent

describe('NavBar', () => {
	it('links to every section', () => {
		render(<NavBar />)
		expect(link('About Me')).toHaveAttribute('href', '//')
		expect(link('Resume')).toHaveAttribute('href', '/resume')
		expect(link('Certifications')).toHaveAttribute(
			'href',
			'/certifications',
		)
		expect(link('Contact')).toHaveAttribute('href', '/contact')
	})

	it('highlights About Me on the home page', () => {
		render(<NavBar />)
		expect(current()).toBe('About Me')
		expect(link('About Me')).toHaveClass('gradient-accent')
		expect(link('Resume')).not.toHaveClass('gradient-accent')
	})

	it('highlights the section for the current path', () => {
		usePathname.mockReturnValue('/resume')
		render(<NavBar />)
		expect(current()).toBe('Resume')
		expect(link('Resume')).toHaveClass('gradient-accent')
	})

	it('opens and closes the mobile menu', () => {
		usePathname.mockReturnValue('/')
		render(<NavBar />)
		const menu = link('Resume').parentElement as HTMLElement
		expect(toggle()).toHaveAttribute('aria-expanded', 'false')
		expect(menu).toHaveClass('hidden')

		fireEvent.click(toggle())
		expect(toggle()).toHaveAttribute('aria-expanded', 'true')
		expect(menu).toHaveClass('flex')

		// Picking a section closes the menu and marks it current.
		fireEvent.click(link('Contact'))
		expect(toggle()).toHaveAttribute('aria-expanded', 'false')
		expect(current()).toBe('Contact')
	})

	it('leaves a closed menu closed when a link is clicked', () => {
		usePathname.mockReturnValue('/')
		render(<NavBar />)
		fireEvent.click(link('Certifications'))
		expect(toggle()).toHaveAttribute('aria-expanded', 'false')
		expect(current()).toBe('Certifications')
	})
})
