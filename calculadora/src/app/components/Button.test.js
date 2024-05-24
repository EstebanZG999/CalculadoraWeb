import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders Button component', () => {
  const { getByText } = render(<Button label="5" onClick={() => {}} />);
  const buttonElement = getByText(/5/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button label="5" onClick={handleClick} />);
  const buttonElement = getByText(/5/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
