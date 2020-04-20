import React from "react";

export function MovieList({ movieList, onItemClick }) {
  return movieList.map((movie) => {
    return (
      <li
        className={movie.meter}
        key={movie.id}
        onClick={() => onItemClick(movie.id)}
      >
        {movie.movie}
      </li>
    );
  });
}
