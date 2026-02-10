import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeDefined()
  })

  it('renders with variant classes', () => {
    render(<Button variant="destructive">Delete</Button>)
    const btn = screen.getByRole('button')
    expect(btn.getAttribute('data-variant')).toBe('destructive')
  })

  it('renders with size classes', () => {
    render(<Button size="lg">Large</Button>)
    const btn = screen.getByRole('button')
    expect(btn.getAttribute('data-size')).toBe('lg')
  })

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>)
    expect((screen.getByRole('button') as HTMLButtonElement).disabled).toBe(true)
  })
})
