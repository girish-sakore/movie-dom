// import React from "react";


const MovieDetails = ({movie, onBack}) => {

  return (
    <div className="movie-details">
      <button onClick={onBack}>Back to List</button>
      
      <h1>{movie.Title}</h1>
      <div className="meta-wrapper">
        <div className="movie-meta">
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writer:</strong> {movie.Writer}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>
          <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
        </div>
        <div className="movie-poster">
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        </div>
      </div>
      
      <div className="movie-plot">
        <h3>Plot:</h3>
        <p>{movie.Plot}</p>
      </div>


      <div className="movie-ratings">
        <h3>Ratings:</h3>
        <ul>
          {movie.Ratings.map((rating, index) => (
            <li key={index}>
              <strong>{rating.Source}:</strong> {rating.Value}
            </li>
          ))}
        </ul>
        <p><strong>Metascore:</strong> {movie.Metascore}</p>
        <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
        <p><strong>IMDb Votes:</strong> {movie.imdbVotes}</p>
      </div>

    {/* <button onClick={handleBackToList}>Back to List</button> */}
    </div>
  );
}

export default MovieDetails;