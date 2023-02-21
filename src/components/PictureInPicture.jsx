import React from 'react'
import { useStateContext } from "../context";
import Draggable from 'react-draggable';
import VideoPlayer from './VideoPlayer'

import { createReactClient, LivepeerConfig, studioProvider, } from '@livepeer/react';
import { BsFillDoorClosedFill, BsPlayCircleFill } from 'react-icons/bs';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

  const client = createReactClient({
    provider: studioProvider({ apiKey: 'ddec12a5-cf04-43d5-978e-dde6965180c3' }),
  });
   
  const livepeerTheme = {
    colors: {
      accent: 'rgb(0, 145, 255)',
      containerBorderColor: 'rgba(0, 145, 255, 0.9)',
    },
    fonts: {
      display: 'Inter',
    },
  };

const PictureInPicture = () => {
    const { setPip, openPip } = useStateContext();

    const { setBigScreen, openBigScreen } = useStateContext();

  const handleClick = () => {
    if (!openPip) {
      setPip(true);
    }else{
      setPip(false);
    }
  };

  const handleBigScreen = () => {
    if (!openBigScreen) {
      setBigScreen(true);
    }else{
        setBigScreen(false);
    }
  };

  return (
    <>
    <div>
        <div className="left-1/2 top-1/3 absolute ">
            <Draggable>
                <div style={{ display: 'block', backgroundColor:'black', borderRadius:'15px', height:'auto', width: 500, padding: 10 }}>
                    <div className="select-none">
                        <span className="h-full w-10 select-none">
                            {/* <img alt="Photo by aldi sigun on Unsplash" style={{pointerEvents: 'none'}}
                            src="https://i.ytimg.com/vi/BXd62mMu1UY/maxresdefault.jpg"
                            class="mx-auto object-cover rounded-t-lg select-none" /> */}
                            <LivepeerConfig client={client} theme={livepeerTheme}>
                                <VideoPlayer />
                            </LivepeerConfig>
                            {/* <VideoPlayer/> */}
                        </span>
                        <div class="mt-5 grid grid-cols-9 flex items-center justify-center">
                            <span class="col-span-1 text-right mr-2">0:00</span>
                            <div class="col-span-7 pt-2">
                                <div class="bg-gray-100 w-full rounded overflow-hidden h-1 mb-1.5">
                                    <div class="bg-gray-500 p-1 rounded-sm w-1/3">
                                    </div>
                                </div>
                            </div>
                            <span class="col-span-1 ml-2">3:15</span>
                        </div>
                        <div class="grid grid-cols-3 m-5">
                            <div class="flex justify-center items-center truncate">
                                <h1 class="truncate">Glory(Burna Boy is the coolest song)</h1>
                            </div>
                            <div class="flex justify-center items-center gap-2">
                                <button class="hover:text-red-500">
                                <BiSkipPrevious  size={29} />
                                </button>
                                <button class="hover:text-red-500">
                                <BsPlayCircleFill size={29} />
                                </button>
                                <button class="hover:text-red-500">
                                <BiSkipNext size={29} />
                                </button>
                            </div>
                            <div class="flex justify-center items-center gap-2">
                                <button class="hover:text-red-500" onClick={() => handleClick()}>
                                  <BsFillDoorClosedFill />
                                </button>
                                <button class="hover:text-red-500" onClick={() => handleBigScreen()}>Big</button>
                                <button class="hover:text-red-500">...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
</div>
</>
  )
}

export default PictureInPicture