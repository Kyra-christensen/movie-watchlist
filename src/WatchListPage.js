import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { getWatchList } from './services/fetch-utils';

export default function WatchListPage() {
  const [movies, setMovies] = useState([]);

  async function fetchAndRefresh() {
    const watchlist = await getWatchList();
    setMovies(watchlist);
  }

  useEffect(() => {
    fetchAndRefresh();
  }, []);



  return (
    <div>
      <h3>My Watchlist</h3>
      <MovieList movies={movies} fetchAndRefresh={fetchAndRefresh}/>
    </div>
  );
}
