import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import { Account, Albums, Music } from "../components";
import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useTrackContext } from "../context/TrackContext";
import { ethers } from "ethers";

const Profile = () => {
  const { currentProfile, allMusic } = useStateContext();
  const { contract, getTracks } = useTrackContext();
  const [music, setMusic] = useState()
  console.log(music)
  const address = useAddress();
 
  const fetchCampaigns = async () => {
    const data = await getTracks(address);
    setMusic(data);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
  return (
    <div>
      {currentProfile.length === 0 && (
        <div className="min-h-screen flex flex-col space-y-9 items-center justify-center w-full">
          <span className="text-[#ffffff] txt-[20px] font-bold font-OpenSans-Bold txt-center">Do You want to have a 100% fun on this app, create an account and experience a 100% fun.</span>
          <button className="bg-[#ffffff] text-[#000080] rounded-[8px]  font-bold text-xl px-8 py-3.5">Create an Account</button>
        </div>
      )}
      {currentProfile && (
        <div>
          {currentProfile.map((item, i) => (
            <section className="h-s">
              <Account key={i} content={item} />
              <div className="grid space-y-16 grid-cols-1 mx-5 gap-5">
                <div className="mx-aut mx-9">
                  <div className="flex mx-auto cursor-pointer flex-col my-[25%] lg:mt-0">
                    <h2 className="text-2xl font-bold text-[#fafafa">Songs</h2>
                      {music?.map((songs, i) => (
                        <Music content={songs} key={i} index={i} />
                      ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
