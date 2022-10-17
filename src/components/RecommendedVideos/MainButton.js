import React from "react";
import "./MainButton.css";

const MainButton = (props) => {
  return <button className="ShowMoreBtn">{props.btnName}</button>;
};

export default MainButton;
