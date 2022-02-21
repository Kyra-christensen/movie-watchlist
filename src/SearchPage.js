import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { getWatchList, searchMovies } from './services/fetch-utils';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]);
  

  async function handleSubmit(e) {
    e.preventDefault();
    
    const movies = await searchMovies(search);
    
    setResults(movies);
    // console.log(setResults);
  }

  async function fetchAndRefresh() {
    const watchlist = await getWatchList();
    
    setMovies(watchlist);
  }

  useEffect(() => {
    fetchAndRefresh();
  }, []);

  function isOnWatchList(api_id) {
    const match = movies.find(item => Number(item.api_id) === Number(api_id));
    return Boolean(match);
  }

  return (
    <div className='searchpage'>
      <div className='search-form'>
        <form onSubmit={handleSubmit}>
          <h3>Find a Movie</h3>
          <label>
          title:
            <input value={search} onChange={e => setSearch(e.target.value)}/>
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div>
        
        <MovieList movies={results} isOnWatchList={isOnWatchList} fetchAndRefresh={fetchAndRefresh} />
      </div>
    </div>
  );
}
