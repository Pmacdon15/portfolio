import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/utils/projects'
import { Button } from './button'
import { Card, CardContent, CardFooter, CardHeader } from './card'
export default function ProjectsCards() {
	return (
		<div className="flex flex-wrap justify-center gap-8">
			{projects.map((project) => (
				<Card className="h-[500px] w-96" key={project.id}>
					<CardHeader>
						<h1 className="font-semibold text-2xl">
							{' '}
							{project.title}
						</h1>
					</CardHeader>
					<CardContent className="mt-[-24]">
						<span className="">{project.text}</span>
					</CardContent>
					<CardContent className="flex">
						<Image
							alt={`Project Image ${project.id}`}
							className="mx-auto max-h-76"
							height={300}
							src={project.imagePath}
							width={300}
						/>
					</CardContent>
					<CardFooter className="mt-auto flex w-full flex-col gap-4">
						{project.url && (
							<Link href={project.url as Route}>
								<Button type="button" variant={'outline'}>
									{project.title}
								</Button>
							</Link>
						)}
						{project.githubUrl && (
							<Link href={project.githubUrl as Route}>
								<Button type="button" variant={'outline'}>
									Visit the GitHub
								</Button>
							</Link>
						)}
					</CardFooter>
				</Card>
			))}
		</div>
	)
}
