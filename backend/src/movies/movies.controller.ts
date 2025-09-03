import { Controller, Get, Query, Param } from "@nestjs/common";
import { MoviesService } from "./movies.service";

@Controller("api/movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get("popular")
  async getPopularMovies() {
    return this.moviesService.getPopularMovies();
  }

  @Get("search")
  async searchMovies(@Query("q") query: string) {
    return this.moviesService.searchMovies(query);
  }

  @Get("genres")
  async getGenres() {
    return this.moviesService.getGenres();
  }

  @Get("genre/:genreId")
  async getMoviesByGenre(@Param("genreId") genreId: string) {
    return this.moviesService.getMoviesByGenre(parseInt(genreId));
  }
}
