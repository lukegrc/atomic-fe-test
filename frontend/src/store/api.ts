import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.REACT_APP_API_URL || "http://localhost:3001/api/movies",
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page = 1) => `popular?page=${page}`,
    }),
    searchMovies: builder.query({
      query: ({ query, page = 1 }) => `search?q=${query}&page=${page}`,
    }),
    getGenres: builder.query({
      query: () => "genres",
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
  useGetGenresQuery,
} = movieApi;
