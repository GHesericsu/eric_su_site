import { render, screen } from '@testing-library/react';

import Header from '@/components/Header';

test('header renders', () => {
  render(<Header />);
  const ericSuText = screen.getByTestId('ericsu');
  expect(ericSuText).toBeInTheDocument();
});
