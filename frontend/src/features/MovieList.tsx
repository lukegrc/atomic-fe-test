import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Pagination,
} from "@mui/material";
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
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: popularMovies,
    isLoading: popularLoading,
    error: popularError,
  } = useGetPopularMoviesQuery(currentPage);
  const {
    data: searchResults,
    isLoading: searchLoading,
    error: searchError,
  } = useSearchMoviesQuery(
    { query: searchQuery, page: currentPage },
    { skip: !searchQuery }
  );
  const { data: genres } = useGetGenresQuery(undefined);

  const movies = searchQuery ? searchResults?.results : popularMovies?.results;
  const totalPages = searchQuery
    ? searchResults?.total_pages
    : popularMovies?.total_pages;
  const isLoading = searchQuery ? searchLoading : popularLoading;
  const error = searchQuery ? searchError : popularError;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message="Failed to load movies" />;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Movie Library
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Discover your next favorite movie
        </Typography>

        <Box sx={{ mb: 3 }}>
          <SearchBar onSearch={setSearchQuery} />
        </Box>

        {genres && (
          <Paper sx={{ p: 2, mb: 3, maxWidth: 400, mx: "auto" }}>
            <GenreFilter
              genres={genres.genres}
              selectedGenres={selectedGenres}
              onGenreChange={setSelectedGenres}
            />
          </Paper>
        )}
      </Box>

      {movies && movies.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {movies.map((movie: Movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>

          {totalPages && totalPages > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                size="large"
              />
            </Box>
          )}
        </>
      ) : (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h5" color="text.secondary">
            No movies found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try adjusting your search or filters
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default MovieList;
