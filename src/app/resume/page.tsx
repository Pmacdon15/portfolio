import Certifications from '@/components/ui/resume/certifications'
import EducationComponent from '@/components/ui/resume/education'
import ProjectsComponent from '@/components/ui/resume/projects'
import SkillsComponent from '@/components/ui/resume/skills'
import WorkComponent from '@/components/ui/resume/work'
import { certifications } from '@/lib/utils/resume/certifications'
import { education } from '@/lib/utils/resume/education'
import { projects } from '@/lib/utils/resume/projects'
import { skills } from '@/lib/utils/resume/skills'
import { experiences } from '@/lib/utils/resume/work'

export default function Resume() {
	return (
		<div className="surface w-full rounded-2xl p-6 md:w-5/6 md:p-10">
			<div className="flex flex-col gap-6">
				<header className="flex flex-col gap-4 border-border border-b pb-6 md:flex-row md:items-end md:justify-between">
					<div>
						<h1 className="font-bold text-4xl tracking-tight md:text-5xl">
							<span className="gradient-text">
								Patrick MacDonald
							</span>
						</h1>
						<p className="mt-1 text-muted-foreground">
							Web Developer — Next.js, React & TypeScript
						</p>
					</div>
					<ContactInfo />
				</header>
				<Summary />
				<SkillsComponent skills={skills} />
				<EducationComponent education={education} />
				<Certifications certifications={certifications} />
				<ProjectsComponent projects={projects} />
				<WorkComponent experiences={experiences} />
				<AdditionalInfo />
			</div>
		</div>
	)
}

function ContactInfo() {
	return (
		<div className="flex flex-col gap-0.5 text-muted-foreground text-sm md:text-right">
			<p>patrick@patmac.ca</p>
			<p>1 (403) 975-5053</p>
			<p>github.com/Pmacdon15</p>
			<p>linkedin.com/in/patrick-macdonald-231640285</p>
			<p>Calgary, AB</p>
		</div>
	)
}

function Summary() {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl">Summary</h2>
			<p className="indent-4 text-foreground/90 text-lg leading-relaxed">
				Web developer and Software Development Diploma graduate (Bow
				Valley College, May 2025, 3.95 GPA) who builds and runs live
				web applications with Next.js, TypeScript, and React. Creator
				of Landscape Friend, a live product that helps landscaping
				businesses schedule jobs, email clients, and send invoices,
				along with invoicing and e-commerce tools deployed on Vercel
				with Neon PostgreSQL and Clerk authentication. Particularly
				strong in modern Next.js — server and client components and
				cache components. Looking for a developer role in Calgary
				where that shipping record counts. Brings more than 13 years
				of professional driving and operations work and 10 years of
				customer service behind it: dependable, safety-conscious, and
				used to being accountable to clients every day.
			</p>
		</section>
	)
}

function AdditionalInfo() {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl">Additional Information</h2>
			<p className="indent-4 text-foreground/90 text-lg leading-relaxed">
				Canadian citizen, authorized to work in Canada without
				sponsorship. Portfolio, live applications, and code are
				available at patmac.ca and github.com/Pmacdon15 — every
				project listed above can be opened and tried.
			</p>
		</section>
	)
}
