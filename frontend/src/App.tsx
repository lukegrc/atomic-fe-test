import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import MovieList from "./features/MovieList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Movie Library</h1>
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;
