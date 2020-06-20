import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('Renders header with Test text', () => {
  const { getByText } = render(<App />);

  const textElement = getByText(/Test/i);

  expect(textElement).toBeInTheDocument();
});
