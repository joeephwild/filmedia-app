import React from 'react'
import VideoPlayer from './VideoPlayer'

import { createReactClient, LivepeerConfig, studioProvider, } from '@livepeer/react';
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

const FullScreen = () => {
  return (
    <div>
        <div class="w-full h-[88%] z-10" style={{backgroundColor: 'black', position:'fixed'}}>
            {/* <button onClick={() => {setBigShown(current => !current)}}>Close</button> */}
            {/* <span> */}
            {/* <img alt="Photo by aldi sigun on Unsplash" style={{pointerEvents: 'none'}}
            src="https://i.ytimg.com/vi/BXd62mMu1UY/maxresdefault.jpg"
            class="h-full object-none w-3/4 select-none" /> */}
            {/* </span> */}
            <LivepeerConfig client={client} theme={livepeerTheme}>
                                <VideoPlayer />
                            </LivepeerConfig>
        </div>
    </div>
  )
}

export default FullScreen