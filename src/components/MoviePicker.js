import React, { useContext } from "react";
import { MovieContext } from "../context/movies";
import { MovieList } from "./MovieList";

export function MoviePicker({ searchValue, wishlist, setWishlist }) {
  const movies = useContext(MovieContext);

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
