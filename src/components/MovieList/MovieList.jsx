import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../feature/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./movieList.scss";
import Slider from "react-slick";
import { Settings } from "../../common/setting";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  const renderMovies = () =>
    movies.Search ? (
      movies.Search.map((movie) => (
        <MovieCard key={movie.imdbID} show={movie} />
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

  const renderSeries = () =>
    series.Search ? (
      series.Search.map((video) => (
        <MovieCard key={video.imdbID} show={video} />
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movies-list-wrap">
      <div className="show-container">
        <h2 className="head-title">Movie </h2>
        <ul className="movies-list">
          <Slider {...Settings}>{renderMovies()}</Slider>
        </ul>
      </div>

      <div className="show-container">
        <h2 className="head-title">Series</h2>
        <ul className="series-list">
          <Slider {...Settings}>{renderSeries()}</Slider>
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
