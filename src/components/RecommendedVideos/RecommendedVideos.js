import React from "react";
import "./RecommendedVideos.css";
import HeadingTitle from "../Featured/HeadingTitle";
import Videos from "./Videos";
import MainButton from "./MainButton";

const RecommendedVideos = () => {
  return (
    <>
      <div className="VideosContainer">
        <HeadingTitle title="Recommended Videos" />
        <Videos />
        <MainButton btnName="SHOW MORE" />
      </div>
    </>
  );
};

export default RecommendedVideos;
