import React from 'react'
import { Link } from 'react-router-dom'

const Modal = () => {
  return (
    <div className='w-[150px] flex flex-col z-[99999] items-start text-lg space-y- h-[140px] font-bold font-OpenSans-Bold fixed top-[8%] right-9 bg-black'>
       <span className=' w-full px-4 py-2'>My Profile</span>
       <Link to="/dashboard/stream" className='w-full px-4 py-2'>Livestream</Link>
       <span className=' w-full px-4 py-2'>Video</span>
    </div>
  )
}

export default Modal