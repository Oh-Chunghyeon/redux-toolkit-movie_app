import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../feature/movies/movieSlice";
import user from "../../images/user.png";
import "./header.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const onSearchShows = (e) => {
    e.preventDefault();
    if (!searchValue) {
      return;
    }
    // video api 검색으로 호출
    dispatch(fetchAsyncMovies(searchValue));
    dispatch(fetchAsyncSeries(searchValue));

    setSearchValue("");
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>PLAY SHOW</Link>
      </div>

      <div className="search-bar">
        <form onSubmit={onSearchShows}>
          <input
            type="text"
            placeholder="Search Shows..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </header>
  );
};

export default Header;
