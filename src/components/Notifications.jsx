import { useStateContext } from '../context'
import React, { useState } from 'react'
import {MdCancel} from 'react-icons/md'

const Notifications = () => {
  const [general, setGeneral] =  useState(true);
  const [transaction, setTransact] =  useState(true);
  const {setOpenNotification} = useStateContext();

  const changeGeneral = () => {
    setGeneral(!general);
    setTransact(!transaction);
  }

  const changeTransact = () => {
    setTransact(!transaction);
    setGeneral(!general);
  }

  return (
    <div className='bg-black h-[650px] w-[420px] fixed z-[99999] right-9 top-20'>
        <div className='flex px-3.5 py-2.5 items-center justify-between w-full'>
          <span className='text-lg'>Notification</span>
          <span className="-mt-2" onClick={() => setOpenNotification(false)}><MdCancel size={20}/></span>
        </div>

        <div className='w-[370px] h-[48px] ml-7 mt-6 bg-[#808080] rounded relative flex justify-around'>
          <button
           className='hover:bg-[#F0F0F0] w-[198px] text-black font-bold rounded p-2 flex gap-3 cursor-pointer'
           onClick={changeGeneral}
           >
            <h3>General</h3>
            <div className='w-[27px] h-[24px] rounded bg-[#FF2424]'>
              <p className='px-1'>10</p>
            </div>
          </button>
          <button 
           className='hover:bg-[#F0F0F0] rounded w-[198px] text-black font-bold p-2 flex gap-3 cursor-pointer'
           onClick={changeTransact}
           >
            <h3>Transaction</h3>
            <div className='w-[27px] h-[24px] rounded bg-[#FF2424]'><p className='px-1'>10</p></div>
          </button>
        </div>

        { general?
          <div>General</div>
          :
          <></>
        }

        { transaction ?
          <div>Transaction</div>
          :
          <></>
        }
    </div>
  )
}

export default Notifications