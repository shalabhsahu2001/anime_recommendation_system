import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

import axiosInstance from "../axiosInstance";

const LoginModal = ({ onClose }) => {
  const [username, setUsername]   = useState("");
  const [password, setPassword]   = useState("");
  const [error, setError]         = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://anime-recommendation-systemxtage-frontend.onrender.com/api/auth/login/", {
        username,
        password,
      });
      console.log("Login successful:", response.data);

      // Save the token received from your Django backend.
      // This assumes your response object contains the token in a property `access`.
      if (response.data && response.data.access) {
        localStorage.setItem("accessToken", response.data.access);
      } else {
        setError("Token not received from the server.");
        return;
      }
      
      // Optionally, you could notify the parent component about the change in auth state.
      onClose(); // Close the modal after a successful login.
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold", color: "#000" }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold", color: "#000" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </Modal>
  );
};

export default LoginModal;
