import { Player } from "@livepeer/react";
import * as React from "react";
import { usePlayerContext } from "../context/PlayerState";

const VideoPlayer = () => {
  const { currentSongs } = usePlayerContext();
  return (
    <div>
      {currentSongs.video ? (
        <Player
          title="Waterfalls"
          src={currentSongs.video}
          poster={currentSongs.image}
          showPipButton
          showTitle={false}
          aspectRatio="16to9"
          controls={{ autohide: true }}
          theme={{
            borderStyles: { containerBorderStyle: "hidden" },
            radii: { containerBorderRadius: "10px" },
          }}
        />
      ) : (
        <div>
          <Player
            title="Waterfalls"
            src={currentSongs.video}
            poster={currentSongs.image}
            showPipButton
            showTitle={true}
            aspectRatio="16to9"
            controls={{ autohide: true }}
            theme={{
              borderStyles: { containerBorderStyle: "hidden" },
              radii: { containerBorderRadius: "10px" },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
