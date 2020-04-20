import React from "react";
import { MovieList } from "./MovieList";

export function MoviePicker({ movies, searchValue, wishlist, setWishlist }) {
  const filteredMovies = movies
    .filter((movie) =>
      movie.movie.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((movie) => !wishlist.includes(movie.id));

  function addToWishlist(id) {
    setWishlist([...wishlist, id]);
  }

  return <MovieList movieList={filteredMovies} onItemClick={addToWishlist} />;
}
