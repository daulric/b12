import { describe, expect, it } from 'bun:test';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeDefined();
  });
});
