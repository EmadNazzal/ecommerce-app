import React from "react";
import "./ProductDetailsPopUp.css";

const ProductDetailsPopUp = () => {
  return (
    <div className="mainProductContainer">
      <div className="rightSidePics"></div>
      <div className="mainPic">
        <img src="" alt="" />
      </div>
      <div className="productInformation">
        <h3>title</h3>
        <div className="priceAndRating">
          <span>price</span>
          <span>rating</span>
        </div>
        <h4>Description</h4>
        <p>Descriptoon paragraph</p>
        <span>Brand</span>
        <span>Category</span>
        <h4>Quantity</h4>
        <div className="quantityInfo">
          <button>-</button>
          <input type="number" />
          <button>+</button>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPopUp;
