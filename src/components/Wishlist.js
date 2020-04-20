import React from "react";
import { MovieList } from "./MovieList";

export function Wishlist({ movies, wishlist, setWishlist }) {
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
