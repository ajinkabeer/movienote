import React from "react";
import { useMovies } from "../context/movies";
import { MovieList } from "./MovieList";

export function Wishlist({ wishlist, setWishlist }) {
  const movies = useMovies();

  const wishlistedMovies = movies.filter((movie) =>
    wishlist.includes(movie.id)
  );

  function removeFromWishList(id) {
    setWishlist(wishlist.filter((i) => i !== id));
  }

  return (
    <MovieList movieList={wishlistedMovies} onItemClick={removeFromWishList} />
  );
}
