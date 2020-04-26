import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

it('<MovieForm />', () => {
  const {
    queryByTestId, getByText
  } = render(<MovieForm submitForm={onSubmit} />);

  // 'movie-form' is in MovieForm itself
  expect(queryByTestId('movie-form')).toBeTruthy();

  // relying on the text 'Submit' to not change
  fireEvent.click(getByText('Submit'));

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
