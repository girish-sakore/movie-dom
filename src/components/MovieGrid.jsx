import MovieCard from './MovieCard';

const MovieGrid = ({ movies, onMovieSelect }) => (
  <section className="movie-grid" aria-label="Movie search results">
    {movies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} onSelect={onMovieSelect} />
    ))}
  </section>
);

export default MovieGrid;
