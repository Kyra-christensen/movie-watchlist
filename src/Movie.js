import React from 'react';
import { addToWatchList } from './services/fetch-utils';

export default function Movie({ movie, isOnWatchList, fetchAndRefresh }) {
  const watched = isOnWatchList(movie.id);
  
  async function handleClick() {
    if (!watched) {
      const movieObject = {
        api_id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        description: movie.overview
      };
      await addToWatchList(movieObject);
      await fetchAndRefresh();
    }
  }

  return (
    <div title="movie-item" onClick={handleClick} className={`movie-item ${watched} ? 'watched' : ''`}>
      <h1>{watched && '❤️'}</h1>
      <h2>{movie.title}</h2>
      <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://placekitten.com.200/300'} />
      <p>{movie.overview}</p>
    </div>
  );
}
