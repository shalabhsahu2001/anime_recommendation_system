import React, { useState } from "react";
import axiosInstance from "../axiosInstance";

const AnimeSearch = () => {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let url = "/anime/search/?";
      if (query) {
        url += `name=${encodeURIComponent(query)}&`;
      }
      if (genre) {
        url += `genre=${encodeURIComponent(genre)}`;
      }
      const response = await axiosInstance.get(url);
      setResults(response.data);
      setError("");
    } catch (err) {
      console.error("Error searching anime:", err);
      setError("Error fetching search results.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Anime Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Genre (optional)"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Search
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {results && results.Page && results.Page.media ? (
        <div style={{ marginTop: "20px" }}>
          <h3>Results:</h3>
          <ul>
            {results.Page.media.map((anime) => (
              <li key={anime.id}>
                {anime.title.romaji ||
                  anime.title.english ||
                  anime.title.native}
              </li>
            ))}
          </ul>
        </div>
      ) : results ? (
        <p>No results found.</p>
      ) : null}
    </div>
  );
};

export default AnimeSearch;
