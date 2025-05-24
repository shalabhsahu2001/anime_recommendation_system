import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

const UserPreferences = () => {
  const [preferences, setPreferences] = useState([]);
  const [newPref, setNewPref] = useState("");
  const [error, setError] = useState("");

  const fetchPreferences = async () => {
    try {
      const response = await axiosInstance.get("/user/preferences/");
      setPreferences(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching preferences:", err);
      setError("Failed to load preferences.");
    }
  };

  const handleAddPreference = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/user/preferences/", {
        favorite_genre: newPref,
      });
      setPreferences([...preferences, response.data]);
      setNewPref("");
      setError("");
    } catch (err) {
      console.error("Error adding preference:", err);
      setError("Failed to add preference.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/user/preferences/${id}/`);
      setPreferences(preferences.filter((pref) => pref.id !== id));
    } catch (err) {
      console.error("Error deleting preference:", err);
      setError("Failed to delete preference.");
    }
  };

  useEffect(() => {
    fetchPreferences();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Preferences</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleAddPreference}>
        <input
          type="text"
          placeholder="Add new favorite genre"
          value={newPref}
          onChange={(e) => setNewPref(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Add
        </button>
      </form>
      <ul style={{ marginTop: "20px" }}>
        {preferences.map((pref) => (
          <li key={pref.id}>
            {pref.favorite_genre}{" "}
            <button onClick={() => handleDelete(pref.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPreferences;
