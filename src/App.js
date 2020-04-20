import React from "react";
import { MoviePicker } from "./components/MoviePicker";
import "./css/app.css";

function App({ movies }) {
  return (
    <div className="main">
      <h1>Movie Note</h1>
      <MoviePicker movies={movies} />
    </div>
  );
}

export default App;
