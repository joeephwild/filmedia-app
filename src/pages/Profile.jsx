import React from "react";
import { useStateContext } from "../context";
import { Account, Albums, Music } from "../components";
import { song_list } from "../context/songs";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Profile = () => {
  const { currentProfile } = useStateContext();
  return (
    <div>
      {currentProfile && (
        <div>
          {currentProfile.map((item, i) => (
            <section className="h-s">
              <Account key={i} content={item} />
              <div className="grid space-y-16 grid-cols-1 mx-5 gap-5">
                <Albums />
                <div className="mx-aut mx-9">
                  <div className="flex mx-auto cursor-pointer flex-col my-[25%] lg:mt-0">
                    <h2 className="text-2xl font-bold text-[#fafafa">Songs</h2>
                    <div className="flex items-center justify-between">
                      <span>#</span>
                      <span>Title</span>
                      <span>Feature Artist</span>
                      <span>Time</span>
                    </div>
                    {song_list.slice(0, 4).map((song, i) => (
                      <Music key={i} index={i} content={song} />
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
