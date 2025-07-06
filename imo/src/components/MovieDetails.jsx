import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OMDB_API_KEY = "YOUR_OMDB_API_KEY";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError("");
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
        );
        if (res.data.Response === "True") {
          setMovie(res.data);
        } else {
          setError(res.data.Error);
        }
      } catch (err) {
        setError("Failed to load movie.");
      }
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p style={{ padding: "20px" }}>Loading...</p>;
  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
  if (!movie) return null;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back</Link>
      <h2>{movie.Title}</h2>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
        style={{ width: "300px", margin: "20px 0" }}
      />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  );
};

export default MovieDetails;
