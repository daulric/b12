import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Badge } from '@/components/ui/badge'

describe('Badge', () => {
  it('renders with children', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeDefined()
  })

  it('renders with variant', () => {
    render(<Badge variant="secondary">Label</Badge>)
    expect(screen.getByText('Label')).toBeDefined()
  })

  it('renders with destructive variant', () => {
    render(<Badge variant="destructive">Error</Badge>)
    expect(screen.getByText('Error')).toBeDefined()
  })
})
