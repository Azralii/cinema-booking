import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cinema from "./components/Cinema";
import CinemaDetails from "./components/CinemaDetails";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Place it here if it's part of your main layout */}
      <Routes>
        <Route path="/cinema/:id" element={<CinemaDetails />} />
        <Route path="/" element={<Cinema />} />
      </Routes>
    </Router>
  );
};

export default App;