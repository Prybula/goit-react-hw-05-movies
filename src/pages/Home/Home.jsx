import { useState, useEffect } from 'react';
import { fetchTrendings } from 'service/api';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendings().then(({ data }) => setMovies(data.results));
  }, []);
  return <MovieList movies={movies} />;
};
