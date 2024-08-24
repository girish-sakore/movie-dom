import React from "react"

const MovieCard = ({ movie }) => {
  return (
    <div className='movie_card'>
      <div>
        <h4>{movie.Year}</h4>
      </div>
      <div>
        <img 
          src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/400' : movie.Poster}
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;