import { useAddress } from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import { usePlayerContext } from "../context/PlayerState";
import { useTrackContext } from "../context/TrackContext";

const Music = ({ content, index }) => {
  console.log(content);
  const { setOpenPlayer, openPlayer } = useStateContext();
  const { setCurrentSongs, setCurrent } = usePlayerContext();
  const handleClick = () => {
    setOpenPlayer(true);
    setCurrentSongs(content);
  };
  const [campaigns, setCampaigns] = useState([]);
  const {getMusicTracks, contract} = useTrackContext()
  const address = useAddress()

  const fetchCampaigns = async () => {
    const data = await getMusicTracks();
    setCampaigns(data);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
  return (
    <div
      onClick={handleClick}
      className="flex space-y-[24px] items-center w-full justify-between"
    >
        <table className="min-w-full  ">
          <thead className="border-b-2 border-gray-600">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>{index + 1}</td>
            </tr>
            <tr>
              <td>{content.title}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Music;
