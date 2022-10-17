import React from "react";
import "./Shop.css";
import HeadingTitle from "../Featured/HeadingTitle";
import ShopCard from "./ShopCard";

const Shop = () => {
  return (
    <>
      <div className="ShopContainer">
        <HeadingTitle title="Shop" />
        <div className="ShopcardsHolder">
          <ShopCard />
        </div>
      </div>
    </>
  );
};

export default Shop;
