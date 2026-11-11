import { useQueryClient } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Providers } from '@/components/providers'

function HasClient() {
	const client = useQueryClient()
	return <p>{client ? 'has client' : 'no client'}</p>
}

describe('Providers', () => {
	it('gives its children a React Query client', () => {
		render(
			<Providers>
				<HasClient />
			</Providers>,
		)
		expect(screen.getByText('has client')).toBeTruthy()
	})
})
