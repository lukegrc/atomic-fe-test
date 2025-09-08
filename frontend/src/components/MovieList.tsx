import { useState, useMemo, useEffect } from "react";
import { Container, Typography, Grid, Box, Paper } from "@mui/material";
import {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
  useGetMoviesByGenreQuery,
  useSearchMoviesWithGenreQuery,
  useGetGenresQuery,
} from "../store/api";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import LoadingSpinner from "./LoadingSpinner";
import ErrorAlert from "./ErrorAlert";
import Pagination from "./Pagination";
import { Movie } from "../types/movie";

const MovieList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  const {
    data: popularMovies,
    isLoading,
    error,
  } = useGetPopularMoviesQuery(page);

  const { data: searchResults } = useSearchMoviesQuery(
    { query: searchQuery, page },
    { skip: !searchQuery || selectedGenres.length > 0 }
  );

  const { data: genreMovies } = useGetMoviesByGenreQuery(
    { genreId: selectedGenres[0], page },
    {
      skip:
        !selectedGenres.length || selectedGenres.length > 1 || !!searchQuery,
    }
  );

  const { data: searchWithGenreResults } = useSearchMoviesWithGenreQuery(
    { query: searchQuery, genreIds: selectedGenres || [], page },
    { skip: !searchQuery || selectedGenres.length === 0 }
  );

  const { data: genres } = useGetGenresQuery(undefined);

  const currentData = useMemo(() => {
    if (searchQuery && selectedGenres.length > 0) {
      return searchWithGenreResults;
    } else if (searchQuery) {
      return searchResults;
    } else if (selectedGenres.length === 1) {
      return genreMovies;
    } else {
      return popularMovies;
    }
  }, [
    searchQuery,
    selectedGenres.length,
    searchWithGenreResults,
    searchResults,
    genreMovies,
    popularMovies,
  ]);

  const movies = currentData?.results || [];
  const maxPages = 500; // Pagination limit
  const totalPages = Math.min(currentData?.total_pages || 1, maxPages);

  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedGenres]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleGenreChange = (genreIds: number[]) => {
    setSelectedGenres(genreIds);
  };

  const handlePageChange = (newPage: number) => {
    // Ensure page is within valid range
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  if (isLoading && page === 1) return <LoadingSpinner />;
  if (error) return <ErrorAlert message="Failed to load movies" />;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 4,
            background: "linear-gradient(45deg, #1976d2, #42a5f5)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Movies
        </Typography>

        <Box sx={{ mb: 4 }}>
          <SearchBar onSearch={handleSearch} />
        </Box>

        {genres && (
          <Box sx={{ mb: 3, maxWidth: 400, mx: "auto" }}>
            <GenreFilter
              genres={genres.genres}
              selectedGenres={selectedGenres}
              onGenreChange={handleGenreChange}
            />
          </Box>
        )}
      </Box>

      <Grid container spacing={3}>
        {movies?.map((m: Movie) => (
          <Grid item xs={12} sm={6} lg={3} key={m.id}>
            <MovieCard movie={m} genres={genres?.genres} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        key={`${searchQuery}-${selectedGenres.join(",")}`}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {currentData?.total_pages && currentData.total_pages > maxPages && (
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Showing first {maxPages} pages of{" "}
            {currentData.total_pages.toLocaleString()} total pages
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default MovieList;
