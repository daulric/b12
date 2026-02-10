import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'

describe('Table', () => {
  it('renders table with headers and cells', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Tenant 1</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    expect(screen.getByText('Name')).toBeDefined()
    expect(screen.getByText('Status')).toBeDefined()
    expect(screen.getByText('Tenant 1')).toBeDefined()
    expect(screen.getByText('Active')).toBeDefined()
  })

  it('table has data-slot attribute', () => {
    const { container } = render(<Table><tbody /></Table>)
    const table = container.querySelector('[data-slot="table"]')
    expect(table).toBeDefined()
  })
})
