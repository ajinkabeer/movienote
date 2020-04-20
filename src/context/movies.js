import React, { createContext, useContext } from "react";
import { movies } from "../data";

const MovieContext = createContext();

export function MoviesProvider({ children }) {
  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("Please provide <MovieContext.Provider>");
  }
  return context;
}
