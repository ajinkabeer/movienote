import React from "react";
import "./css/app.css";

function App({ movies }) {
  const movieList = movies.map((movie) => {
    return (
      <li className={movie.meter} key={movie.id}>
        {movie.movie}
      </li>
    );
  });

  return <div className="main">{<ul>{movieList}</ul>}</div>;
}

export default App;
