import { render, screen, within } from '@testing-library/react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'

vi.mock('next/font/local', () => ({
	default: ({ variable }: { variable: string }) => ({
		variable: `${variable.slice(2)}-var`,
	}),
}))
vi.mock('@vercel/analytics/next', () => ({
	Analytics: () => <div data-testid="analytics" />,
}))
vi.mock('sonner', () => ({
	Toaster: ({ theme }: { theme: string }) => (
		<div data-testid="toaster" data-theme={theme} />
	),
}))
vi.mock('@/components/providers', () => ({
	Providers: ({ children }: { children: React.ReactNode }) => (
		<div data-testid="providers">{children}</div>
	),
}))
vi.mock('@/components/ui/header', () => ({
	default: () => <header data-testid="header" />,
}))
vi.mock('@/components/ui/nav-bar', () => ({
	default: () => <nav data-testid="nav" />,
}))
vi.mock('@/components/ui/footer', () => ({
	default: () => <footer data-testid="footer" />,
}))
vi.mock('@/components/ui/projects-container', () => ({
	default: () => <section data-testid="projects" />,
}))
vi.mock('@/components/ui/forms/reach-out-form', () => ({
	ReachOutForm: () => <form aria-label="Reach out" />,
}))

import CertificationsPage from '@/app/certifications/page'
import ContactPage from '@/app/contact/page'
import RootLayout, { metadata } from '@/app/layout'
import Home from '@/app/page'
import Resume from '@/app/resume/page'

describe('RootLayout', () => {
	it('wraps pages with fonts, providers, chrome, toaster and analytics', () => {
		const html = renderToStaticMarkup(
			<RootLayout>
				<p>page body</p>
			</RootLayout>,
		)
		const doc = new DOMParser().parseFromString(html, 'text/html')
		expect(doc.documentElement.getAttribute('lang')).toBe('en')
		expect(doc.body.className).toContain('font-geist-sans-var')
		expect(doc.body.className).toContain('font-geist-mono-var')

		const main = doc.querySelector('main') as HTMLElement
		const order = [...main.children].map(
			(el) => el.getAttribute('data-testid') ?? el.textContent,
		)
		expect(order).toEqual([
			'header',
			'nav',
			'page body',
			'toaster',
			'analytics',
			'footer',
		])
		expect(
			doc
				.querySelector('[data-testid="toaster"]')
				?.getAttribute('data-theme'),
		).toBe('dark')
	})

	it('describes the site in its metadata', () => {
		expect(metadata).toEqual({
			title: 'Patrick MacDonald',
			description:
				'Created and maintained by me personally Patrick MacDonald',
		})
	})
})

describe('Home', () => {
	it('introduces Patrick with photos and lists projects', () => {
		render(<Home />)
		expect(
			screen
				.getAllByAltText('Patrick MacDonald')
				.map((img) => img.getAttribute('src')),
		).toEqual(['/limoDriver.jpg', '/pat.jpg'])
		expect(screen.getByText(/Bow Valley College/)).toBeTruthy()
		expect(
			screen.getByRole('link', { name: 'Reach out!' }),
		).toHaveAttribute('href', '/contact')
		expect(screen.getByTestId('projects')).toBeTruthy()
	})
})

describe('CertificationsPage', () => {
	it('shows each certificate image', () => {
		render(<CertificationsPage />)
		expect(
			screen.getByRole('heading', { name: 'Certifications' }),
		).toBeTruthy()
		expect(
			screen
				.getAllByRole('img')
				.map((img) => [
					img.getAttribute('alt'),
					img.getAttribute('src'),
				]),
		).toEqual([
			['cSharp', '/certs/cSharp.png'],
			['networking', '/certs/networking.png'],
			['python', '/certs/python.png'],
		])
	})
})

describe('ContactPage', () => {
	it('shows the reach out form under a heading', () => {
		render(<ContactPage />)
		expect(
			screen.getByRole('heading', { name: 'Get in touch' }),
		).toBeTruthy()
		expect(screen.getByRole('form', { name: 'Reach out' })).toBeTruthy()
	})
})

describe('Resume', () => {
	it('shows contact info and every resume section', () => {
		render(<Resume />)
		expect(
			screen.getByRole('heading', {
				level: 1,
				name: 'Patrick MacDonald',
			}),
		).toBeTruthy()
		expect(screen.getByText('patrick@patmac.ca')).toBeTruthy()
		expect(screen.getByText('Calgary, AB')).toBeTruthy()

		const sections = screen
			.getAllByRole('heading', { level: 2 })
			.map((h) => h.textContent)
		expect(sections).toEqual([
			'Summary',
			'Skills',
			'Education',
			'Certifications',
			'Projects',
			'Work Experience',
			'Additional Information',
		])

		const summary = screen.getByRole('heading', { name: 'Summary' })
			.parentElement as HTMLElement
		expect(within(summary).getByText(/Landscape Friend/)).toBeTruthy()
	})
})
