import { Player } from "@livepeer/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { usePodcastContext } from "../context/PodcastContext";

const DisPlayVideos = () => {
  const { state } = useLocation();
  const { likeAPost, dislikeAPost } = usePodcastContext();

  const [active, setActive] = useState(false);
  const [like, setLike] = useState(false);

  const handleLike = async () => {
    try {
      const data = await likeAPost(state.id);
      console.log(data);
      setLike(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisLike = async () => {
    try {
      const data = await dislikeAPost(state.id);
      console.log(data);
      setActive(true);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state);
  return (
    <div className="w-full relative h-[80%]">
      <Player
        title="Waterfalls"
        src={state.video}
        poster={state.image}
        showPipButton
        showTitle={false}
        aspectRatio="16to9"
        controls={{ autohide: true }}
        autoPlay
        theme={{
          borderStyles: { containerBorderStyle: "hidden" },
          radii: { containerBorderRadius: "10px" },
        }}
      />
      <div className="m-auto flex asbolute top-[30%] right-9 items-center py-6 px-4 w-full ">
        <AiOutlineLike
          onClick={() => handleLike()}
          className={
            like === true
              ? "text-blue-600 cursor-pointer"
              : "text-white cursor-pointer"
          }
          size={40}
        />
        <AiOutlineDislike
          onClick={() => handleDisLike()}
          className={
            active === true
              ? "text-red-600 cursor-pointer"
              : "text-white cursor-pointer"
          }
          size={40}
        />
      </div>
    </div>
  );
};

export default DisPlayVideos;
