/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="leftNav">
          <img src="./images/logo.jpg" alt="Logo" />
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">FABRIC</a>
            </li>
            <li>
              <a href="#">JOURNAL</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
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
