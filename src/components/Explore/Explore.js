import React from "react";
import "./Explore.css";
import HeadingTitle from "../Featured/HeadingTitle";
import { exploreData } from "./exploreData";

const Explore = () => {
  return (
    <div className="ExploreContainer">
      <HeadingTitle title="Explore" />
      <div className="ParentGridContainer">
        {exploreData.map((ele) => {
          return (
            <div
              className={`everyCard ${ele.isClass ? "uniqueCard" : ""}`}
              key={Math.random() * 20}
            >
              <small>{ele.locDate}</small>
              <h2>{ele.title}</h2>
              {ele.isPara ? <p>{ele.para}</p> : ""}
              {ele.isPic ? (
                <img src={ele.pic} alt="explore" className="exploreImg" />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
