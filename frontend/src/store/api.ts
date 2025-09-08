import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3001/api/movies",
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page = 1) => `popular?page=${page}`,
    }),
    searchMovies: builder.query({
      query: ({ query, page = 1 }) => `search?q=${query}&page=${page}`,
    }),
    getMoviesByGenre: builder.query({
      query: ({ genreId, page = 1 }) => `genre/${genreId}?page=${page}`,
    }),
    searchMoviesWithGenre: builder.query({
      query: ({ query, genreIds, page = 1 }) =>
        `search-with-genre?q=${query}&genres=${genreIds.join(",")}&page=${page}`,
    }),
    getGenres: builder.query({
      query: () => "genres",
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
  useGetMoviesByGenreQuery,
  useSearchMoviesWithGenreQuery,
  useGetGenresQuery,
} = movieApi;
