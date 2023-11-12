import React from "react";
import { Link } from "react-router-dom";

const CinemaCard = ({ cinema }) => {
  const { _id } = cinema;
  return (
    <Link to={`/cinema/${_id}`}>
      <div className="card">
        <h3>{cinema.title.slice(0,15)}</h3>
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