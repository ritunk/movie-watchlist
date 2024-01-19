import React, { useState } from "react";
import Header from "./Header";
import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&api_key=${process.env.REACT_APP_TMDB_KEY}&langauge=en-US&page=1&include_adult=false`
    )
      .then((res) => res.json())

      .then((data) => {
        // console.log(data);
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };
  return (
    <div>
      <Header />
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="search for a movie"
                value={query}
                onChange={onChange}
              ></input>
            </div>

            {results.length > 0 && (
              <ul className="results">
                {results.map((movie, id) => (
                  <li key={id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
