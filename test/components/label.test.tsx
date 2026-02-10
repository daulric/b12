import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Label } from '@/components/ui/label'

describe('Label', () => {
  it('renders with children', () => {
    render(<Label>Email</Label>)
    expect(screen.getByText('Email')).toBeDefined()
  })

  it('associates with input via htmlFor', () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <input id="email" />
      </>
    )
    const label = screen.getByText('Email')
    expect(label.getAttribute('for')).toBe('email')
  })
})
