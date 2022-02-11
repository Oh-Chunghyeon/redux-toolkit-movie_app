import React, { useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../feature/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "miracle";
  const seriesText = "criminal";

  useEffect(() => {
    // 처음 접속시, 비동기로 api 호출하여 리스트들 store state에 주입해 list 노출
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncSeries(seriesText));
  }, [dispatch]);

  return (
    <main>
      <div className="banner-img"></div>
      <MovieList />
    </main>
  );
};

export default Home;
