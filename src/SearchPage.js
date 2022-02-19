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
    console.log(movies);
    setResults(movies);
    
  }

  async function fetchAndRefresh() {
    const watchlist = await getWatchList();
    console.log(watchlist);
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
    <div>
      <div>
        <h3>Find a Movie</h3>
        <form onSubmit={handleSubmit}>
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
