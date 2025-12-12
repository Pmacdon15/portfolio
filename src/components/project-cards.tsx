import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/utils/projects'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
export default function ProjectsCards() {
    
	return (
		<div className='flex flex-wrap gap-8 justify-center'>
			{projects.map((project) => (
				<Card className=" w-96 h-[500px]" key={project.id}>
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
							<Link
								className="text-blue-500 underline"
								href={project.url as Route}
							>
								<Button type="button">{project.title}</Button>
							</Link>
						)}
						{project.githubUrl && (
							<Link
								className="text-blue-500 underline"
								href={project.githubUrl as Route}
							>
								<Button type="button">Visit the GitHub</Button>
							</Link>
						)}
					</CardFooter>
				</Card>
			))}
		</div>
	)
}
