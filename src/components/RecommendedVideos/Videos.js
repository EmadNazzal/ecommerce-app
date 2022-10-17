import React from "react";
import "./Videos.css";

const Videos = () => {
  const videoData = [
    {
      imgvid: "./images/videos/first.png",
      titleVideo: "This is the first video title",
    },
    {
      imgvid: "./images/videos/second.png",
      titleVideo: "This is the second video title",
    },
    {
      imgvid: "./images/videos/third.png",
      titleVideo: "This is the third video title",
    },
  ];

  return (
    <div className="cardsContainer">
      {videoData.map((video) => {
        return (
          <div className="videoCard">
            <img src={video.imgvid} className="videoImg" alt="video" />
            <p>{video.titleVideo}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
