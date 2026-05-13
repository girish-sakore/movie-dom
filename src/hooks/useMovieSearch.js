import { useCallback, useEffect, useMemo, useState } from 'react';
import { DEFAULT_SEARCH_TERM } from '../config';
import { getMovieById, searchMovies } from '../services/omdbApi';

export const useMovieSearch = () => {
  const [query, setQuery] = useState(DEFAULT_SEARCH_TERM);
  const [submittedQuery, setSubmittedQuery] = useState(DEFAULT_SEARCH_TERM);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const totalPages = useMemo(() => Math.ceil(totalResults / 10), [totalResults]);

  const runSearch = useCallback(async (nextQuery, nextPage = 1) => {
    const normalizedQuery = nextQuery.trim();

    if (!normalizedQuery) {
      setMovies([]);
      setTotalResults(0);
      setError('Search for a movie title to begin.');
      return;
    }

    setIsLoading(true);
    setError('');
    setSelectedMovie(null);

    try {
      const result = await searchMovies(normalizedQuery, nextPage);
      setMovies(result.movies);
      setTotalResults(result.totalResults);
      setSubmittedQuery(normalizedQuery);
      setPage(nextPage);
    } catch (searchError) {
      setMovies([]);
      setTotalResults(0);
      setError(searchError.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const selectMovie = useCallback(async (imdbID) => {
    setIsLoading(true);
    setError('');

    try {
      const movie = await getMovieById(imdbID);
      setSelectedMovie(movie);
    } catch (movieError) {
      setError(movieError.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const submitSearch = useCallback(() => {
    runSearch(query, 1);
  }, [query, runSearch]);

  const changePage = useCallback(
    (nextPage) => {
      runSearch(submittedQuery, nextPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [runSearch, submittedQuery]
  );

  useEffect(() => {
    runSearch(DEFAULT_SEARCH_TERM, 1);
  }, [runSearch]);

  return {
    query,
    setQuery,
    submittedQuery,
    movies,
    selectedMovie,
    isLoading,
    error,
    page,
    totalPages,
    totalResults,
    submitSearch,
    selectMovie,
    clearSelectedMovie: () => setSelectedMovie(null),
    changePage,
  };
};
