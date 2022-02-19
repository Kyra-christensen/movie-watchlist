import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { getWatchList } from './services/fetch-utils';

export default function WatchListPage() {
  const [moviesArr, setMoviesArr] = useState([]);

  async function fetchAndRefresh() {
    const watchlist = getWatchList();
    setMoviesArr(watchlist);
  }

  useEffect(() => {
    fetchAndRefresh();
  }, []);



  return (
    <div>
      <h3>My Watchlist</h3>
      <MovieList moviesArr={moviesArr} fetchAndRefresh={fetchAndRefresh}/>
    </div>
  );
}
