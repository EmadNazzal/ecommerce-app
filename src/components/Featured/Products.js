import React, { Component } from "react";
import { productsInfo } from "./ProductsData";
import "./Products.css";
// import MainProductBtn from "./MainProductBtn";
export default class Products extends Component {
  render() {
    // const {id, img, title, price, isNew, country, currency} = productsInfo

    return (
      <div className="ProductsContainer">
        {productsInfo.map((item) => {
          return (
            <div className="cardHolder" key={item.id}>
              <img src={item.img} alt="Products" />
              <button className="MainProductBtn">QUICK VIEW</button>
              <p>{item.title}</p>
              <small>{`${item.price} ${item.currency}`}</small>
            </div>
          );
        })}
      </div>
    );
  }
}
