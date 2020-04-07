import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Counter from './Counter';

afterEach(cleanup);


test('<Counter />', () => {
  // console.log('lesson 10');
  // Renders component
  const { debug, getByTestId } = render(<Counter />);

  // debug() outputs DOM as string
  const counterButton = getByTestId('counter-button');

  // Asserts counterButton is a button
  expect(counterButton.tagName).toBe('BUTTON');
  // Asserts counterButton starts at 0
  expect(counterButton.textContent).toBe('0');

  fireEvent.click(counterButton);
  // check if click actually happened
  expect(counterButton.textContent).toBe('1');
});
