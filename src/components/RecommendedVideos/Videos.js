import React from "react";
import "./Videos.css";

const Videos = () => {
  const videoData = [
    {
      id: 1,
      imgvid: "./images/videos/first.png",
      titleVideo: "This is the first video title",
    },
    {
      id: 2,
      imgvid: "./images/videos/second.png",
      titleVideo: "This is the second video title",
    },
    {
      id: 3,
      imgvid: "./images/videos/third.png",
      titleVideo: "This is the third video title",
    },
  ];

  return (
    <div className="cardsContainer">
      {videoData.map((video) => {
        return (
          <div className="videoCard" key={video.id}>
            <img src={video.imgvid} className="videoImg" alt="video" />
            <p>{video.titleVideo}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
