import { mock } from 'bun:test'
import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'

const mockRouter = () => ({
  push: () => {},
  refresh: () => {},
  replace: () => {},
  back: () => {},
  forward: () => {},
  prefetch: () => {},
})
mock.module('next/navigation', () => ({
  useRouter: mockRouter,
}))

mock.module('sonner', () => ({
  toast: { success: () => {}, error: () => {} },
}))

import { CreateTenantForm } from '@/app/tenants/components/create-tenant-form'

describe('CreateTenantForm', () => {
  it('renders form fields', () => {
    render(<CreateTenantForm />)
    expect(screen.getByLabelText(/schema name/i)).toBeDefined()
    expect(screen.getByLabelText(/display name/i)).toBeDefined()
    expect(screen.getByRole('button', { name: /create/i })).toBeDefined()
  })
})
