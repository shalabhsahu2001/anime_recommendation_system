import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const RegisterModal = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://anime-recommendation-systemxtage-backend.onrender.com/api/auth/register/", {
        username,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      onClose();
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      setError("Registration failed. Please check your details.");
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister}>
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
          <label style={{fontWeight: "bold", color: "#000"}}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Register</button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
