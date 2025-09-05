import { KeyboardEvent } from "react";
import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import { Search as SearchIcon, Clear as ClearIcon } from "@mui/icons-material";
import { useForm } from "react-hook-form";

interface SearchFormData {
  query: string;
}

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search for movies...",
}: SearchBarProps) => {
  const { register, handleSubmit, reset, watch } = useForm<SearchFormData>();

  const watchedQuery = watch("query");

  const onSubmit = (data: SearchFormData) => {
    if (data.query.trim()) onSearch(data.query.trim());
  };

  const handleClear = () => {
    reset();
    onSearch("");
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("query")}
          fullWidth
          placeholder={placeholder}
          variant="outlined"
          onKeyPress={handleKeyPress}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: watchedQuery && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="clear search"
                  onClick={handleClear}
                  edge="end"
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              backgroundColor: "background.paper",
              color: "#000000",
            },
            "& .MuiInputBase-input": {
              color: "#000000",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#666666",
              opacity: 1,
            },
          }}
        />
      </form>
    </Box>
  );
};

export default SearchBar;
