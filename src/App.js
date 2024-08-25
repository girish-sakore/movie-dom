import React, { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './images/search.svg'
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import TitlePoster from './images/moviedom_logo.png'
import TitlePosterSmall from './images/moviedom_poster_small.png'
import MessageCard from './MessageCard';

const BASE_URL = 'https://www.omdbapi.com/?apikey=929925c6';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [isShrunk, setIsShrunk] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (title) => {
    const response = await fetch(`${BASE_URL}&s=${title}`)
    setSelectedMovie(null);
    const data = await response.json();
    setMovieList(data.Search);
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsShrunk(scrollTop > 50);
  };

  const handleMovieSelect = async (imdbID) => {
    const response = await fetch(`${BASE_URL}&i=${imdbID}&plot=full`);
    const data = await response.json();
    setSelectedMovie(data);
  };
  
  const handleBackToList = () => {
    // searchMovies('one');
    setSelectedMovie(null);
  };

  useEffect(() => {
    searchMovies('Deadpool');
    setSelectedMovie(null);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app'>
      <div className={`header ${isShrunk ? 'shrink' : ''}`}>
        <div>
          {/* <h1 className='title'>MovieDom</h1> */}
          <img
            src={isShrunk ? TitlePosterSmall : TitlePoster}
            alt="MovieDom"
            className={`logo ${isShrunk ? 'small' : 'large'}`}
          />
        </div>
        <panel className='search'>
          <input
            placeholder='Search for a movie'
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.target.value)}
            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  searchMovies(searchPhrase)
                                }
                              }}
          />
          <img
            src={searchIcon}
            alt='search'
            onClick={(e) => searchMovies(searchPhrase)}
          />
        </panel>
      </div>
      <div className='body'>
          {
          selectedMovie ? (
            <div className='container'>
              {
                <MovieDetails
                  movie={selectedMovie}
                  onBack={handleBackToList}
                />
              }
            </div>
          ) : (
            movieList?.length > 0
            ? (
              <div className='container'>
                {movieList.map((movie) => (
                  <div
                    key={movie.imdbID}
                    onClick={() => handleMovieSelect(movie.imdbID)}
                  >
                    <MovieCard
                      movie={movie}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className='container'>
                <MessageCard
                  primary={'No data found'}
                  secondary={'Advanced search coming soon, Stay Tuned.'}
                />
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export default App;
