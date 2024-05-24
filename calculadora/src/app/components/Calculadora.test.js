import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculadora from './Calculadora';

test('renders Calculadora component', () => {
  const { getByText } = render(<Calculadora />);
  const buttonElement = getByText(/C/i);
  expect(buttonElement).toBeInTheDocument();
});

test('performs addition correctly', () => {
  const { getByText, getByTestId } = render(<Calculadora />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  const resultElement = getByTestId('display');
  expect(resultElement.textContent.replace('_', '')).toBe('8');
});

test('performs subtraction correctly', () => {
  const { getByText, getByTestId } = render(<Calculadora />);
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('='));
  const resultElement = getByTestId('display');
  expect(resultElement.textContent.replace('_', '')).toBe('5');
});

test('displays ERROR for negative result', () => {
  const { getByText, getByTestId } = render(<Calculadora />);
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('='));
  const resultElement = getByTestId('display');
  expect(resultElement.textContent.replace('_', '')).toBe('ERROR');
});
