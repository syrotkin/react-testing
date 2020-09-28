import React from 'react';
import { render, cleanup, waitForElement, getByTestId, queryByTestId } from 'react-testing-library';
import MoviesList from './MoviesList';
import { MemoryRouter } from 'react-router-dom';


global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
});


console.error = jest.fn();

const movies = {
    results: [{
      id: '0',
      poster_path: '/movie-0',
      title: 'movie 0'
    }]
};

const movies1 = {
  results: [{
    id: '0',
    poster_path: '/movie-0',
    title: 'movie 0'
  },
  {
    id: '1',
    poster_path: '/movie-1',
    title: 'movie 1'
  }]
};

describe('<MoviesList/>', () => {
  test('should render', async () => {
    fetch.mockResponseOnce(
      JSON.stringify(movies)
    );
  
    const { getByTestId, debug } = render(
      <MemoryRouter>
        <MoviesList />
      </MemoryRouter>
    );
    
    await waitForElement(() => getByTestId('movie-grid'));
    // the child element of MovieGrid is not rendered directly
    // That's why we are looking for the grandchild by the testid
    const movieLinkId = 'movie-link';
    // We have another waitForElement here because the movies are stored in the state
    // and the state is not available immediately
    let movieLink;
    await waitForElement(() => movieLink = getByTestId(movieLinkId));
    expect(movieLink.getAttribute('href')).toBe(`/${movies.results[0].id}`);

    expect(getByTestId('movie-img').getAttribute('alt')).toBe(movies.results[0].title);

    // debug();
  });

  test('test by the instructor', async () => {
    fetch.mockResponseOnce(JSON.stringify(movies1));

    const { debug, getByTestId, queryByTestId, getAllByTestId } = render(
      <MemoryRouter>
        <MoviesList />
      </MemoryRouter>
    );

    expect(getByTestId('loading')).toBeTruthy();
    await waitForElement(() => getByTestId('movie-link'));
    expect(queryByTestId('loading')).toBeFalsy();

    const movieLinks = getAllByTestId('movie-link');
    expect(movieLinks.length).toBe(movies1.results.length);
  });
});

