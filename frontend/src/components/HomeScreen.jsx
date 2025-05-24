import React, { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const HomeScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to Anime Recommendation System</h1>
      <div style={{ margin: "20px" }}>
        <button
          onClick={() => setShowLogin(true)}
          style={{ marginRight: "10px", padding: "10px 20px" }}
        >
          Login
        </button>
        <button onClick={() => setShowRegister(true)} style={{ padding: "10px 20px" }}>
          Register
        </button>
      </div>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </div>
  );
};

export default HomeScreen;
