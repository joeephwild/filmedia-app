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
    <tbody className='w-full' onClick={() => handleClick()}>
    <tr>
      <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap">
        {index}
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{content.title}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">
       3.9
      </td>
      
    </tr>
  </tbody>
  );
};

export default Music;
