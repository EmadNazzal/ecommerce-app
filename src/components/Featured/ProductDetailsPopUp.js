import React from "react";
import "./ProductDetailsPopUp.css";

const ProductDetailsPopUp = () => {
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
        <img src="./images/products/product-home-1.png" alt="product" />
      </div>
      <div className="productInformation">
        <h3>The Sideswept Dhoti + Bottom Line Grey (Silk)</h3>
        <hr />
        <div className="priceAndRating">
          <span>price</span>
          <span>rating</span>
        </div>
        <h4>Description</h4>
        <p>
          Inspired by the continuous length of the lunghi or sarong seen in hot
          climates everywhere from South Asia to the Horn of Africa and southern
          Arabian pen…{" "}
        </p>
        <span>Brand</span>
        <span>Category</span>
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
