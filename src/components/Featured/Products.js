import React, { Component } from "react";
// import { productsInfo } from "./ProductsData";
import Modal from "react-modal";
import "./Products.css";
import ProductDetailsPopUp from "./ProductDetailsPopUp";
import axios from "axios";
// import MainProductBtn from "./MainProductBtn";
// import MainProductBtn from "./MainProductBtn";
Modal.setAppElement("#root");
export default class Products extends Component {
  state = {
    productsData: [],
    modalIsOpen: false,
    currentItem: null,
    title: null,
    description: null,
    price: null,
    rating: null,
    image: null,
    category: null,
  };
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      this.setState({ productsData: res.data });
      // console.log(this.state.productsData);
    });
  }
  OpenModal = (item) => {
    this.setState({
      modalIsOpen: true,
      currentItem: item,
      // title: item,
      // description: item,
      // price: item,
      // rating: item,
      // image: item,
      // category: item,
    });
  };
  CloseModal = () => {
    this.setState({ modalIsOpen: false });
  };
  // changeProduct = (item, index) => {
  //   this.setState({ showProduct: item });
  // };
  render() {
    console.log(this.state.productsData);

    // const {id, img, title, price, isNew, country, currency} = productsInfo

    return (
      <div className="ProductsContainer">
        {this.state.productsData.map((item, index) => {
          return (
            <div className="cardHolder" key={item.id}>
              <img src={item.image} alt="Products" />
              <button
                onClick={() => {
                  this.OpenModal();
                  console.log(index);
                }}
                className="MainProductBtn"
              >
                QUICK VIEW
              </button>

              <Modal
                key={index}
                className="mainModal"
                style={{
                  overlay: {
                    backgroundColor: "#3333",
                    opacity: 0.4,
                    transition: "0.4s",
                  },
                }}
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.CloseModal}
              >
                <div className="popupHeader" key={item.id}>
                  <h3>{item.title}</h3>
                  <button onClick={this.CloseModal}>×</button>
                </div>
                <ProductDetailsPopUp
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  rating={item.rating.rate}
                  image={item.image}
                  currentItem={this.state.currentItem}
                  category={item.category}
                />
              </Modal>
              <p>{item.title}</p>
              <small>{`${item.price} USD`}</small>
            </div>
          );
        })}
      </div>
    );
  }
}

// How Can I Include a useState from a different component into another component like modal?
