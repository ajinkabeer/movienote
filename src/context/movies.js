import React, { createContext } from "react";
import { movies } from "../data";

export const MovieContext = createContext();

export function MoviesProvider({ children }) {
  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
}
