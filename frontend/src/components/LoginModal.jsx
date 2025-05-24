import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const LoginModal = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login/", {
        username,
        password,
      });
      console.log("Login successful:", response.data);
      // Store token or update auth state as needed.
      onClose();
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
          <label style={{fontWeight: "bold", color: "#000"}}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{fontWeight: "bold", color: "#000"}}>Password:</label>
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
