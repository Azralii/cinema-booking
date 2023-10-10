import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowCard from "./ShowCard";

const CinemaDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const movies = localStorage.getItem("movies");
        const parsedMovies = JSON.parse(movies);
        console.log({ parsedMovies });
        const cinema = parsedMovies.filter((item) => item.id == params.id);
        setMovie(cinema[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className="cinemaDetails">
      <p>{movie.title}</p>
      <p>{movie.duration}</p>
      <img src={movie.image} width={"500px"} alt={movie.title} />
      <p style={{ textAlign: "center", padding: "0 200px" }}>
        {movie.description}
      </p>
      <div>
        {movie?.shows?.map((show, i) => (
          <div style={{ margin: "10px" }} key={i}>
            <p style={{ textAlign: "center" }}>{show.time}</p>
            <p style={{ textAlign: "center" }}>{show.room}</p>
            <div style={{ margin: "10px", textAlign: "center" }}>
              {show.seats.map((seat, i) => (
                <ShowCard seat={seat} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CinemaDetails;