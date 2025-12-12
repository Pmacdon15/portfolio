import Link from 'next/link'
import type { Project } from '@/types/types'
import { Route } from 'next'

export default function ProjectsComponent({
	projects,
}: {
	projects: Project[]
}) {
	return (
		<>
			<h1 className="font-bold text-3xl">Projects</h1>
			{projects.map((project: Project, idx: number) => (
				<ProjectDisplay key={idx} project={project} />
			))}
		</>
	)
}

function ProjectDisplay({ project }: { project: Project }) {
	return (
		<div className="p-2">
			<h2 className="font-bold text-2xl">{project.companyName}</h2>
			<h2 className="font-bold text-xl">{project.name}</h2>
			<p>{project.description}</p>
			{project.link && (
				<Link
					className="text-blue-500 underline"
					href={project.link as Route}
					rel="noopener noreferrer"
					target="_blank"
				>
					View Project on Github
				</Link>
			)}
			{project.keyFeatures && (
				<>
					<h1 className="font-bold text-lg">Key Features</h1>
					<ul className="ml-4 list-inside list-disc">
						{project.keyFeatures.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
