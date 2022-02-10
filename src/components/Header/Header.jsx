import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <div className="logo">PLAY SHOW</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </header>
  );
};

export default Header;
