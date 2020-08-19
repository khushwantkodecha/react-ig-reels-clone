import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import "./VideoFooter.css";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import Ticker from "react-ticker";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

function VideoFooter({ avatar, channel, song, likes, comments }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__firstRow">
        <Avatar className="videoFooter__avatar" src={avatar} />
        <h4>
          {channel} -<Button>Follow</Button>
        </h4>
      </div>
      <div className="videoFooter__secondRow">
        <MusicNoteOutlinedIcon className="videoFooter__music" />
        <Ticker mode="smooth" className="videoFooter__ticker">
          {({ index }) => (
            <>
              <p style={{ color: "#fff" }}>{song}</p>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__thirdRow">
        <div className="videoFooter__actions">
          <FavoriteOutlinedIcon style={{ width: 30, height: 30 }} />
          <ModeCommentIcon style={{ width: 30, height: 30 }} />
          <SendRoundedIcon style={{ width: 30, height: 30 }} />
        </div>
        <div className="videoFooter__likes">
          <FavoriteOutlinedIcon style={{ width: 20, height: 20 }} />
          <h5>{likes}</h5>
          <ModeCommentIcon style={{ width: 20, height: 20 }} />
          <h5>{comments}</h5>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
