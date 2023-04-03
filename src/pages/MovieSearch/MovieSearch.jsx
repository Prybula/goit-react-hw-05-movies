import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/api';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    fetchSearchMovies(query).then(({ data }) => {
      setMovies([...data.results]);
    });
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </>
  );
};
