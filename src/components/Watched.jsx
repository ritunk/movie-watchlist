import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

import Header from "./Header";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div>
      <Header />
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">My Watched</h1>
          </div>

          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map((movie, id) => (
                <MovieCard movie={movie} type="watched" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in your list Add Some</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watched;
