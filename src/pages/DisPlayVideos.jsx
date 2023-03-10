import { Player } from "@livepeer/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { usePodcastContext } from "../context/PodcastContext";

const DisPlayVideos = () => {
  const { state } = useLocation();

  console.log(state);
  return (
    <div className="w-full relative h-[80%]">
      <Player
        title="Waterfalls"
        src={state.video}
        poster={state.image}
        showPipButton
        showTitle={false}
        aspectRatio="16to9"
        controls={{ autohide: true }}
        autoPlay
        theme={{
          borderStyles: { containerBorderStyle: "hidden" },
          radii: { containerBorderRadius: "10px" },
        }}
      />
    
    </div>
  );
};

export default DisPlayVideos;
