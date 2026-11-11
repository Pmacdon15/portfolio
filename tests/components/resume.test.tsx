import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Certifications from '@/components/ui/resume/certifications'
import EducationComponent from '@/components/ui/resume/education'
import ProjectsComponent from '@/components/ui/resume/projects'
import SkillsComponent from '@/components/ui/resume/skills'
import WorkComponent from '@/components/ui/resume/work'

describe('Certifications', () => {
	it('lists each certification with its issuer', () => {
		render(
			<Certifications
				certifications={[
					{ name: 'Python', issuer: 'Cisco' },
					{ name: 'C#', issuer: 'Microsoft' },
				]}
			/>,
		)
		expect(screen.getByRole('heading', { name: 'Python' })).toBeTruthy()
		expect(screen.getByText('Microsoft')).toBeTruthy()
	})
})

describe('EducationComponent', () => {
	it('shows the graduation date only when there is one', () => {
		render(
			<EducationComponent
				education={[
					{
						school: 'Bow Valley College',
						program: 'Software Development',
						gpa: '3.95',
						graduation: 'May 2025',
					},
					{ school: 'High School', program: 'Diploma', gpa: '3.0' },
				]}
			/>,
		)
		expect(
			screen.getByRole('heading', { name: 'Bow Valley College' }),
		).toBeTruthy()
		expect(screen.getByText('GPA: 3.95')).toBeTruthy()
		expect(screen.getAllByText(/^Graduation:/)).toHaveLength(1)
		expect(screen.getByText('Graduation: May 2025')).toBeTruthy()
	})
})

describe('ProjectsComponent', () => {
	it('shows the company, link and key features when given', () => {
		render(
			<ProjectsComponent
				projects={[
					{
						companyName: 'Landscape Friend',
						name: 'SaaS',
						description: 'Scheduling for landscapers',
						link: 'https://landscapefriend.com',
						keyFeatures: ['Invoices', 'Emails'],
					},
					{
						name: 'Side project',
						description: 'Just for fun',
						keyFeatures: undefined as unknown as string[],
					},
				]}
			/>,
		)
		expect(
			screen.getByRole('heading', { level: 3, name: 'Landscape Friend' }),
		).toBeTruthy()
		expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1)
		const link = screen.getByRole('link', {
			name: 'View Project on Github',
		})
		expect(link).toHaveAttribute('href', 'https://landscapefriend.com')
		expect(link).toHaveAttribute('target', '_blank')
		expect(screen.getAllByRole('link')).toHaveLength(1)
		expect(screen.getAllByText('Key Features')).toHaveLength(1)
		expect(
			screen.getAllByRole('listitem').map((li) => li.textContent),
		).toEqual(['Invoices', 'Emails'])
		expect(screen.getByText('Just for fun')).toBeTruthy()
	})
})

describe('SkillsComponent', () => {
	it('lists each skill', () => {
		render(
			<SkillsComponent
				skills={[
					{ index: 1, description: 'Next.js' },
					{ index: 2, description: 'TypeScript' },
				]}
			/>,
		)
		expect(
			screen.getAllByRole('listitem').map((li) => li.textContent),
		).toEqual(['Next.js', 'TypeScript'])
	})

	it('renders an empty list without skills', () => {
		render(<SkillsComponent />)
		expect(screen.getByRole('heading', { name: 'Skills' })).toBeTruthy()
		expect(screen.queryAllByRole('listitem')).toHaveLength(0)
	})
})

describe('WorkComponent', () => {
	it('shows each job with its position, dates and duties', () => {
		render(
			<WorkComponent
				experiences={[
					{
						index: 1,
						company: 'Limo Co',
						position: 'Driver',
						dates: '2012 - 2025',
						responsibilities: ['Drive safely', 'Help clients'],
					},
				]}
			/>,
		)
		expect(screen.getByRole('heading', { name: 'Limo Co' })).toBeTruthy()
		expect(screen.getByText('Driver')).toBeTruthy()
		expect(screen.getByText('2012 - 2025')).toBeTruthy()
		expect(screen.getAllByRole('listitem')).toHaveLength(2)
	})

	it('renders just the heading without experiences', () => {
		render(<WorkComponent />)
		expect(
			screen.getByRole('heading', { name: 'Work Experience' }),
		).toBeTruthy()
	})
})
