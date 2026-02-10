import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { TenantTableSkeleton } from '@/app/tenants/components/tenant-table-skeleton'

describe('TenantTableSkeleton', () => {
  it('renders table header columns', () => {
    render(<TenantTableSkeleton />)
    expect(screen.getByText('Schema Name')).toBeDefined()
    expect(screen.getByText('Status')).toBeDefined()
    expect(screen.getByText('Created')).toBeDefined()
    expect(screen.getByText('Products')).toBeDefined()
    expect(screen.getByText('Actions')).toBeDefined()
  })

  it('renders table element', () => {
    const { container } = render(<TenantTableSkeleton />)
    const table = container.querySelector('table')
    expect(table).toBeDefined()
  })
})
