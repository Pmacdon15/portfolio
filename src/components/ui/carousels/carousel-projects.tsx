'use client'
import Autoplay from 'embla-carousel-autoplay'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import useIsSmallScreen from '@/lib/utils/hooks'
import { projects } from '@/lib/utils/projects'
import { Button } from '../button'

export function CarouselProjects() {
	const isMobileDevice = useIsSmallScreen()
	const [fullScreenImage, setFullScreenImage] = useState<string | null>(null)

	const handleImageClick = (imagePath: string) => {
		setFullScreenImage(imagePath)
	}

	const handleCloseFullScreen = () => {
		setFullScreenImage(null)
	}

	const handleKeyDown = (event: React.KeyboardEvent, imagePath: string) => {
		if (event.key === 'Enter' || event.key === ' ') {
			handleImageClick(imagePath)
		}
	}

	const handleFullScreenKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Escape') {
			handleCloseFullScreen()
		}
	}

	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true }),
	)
	return (
		<div className="w-full rounded-sm border bg-secondary p-2 shadow-xl lg:w-5/6">
			<h1 className="font-semibold text-2xl">Projects</h1>

			<Carousel
				className="w-full"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={() => plugin.current.play()}
				opts={{
					align: 'start',
					loop: true,
				}}
				plugins={[plugin.current]}
			>
				<CarouselContent>
					{projects.map((project) => (
						<CarouselItem
							className="basis-[85%] sm:basis-[65%] md:basis-[55%] lg:basis-[45%]"
							key={project.id}
						>
							<Card className="h-[500px] md:h-[450px]">
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
									<button
										aria-label={`View ${project.title} image`}
										className="mx-auto max-h-[250px] cursor-pointer overflow-hidden rounded-sm border-2"
										onClick={() =>
											handleImageClick(project.imagePath)
										}
										onKeyDown={(event) =>
											handleKeyDown(
												event,
												project.imagePath,
											)
										}
										type="button"
									>
										<Image
											alt={`Project Image ${project.id}`}
											className="mx-auto overflow-hidden"
											height={300}
											src={project.imagePath}
											width={300}
										/>
									</button>
								</CardContent>
								<CardFooter className="mt-auto flex w-full flex-col gap-4">
									{project.url && (
										<Link href={project.url as Route}>
											<Button
												type="button"
												variant={'outline'}
											>
												{project.title}
											</Button>
										</Link>
									)}

									{project.githubUrl && (
										<Link href={project.githubUrl as Route}>
											<Button
												type="button"
												variant={'outline'}
											>
												Visit the GitHub
											</Button>
										</Link>
									)}
								</CardFooter>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				{!isMobileDevice && <CarouselPrevious />}
				{!isMobileDevice && <CarouselNext />}
			</Carousel>

			{fullScreenImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
					onClick={handleCloseFullScreen}
					onKeyDown={handleFullScreenKeyDown}
					role="button"
					tabIndex={0}
				>
					<Image
						alt="Full Screen Image"
						className="max-h-screen max-w-screen"
						height={600}
						src={fullScreenImage}
						width={800}
					/>
				</div>
			)}
		</div>
	)
}
