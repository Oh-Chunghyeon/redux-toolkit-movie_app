import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../api/MovieApi";
import { APIKEY } from "../../api/MovieApiKey";

//
//
// ================  store 에 주입한 Reducers  ================

// const APIKEY = process.env.REACT_APP__API_KEY;

export const fetchAsyncMovies = createAsyncThunk(
  "playlist/fetchAsyncMovies",
  async () => {
    const movieText = "miracle";
    const response = await MovieApi.get(
      `?apiKey=${APIKEY}&s=${movieText}&type=movie`
    );

    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "playlist/fetchAsyncSeries",
  async () => {
    const seriesText = "criminal";
    const response = await MovieApi.get(
      `?apiKey=${APIKEY}&s=${seriesText}&type=series`
    );

    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "playlist/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await MovieApi.get(`?apiKey=${APIKEY}&i=${id}&plot=full`);

    return response.data;
  }
);

// ========= reducer 초기 세팅 ?? ============

const initialState = {
  movies: {},
  series: {},
  episodes: {},
  selectedMovieOrShow: {},
};

// ======== createSlice 생성 ========
const movieListSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    // 내부 actions
    addShows: (state, { payload }) => {
      console.log(payload);
      state.movies = payload;
    },

    removeSelectedShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },

  //  ========  외부액션 ? 비동기로 작업해야 할 것들을 여기다가 ?  ========

  extraReducers: {
    // [fetchAsyncMovies.pending]: () => {
    //   console.log("Pending");
    // },

    // 각 action
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log(payload);
      return { ...state, movies: payload };
    },

    [fetchAsyncMovies.rejected]: () => {
      console.log("거절됨");
    },

    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      return { ...state, series: payload };
    },

    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { addShows, removeSelectedShow } = movieListSlice.actions;
export const getAllMovies = (state) => state.playlist.movies;
export const getAllSeries = (state) => state.playlist.series;
export const getSelectedMovieOrShow = (state) =>
  state.playlist.selectedMovieOrShow;
export default movieListSlice.reducer;

//* pending - action 을 dispatch 한다

//* fullfilled - promis 가 성공 -> action.payload를 fulfilled 액션에 담아 dispatch

// * rejected - promise 거부 시 -> rejected 액션을 dispatch 하되, rejectedValue(value) 함수의 반환값에 따라 액션에 어떤 값이 넘어올지 결정
// rejectedValue가 값을 반환하면, action.payload를 reject 액션에 담는다.
// rejectedValue가 없거나 값을 반환하지 않았다면, action.error 값처럼 오류의 직렬화된 버전을 reject 액션에 담는다.
