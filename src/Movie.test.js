import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Movie from './Movie';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<Movie/>', () => {
  render(<Movie />);
  expect(console.error).toHaveBeenCalledTimes(1);
});

const movie = {
  id: 'hi',
  title: 'Blah',
  poster_path: 'foo'
};

test('<Movie/> with movie', () => {
  render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  expect(console.error).not.toHaveBeenCalled();
});
