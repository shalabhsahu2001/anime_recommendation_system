import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

const AnimeRecommendations = () => {
  const [recommendations, setRecommendations] = useState(null);
  const [error, setError] = useState("");

  const fetchRecommendations = async () => {
    try {
      const response = await axiosInstance.get("/anime/recommendations/");
      setRecommendations(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching recommendations:", err);
      setError(
        "Failed to fetch recommendations. Have you set your preferences?"
      );
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Anime Recommendations</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {recommendations && recommendations.Page && recommendations.Page.media ? (
        <ul>
          {recommendations.Page.media.map((anime) => (
            <li key={anime.id}>
              {anime.title.romaji ||
                anime.title.english ||
                anime.title.native}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default AnimeRecommendations;
