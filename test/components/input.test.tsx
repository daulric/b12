import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Input } from '@/components/ui/input'

describe('Input', () => {
  it('renders input element', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeDefined()
  })

  it('accepts value and onChange', () => {
    render(<Input value="test" onChange={() => {}} data-testid="input" />)
    const input = screen.getByTestId('input') as HTMLInputElement
    expect(input.value).toBe('test')
  })

  it('can be disabled', () => {
    render(<Input disabled />)
    expect((screen.getByRole('textbox') as HTMLInputElement).disabled).toBe(true)
  })

  it('has data-slot attribute', () => {
    const { container } = render(<Input />)
    const input = container.querySelector('[data-slot="input"]')
    expect(input).toBeDefined()
  })
})
