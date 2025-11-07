import type { Project } from '@/types/types'

export const projects: Project[] = [
	{
		companyName: 'Polymuse',
		name: 'WordPress Woocommerce Plugin',
		description:
			'Developed a WordPress WooCommerce plugin for Polymuse, enabling clients to display and manage 3D models of their products within their e-commerce stores.',
		link: 'https://github.com/Dream-Team-Seven/polymuse-woocommerce',
		keyFeatures: [
			'Allows Poly Muse customers to display their 3D models in a variety of configurations.',
			'Enables clients to easily switch between pre-programmed variants of the 3D models.',
			'Integrates with the current WooCommerce product variant system, supporting multiple variants, pricing, and stock tracking.',
		],
	}, // <-- Added comma here
]
