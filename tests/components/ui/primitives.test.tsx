import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Button, buttonVariants } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

describe('Button', () => {
	it('renders a button with the default variant and forwards its ref', () => {
		const ref = createRef<HTMLButtonElement>()
		render(<Button ref={ref}>Save</Button>)
		const button = screen.getByRole('button', { name: 'Save' })
		expect(ref.current).toBe(button)
		expect(button).toHaveClass('bg-primary', 'h-9')
	})

	it('applies variants and sizes', () => {
		render(
			<Button className="extra" size="lg" variant="outline">
				Go
			</Button>,
		)
		expect(screen.getByRole('button', { name: 'Go' })).toHaveClass(
			'border-input',
			'h-10',
			'extra',
		)
	})

	it('renders its child instead of a button with asChild', () => {
		render(
			<Button asChild variant="link">
				<a href="/resume">View resume</a>
			</Button>,
		)
		const link = screen.getByRole('link', { name: 'View resume' })
		expect(link).toHaveClass('underline-offset-4')
		expect(screen.queryByRole('button')).toBeNull()
	})

	it('exposes the variant classes', () => {
		expect(buttonVariants({ variant: 'ghost', size: 'icon' })).toContain(
			'w-9',
		)
	})
})

describe('Card', () => {
	it('renders every part with its classes and extra props', () => {
		render(
			<Card className="c" data-testid="card">
				<CardHeader className="h" data-testid="header">
					<CardTitle data-testid="title">Title</CardTitle>
					<CardDescription data-testid="desc">Desc</CardDescription>
				</CardHeader>
				<CardContent data-testid="content">Body</CardContent>
				<CardFooter data-testid="footer">Foot</CardFooter>
			</Card>,
		)
		expect(screen.getByTestId('card')).toHaveClass('rounded-xl', 'c')
		expect(screen.getByTestId('header')).toHaveClass('p-6', 'h')
		expect(screen.getByTestId('title')).toHaveTextContent('Title')
		expect(screen.getByTestId('desc')).toHaveClass('text-muted-foreground')
		expect(screen.getByTestId('content')).toHaveClass('pt-0')
		expect(screen.getByTestId('footer')).toHaveClass('items-center')
	})
})

describe('form controls', () => {
	it('renders an input, textarea and label', () => {
		const inputRef = createRef<HTMLInputElement>()
		const areaRef = createRef<HTMLTextAreaElement>()
		render(
			<>
				<Label htmlFor="name">Name</Label>
				<Input className="i" id="name" ref={inputRef} type="email" />
				<Label htmlFor="msg">Message</Label>
				<Textarea className="t" id="msg" ref={areaRef} />
			</>,
		)
		const input = screen.getByLabelText('Name')
		expect(input).toBe(inputRef.current)
		expect(input).toHaveAttribute('type', 'email')
		expect(input).toHaveClass('i')
		const area = screen.getByLabelText('Message')
		expect(area).toBe(areaRef.current)
		expect(area).toHaveClass('t')
		expect(screen.getByText('Name')).toHaveAttribute('data-slot', 'label')
	})
})

describe('Separator', () => {
	it('is decorative and horizontal by default', () => {
		const { container } = render(<Separator />)
		const separator = container.firstElementChild
		expect(separator).toHaveAttribute('data-orientation', 'horizontal')
		expect(separator).toHaveAttribute('role', 'none')
	})

	it('can be a vertical, semantic separator', () => {
		render(<Separator decorative={false} orientation="vertical" />)
		expect(screen.getByRole('separator')).toHaveAttribute(
			'aria-orientation',
			'vertical',
		)
	})
})
