import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { concert1, concert2} from "../assets";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {  FiHeart, FiMoreHorizontal } from "react-icons/fi";
import {
  BsPlayCircleFill,
} from "react-icons/bs";

function Banner() {
  return (
    <div className="relative grid-cols-2 grid gap-4 m-9">

      <div className="relative w-[735px] h-[300px] ">
        <img src={concert1} alt="concert" className="w-full object-cover h-full" />
        <p className="text-[16px] font-semibold absolute top-[40px] left-[40px]">POST MALONE</p>
        <h1 className="text-[48px] font-bold font-OpenSans-Bold absolute top-[70px] left-[40px]">Circle Of Greatness</h1>
        {/** icons */}
        <div className="absolute flex items-center space-x-6 bottom-[10.5px] right-[48px]">
          <FiMoreHorizontal size={29} />
          <FiHeart size={29} />
          <RiMoneyDollarCircleLine size={29} />
          <BsPlayCircleFill size={29}  />
        </div>
       </div>

       <div className="relative w-[735px] h-[300px] ">
        <img src={concert2} alt="concert" className="w-full object-cover h-full" />
        <p className="text-[16px] font-semibold absolute top-[40px] left-[40px]">POST MALONE</p>
        <h1 className="text-[48px] font-bold font-OpenSans-Bold absolute top-[70px] left-[40px]">Renaissance World Tour</h1>
        {/** icons */}
        <div className="absolute flex items-center space-x-6 bottom-[10.5px] right-[48px]">
          <FiMoreHorizontal size={29} />
          <FiHeart size={29} />
          <RiMoneyDollarCircleLine size={29} />
          <BsPlayCircleFill size={29}  />
        </div>
       </div>
    </div>
  );
}

export default Banner;
