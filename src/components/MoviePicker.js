import React from "react";

export function MoviePicker({ movies, searchValue }) {
  const movieList = movies.map((movie) => {
    return (
      <li className={movie.meter} key={movie.id}>
        {movie.movie}
      </li>
    );
  });
  return <ul>{movieList}</ul>;
}
