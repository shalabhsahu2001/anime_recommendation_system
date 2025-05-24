// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import AnimeSearch from "./components/AnimeSearch";
import AnimeRecommendations from "./components/AnimeRecommendations";
import UserPreferences from "./components/UserPreferences";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/search" element={<AnimeSearch />} />
        <Route path="/recommendations" element={<AnimeRecommendations />} />
        <Route path="/preferences" element={<UserPreferences />} />
      </Routes>
    </Router>
  );
};

export default App;
