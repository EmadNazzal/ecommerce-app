import React, { Component } from "react";
import HeadingTitle from "./HeadingTitle";
import Products from "./Products";

import "./Featured.css";
export default class Featured extends Component {
  render() {
    return (
      <React.Fragment>
        <HeadingTitle title="Featured" />
        <Products />
      </React.Fragment>
    );
  }
}
