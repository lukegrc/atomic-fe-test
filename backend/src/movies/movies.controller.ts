import { Controller, Get, Query, Param, ParseIntPipe } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { MovieResponseDto, GenresResponseDto } from "./dto/movie.dto";

@Controller("api/movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get("popular")
  async getPopularMovies(
    @Query("page", new ParseIntPipe({ optional: true })) page: number = 1
  ): Promise<MovieResponseDto> {
    return this.moviesService.getPopularMovies(page);
  }

  @Get("search")
  async searchMovies(
    @Query("q") query: string,
    @Query("page", new ParseIntPipe({ optional: true })) page: number = 1
  ): Promise<MovieResponseDto> {
    if (!query) {
      throw new Error("Search query is required");
    }
    return this.moviesService.searchMovies(query, page);
  }

  @Get("genres")
  async getGenres(): Promise<GenresResponseDto> {
    return this.moviesService.getGenres();
  }

  @Get("genre/:genreId")
  async getMoviesByGenre(
    @Param("genreId", ParseIntPipe) genreId: number,
    @Query("page", new ParseIntPipe({ optional: true })) page: number = 1
  ): Promise<MovieResponseDto> {
    return this.moviesService.getMoviesByGenre(genreId, page);
  }

  @Get("search-with-genre")
  async searchMoviesWithGenre(
    @Query("q") query: string,
    @Query("genres") genres: string,
    @Query("page", new ParseIntPipe({ optional: true })) page: number = 1
  ): Promise<MovieResponseDto> {
    if (!query) {
      throw new Error("Search query is required");
    }
    const genreIds = genres ? genres.split(",").map((id) => parseInt(id)) : [];
    return this.moviesService.searchMoviesWithGenre(query, genreIds, page);
  }
}
