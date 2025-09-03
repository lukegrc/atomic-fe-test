import { Injectable } from "@nestjs/common";

@Injectable()
export class MoviesService {
  constructor() {}

  async getPopularMovies() {
    return { message: "Popular movies endpoint" };
  }

  async searchMovies(query: string) {
    return { message: `Searching for: ${query}` };
  }

  async getGenres() {
    return { message: "Genres endpoint" };
  }

  async getMoviesByGenre(genreId: number) {
    return { message: `Movies for genre: ${genreId}` };
  }
}
