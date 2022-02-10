import { configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./feature/movies/movieSlice";

const store = configureStore({
  reducer: {
    playlist: movieListSlice,
  },
});

export default store;
