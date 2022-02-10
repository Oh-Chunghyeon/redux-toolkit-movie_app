import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../feature/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./movieList.scss";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  return (
    <div className="movies-list-wrap">
      <div className="show-container">
        <h2 className="head-title">Movie </h2>
        <ul className="movies-list">
          {movies.Search ? (
            movies.Search.map((movie) => (
              <MovieCard key={movie.imdbID} show={movie} />
            ))
          ) : (
            <div className="movies-error">
              <h2>{movies.Error}</h2>
            </div>
          )}
        </ul>
      </div>

      <div className="show-container">
        <h2 className="head-title">Series</h2>

        <ul className="series-list">
          {series.Search ? (
            series.Search.map((series) => (
              <MovieCard key={series.imdbID} show={series} />
            ))
          ) : (
            <div className="series-error">
              <h2>{series.Error}</h2>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
