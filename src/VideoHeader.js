import React from "react";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import "./VideoHeader.css";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosOutlinedIcon />
      <h4>Reels</h4>
      <CameraAltOutlinedIcon />
    </div>
  );
}

export default VideoHeader;
