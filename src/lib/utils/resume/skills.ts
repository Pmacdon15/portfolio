import type { Skills } from '@/types/types'

export const skills: (Skills & { index: number })[] = [
	{
		index: 0,
		description:
			'Languages: TypeScript, JavaScript, HTML, CSS, SQL (PostgreSQL), Java, Python, C#',
	},
	{
		index: 1,
		description:
			'Frontend: React, Next.js (App Router, Server Components, Cache Components), Tailwind CSS',
	},
	{
		index: 2,
		description:
			'Backend & Data: Node.js, Bun, REST APIs, PostgreSQL (Neon), Clerk authentication',
	},
	{
		index: 3,
		description:
			'Tools & Platforms: Git, GitHub, Vercel, WordPress / WooCommerce',
	},
]
