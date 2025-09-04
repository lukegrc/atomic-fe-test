import React from "react";
import { Genre } from "../types/movie";

interface GenreFilterProps {
  genres: Genre[];
  selectedGenres: number[];
  onGenreChange: (genreIds: number[]) => void;
}

const GenreFilter = ({
  genres,
  selectedGenres,
  onGenreChange,
}: GenreFilterProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, (option) =>
      Number(option.value)
    );
    onGenreChange(values);
  };

  return (
    <select multiple value={selectedGenres.map(String)} onChange={handleChange}>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreFilter;
