import React, { useState, useEffect } from 'react';
import WatchListItem from './WatchListItem';
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
      <WatchListItem moviesArr={moviesArr} fetchAndRefresh={fetchAndRefresh}/>
    </div>
  );
}
