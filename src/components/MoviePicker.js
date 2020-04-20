import React from "react";
import { useMovies } from "../context/movies";
import { MovieList } from "./MovieList";

export function MoviePicker({ searchValue, wishlist, setWishlist }) {
  const movies = useMovies();

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
