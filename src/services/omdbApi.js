import { OMDB_API_KEY } from '../config';

const OMDB_BASE_URL = 'https://www.omdbapi.com/';

const buildUrl = (params) => {
  const searchParams = new URLSearchParams({
    apikey: OMDB_API_KEY,
    ...params,
  });

  return `${OMDB_BASE_URL}?${searchParams.toString()}`;
};

const requestOmdb = async (params) => {
  if (!OMDB_API_KEY) {
    throw new Error('Missing OMDb API key. Add VITE_OMDB_API_KEY to your .env file.');
  }

  const response = await fetch(buildUrl(params));

  if (!response.ok) {
    throw new Error('Could not reach OMDb. Please try again.');
  }

  const data = await response.json();

  if (data.Response === 'False') {
    throw new Error(data.Error || 'No movie data found.');
  }

  return data;
};

export const searchMovies = async (query, page = 1) => {
  const data = await requestOmdb({
    s: query.trim(),
    page: String(page),
  });

  return {
    movies: data.Search || [],
    totalResults: Number(data.totalResults || 0),
  };
};

export const getMovieById = (imdbID) =>
  requestOmdb({
    i: imdbID,
    plot: 'full',
  });
