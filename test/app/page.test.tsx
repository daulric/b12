import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeDefined()
  })

  it('renders Multi-Tenant in the title', () => {
    render(<Page />)
    expect(screen.getByText(/Multi-Tenant/)).toBeDefined()
  })

  it('renders Open Dashboard link', () => {
    render(<Page />)
    expect(screen.getByRole('link', { name: /Open Dashboard/i })).toBeDefined()
  })
})
