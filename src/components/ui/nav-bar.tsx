'use client'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // <-- add this
import { useEffect, useState } from 'react'

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false)
	const [currentSection, setCurrentSection] = useState('About Me')
	const pathname = usePathname() // current route

	// Keep currentSection in sync with the URL
	useEffect(() => {
		const cleanPath = pathname === '/' ? '/' : pathname.slice(1)
		const section =
			cleanPath === '/'
				? 'About Me'
				: cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1)
		setCurrentSection(section)
	}, [pathname])

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<div className="w-5/6 rounded-md bg-secondary bg-opacity-50 p-2 shadow-xl transition-transform duration-200 md:w-fit md:p-0 md:hover:scale-105">
			<div className="flex items-center justify-start">
				<button
					className="my-1 text-2xl transition-transform duration-200 hover:scale-110 md:hidden"
					onClick={toggleMenu}
					type="button"
				>
					<Image
						alt="Hamburger Icon"
						height={30}
						src="/Hamburger_icon.png"
						width={30}
					/>
				</button>
				<div className="mr-8 w-full text-center font-bold text-2xl md:hidden">
					{currentSection}
				</div>
			</div>
			<div
				className={`flex-col p-1 text-xl md:flex md:flex-row ${isOpen ? 'flex rounded-md' : 'hidden'} gap-2 md:justify-start`}
			>
				<Section
					currentSection={currentSection}
					isOpen={isOpen}
					sectionName="About Me"
					setCurrentSection={setCurrentSection}
					toggleMenu={toggleMenu}
				/>
				<Section
					currentSection={currentSection}
					isOpen={isOpen}
					sectionName="Resume"
					setCurrentSection={setCurrentSection}
					toggleMenu={toggleMenu}
				/>
				<Section
					currentSection={currentSection}
					isOpen={isOpen}
					sectionName="Certifications"
					setCurrentSection={setCurrentSection}
					toggleMenu={toggleMenu}
				/>
				<Section
					currentSection={currentSection}
					isOpen={isOpen}
					sectionName="Contact"
					setCurrentSection={setCurrentSection}
					toggleMenu={toggleMenu}
				/>
			</div>
		</div>
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
			className={`rounded-sm border-cyan-300 p-2 transition duration-200 ${isCurrent && 'bg-linear-to-r from-cyan-500 to-blue-500 shadow-xl'} hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl`}
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
