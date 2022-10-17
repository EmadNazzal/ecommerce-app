import React from "react";
import "./Explore.css";
import HeadingTitle from "../Featured/HeadingTitle";
const Explore = () => {
  return (
    <div className="ExploreContainer">
      <HeadingTitle title="Explore" />
      <div className="ParentGridContainer">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
        <div className="fourth"></div>
        <div className="fifth"></div>
      </div>
    </div>
  );
};

export default Explore;
