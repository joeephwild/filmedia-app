import React from 'react'
import { usePodcastContext } from '../context/PodcastContext'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
// import CyberConnect, {
//   Env
// } from '@cyberlab/cyberconnect-v2';

// const cyberConnect = new CyberConnect({
//   namespace: 'CyberConnect',
//   env: Env.Production,
//   provider: provider,
//   signingMessageEntity: 'CyberConnect' || your entity,
// });
// const follow() = () => {
//   cyberConnect.follow(handle);
// }
const Videos = () => {
  const { content } = usePodcastContext()
  return (
    <div className='my-9 relative'>
      {content.map((item, i) => (
        <div className='bg-black rounded-[8px] h-[360px] w-[460px]'>
          <img src={item.image} className='w-full h-full object-cover' alt="" />
          <div className='flex items-center bg-black h-16 w-full '>
            <span>
              <AiFillHeart size={29} />
            </span>
          </div>
        </div>
      ))}
  
    </div>
  )
}

export default Videos