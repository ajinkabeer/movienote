import React, { useState } from "react";
import { MovieContainer } from "./components/MovieContainer";

import "./css/app.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [wishlist, setWishlist] = useState([""]);

  return (
    <MovieContainer
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      wishlist={wishlist}
      setWishlist={setWishlist}
    />
  );
}

export default App;
