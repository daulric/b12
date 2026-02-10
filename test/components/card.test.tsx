import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

describe('Card', () => {
  it('renders Card with content', () => {
    render(
      <Card>
        <CardContent>Card content</CardContent>
      </Card>
    )
    expect(screen.getByText('Card content')).toBeDefined()
  })

  it('renders full card structure', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
    expect(screen.getByText('Title')).toBeDefined()
    expect(screen.getByText('Description')).toBeDefined()
    expect(screen.getByText('Body')).toBeDefined()
    expect(screen.getByText('Footer')).toBeDefined()
  })

  it('Card has data-slot attribute', () => {
    const { container } = render(<Card data-testid="card" />)
    const card = container.querySelector('[data-slot="card"]')
    expect(card).toBeDefined()
  })
})
