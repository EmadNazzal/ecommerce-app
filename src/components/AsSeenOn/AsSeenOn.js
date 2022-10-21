import React from "react";
import "./AsSeenOn.css";
import HeadingTitle from "../Featured/HeadingTitle";
import AsSeenOnImg from "./AsSeenOn.png";

const AsSeenOn = () => {
  return (
    <>
      <HeadingTitle title="As Seen On" />;
      <img src={AsSeenOnImg} alt="" className="AsSeenOnImg" />
    </>
  );
};

export default AsSeenOn;
