import { describe, expect, it } from 'bun:test'
import { render } from '@testing-library/react'
import { Skeleton } from '@/components/ui/skeleton'

describe('Skeleton', () => {
  it('renders skeleton element', () => {
    const { container } = render(<Skeleton data-testid="skeleton" />)
    const skeleton = container.querySelector('[data-slot="skeleton"]')
    expect(skeleton).toBeDefined()
  })

  it('accepts className', () => {
    const { container } = render(<Skeleton className="h-10 w-20" />)
    const skeleton = container.querySelector('[data-slot="skeleton"]')
    expect(skeleton?.className).toContain('h-10')
  })
})
