import { describe, expect, it } from 'vitest'
import { projects } from '@/lib/utils/projects'
import { certifications } from '@/lib/utils/resume/certifications'
import { education } from '@/lib/utils/resume/education'
import { projects as resumeProjects } from '@/lib/utils/resume/projects'
import { skills } from '@/lib/utils/resume/skills'
import { experiences } from '@/lib/utils/resume/work'

const unique = <T>(values: T[]) => new Set(values).size === values.length

describe('portfolio projects', () => {
	it('has unique ids, since they are React keys', () => {
		expect(projects.length).toBeGreaterThan(0)
		expect(unique(projects.map((p) => p.id))).toBe(true)
	})

	it('gives every project a title, text and an image under /public', () => {
		for (const project of projects) {
			expect(project.title, String(project.id)).not.toBe('')
			expect(project.text, project.title).not.toBe('')
			expect(project.imagePath, project.title).toMatch(/^\//)
		}
	})

	it('only links to https URLs', () => {
		for (const project of projects) {
			for (const url of [project.url, project.githubUrl]) {
				if (url) expect(url, project.title).toMatch(/^https:\/\//)
			}
		}
	})
})

describe('resume data', () => {
	it('lists education, skills, certifications, projects and work', () => {
		expect(education.length).toBeGreaterThan(0)
		expect(skills.length).toBeGreaterThan(0)
		expect(certifications.length).toBeGreaterThan(0)
		expect(resumeProjects.length).toBeGreaterThan(0)
		expect(experiences.length).toBeGreaterThan(0)
	})

	it('uses unique keys where the components key by name', () => {
		expect(unique(certifications.map((c) => c.name))).toBe(true)
		expect(unique(experiences.map((w) => w.company))).toBe(true)
	})

	it('gives every job at least one responsibility', () => {
		for (const job of experiences) {
			expect(job.responsibilities.length, job.company).toBeGreaterThan(0)
		}
	})

	it('only links resume projects to https URLs', () => {
		for (const project of resumeProjects) {
			if (project.link) {
				expect(project.link, project.name).toMatch(/^https:\/\//)
			}
		}
	})
})
