import React from "react";

import {
  HuddleClientProvider,
  getHuddleClient,
  useHuddleStore
} from "@huddle01/huddle01-client";
import { AiFillHeart } from "react-icons/ai";
import {
  MdSend,
  MdShare,
  MdMoreHoriz,
  MdClosedCaptionOff,
  MdOutlineVolumeDown,
} from "react-icons/md";
import { RiMoneyDollarCircleFill, RiSettings3Line } from "react-icons/ri";
import { BsPlayCircle } from "react-icons/bs";
import MeVideoElem from "./MeVideoElem";

const Stream = () => {
  const huddleClient = getHuddleClient("4cc3283d63a85b6b9fcd6bbceb8dbfef39bb281c9e37417b7659f080112f3630");
  return (
    <div class="h-screen">
      <div className="flex mx-9 my-9 justify-between w-full gap-x-6 px-9 ">
        {/**stream */}
        <div className="bg-[#000100] relative w-full xl:w-[973px] xl:h-[682px]">
        
          <MeVideoElem />
          {/** stream controls */}
          <div className="w-full absolute bottom-0 h-20 py-4 bg-[#000100]">
            <div className="flex flex-col items-center">
              <div className="w-full px-2 flex items-center">
                <span>00:00</span>
                <input
                  type="range"
                  className=" bg-gray-100 w-full rounded overflow-hidden h-1 mb-1.5"
                />
                <span className="text-red-600">Live</span>
              </div>
              {/** controls */}
              <div className="flex space-x-4 items-center justify-center w-full h-full mb-5">
                <MdMoreHoriz size={25} />
                <MdClosedCaptionOff size={26} />
                <BsPlayCircle size={26} />
                <RiSettings3Line size={26} />
                <MdOutlineVolumeDown size={25} />
              </div>
              {/** controls */}
            </div>
          </div>
        </div>
        {/** comment */}
        <div className="bg-[#000100] hidden xl:block w-[473px] mx-9 h-[682px] relative">
          <div className="bg-[#fafafa] w-full absolute bottom-0 h-20">
            <div className="w-full px-4 text-black flex h-full items-center space-x-4">
              <AiFillHeart className="text-red-600" size={25} />
              <input
                type="text"
                placeholder="Comment"
                className="border-2 rounded-[8px] px-3 border-[#000100] outline-none"
              />
              <MdSend size={25} />
              <RiMoneyDollarCircleFill size={25} />
              <MdShare size={25} />
              <MdMoreHoriz size={25} />
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => huddleClient.enableWebcam()}>livstream</button>
      <button onClick={() => huddleClient.disableWebcam()}>divstream</button>
    </div>
  );
};

export default Stream;
