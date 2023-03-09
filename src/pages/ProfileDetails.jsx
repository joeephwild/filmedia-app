import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Account, Loader, Music} from "../components";
import { useTrackContext } from "../context/TrackContext";


const ProfileDetails = ({ i }) => {
  const { state } = useLocation();
  const { contract, getTracks, isLoading } = useTrackContext();
  const [music, setMusic] = useState();
  const address = useAddress();

  const fetchCampaigns = async () => {
    const data = await getTracks(state.to);
    console.log(data);
    setMusic(data);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <section className="h-s">
      {isLoading && <Loader />}
      <div className="w-[100%] h-s">
        <Account content={state} />
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
  );
};

export default ProfileDetails;
