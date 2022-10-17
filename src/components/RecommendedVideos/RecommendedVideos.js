import React from "react";
import "./RecommendedVideos.css";
import HeadingTitle from "../Featured/HeadingTitle";
import Videos from "./Videos";

const RecommendedVideos = () => {
  return (
    <>
      <div className="VideosContainer">
        <HeadingTitle title="Recommended Videos" />
        <Videos />
      </div>
    </>
  );
};

export default RecommendedVideos;
