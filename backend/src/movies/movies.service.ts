import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";
import { MovieResponseDto, GenresResponseDto } from "./dto/movie.dto";

// Service for TMDB API calls
@Injectable()
export class MoviesService {
  private readonly tmdbApiKey: string;
  private readonly tmdbBaseUrl = "https://api.themoviedb.org/3";

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.tmdbApiKey = this.configService.get<string>("TMDB_API_KEY");
  }

  // Get popular movies with pagination
  async getPopularMovies(page: number = 1): Promise<MovieResponseDto> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.tmdbBaseUrl}/movie/popular`, {
        params: {
          api_key: this.tmdbApiKey,
          page,
        },
      })
    );

    return response.data;
  }

  // Search movies by query
  async searchMovies(
    query: string,
    page: number = 1
  ): Promise<MovieResponseDto> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.tmdbBaseUrl}/search/movie`, {
        params: {
          api_key: this.tmdbApiKey,
          query,
          page,
        },
      })
    );

    return response.data;
  }

  // Get all available genres
  async getGenres(): Promise<GenresResponseDto> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.tmdbBaseUrl}/genre/movie/list`, {
        params: {
          api_key: this.tmdbApiKey,
        },
      })
    );

    return response.data;
  }

  async getMoviesByGenre(
    genreId: number,
    page: number = 1
  ): Promise<MovieResponseDto> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.tmdbBaseUrl}/discover/movie`, {
        params: {
          api_key: this.tmdbApiKey,
          with_genres: genreId,
          page,
        },
      })
    );

    return response.data;
  }
}
