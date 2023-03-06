import React from 'react'
import { useStateContext } from "../context";
import Draggable from 'react-draggable';
import VideoPlayer from './VideoPlayer'

import { createReactClient, LivepeerConfig, studioProvider, } from '@livepeer/react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

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
                        
                            <div class="flex justify-center items-center gap-2">
                                <button class="hover:text-red-500" onClick={() => handleClick()}>
                                  <AiOutlineCloseCircle size={29} />
                                </button>
                                <button class="hover:text-red-500">...</button>
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