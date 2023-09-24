import React from "react";
import { Link } from "react-router-dom";

const CinemaCard = ({ cinema }) => {
  const { id } = cinema;
  return (
    <Link to={`/cinema/${id}`}>
      <div className="card">
        <h3>{cinema.title}</h3>
        <p>{cinema.duration}</p>
        <img
          src={cinema.image}
          alt={cinema.title}
          height="300px"
          width={"220px"}
        />
        <p style={{ textAlign: "center" }}>{cinema.description}</p>
      </div>
    </Link>
  );
};

export default CinemaCard;