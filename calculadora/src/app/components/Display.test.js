import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('renders Display component with value and operation', () => {
  const { getByText } = render(<Display value="123" operation="1+2+3" />);
  const valueElement = getByText(/123/i);
  const operationElement = getByText(/1\+2\+3/i);
  expect(valueElement).toBeInTheDocument();
  expect(operationElement).toBeInTheDocument();
});

test('renders ERROR when value is error', () => {
  const { getByText } = render(<Display value="ERROR" operation="1-2" />);
  const valueElement = getByText(/ERROR/i);
  const operationElement = getByText(/1-2/i);
  expect(valueElement).toBeInTheDocument();
  expect(operationElement).toBeInTheDocument();
});
