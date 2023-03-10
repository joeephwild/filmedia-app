
import { usePodcastContext } from "../context/PodcastContext";
import { useNavigate } from "react-router-dom";
const Videos = () => {
  const { content } =
    usePodcastContext();



  const navigate = useNavigate()

  const handleNavigate = (item) => {
    navigate(`/videos/${item.id}`, { state: item });
  };

  return (
    <div className="w-full mt-8 mx-3 grid-cols-3 grid items-center gap-5">
      {content.map((item, i) => (
        <div key={i} className="min-w-[307px] relative bg-black min-h-[400px]">
          <img
            src={item.image}
            alt=""
            className="w-full object-cover h-[320px]"
          />
          <button onClick={() => handleNavigate(item)} className="absolute top-[30%] px-6 py-2.5 left-[40%] bg-white text-lg font-bold font-OpenSans-Bold text-[#000080] rounded-[8px] ">
            play
          </button>
        </div>
      ))}
    </div>
  );
};

export default Videos;
