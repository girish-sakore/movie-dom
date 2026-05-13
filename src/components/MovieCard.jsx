import fallbackPoster from '../images/moviedom_poster_big.png';

const MovieCard = ({ movie, onSelect }) => {
  const poster = movie.Poster === 'N/A' ? fallbackPoster : movie.Poster;

  return (
    <button className="movie-card" type="button" onClick={() => onSelect(movie.imdbID)}>
      <span className="movie-card__year">{movie.Year}</span>
      <img className="movie-card__poster" src={poster} alt={`${movie.Title} poster`} />
      <span className="movie-card__type">{movie.Type}</span>
      <h2>{movie.Title}</h2>
    </button>
  );
};

export default MovieCard;
