import { Player } from "@livepeer/react"
import * as React from 'react';
import { usePlayerContext } from "../context/PlayerState";

const playbackId =
  '382apfiowzvrwj3y';

const PosterImage = () => {
  return (
    <img
      src="https://wallpapercave.com/wp/wp2281843.jpg"
      
    />
  );
};
  

  
const VideoPlayer = () => {
  const { currentSongs } = usePlayerContext()
  return (
    <Player
    title="Waterfalls"
    src={currentSongs.video}
    showPipButton
    showTitle={false}
    aspectRatio="16to9"
   controls={{autohide: true}}
    autoPlay
    theme={{
      borderStyles: { containerBorderStyle: 'hidden' },
      radii: { containerBorderRadius: '10px' },
    }}
  />
  )
}

export default VideoPlayer
