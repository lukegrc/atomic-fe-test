import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Chip,
} from "@mui/material";
import { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt={movie.title}
        sx={{
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2" noWrap>
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minHeight: "60px",
          }}
        >
          {movie.overview || "No overview available"}
        </Typography>
        <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <Rating
            value={movie.vote_average / 2}
            precision={0.1}
            size="small"
            readOnly
          />
          <Typography variant="body2" color="text.secondary">
            ({movie.vote_average.toFixed(1)})
          </Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Chip
            label={new Date(movie.release_date).getFullYear()}
            size="small"
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
