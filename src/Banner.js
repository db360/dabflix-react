import "./Banner.css";
import React, { useState, useEffect } from "react";
import axios from "./axios"; //Desde el archivo local que hemos creado
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        //generamos nº random desde 0 hasta el resultado que nos llega
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request; // buena practica para cerrar la promesa
    }

    fetchData();
  }, []);

  // console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a drescription. This is a drescription. This is a drescription.This is a drescription. This is a drescription.This is a drescription.This is a drescription.This is a drescription.This is a drescription. This is a drescription.`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
