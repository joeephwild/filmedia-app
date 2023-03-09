import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import { Account, Albums, Music } from "../components";
import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useTrackContext } from "../context/TrackContext";
import { ethers } from "ethers";
import { Link} from 'react-router-dom'

const Profile = () => {
  const { currentProfile } = useStateContext();
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
          <Link to='/account'>
          <button className="bg-[#ffffff] text-[#000080] rounded-[8px]  font-bold text-xl px-8 py-3.5">Create an Account</button>
          </Link>
        </div>
      )}
      {currentProfile && (
        <div>
          {currentProfile.map((item, i) => (
           <section key={i} className="h-s">
           <div className="w-[100%] h-s">
             <Account content={item} />
             <div className="flex flex-col overflow-x-hidden w-full items-center mx-5">
               {music?.map((songs, i) => (
                 <Music content={songs} key={i} index={i} />
               ))}
               {music?.length === 0 && (
                 <div className="text-[#ffffff] font-bold txt-[20px">
                   No Content Available
                 </div>
               )}
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
