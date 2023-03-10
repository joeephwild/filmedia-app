import React from 'react'
import { useStateContext } from "../context";
import Draggable from 'react-draggable';
import VideoPlayer from './VideoPlayer'

import { AiOutlineCloseCircle } from 'react-icons/ai';


const PictureInPicture = () => {
    const { setPip, openPip } = useStateContext();

  const handleClick = () => {
    if (!openPip) {
      setPip(true);
    }else{
      setPip(false);
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
                                <VideoPlayer />
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