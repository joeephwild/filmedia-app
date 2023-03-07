import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Account, Albums, Loader, Music } from "../components";
import { useTrackContext } from "../context/TrackContext";

const ProfileDetails = ({ i }) => {
  const { state } = useLocation();
  const { contract, getTracks, isLoading } = useTrackContext();
  const [music, setMusic] = useState();
  console.log(music);
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
        <div className="flex flex-col items-center mx-5">
          <div className="mx-auto h-[400px] w-full ">
            <div className="flex mx-auto cursor-pointer flex-col lg:mt-0">
              <h2 className="text-2xl font-bold text-[#fafafa">Songs</h2>
              {music?.length === 0 && (
                <div className="text-[#ffffff] font-bold txt-[20px">
                  No Content Available
                </div>
              )}
              {music?.map((item, i) => (
                <div className="min-w-full">
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
                <Music key={i} content={item} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
