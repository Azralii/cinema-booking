import React, { useState, useEffect } from "react";
import CinemaCard from "./CinemaCard";

const Booking = () => {
  const [cinemaData, setCinemaData] = useState(null);
  const [search, setSearch] = useState("");
  // state to track if application is loading
  const [loading, setLoading] = useState(true);

  // state to track any error message
  const [error, setError] = useState(null);

  // trigger the arrow function inside useEffect ONE time before loading
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
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const cinema = localStorage.getItem("movies");
    const parsedCinema = JSON.parse(cinema);
    if (search !== "") {
      const filterCinema = parsedCinema.filter((item) =>
        item.title.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setCinemaData(filterCinema);
    } else {
      setCinemaData(parsedCinema);
    }
  }, [search]);
  // check if loading, if true then we should display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // check if there is an error, if true then we should display it
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="booking">
      <h2 style={{ textAlign: "center", color: "white", padding: "30px" }}>
        Welcome to Cinema
      </h2>
      <div style={{ textAlign: "center", padding: "15px 25px" }}>
        <input
          style={{ textAlign: "center", padding: "10px 25px" }}
          type="text"
          name="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {cinemaData &&
          cinemaData.map((cinema, i) => <CinemaCard key={i} cinema={cinema} />)}
      </div>
    </div>
  );
};
export default Booking;