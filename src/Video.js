import React, { useState, useRef } from "react";
import "./Video.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

function Video({ url, avatar, channel, song, likes, comments }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const clickHandler = () => {
    if (isPlaying) {
      // pause
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // play
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="video">
      <VideoHeader />
      <video
        className="video_player"
        ref={videoRef}
        src={url}
        loop={true}
        type="video/mp4"
        playsinline
        onClick={isPlaying ? clickHandler : null}
      />
      {!isPlaying && (
        <IconButton
          className="video__playButton"
          component="span"
          size="large"
          onClick={clickHandler}
        >
          <PlayArrowRoundedIcon style={{ width: 100, height: 100 }} />
        </IconButton>
      )}

      <VideoFooter
        avatar={avatar}
        channel={channel}
        song={song}
        likes={likes}
        comments={comments}
      />
    </div>
  );
}

export default Video;
