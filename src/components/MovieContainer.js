import React from "react";
import { MoviePicker } from "./MoviePicker";
import { Search } from "./Search";
import { Wishlist } from "./Wishlist";
import { ResetSearch } from "./ResetSearch";
import { Footer } from "./Footer";

export function MovieContainer({
  searchValue,
  setSearchValue,
  wishlist,
  setWishlist,
}) {
  return (
    <div className="main">
      <h1>movienote</h1>
      <pre>pin your favorite movies to watch them later</pre>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <h2>wishlist</h2>
      <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
      <h2>movies</h2>
      <MoviePicker
        searchValue={searchValue}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
      <ResetSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Footer />
    </div>
  );
}
