import React, { useState } from 'react';
import Spinner from './Spinner';
import MovieList from './MovieList';
import { searchMovies } from './services/fetch-utils';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const movies = await searchMovies(search);
    setMovies(movies);
    setIsLoading(false);
  }

  return (
    <div>
      <div>
        <h3>Find a Movie</h3>
        <form onSubmit={handleSubmit}>
          <label>
          title:
            <input onChange={e => setSearch(e.target.value)}
              value={search}></input>
          </label>
          <button>Submit</button>
        </form>
      </div>
      <div>
        {
          isLoading
            ? <Spinner/>
            : <MovieList movies={movies} />
        }
      </div>
    </div>
  );
}
