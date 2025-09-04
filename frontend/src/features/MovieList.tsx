import React, { useState } from "react";
import {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
  useGetGenresQuery,
} from "../store/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import { Movie } from "../types/movie";

const MovieList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  const {
    data: popularMovies,
    isLoading: popularLoading,
    error: popularError,
  } = useGetPopularMoviesQuery(1);
  const {
    data: searchResults,
    isLoading: searchLoading,
    error: searchError,
  } = useSearchMoviesQuery(
    { query: searchQuery, page: 1 },
    { skip: !searchQuery }
  );
  const { data: genres } = useGetGenresQuery(undefined);

  const movies = searchQuery ? searchResults?.results : popularMovies?.results;
  const isLoading = searchQuery ? searchLoading : popularLoading;
  const error = searchQuery ? searchError : popularError;

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message="Failed to load movies" />;

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      {genres && (
        <GenreFilter
          genres={genres.genres}
          selectedGenres={selectedGenres}
          onGenreChange={setSelectedGenres}
        />
      )}
      <div>
        {movies?.map((m: Movie) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
