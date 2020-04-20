import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { movies } from "./data";

ReactDOM.render(
  <React.StrictMode>
    <App movies={movies} />
  </React.StrictMode>,
  document.getElementById("root")
);
