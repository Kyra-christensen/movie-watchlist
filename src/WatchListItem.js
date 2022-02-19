import React from 'react';
import { watchMovie } from './services/fetch-utils';

export default function WatchListItem({ movie, fetchAndRefresh }) {
  async function handleClick() {
    await watchMovie(movie.id);
    fetchAndRefresh();
  }

  return (
    <div onClick={handleClick}>
      <h1>{movie.watched ? '✔️' : '👀'}</h1>
      <h2>{movie.title}</h2>
      <img src={ `https://image.tmdb.org/t/p/original${movie.poster}`}/>
      <p>{movie.description}</p>
    </div>
  );
}
