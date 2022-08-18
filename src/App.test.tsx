import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render buttons', () => {
  render(<App />);
  expect(screen.getByTestId('actionButton')).toHaveTextContent('Action!');
  expect(screen.getByTestId('intervalButton')).toHaveTextContent('Move with Interval');
});

test('render movebuttons', () => {
  render(<App />);
  expect(screen.getByTestId('actionButton')).toHaveTextContent('Action!');
  expect(screen.getByTestId('intervalButton')).toHaveTextContent('Move with Interval');
});

test('render header and footer width sticky position', () => {
  render(<App />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('header')).toHaveStyle({position: 'sticky'});
  expect(screen.getByTestId('footer')).toBeInTheDocument();
  expect(screen.getByTestId('footer')).toHaveStyle({position: 'sticky'});
});

test('render main', () => {
  render(<App />);
  const main = screen.getByTestId('main')
  expect(main).toBeInTheDocument();
  expect(main).toContainHTML("right");
  expect(main).toContainHTML("left");
  expect(main).toContainHTML("center");
});
