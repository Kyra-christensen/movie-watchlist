import React, { useState } from 'react';
import Spinner from './Spinner';
import MovieList from './MovieList';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(`/.netlify/functions/movie-db?search=${search}`);
    const json = await response.json();
    console.log(json.results);
    setMovies(json.results);
    setIsLoading(false);
  }

  return (
    <div>
      <div>
        <h3>Search Page</h3>
        <form onSubmit={handleSubmit}>
          <label>
          title:
            <input onChange={e => setSearch(e.target.value)}></input>
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
