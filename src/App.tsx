import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import MovieGrid from './components/MovieGrid/MovieGrid';
import { fetchMovies } from './services/movieService';
import type { Movie } from './types/movie';
import toast from 'react-hot-toast';
import MovieModal from './components/MovieModal/MovieModal';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(false);
      const results = await fetchMovies(query);

      if (results.length === 0) {
        toast.error('No movies found for your request.');
      }

      setMovies(results);
    } catch {
      setError(true);
      toast.error('Error loading movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage />}

      {movies.length > 0 && (
        <MovieGrid
          movies={movies}
          onSelect={(movie) => setSelectedMovie(movie)}
        />
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

    </>
  );
}

export default App;