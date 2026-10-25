import type { Project } from '@/types/types'

export const projects: Project[] = [
	{
		companyName: 'Landscape Friend',
		name: 'Scheduling & Invoicing SaaS for Landscaping Businesses',
		description:
			'Live SaaS product for landscaping businesses: schedule jobs, manage clients, email clients, and send invoices from one application, built for real businesses and maintained in production.',
		link: 'https://landscapefriend.com',
		keyFeatures: [
			'Full-stack build with authenticated workflows and a PostgreSQL-backed data model for jobs, clients, and billing.',
			'Built with Next.js, TypeScript, React, and Tailwind CSS, using Neon PostgreSQL, Clerk authentication, and Vercel hosting.',
		],
	},
	{
		companyName: 'Invoice Pro',
		name: 'Invoicing Tool for Small Businesses',
		description:
			'Focused invoicing tool for small businesses: create and manage invoices behind secure sign-in, deployed live and usable today.',
		link: 'https://invoicepro.patmac.ca',
		keyFeatures: [
			'Shows the same production pattern as Landscape Friend in a tighter scope — typed forms, persistent data, and a clean GitHub-to-Vercel deployment flow.',
			'Built with Next.js, TypeScript, Neon PostgreSQL, Clerk authentication, and Vercel hosting.',
		],
	},
	{
		companyName: 'Polymuse',
		name: 'WordPress WooCommerce Plugin',
		description:
			'Developed a WordPress WooCommerce plugin for Polymuse, enabling clients to display and manage 3D models of their products within their e-commerce stores.',
		link: 'https://github.com/Dream-Team-Seven/polymuse-woocommerce',
		keyFeatures: [
			'Allows Poly Muse customers to display their 3D models in a variety of configurations.',
			'Enables clients to easily switch between pre-programmed variants of the 3D models.',
			'Integrates with the current WooCommerce product variant system, supporting multiple variants, pricing, and stock tracking.',
		],
	},
	{
		companyName: 'Clock Out',
		name: 'Organization Management & Analytics App',
		description:
			'Application built around authenticated users and organizations, with management and analytics views — practice with the multi-user structure most business software needs.',
		link: 'https://patmac.ca',
		keyFeatures: [
			'Demonstrates planning beyond a single-user demo: separating organizations, handling sign-in, and presenting summary data back to the user.',
			'Built with Next.js, TypeScript, authentication, organization management, and analytics.',
		],
	},
	{
		companyName: 'Portfolio & Technical Writing',
		name: 'patmac.ca',
		description:
			'Personal portfolio showcasing the applications above, with writing on modern Next.js in practice — server and client components, cached components, and keeping components static where possible.',
		link: 'https://patmac.ca',
		keyFeatures: [
			'The portfolio itself is a Next.js application, so the site recruiters land on is also a sample of the work.',
			'Built with Next.js, TypeScript, Tailwind CSS, and Vercel.',
		],
	},
]
