import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Chip,
  OutlinedInput,
} from "@mui/material";
import { Genre } from "../types/movie";
import { SelectChangeEvent } from "@mui/material";

interface GenreFilterProps {
  genres: Genre[];
  selectedGenres: number[];
  onGenreChange: (genreIds: number[]) => void;
}

// Multi-select genre filter with chips display
const GenreFilter = ({
  genres,
  selectedGenres,
  onGenreChange,
}: GenreFilterProps) => {
  const handleChange = (e: SelectChangeEvent<number[]>) => {
    const value = e.target.value;
    onGenreChange(
      typeof value === "string" ? value.split(",").map(Number) : value
    );
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="genre-filter-label">Filter by Genre</InputLabel>
        <Select
          labelId="genre-filter-label"
          multiple
          value={selectedGenres}
          onChange={handleChange}
          input={<OutlinedInput label="Filter by Genre" />}
          renderValue={(s) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {s.map((v) => {
                const genre = genres.find((g) => g.id === v);
                return (
                  <Chip key={v} label={genre?.name || "Unknown"} size="small" />
                );
              })}
            </Box>
          )}
        >
          {genres.map((g) => (
            <MenuItem key={g.id} value={g.id}>
              {g.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default GenreFilter;
