'use client'

import useIsSmallScreen from '@/lib/utils/hooks'
import { CarouselProjects } from './carousels/carousel-projects'
import ProjectsCards from './project-cards'

export default function ProjectsContainer() {
	const isSmallScreen = useIsSmallScreen()
	return (
		<section className="flex w-full flex-col gap-6">
			<div className="flex flex-col items-center gap-2 text-center">
				<h2 className="font-bold text-3xl tracking-tight md:text-4xl">
					<span className="gradient-text">Projects</span>
				</h2>
				<p className="max-w-xl text-muted-foreground">
					A selection of things I&apos;ve designed, built, and shipped.
				</p>
			</div>
			{isSmallScreen ? <CarouselProjects /> : <ProjectsCards />}
		</section>
	)
}
