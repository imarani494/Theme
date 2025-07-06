import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OMDB_API_KEY = "YOUR_OMDB_API_KEY";

const Moive = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`
      );
      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setError(res.data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Movie Search</h2>
      <form onSubmit={searchMovies} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          placeholder="Enter movie title..."
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "10px", marginLeft: "10px" }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              style={{ height: "300px", objectFit: "cover", width: "100%" }}
            />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moive;
