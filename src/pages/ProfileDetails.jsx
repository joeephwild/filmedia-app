import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Account, Albums, Music, Videos } from "../components";
import { useStateContext } from "../context";
import { song_list } from "../context/songs";
import { useTrackContext } from "../context/TrackContext";


const ProfileDetails = ({ i }) => {
  const { state } = useLocation();
  const { contract } = useTrackContext()
  const address = useAddress()
  const { allMusic } = useStateContext()
  const { data, isLoading } = useContractRead(contract, "getAllContent", state.to);
console.log(data)


  return (
    <section className="h-screen">
      <div className="w-[100%] h-screen">
      <Account
      content={state}
       />
        {state.titles === "Content Creator" ? (
          <div>
            <Videos />
          </div>
        ): (
          <div className="flex flex-col items-center mx-5">
          <div className="mx-auto w-full ">
            <div className="flex mx-auto cursor-pointer flex-col lg:mt-0">
              <h2 className="text-2xl font-bold text-[#fafafa">Songs</h2>
              {allMusic.map((song, i) => (
              <div>
                {song.owner === address &&(
                   <Music key={i} index={i} content={song} />
                )}
                </div>
              ))}
            </div>
          </div>
          <Albums />
        </div>
        )}

      </div>
    </section>
  );
};

export default ProfileDetails;
