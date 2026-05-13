import Header from './components/Header';
import LoadingGrid from './components/LoadingGrid';
import MessageCard from './components/MessageCard';
import MovieDetails from './components/MovieDetails';
import MovieGrid from './components/MovieGrid';
import Pagination from './components/Pagination';
import { useMovieSearch } from './hooks/useMovieSearch';

const App = () => {
  const {
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
    clearSelectedMovie,
    changePage,
  } = useMovieSearch();

  return (
    <div className="app">
      <Header query={query} onQueryChange={setQuery} onSearch={submitSearch} />

      <main className="app__main">
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={clearSelectedMovie} />
        ) : (
          <>
            <section className="results-header" aria-live="polite">
              <div>
                <p className="eyebrow">MovieDom Search</p>
                <h1>Find the next story worth your evening.</h1>
              </div>
              {totalResults > 0 && (
                <p className="results-header__count">
                  {totalResults.toLocaleString()} results for "{submittedQuery}"
                </p>
              )}
            </section>

            {isLoading ? (
              <LoadingGrid />
            ) : error ? (
              <MessageCard title={error} body="Try a different title or check your OMDb API key." />
            ) : movies.length > 0 ? (
              <>
                <MovieGrid movies={movies} onMovieSelect={selectMovie} />
                <Pagination page={page} totalPages={totalPages} onPageChange={changePage} />
              </>
            ) : (
              <MessageCard
                title="No movies found"
                body="Search for a title above and matching movies will appear here."
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
