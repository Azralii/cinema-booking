import {useEffect,useState}from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cinema from "./components/Cinema";
import CinemaDetails from "./components/CinemaDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyBookings from "./components/MyBookings";

const App = () => {
  const [cinemaData, setCinemaData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9999/cinema");

        const data = await response.json();

        setCinemaData(data.cinemas);
        localStorage.setItem("movies", JSON.stringify(data.cinemas));
      } catch (err) {
       console.log(err)      
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Navbar /> {/* Place it here if it's part of your main layout */}
      <Routes>
        <Route path="/cinema/:id" element={<CinemaDetails />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/" element={<Cinema setCinemaData={setCinemaData} cinemaData={cinemaData}/>} />
      </Routes>
    </Router>
  );
};

export default App;