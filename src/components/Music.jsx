import { useAddress } from "@thirdweb-dev/react";
import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../context";
import { usePlayerContext } from "../context/PlayerState";
import { useTrackContext } from "../context/TrackContext";
import {Loader} from '../components'

const Music = ({ content, index }) => {
  console.log(content);
  const { setOpenPlayer, openPlayer } = useStateContext();
  const { setCurrentSongs, setCurrent } = usePlayerContext();
  const handleClick = () => {
    setOpenPlayer(true);
    setCurrentSongs(content);
    setCurrent(index)
  };

 
  return (
    <div className='w-full items-center justify-evenly scrollbar-none flex flex-col space-y-6 ' onClick={() => handleClick()}>
      <div className="flex justify-between border-b-2 border-gray-500 overflow-x-hidden  items-center min-w-[90%]">
        <span>#</span>
        <span>Title</span>
        <span>Time</span>
      </div>
      <div className="flex justify-between o items-center min-w-[90%]">
        <span>{index}</span>
        <span>{content.title}</span>
        <span>Title</span>
      </div>
  </div>
  );
};

export default Music;
