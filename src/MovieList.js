import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Movie from './Movie';
import WatchListItem from './WatchListItem';

export default function MovieList({ results, fetchAndRefresh, isOnWatchList }) {
  const location = useLocation();
  return (
    <div>
      {
        results.map((movie, i) => location.pathname.includes('search')
          ? <WatchListItem key={`${movie}-${i}`} fetchAndRefresh={fetchAndRefresh} movie={movie}/>
          : <Movie key={`${movie}-${i}`} movie={movie} isOnWatchList={isOnWatchList} fetchAndRefresh={fetchAndRefresh}/>
        )
      }
    </div>
  );
}
