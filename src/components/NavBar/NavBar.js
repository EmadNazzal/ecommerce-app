/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="leftNav">
          <img src="./images/logo.jpg" alt="Logo" />
          <ul>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="#">FABRIC</Link>
            </li>
            <li>
              <Link to="#">JOURNAL</Link>
            </li>
            <li>
              <Link to="#">ABOUT</Link>
            </li>
          </ul>
        </div>
        <div className="rightNav">
          <a href="#">LOGIN</a>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="fa-solid fa-bars burgerMenu"></div>
      </div>
    </>
  );
};

export default NavBar;
