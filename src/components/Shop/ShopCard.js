import React from "react";
import "./ShopCard.css";

const ShopCard = () => {
  const shopsCards = [
    { title: "Pants", imgSrc: "images/shop/pants.png" },
    { title: "Jumpsuits", imgSrc: "images/shop/jumpsuits.png" },
    { title: "Tops", imgSrc: "images/shop/tops.png" },
    { title: "Accessories", imgSrc: "images/shop/accessories.png" },
  ];
  return shopsCards.map((product) => {
    return (
      <div className="singleCard">
        <img src={product.imgSrc} alt="Product" className="productImg" />
        <div>{product.title}</div>
      </div>
    );
  });
};

export default ShopCard;
