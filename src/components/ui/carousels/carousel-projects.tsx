'use client'
import Autoplay from 'embla-carousel-autoplay'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ArrowUpRight } from 'lucide-react'
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
		Autoplay({ delay: 3000, stopOnInteraction: true }),
	)
	return (
		<div className="w-full">
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
							<Card className="flex h-full flex-col overflow-hidden border-border bg-card/70 backdrop-blur-md">
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
									<button
										aria-label={`View ${project.title} image`}
										className="w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-muted/30"
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
											alt={`${project.title} preview`}
											className="h-44 w-full object-cover"
											height={300}
											src={project.imagePath}
											width={400}
										/>
									</button>
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
						</CarouselItem>
					))}
				</CarouselContent>
				{!isMobileDevice && <CarouselPrevious />}
				{!isMobileDevice && <CarouselNext />}
			</Carousel>

			{fullScreenImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
					onClick={handleCloseFullScreen}
					onKeyDown={handleFullScreenKeyDown}
					role="button"
					tabIndex={0}
				>
					<Image
						alt="Full Screen Image"
						className="max-h-screen max-w-full rounded-xl"
						height={600}
						src={fullScreenImage}
						width={800}
					/>
				</div>
			)}
		</div>
	)
}
