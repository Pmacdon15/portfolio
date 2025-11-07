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
		<div className="w-full rounded-md bg-secondary p-2 shadow-xl md:w-5/6">
			<div className="flex flex-col gap-2 rounded-md bg-[url('/paper.jpeg')] bg-cover p-4">
				<ContactInfo />
				<h1 className="text-4xl">Patrick MacDonald</h1>
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
		<div className="ml-auto">
			<div>
				<p className="italic">1-403-975-5053</p>
				<p className="italic">pmacdonald15@gmail.com</p>
				<p className="italic">github.com/Pmacdon15</p>
				<p className="italic">Calgary, Alberta</p>
			</div>
		</div>
	)
}

function Summary() {
	return (
		<>
			<h1 className="font-bold text-3xl">Summary</h1>
			<p className="indent-4 text-lg">
				skilled software developer with a strong foundation in Next.js,
				TypeScript, and custom React hooks, seeking opportunities in the
				tech industry to gain hands-on experience in the tech Industry.
			</p>
		</>
	)
}
