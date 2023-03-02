import React from 'react'
import { errorg } from '../assets'
import { useStateContext } from '../context'

const Error = () => {
  const { error} = useStateContext()
  return (
    <div className='bg-black w-[550px] top-[20%] left-[40%] fixed z-[88888888] h-[550px] px-5 py-2.5'>
      <img src={errorg} alt="error" className='flex items-center justify-center w-full' />
      <span className='text-red-600 text-center flex items-center justify-center font-bold font-OpenSans-Bold text-lg'>{error}</span>
    </div>
  )
}

export default Error