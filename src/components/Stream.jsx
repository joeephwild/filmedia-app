import React from "react";

import {
  getHuddleClient,
} from "@huddle01/huddle01-client";
import { AiFillHeart } from "react-icons/ai";
import {
  MdSend,
  MdShare,
  MdMoreHoriz,
} from "react-icons/md";
import { RiMoneyDollarCircleFill, RiSettings3Line } from "react-icons/ri";
import { Player } from "@livepeer/react";
import { useLocation } from "react-router-dom";

const Stream = ({stream}) => {
  const huddleClient = getHuddleClient("4cc3283d63a85b6b9fcd6bbceb8dbfef39bb281c9e37417b7659f080112f3630");
const { state } = useLocation()
console.log(state)

  return (
    <div class="h-screen overflow-x-hidden">
      <div className="flex  mx-9 my-9 justify-between w-full gap-x-6 px-9 ">
        {/**stream */}
        <Player
          title={state?.name}
          playbackId={state?.playbackId}
          showPipButton
          showTitle={false}
          aspectRatio="16to9"
          controls={{ autohide: true }}
          theme={{
            borderStyles: { containerBorderStyle: "hidden" },
            radii: { containerBorderRadius: "10px" },
          }}
        />
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
    </div>
  );
};

export default Stream;
