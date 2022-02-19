import React from 'react';
import { watchMovie } from './services/fetch-utils';

export default function WatchListItem({ movie, fetchAndRefresh }) {
  async function handleClick() {
    await watchMovie(movie.id);
    await fetchAndRefresh();
  }

  return (
    <div onClick={handleClick} className="movie-item">
      <h1>{movie.watched ? '✔️' : '👀'}</h1>
      <h2>{movie.title}</h2>
      <div className='movie-img-descp'>
        <img src={movie.poster ? `https://image.tmdb.org/t/p/w500${movie.poster}` : 'https://www.placebear.com/200/300'}/>
        <p>{movie.description}</p>
      </div>
      
    </div>
  );
}
