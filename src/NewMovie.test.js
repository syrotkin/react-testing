import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import NewMovie from './NewMovie';

afterEach(cleanup);

it('<NewMovie />', () => {
  const {
    getByTestId, debug, queryByTestId, container, getByText
  } = render(<NewMovie />);

  // firstChild is HTMLDivElement
  // console.log(container.firstChild);
  const element = queryByTestId('page-title');
  if (element) {
    expect(getByTestId('page-title').textContent).toBe('New Movie');
  }
  // this works because it is deep rendering, NewMovie includes MovieForm
  expect(queryByTestId('movie-form')).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
