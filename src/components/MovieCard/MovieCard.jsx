import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.scss";

const MovieCard = ({ show }) => {
  // console.log(show);
  return (
    <Link to={`/movie/${show.imdbID}`}>
      <li className="movie-card">
        <div className="card-inner">
          <div className="movie-top">
            <img src={show.Poster} alt={`${show.Title} 이미지`} />
          </div>
          <div className="movie-constructor">
            <h3 className="movie-title">{show.Title}</h3>
            <p className="movie-year">{show.Year}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default MovieCard;
