import React from 'react';

export default function WatchListItem({ moviesArr }) {
  
  return (
    <div>
      <h2>{watchlistMovie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${watchlistMovie.poster}`}/>
      <p>{watchlistMovie.description}</p>
    </div>
  );
}
