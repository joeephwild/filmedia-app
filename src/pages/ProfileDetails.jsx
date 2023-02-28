import { useLocation } from "react-router-dom";
import { Account, Albums, Music, Videos } from "../components";
import { song_list } from "../context/songs";


const ProfileDetails = ({ i }) => {
  const { state } = useLocation();


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
          <Albums />
        </div>
        )}

      </div>
    </section>
  );
};

export default ProfileDetails;
