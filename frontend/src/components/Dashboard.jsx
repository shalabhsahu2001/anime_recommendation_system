// src/components/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
    padding: "20px 0", // Only vertical padding—no horizontal gap
    width: "1550px"
  };

  const cardStyle = {
    background: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    display: "flex",  
    flexDirection: "column",  
    alignItems: "center",  
    gap: "30px", // Increased gap between buttons
  };

  const buttonStyle = {
    width: "280px",
    padding: "15px 0",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "30px", color: "#343a40" }}>Dashboard</h2>
        <button
          style={buttonStyle}
          onClick={() => handleNavigation("/search")}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Anime Search
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleNavigation("/recommendations")}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Recommendations
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleNavigation("/preferences")}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          User Preferences
        </button>
        {/* Logout button placed in its own container to keep it at the bottom */}
        <div style={{ width: "100%", marginTop: "40px", textAlign: "center" }}>
          <button
            onClick={handleLogout}
            style={{
              ...buttonStyle,
              backgroundColor: "#dc3545",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#c82333")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#dc3545")
            }
            onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
            onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
