import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { getWatchList } from './services/fetch-utils';

export default function WatchListPage() {
  const [moviesArr, setMoviesArr] = useState([]);

  useEffect(() => {
    async function fetch(){
      const watchlist = getWatchList();
      setMoviesArr(watchlist);
    }
    fetch();
  }, []);
  return (
    <div>
      <h3>My Watchlist</h3>
      < MovieList moviesArr={moviesArr} setMoviesArr={setMoviesArr} />
    </div>
  );
}
