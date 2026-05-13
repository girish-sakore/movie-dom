import fallbackPoster from '../images/moviedom_poster_big.png';

const detailRows = [
  ['Year', 'Year'],
  ['Rated', 'Rated'],
  ['Released', 'Released'],
  ['Runtime', 'Runtime'],
  ['Genre', 'Genre'],
  ['Director', 'Director'],
  ['Writer', 'Writer'],
  ['Actors', 'Actors'],
  ['Language', 'Language'],
  ['Country', 'Country'],
  ['Awards', 'Awards'],
  ['Box Office', 'BoxOffice'],
];

const MovieDetails = ({ movie, onBack }) => {
  const poster = movie.Poster === 'N/A' ? fallbackPoster : movie.Poster;
  const ratings = movie.Ratings || [];

  return (
    <article className="movie-details">
      <button className="movie-details__back" type="button" onClick={onBack}>
        Back to results
      </button>

      <div className="movie-details__hero">
        <img src={poster} alt={`${movie.Title} poster`} />
        <div>
          <p className="eyebrow">{movie.Type || 'Movie'}</p>
          <h1>{movie.Title}</h1>
          <p className="movie-details__plot">{movie.Plot}</p>

          <dl className="movie-details__meta">
            {detailRows.map(([label, key]) => (
              movie[key] && movie[key] !== 'N/A' ? (
                <div key={key}>
                  <dt>{label}</dt>
                  <dd>{movie[key]}</dd>
                </div>
              ) : null
            ))}
          </dl>
        </div>
      </div>

      <section className="movie-details__ratings" aria-label="Movie ratings">
        <h2>Ratings</h2>
        <div>
          {ratings.length > 0 ? (
            ratings.map((rating) => (
              <p key={rating.Source}>
                <strong>{rating.Source}</strong>
                <span>{rating.Value}</span>
              </p>
            ))
          ) : (
            <p>No ratings available.</p>
          )}
          {movie.imdbRating && movie.imdbRating !== 'N/A' && (
            <p>
              <strong>IMDb</strong>
              <span>{movie.imdbRating} / 10</span>
            </p>
          )}
        </div>
      </section>
    </article>
  );
};

export default MovieDetails;
