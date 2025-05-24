import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const HomeScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  // On mount, check if a token exists.
  useEffect(() => {
    const savedToken = localStorage.getItem("accessToken");
    setToken(savedToken);
  }, []);

  // This function updates the token state and redirects if present.
  const handleLoginSuccess = () => {
    const savedToken = localStorage.getItem("accessToken");
    setToken(savedToken);
    if (savedToken) {
      navigate("/dashboard");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setToken(null);
    navigate("/");
  };

  return (
    <div style={{ display: "flex", padding: "200px", textAlign: "center" }}>
      {!token ? (
        <div>
          <h1>Welcome to Anime Recommendation System</h1>
          <div style={{ margin: "20px" }}>
            <button
              onClick={() => setShowLogin(true)}
              style={{ marginRight: "10px", padding: "10px 20px" }}
            >
              Login
            </button>
            <button
              onClick={() => setShowRegister(true)}
              style={{ padding: "10px 20px" }}
            >
              Register
            </button>
          </div>
          {showLogin && (
            <LoginModal
              onClose={() => {
                setShowLogin(false);
                handleLoginSuccess();
              }}
            />
          )}
          {showRegister && (
            <RegisterModal onClose={() => setShowRegister(false)} />
          )}
        </div>
      ) : (
        <div>
          <p>Redirecting to Dashboard...</p>
          <button
            onClick={handleLogout}
            style={{ padding: "10px 20px", marginTop: "20px" }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
