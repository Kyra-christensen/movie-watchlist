import React from 'react';
import { addToWatchList } from './services/fetch-utils';

export default function Movie({ movie }) {
  async function handleClick(){
    const movieObject = {
      api_id: movie.id,
      title: movie.title,
      poster: movie.poster,
      description: movie.description
    };
    await addToWatchList(movieObject);
  }

  return (
    <div onClick={handleClick} className={`movie`}>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster}`} />
      <p>{movie.description}</p>
    </div>
  );
}
