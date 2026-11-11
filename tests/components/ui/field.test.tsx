import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
	FieldTitle,
} from '@/components/ui/field'

describe('Field layout', () => {
	it('renders every part with its data-slot', () => {
		const { container } = render(
			<FieldSet>
				<FieldLegend>Legend</FieldLegend>
				<FieldGroup>
					<Field>
						<FieldContent>
							<FieldTitle>Title</FieldTitle>
							<FieldLabel htmlFor="x">Label</FieldLabel>
							<FieldDescription>Help</FieldDescription>
						</FieldContent>
					</Field>
				</FieldGroup>
			</FieldSet>,
		)
		for (const slot of [
			'field-set',
			'field-legend',
			'field-group',
			'field',
			'field-content',
			'field-description',
		]) {
			expect(
				container.querySelector(`[data-slot="${slot}"]`),
				slot,
			).not.toBeNull()
		}
		expect(screen.getByText('Legend')).toHaveAttribute(
			'data-variant',
			'legend',
		)
		expect(screen.getByText('Title')).toHaveAttribute(
			'data-slot',
			'field-label',
		)
		expect(screen.getByText('Label')).toHaveAttribute(
			'data-slot',
			'field-label',
		)
	})

	it('supports the label legend variant and field orientations', () => {
		render(
			<>
				<FieldLegend variant="label">Small</FieldLegend>
				<Field data-testid="h" orientation="horizontal" />
				<Field data-testid="r" orientation="responsive" />
			</>,
		)
		expect(screen.getByText('Small')).toHaveAttribute(
			'data-variant',
			'label',
		)
		expect(screen.getByTestId('h')).toHaveAttribute(
			'data-orientation',
			'horizontal',
		)
		expect(screen.getByTestId('h')).toHaveClass('flex-row')
		expect(screen.getByTestId('r')).toHaveAttribute(
			'data-orientation',
			'responsive',
		)
	})
})

describe('FieldSeparator', () => {
	it('renders a bare line without content', () => {
		const { container } = render(<FieldSeparator />)
		const separator = container.querySelector(
			'[data-slot="field-separator"]',
		)
		expect(separator).toHaveAttribute('data-content', 'false')
		expect(
			container.querySelector('[data-slot="field-separator-content"]'),
		).toBeNull()
	})

	it('shows its content over the line', () => {
		const { container } = render(<FieldSeparator>or</FieldSeparator>)
		expect(
			container.querySelector('[data-slot="field-separator"]'),
		).toHaveAttribute('data-content', 'true')
		expect(screen.getByText('or')).toHaveAttribute(
			'data-slot',
			'field-separator-content',
		)
	})
})

describe('FieldError', () => {
	it('renders nothing without children or errors', () => {
		const { container } = render(<FieldError />)
		expect(container).toBeEmptyDOMElement()
	})

	it('prefers its children', () => {
		render(
			<FieldError errors={[{ message: 'ignored' }]}>Custom</FieldError>,
		)
		expect(screen.getByRole('alert')).toHaveTextContent('Custom')
	})

	it('shows a single error message as text', () => {
		render(<FieldError errors={[{ message: 'Required' }]} />)
		const alert = screen.getByRole('alert')
		expect(alert).toHaveTextContent('Required')
		expect(alert.querySelector('ul')).toBeNull()
	})

	it('lists several errors, skipping ones without a message', () => {
		render(
			<FieldError
				errors={[
					{ message: 'Too short' },
					undefined,
					{ message: 'Bad' },
				]}
			/>,
		)
		const items = screen.getAllByRole('listitem')
		expect(items.map((li) => li.textContent)).toEqual(['Too short', 'Bad'])
	})
})
