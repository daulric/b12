import { describe, expect, it, mock } from 'bun:test'
import { render, screen } from '@testing-library/react'
import TenantsError from '@/app/tenants/error'

describe('Tenants Error', () => {
  it('renders error message', () => {
    const reset = mock(() => {})
    const orig = console.error
    console.error = () => {}
    try {
      render(<TenantsError error={new Error('Test error')} reset={reset} />)
      expect(screen.getByText('Something went wrong')).toBeDefined()
      expect(screen.getByText('Test error')).toBeDefined()
    } finally {
      console.error = orig
    }
  })

  it('renders Try Again button', () => {
    const reset = mock(() => {})
    const orig = console.error
    console.error = () => {}
    try {
      render(<TenantsError error={new Error('Fail')} reset={reset} />)
      expect(screen.getByRole('button', { name: /Try Again/i })).toBeDefined()
    } finally {
      console.error = orig
    }
  })
})
