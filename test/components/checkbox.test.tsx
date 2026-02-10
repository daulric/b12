import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Checkbox } from '@/components/ui/checkbox'

describe('Checkbox', () => {
  it('renders checkbox', () => {
    const { container } = render(<Checkbox />)
    const checkbox = container.querySelector('[data-slot="checkbox"]')
    expect(checkbox).toBeDefined()
  })

  it('renders with label', () => {
    render(
      <div>
        <Checkbox id="agree" />
        <label htmlFor="agree">I agree</label>
      </div>
    )
    expect(screen.getByText('I agree')).toBeDefined()
  })
})
