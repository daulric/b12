import { mock } from 'bun:test'
import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'

mock.module('sonner', () => ({
  toast: { success: () => {}, error: () => {} },
}))

import { TenantTable } from '@/app/tenants/components/tenant-table'
import type { TenantWithProducts } from '@/types/database'

const mockTenants: TenantWithProducts[] = [
  {
    id: '1',
    schema_name: 'acme',
    display_name: 'Acme Corp',
    status: 'active',
    created_at: '2024-01-01T00:00:00Z',
    products: [],
  },
]

describe('TenantTable', () => {
  it('renders tenant rows', () => {
    render(<TenantTable initialTenants={mockTenants} />)
    expect(screen.getByText('acme')).toBeDefined()
    expect(screen.getByText('Acme Corp')).toBeDefined()
  })

  it('renders table headers when tenants exist', () => {
    render(<TenantTable initialTenants={mockTenants} />)
    expect(screen.getByText('Schema Name')).toBeDefined()
    expect(screen.getByText('Status')).toBeDefined()
  })
})
