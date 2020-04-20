import React, { useState } from "react";
import { MoviePicker } from "./components/MoviePicker";
import { Search } from "./components/Search";
import { Wishlist } from "./components/Wishlist";
import { ResetSearch } from "./components/ResetSearch";
import { Footer } from "./components/Footer";

import "./css/app.css";

function App({ movies }) {
  const [searchValue, setSearchValue] = useState("");
  const [wishlist, setWishlist] = useState([""]);
  return (
    <div className="main">
      <h1>movienote</h1>
      <pre>pin your favorite movies to watch them later</pre>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <h2>wishlist</h2>
      <Wishlist movies={movies} wishlist={wishlist} setWishlist={setWishlist} />
      <h2>movies</h2>
      <MoviePicker
        movies={movies}
        searchValue={searchValue}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
      <ResetSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Footer />
    </div>
  );
}

export default App;
