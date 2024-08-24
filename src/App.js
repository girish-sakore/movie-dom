import React, { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './images/search.svg'
import MovieCard from './MovieCard';

const BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=929925c6';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [isShrunk, setIsShrunk] = useState(false);

  const searchMovies = async (title) => {
    const response = await fetch(`${BASE_URL}&s=${title}`)

    const data = await response.json();
    setMovies(data.Search);
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsShrunk(scrollTop > 50);
  };

  useEffect(() => {
    // searchMovies('');
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app'>
      <div className={`header ${isShrunk ? 'shrink' : ''}`}>
        <div>
          <h1 className='title'>MovieDom</h1>
        </div>
        <panel className='search'>
          <input
            placeholder='Search for a movie'
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.target.value)}
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
          movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='container'>
              <h2>No movies found</h2>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
