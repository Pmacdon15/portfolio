import type { Route } from 'next'
import Link from 'next/link'
import type { Project } from '@/types/types'

export default function ProjectsComponent({
	projects,
}: {
	projects: Project[]
}) {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl">Projects</h2>
			{projects.map((project: Project, idx: number) => (
				<ProjectDisplay key={idx} project={project} />
			))}
		</section>
	)
}

function ProjectDisplay({ project }: { project: Project }) {
	return (
		<div className="indent-4">
			{project.companyName && (
				<h3 className="font-bold text-xl">{project.companyName}</h3>
			)}
			<h4 className="font-semibold text-lg italic">{project.name}</h4>
			<p className="text-foreground/90">{project.description}</p>
			{project.link && (
				<Link
					className="text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
					href={project.link as Route}
					rel="noopener noreferrer"
					target="_blank"
				>
					View Project on Github
				</Link>
			)}
			{project.keyFeatures && (
				<>
					<p className="mt-1 font-semibold">Key Features</p>
					<ul className="ml-5 list-disc space-y-1 text-foreground/90 marker:text-primary">
						{project.keyFeatures.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}
