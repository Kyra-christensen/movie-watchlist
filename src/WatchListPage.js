import React, { useState, useEffect } from 'react';
import WatchListItem from './WatchListItem';
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
      <div>
        {
          moviesArr.map((watchlistMovie, i) =>
            <WatchListItem key={`${watchlistMovie}-${i}`} watchlistMovie={watchlistMovie} />)
        }
      </div>
    </div>
  );
}
