import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoviesProvider } from "./context/movies";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
