import React, { Component } from "react";
import { productsInfo } from "./ProductsData";
import "./Products.css";
export default class Products extends Component {
  render() {
    // const {id, img, title, price, isNew, country, currency} = productsInfo

    return (
      <div className="ProductsContainer">
        {productsInfo.map((item) => {
          return (
            <div className="cardHolder" key={item.id}>
              <img src={item.img} alt="Products" />
              <p>{item.title}</p>
              <small>{`${item.price} ${item.currency}`}</small>
            </div>
          );
        })}
      </div>
    );
  }
}
