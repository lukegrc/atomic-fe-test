import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { store } from "./store";
import MovieList from "./features/MovieList";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#01b4e4",
    },
    secondary: {
      main: "#90cea1",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 600,
      color: "#0d253f",
    },
    h4: {
      fontWeight: 500,
      color: "#0d253f",
    },
    h5: {
      fontWeight: 500,
      color: "#0d253f",
    },
    h6: {
      fontWeight: 500,
      color: "#0d253f",
    },
    body1: {
      color: "#333333",
    },
    body2: {
      color: "#666666",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: 12,
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff",
            "& fieldset": {
              borderColor: "#01b4e4",
            },
            "&:hover fieldset": {
              borderColor: "#90cea1",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#01b4e4",
            },
          },
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MovieList />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
