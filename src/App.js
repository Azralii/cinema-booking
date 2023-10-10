import {useEffect,useState}from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cinema from "./components/Cinema";
import CinemaDetails from "./components/CinemaDetails";

const App = () => {
  const [cinemaData, setCinemaData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("db.json");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setCinemaData(data.movies);
        localStorage.setItem("movies", JSON.stringify(data.movies));
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
        <Route path="/" element={<Cinema setCinemaData={setCinemaData} cinemaData={cinemaData}/>} />
      </Routes>
    </Router>
  );
};

export default App;