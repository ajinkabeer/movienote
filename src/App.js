import React, { useState } from "react";
import { MoviePicker } from "./components/MoviePicker";
import { Search } from "./components/Search";

import "./css/app.css";

function App({ movies }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="main">
      <h1>MovieNote</h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <MoviePicker movies={movies} searchValue={searchValue} />
    </div>
  );
}

export default App;
