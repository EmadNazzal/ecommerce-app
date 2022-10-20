import React, { Component } from "react";
import { productsInfo } from "./ProductsData";
import Modal from "react-modal";
import "./Products.css";

// import MainProductBtn from "./MainProductBtn";
Modal.setAppElement("#root");
export default class Products extends Component {
  state = { modalIsOpen: false };
  OpenModal = () => {
    this.setState({ modalIsOpen: true });
  };
  CloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    // const {id, img, title, price, isNew, country, currency} = productsInfo

    return (
      <div className="ProductsContainer">
        {productsInfo.map((item, index) => {
          return (
            <div className="cardHolder" key={item.id}>
              <img src={item.img} alt="Products" />
              <button onClick={this.OpenModal} className="MainProductBtn">
                QUICK VIEW
              </button>
              <Modal
                className="mainModal"
                style={{ overlay: { backgroundColor: "#3333", opacity: 0.4 } }}
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.CloseModal}
              >
                <div className="popupHeader" key={item.id}>
                  <h3>{item.title}</h3>
                  <button onClick={this.CloseModal}>×</button>
                </div>
              </Modal>
              <p>{item.title}</p>
              <small>{`${item.price} ${item.currency}`}</small>
            </div>
          );
        })}
      </div>
    );
  }
}

// How Can I Include a useState from a different component into another component like modal?
