import React from "react";

interface Movie {
  id: number;
  title: string;
  overview: string;
}

const MovieList = () => {
  const movies: Movie[] = [
    {
      id: 1,
      title: "Sample Movie 1",
      overview: "This is a sample movie description",
    },
    {
      id: 2,
      title: "Sample Movie 2",
      overview: "Another sample movie description",
    },
  ];

  return (
    <div>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
