import React from 'react'
import { errorg } from '../assets'
import { useStateContext } from '../context'

const Error = () => {
  const { error} = useStateContext()
  return (
    <div className='bg-black max-w-[300px] top-[20%] left-[40%] fixed z-[88888888] min-h-[300px] px-5 py-2.5'>
      <img src={errorg} alt="error" className='flex w-full items-center justify-center ' />
      <span className='text-red-600 text-center flex items-center justify-center font-bold font-OpenSans-Bold text-lg'>{error}</span>
    </div>
  )
}

export default Error