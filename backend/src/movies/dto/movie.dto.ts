export class MovieDto {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
}

export class GenreDto {
  id: number;
  name: string;
}

export class MovieResponseDto {
  page: number;
  results: MovieDto[];
  total_pages: number;
  total_results: number;
}

export class GenresResponseDto {
  genres: GenreDto[];
}
