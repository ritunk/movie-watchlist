import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <RemoveRedEyeOutlinedIcon className="fa-fw far fa-eye" />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <div className="fa-fw fa fa-times">
              <ClearIcon />
            </div>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <VisibilityOffIcon className="fa-fw far fa-eye" />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <div className="fa-fw fa fa-times">
              <ClearIcon />
            </div>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
