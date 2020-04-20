import React, { useState } from "react";
import { MoviePicker } from "./components/MoviePicker";
import { Search } from "./components/Search";
import { Wishlist } from "./components/Wishlist";
import "./css/app.css";

function App({ movies }) {
  const [searchValue, setSearchValue] = useState("");
  const [wishlist, setWishlist] = useState([]);
  return (
    <div className="main">
      <h1>MovieNote</h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Wishlist movies={movies} wishlist={wishlist} setWishlist={setWishlist} />
      <MoviePicker
        movies={movies}
        searchValue={searchValue}
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
    </div>
  );
}

export default App;
