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
								Patrick Macdonald
							</span>
						</h1>
						<p className="mt-1 text-muted-foreground">
							Software Developer
						</p>
					</div>
					<ContactInfo />
				</header>
				<Summary />
				<SkillsComponent skills={skills} />
				<Certifications certifications={certifications} />
				<EducationComponent education={education} />
				<ProjectsComponent projects={projects} />
				<WorkComponent experiences={experiences} />
			</div>
		</div>
	)
}

function ContactInfo() {
	return (
		<div className="flex flex-col gap-0.5 text-muted-foreground text-sm md:text-right">
			<p>1-403-975-5053</p>
			<p>pmacdonald15@gmail.com</p>
			<p>github.com/Pmacdon15</p>
			<p>Calgary, Alberta</p>
		</div>
	)
}

function Summary() {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl">Summary</h2>
			<p className="indent-4 text-foreground/90 text-lg leading-relaxed">
				Skilled software developer with a strong foundation in Next.js,
				TypeScript, and custom React hooks, seeking opportunities in the
				tech industry to gain hands-on experience.
			</p>
		</section>
	)
}
