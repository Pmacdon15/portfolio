import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

describe('NavigationMenu', () => {
	it('opens an item to show its content', async () => {
		const user = userEvent.setup()
		render(
			<NavigationMenu className="menu">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
						<NavigationMenuContent>
							<NavigationMenuLink href="/budget">
								Budget
							</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuIndicator />
				</NavigationMenuList>
			</NavigationMenu>,
		)

		const trigger = screen.getByRole('button', { name: 'Projects' })
		expect(trigger).toHaveAttribute('data-state', 'closed')
		expect(screen.queryByRole('link', { name: 'Budget' })).toBeNull()

		await user.click(trigger)

		expect(trigger).toHaveAttribute('data-state', 'open')
		expect(screen.getByRole('link', { name: 'Budget' })).toHaveAttribute(
			'href',
			'/budget',
		)
		expect(screen.getByRole('navigation')).toHaveClass('menu')
	})

	it('exposes the trigger style', () => {
		expect(navigationMenuTriggerStyle()).toContain('inline-flex')
	})
})
