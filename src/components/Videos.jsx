
import { usePodcastContext } from "../context/PodcastContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useState } from "react";
const Videos = () => {
  const { content } =
    usePodcastContext();

    const { likeAPost, dislikeAPost } = usePodcastContext();

    const [active, setActive] = useState(false);
    const [like, setLike] = useState(false);
  
    const handleLike = async (id) => {
      try {
        const data = await likeAPost(id);
        console.log(data);
        setLike(true);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleDisLike = async (id) => {
      try {
        const data = await dislikeAPost(id);
        console.log(data);
        setActive(true);
      } catch (error) {
        console.log(error);
      }
    };

  const navigate = useNavigate()

  const handleNavigate = (item) => {
    navigate(`/videos/${item.id}`, { state: item });
  };

  return (
    <div className="w-full mt-8 overflow-x-hidden grid-cols-3 grid items-center gap-5">
      {content.map((item, i) => (
        <div key={i} className="min-w-[150px] relative bg-black min-h-[300px]">
          <img
            src={item.image}
            alt=""
            className="w-full object-cover h-[320px]"
          />
          <button onClick={() => handleNavigate(item)} className="absolute top-[30%] px-6 py-2.5 left-[40%] bg-white text-lg font-bold font-OpenSans-Bold text-[#000080] rounded-[8px] ">
            play
          </button>
          <div className="m-auto flex asbolute top-[30%] right-9 items-center py-6 px-4 w-full ">
        <AiOutlineLike
          onClick={() => handleLike(i)}
          className={
            like === true
              ? "text-blue-600 cursor-pointer"
              : "text-white cursor-pointer"
          }
          size={40}
        />
        <AiOutlineDislike
          onClick={() => handleDisLike(i)}
          className={
            active === true
              ? "text-red-600 cursor-pointer"
              : "text-white cursor-pointer"
          }
          size={40}
        />
      </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
