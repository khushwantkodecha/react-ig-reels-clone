import React, { useState } from "react";
import "./App.css";
import Video from "./Video";
import { reels } from "./reels";

function App() {
  const [data, setData] = useState(reels);

  return (
    <React.Fragment>
      <div className="app">
        <div className="app__videos">
          {data.map((reel) => {
            return (
              <Video
                url={reel.url}
                avatar={reel.avatar}
                channel={reel.channel}
                song={reel.song}
                likes={reel.likes}
                comments={reel.comments}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
