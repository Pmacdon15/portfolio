'use client'

import useIsSmallScreen from '@/lib/utils/hooks'
import { CarouselProjects } from './carousels/carousel-projects'
import ProjectsCards from './project-cards'

export default function ProjectsContainer() {
	const isSmallScreen = useIsSmallScreen()
	return <>{isSmallScreen ? <CarouselProjects /> : <ProjectsCards />}</>
}
