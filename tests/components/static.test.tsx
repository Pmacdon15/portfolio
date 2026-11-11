import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ContentContainer from '@/components/ui/content-container'
import ContentContainerImageLeft from '@/components/ui/content-container-image-left'
import ContentContainerImageRight from '@/components/ui/content-container-image-right'
import ContentContainerWrapper from '@/components/ui/content-container-wrapper'
import { EmailTemplate } from '@/components/ui/email-templates/contact-email'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import PageHeader from '@/components/ui/page-header'

describe('Header', () => {
	it('shows the name and tagline', () => {
		render(<Header />)
		expect(
			screen.getByRole('heading', {
				level: 1,
				name: 'Patrick MacDonald',
			}),
		).toBeTruthy()
		expect(screen.getByText('Software Developer')).toBeTruthy()
	})
})

describe('Footer', () => {
	it('links to email, LinkedIn and GitHub and shows the location', () => {
		render(<Footer />)
		expect(
			screen.getByRole('link', { name: 'patrick@patmac.ca' }),
		).toHaveAttribute('href', 'mailto:patrick@patmac.ca')
		expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/patrick-macdonald-231640285/',
		)
		expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
			'href',
			'https://github.com/Pmacdon15',
		)
		expect(screen.getByText('Calgary, Alberta, Canada')).toBeTruthy()
	})
})

describe('PageHeader', () => {
	it('renders its title as a heading', () => {
		render(<PageHeader title="Certifications" />)
		expect(
			screen.getByRole('heading', { level: 2, name: 'Certifications' }),
		).toBeTruthy()
	})
})

describe('content containers', () => {
	it('wraps its children', () => {
		render(
			<ContentContainerWrapper>
				<p>inside</p>
			</ContentContainerWrapper>,
		)
		expect(screen.getByText('inside')).toBeTruthy()
	})

	it('shows text with a link to the contact page', () => {
		render(<ContentContainer text="Thanks for reading" />)
		expect(screen.getByText('Thanks for reading')).toBeTruthy()
		expect(
			screen.getByRole('link', { name: 'Reach out!' }),
		).toHaveAttribute('href', '/contact')
	})

	it.each([
		['left', ContentContainerImageLeft],
		['right', ContentContainerImageRight],
	])('shows text beside an image on the %s', (_side, Container) => {
		render(<Container imagePath="/pat.jpg" text="About me" />)
		expect(screen.getByText('About me')).toBeTruthy()
		expect(screen.getByAltText('Patrick MacDonald')).toHaveAttribute(
			'src',
			'/pat.jpg',
		)
	})
})

describe('EmailTemplate', () => {
	it('shows who wrote in and what they said', () => {
		render(
			<EmailTemplate
				email="jane@example.com"
				message="Hello there"
				name="Jane"
			/>,
		)
		expect(
			screen.getByRole('heading', { name: 'Jane has sent a message!' }),
		).toBeTruthy()
		expect(
			screen.getByText("Jane's email is: jane@example.com"),
		).toBeTruthy()
		expect(
			screen.getByText('Their message to you is: Hello there'),
		).toBeTruthy()
	})
})
