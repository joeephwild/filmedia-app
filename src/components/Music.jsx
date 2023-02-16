import React from "react";
import { useStateContext } from "../context";
import { usePlayerContext } from "../context/PlayerState";

const Music = ({ content, index }) => {
  const { setOpenPlayer, openPlayer } = useStateContext();
  const { setCurrentSongs, setCurrent } = usePlayerContext()
  const handleClick = () => {
       setOpenPlayer(true);
      setCurrent(index)
  };
  return (
    <div onClick={handleClick} className="flex space-y-[24px] items-center w-full justify-between">
      <span >{index + 1}</span>
      <span>{content.artistName}</span>
      <span>{content.title}</span>
      <span>3.5</span>
    </div>
  );
};

export default Music;
