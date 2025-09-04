import React from "react";
import { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}/10</p>
      <p>Release: {movie.release_date}</p>
    </div>
  );
};

export default MovieCard;