'use client'
import { Menu } from 'lucide-react'
import type { Route } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils/utils'

const SECTIONS = ['About Me', 'Resume', 'Certifications', 'Contact'] as const

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false)
	const [currentSection, setCurrentSection] = useState('About Me')
	const pathname = usePathname()

	// Keep currentSection in sync with the URL
	useEffect(() => {
		const cleanPath = pathname === '/' ? '/' : pathname.slice(1)
		const section =
			cleanPath === '/'
				? 'About Me'
				: cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1)
		setCurrentSection(section)
	}, [pathname])

	const toggleMenu = () => setIsOpen((v) => !v)

	return (
		<nav className="surface w-full rounded-2xl p-2 md:w-auto">
			<div className="flex items-center justify-between md:hidden">
				<span className="px-2 font-semibold text-lg">
					{currentSection}
				</span>
				<button
					aria-expanded={isOpen}
					aria-label="Toggle navigation menu"
					className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted"
					onClick={toggleMenu}
					type="button"
				>
					<Menu className="size-6" />
				</button>
			</div>
			<div
				className={cn(
					'mt-2 flex-col gap-1 md:mt-0 md:flex md:flex-row',
					isOpen ? 'flex' : 'hidden',
				)}
			>
				{SECTIONS.map((sectionName) => (
					<Section
						currentSection={currentSection}
						isOpen={isOpen}
						key={sectionName}
						sectionName={sectionName}
						setCurrentSection={setCurrentSection}
						toggleMenu={toggleMenu}
					/>
				))}
			</div>
		</nav>
	)
}

function Section({
	sectionName,
	isOpen,
	toggleMenu,
	currentSection,
	setCurrentSection,
}: {
	sectionName: string
	isOpen: boolean
	toggleMenu: () => void
	currentSection: string
	setCurrentSection: (currentSection: string) => void
}) {
	const isCurrent = sectionName === currentSection
	return (
		<Link
			className={cn(
				'rounded-xl px-4 py-2 text-center font-medium text-sm transition-all duration-200',
				isCurrent
					? 'gradient-accent text-primary-foreground shadow-lg shadow-primary/20'
					: 'text-muted-foreground hover:bg-muted hover:text-foreground',
			)}
			href={
				`/${sectionName.toLocaleLowerCase().split(' ')[0] === 'about' ? '/' : sectionName.toLocaleLowerCase()}` as Route
			}
			onClick={() => {
				if (isOpen) toggleMenu()
				setCurrentSection(sectionName)
			}}
		>
			{sectionName}
		</Link>
	)
}
