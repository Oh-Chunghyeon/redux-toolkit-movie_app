import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedShow,
} from "../../feature/movies/movieSlice";
import "./movieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const showInfo = useSelector(getSelectedMovieOrShow);
  console.log(showInfo);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));

    // detail page 이동 시, 이전 data 흔적이 있는 상태(보여지는) -> 새로운 data로 바뀌는 것을 방지
    // 기존에 있던 정보(흔적)를 remove 해주고 새로운 detail 정보를 뿌려준다
    return () => {
      dispatch(removeSelectedShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(showInfo).length === 0 ? (
        <div>...Loding</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{showInfo.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> :{" "}
                {showInfo.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :
                {showInfo.imdbVotes}
              </span>
              <span>
                Run Time <i className="fa fa-film"></i> : {showInfo.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {showInfo.Year}
              </span>
            </div>
            <div className="movie-plot">{showInfo.Plot}</div>
            <div className="movie-info">
              <span>Dirctor</span>
              <span>
                {showInfo.Director !== "N/A"
                  ? showInfo.Director
                  : "No Information"}
              </span>
            </div>

            <div className="movie-info">
              <span>Stars</span>
              <span>{showInfo.Actors}</span>
            </div>

            <div className="movie-info">
              <span>Genres</span>
              <span>{showInfo.Genre}</span>
            </div>

            <div className="movie-info">
              <span>Languages</span>
              <span>{showInfo.Language}</span>
            </div>

            <div className="movie-info">
              <span>Awards</span>
              <span>{showInfo.Awards}</span>
            </div>
          </div>

          <div className="section-right">
            <img src={showInfo.Poster} alt={showInfo.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
