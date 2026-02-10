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

mock.module('next/image', () => ({
  default: (props: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element -- test mock
    <img src={props.src} alt={props.alt} />
  ),
}))

mock.module('@/utils/supabase/client', () => ({
  createClient: () => ({
    auth: { signOut: () => Promise.resolve() },
  }),
}))

mock.module('sonner', () => ({
  toast: { success: () => {}, error: () => {} },
}))

import { UserNav } from '@/app/tenants/components/user-nav'

describe('UserNav', () => {
  it('renders user email', () => {
    render(
      <UserNav
        user={{
          email: 'test@example.com',
          isAdmin: false,
          isSuperAdmin: false,
          role: null,
        }}
      />
    )
    expect(screen.getByText('test@example.com')).toBeDefined()
  })

  it('renders Admin badge for admin users', () => {
    render(
      <UserNav
        user={{
          email: 'admin@example.com',
          isAdmin: true,
          isSuperAdmin: false,
          role: 'admin',
        }}
      />
    )
    expect(screen.getByText('Admin')).toBeDefined()
  })
})
