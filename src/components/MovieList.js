import React from "react";

export function MovieList({ movieList, onItemClick }) {
  if (movieList.length === 0) {
    return <pre>Uh oh!, Nothing here 😓</pre>;
  }
  return (
    <ul>
      {movieList.map((movie) => (
        <li
          className={movie.meter}
          key={movie.id}
          onClick={() => onItemClick(movie.id)}
        >
          {movie.movie}
        </li>
      ))}
    </ul>
  );
}
