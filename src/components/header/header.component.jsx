import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../crown.svg";

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <div className="option">
        {" "}
        <Link to="/shop">SHOP</Link>
      </div>
      <div className="option">
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className="option">
        <Link to="/sign-in">SIGN IN</Link>
      </div>
    </div>
  </div>
);

export default Header;
