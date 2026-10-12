import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ArrowUpRight } from 'lucide-react'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/utils/projects'
import { Button } from './button'
import { Card, CardContent, CardFooter, CardHeader } from './card'

export default function ProjectsCards() {
	return (
		<div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{projects.map((project) => (
				<Card
					className="group flex flex-col overflow-hidden border-border bg-card/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
					key={project.id}
				>
					<CardHeader className="pb-3">
						<h3 className="font-semibold text-xl tracking-tight">
							{project.title}
						</h3>
					</CardHeader>
					<CardContent className="flex-1 pb-4">
						<p className="text-muted-foreground text-sm leading-relaxed">
							{project.text}
						</p>
					</CardContent>
					<CardContent className="pb-4">
						<div className="overflow-hidden rounded-xl border border-border bg-muted/30">
							<Image
								alt={`${project.title} preview`}
								className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
								height={300}
								src={project.imagePath}
								width={400}
							/>
						</div>
					</CardContent>
					<CardFooter className="mt-auto flex w-full flex-wrap gap-3">
						{project.url && (
							<Link
								className="flex-1"
								href={project.url as Route}
							>
								<Button
									className="gradient-accent w-full border-0 text-primary-foreground shadow-md shadow-primary/20"
									size="sm"
									type="button"
								>
									Visit
									<ArrowUpRight className="size-4" />
								</Button>
							</Link>
						)}
						{project.githubUrl && (
							<Link
								className="flex-1"
								href={project.githubUrl as Route}
							>
								<Button
									className="w-full"
									size="sm"
									type="button"
									variant="outline"
								>
									<GitHubLogoIcon className="size-4" />
									Code
								</Button>
							</Link>
						)}
					</CardFooter>
				</Card>
			))}
		</div>
	)
}
