import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Account, Albums, Loader, Music} from "../components";
import { useTrackContext } from "../context/TrackContext";

const ProfileDetails = ({ i }) => {
  const { state } = useLocation();
  const { contract, getTracks, isLoading } = useTrackContext();
  const [music, setMusic] = useState()
  console.log(music)
  const address = useAddress()
 
  const fetchCampaigns = async () => {
    const data = await getTracks(state.to);
    setMusic(data);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
  return (
    <section className="h-s">
      {isLoading && <Loader />}
      <div className="w-[100%] h-s">
        <Account content={state} />

        <div className="flex flex-col items-center mx-5">
          <div className="mx-auto h-[400px] w-full ">
            <div className="flex mx-auto cursor-pointer flex-col lg:mt-0">
              <h2 className="text-2xl font-bold text-[#fafafa">Songs</h2>
              {music?.map((item, i) => (
               <Music key={i} content={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
