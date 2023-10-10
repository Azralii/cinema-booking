import React, { useState, useEffect } from "react";
import CinemaCard from "./CinemaCard";

const Cinema = ({cinemaData,setCinemaData}) => {
  const [search, setSearch] = useState("");


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
export default Cinema;