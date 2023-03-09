import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Account, Albums, Loader, Music, Videos } from "../components";
import { useTrackContext } from "../context/TrackContext";
import { create as ipfsClient } from "ipfs-http-client";
import { usePodcastContext } from "../context/PodcastContext";

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
  repo: "code",
});

const ProfileDetails = ({ i }) => {
  const { state } = useLocation();
  const { contract, getTracks, isLoading } = useTrackContext();
  const [music, setMusic] = useState();
  const address = useAddress();

  const fetchCampaigns = async () => {
    const data = await getTracks(state.to);
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
