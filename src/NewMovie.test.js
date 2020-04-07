import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie />', () => {
  const {
    getByTestId, debug, queryByTestId, container
  } = render(<NewMovie />);

  // console.log(container.firstChild); // this is HTMLDivElement
  const element = queryByTestId('page-title');
  if (element) {
    expect(getByTestId('page-title').textContent).toBe('New Movie');
  }

  // this works because it is deep rendering, NewMovie includes MovieForm
  expect(queryByTestId('movie-form')).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
