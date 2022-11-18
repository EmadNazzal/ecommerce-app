import React from "react";
import "./ProductDetailsPopUp.css";

const ProductDetailsPopUp = ({
  title,
  description,
  price,
  rating,
  image,
  category,
}) => {
  return (
    <div className="mainProductContainer">
      <div className="rightSidePics">
        <img src="./images/products/product-home-1.png" alt="product" />
        <img src="./images/products/product-home-1.png" alt="product" />
        <img src="./images/products/product-home-1.png" alt="product" />
        <img src="./images/products/product-home-1.png" alt="product" />
        <img src="./images/products/product-home-1.png" alt="product" />
      </div>
      <div className="mainPic">
        <img src={image} alt="product" />
      </div>
      <div className="productInformation">
        <h3>{title}</h3>
        <hr />
        <div className="priceAndRating">
          <span>{price}</span>
          <span>{rating}</span>
        </div>
        <h4>Description</h4>
        <p>{description}</p>
        <div className="brandName">
          <h4>Brand</h4>
          <p>Brand Name</p>
        </div>
        <div className="categoryName">
          <h4>Category</h4>
          <p>{category}</p>
        </div>
        <h4>Quantity</h4>
        <div className="quantityInfo">
          <button className="minusBtn">-</button>
          <input type="text" />
          <button className="plusBtn">+</button>
          <button className="addToCart">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPopUp;
