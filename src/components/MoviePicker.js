import React from "react";

export function MoviePicker({ movies, searchValue, wishlist, setWishlist }) {
  const filteredMovies = movies
    .filter((movie) =>
      movie.movie.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((movie) => !wishlist.includes(movie.id));

  function addToWishlist(id) {
    setWishlist([...wishlist, id]);
  }

  const movieList = filteredMovies.map((movie) => {
    if (movie.length === 0) {
      return;
    }
    return (
      <li
        className={movie.meter}
        key={movie.id}
        onClick={() => addToWishlist(movie.id)}
      >
        {movie.movie}
      </li>
    );
  });

  return (
    <ul>
      {movieList.length !== 0 ? (
        movieList
      ) : (
        <pre>Uh oh, movie not found 😩</pre>
      )}
    </ul>
  );
}
