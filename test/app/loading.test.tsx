import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import Loading from '@/app/tenants/loading'

describe('Tenants Loading', () => {
  it('renders loading skeleton with table headers', () => {
    render(<Loading />)
    expect(screen.getByText('Schema Name')).toBeDefined()
    expect(screen.getByText('Status')).toBeDefined()
    expect(screen.getByText('Actions')).toBeDefined()
  })
})
