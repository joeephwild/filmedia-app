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
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <audio className="hidden" src={content.audio}></audio>
            <table className="min-w-full divide-dashed divide-gray-200">
              <thead className="border-b-2 border-gray-500">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left  uppercase "
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left  uppercase "
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left  uppercase "
                  >
                    Released Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left  uppercase "
                  >
                    Time
                  </th>
                 
                </tr>
              </thead>
              <tbody className='w-full' onClick={() => handleClick()}>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap">
                    {index}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap">{content.title}</td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                    jonne62@gmail.com
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap">
                   3.9
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default Music;
