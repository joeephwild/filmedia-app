import React from 'react'
import { usePodcastContext } from "../context/PodcastContext";
import {video} from "../assets"
import {AiOutlineLike, AiOutlineDislike} from "react-icons/ai"
const Videos = () => {
  const { likeAPost, dislikeAPost, cancelReaction } = usePodcastContext();
  const active = true;
  return (
    <div className=''>
      <div>
        <video width="750" height="500" controls  className='mt-10 ml-[156px]'>
            <source src={video} type="video/mp4"/>
        </video>
      </div>
      <div className='m-auto bg-[#000] w-[750px] '>
        <div className='flex gap-3 justify-end mr-4 '>
        <AiOutlineLike className={active === true ? 'text-blue-600 cursor-pointer' : 'text-white cursor-pointer'} size={50}/>
        <AiOutlineDislike className={active === true ? 'text-red-600 cursor-pointer' : 'text-white cursor-pointer'} size={50}/>
        </div>
      </div>
    </div>
  )
}

export default Videos