import React from 'react';
import {
  render, cleanup, fireEvent
} from 'react-testing-library';
import NewMovie from './NewMovie';


// afterEach is from jest
afterEach(cleanup);

// This is an example of an integration test because it tests details of 'MovieForm', 
// which is a subcomponent
test('<NewMovie />', () => {
  const {
    getByTestId, debug, queryByTestId, container, getByText
  } = render(<NewMovie />);

  // debug(); // prints the HTML of the component (full)

  // firstChild is HTMLDivElement
  // console.log(container.firstChild);
  const element = queryByTestId('page-title');
  if (element) {
    expect(getByTestId('page-title').textContent).toBe('New Movie');
  }
  // querying for 'movie-form' works because it is deep rendering,
  // NewMovie includes MovieForm
  expect(queryByTestId('movie-form')).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
