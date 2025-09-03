import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { MovieResponseDto, GenresResponseDto } from "./dto/movie.dto";
import { tmdbConfig } from "../config/tmdb.config";

@Injectable()
export class MoviesService {
  constructor(private readonly httpService: HttpService) {}

  async getPopularMovies(page: number = 1): Promise<MovieResponseDto> {
    const response = await firstValueFrom(
      this.httpService.get(`${tmdbConfig.baseUrl}/movie/popular`, {
        params: {
          api_key: tmdbConfig.apiKey,
          page,
        },
      })
    );

    return response.data;
  }

  async searchMovies(
    query: string,
    page: number = 1
  ): Promise<MovieResponseDto> {
    const response = await firstValueFrom(
      this.httpService.get(`${tmdbConfig.baseUrl}/search/movie`, {
        params: {
          api_key: tmdbConfig.apiKey,
          query,
          page,
        },
      })
    );

    return response.data;
  }

  async getGenres(): Promise<GenresResponseDto> {
    const response = await firstValueFrom(
      this.httpService.get(`${tmdbConfig.baseUrl}/genre/movie/list`, {
        params: {
          api_key: tmdbConfig.apiKey,
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
      this.httpService.get(`${tmdbConfig.baseUrl}/discover/movie`, {
        params: {
          api_key: tmdbConfig.apiKey,
          with_genres: genreId,
          page,
        },
      })
    );

    return response.data;
  }
}
