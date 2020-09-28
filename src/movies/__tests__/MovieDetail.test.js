import React from 'react';
import { render, cleanup, waitForElement, getByTestId } from 'react-testing-library';
import MovieDetail, { BACKDROP_PATH, POSTER_PATH } from '../MovieDetail';



global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = { 
  params: {
    id: "FOO"
  }
};


console.error = jest.fn();

const movie = {
  id: "hi",
  title: "level up",
  poster_path: "/movie/poster/1234",
  backdrop_path: "/movie/backdrop/1234"
};

describe('<MovieDetail/>', () => {
  test('should render movie-title', async () => {
    fetch.mockResponseOnce(
      JSON.stringify(movie)
    );
  
    const { getByTestId } = render(<MovieDetail match={match} />);
    await waitForElement(() => getByTestId('movie-title'));
  
    expect(getByTestId('movie-title').textContent).toBe(movie.title);
  });

  test('should render poster path', async () => {
    fetch.mockResponseOnce(
      JSON.stringify(movie)
    );
  
    const { getByTestId, debug } = render(<MovieDetail match={match} />);
    await waitForElement(() => getByTestId('poster-path'));
    expect(getByTestId('poster-path').getAttribute('src')).toBe(`${POSTER_PATH}${movie.poster_path}`);  
  });
});

