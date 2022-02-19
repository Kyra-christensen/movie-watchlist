import React from 'react';
import { watchMovie } from './services/fetch-utils';

export default function WatchListItem({ moviesArr, fetchAndRefresh }) {
  async function handleClick() {
    await watchMovie(moviesArr.id);
    await fetchAndRefresh();
  }

  return (
    <div onClick={handleClick}>
      <h1>{moviesArr.watched ? '⭐️' : ''}</h1>
      <h2>{moviesArr.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${moviesArr.poster}`}/>
      <p>{moviesArr.description}</p>
    </div>
  );
}
