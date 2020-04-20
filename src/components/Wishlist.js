import React, { useContext } from "react";
import { MovieContext } from "../context/movies";
import { MovieList } from "./MovieList";

export function Wishlist({ wishlist, setWishlist }) {
  const movies = useContext(MovieContext);

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
