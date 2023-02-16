import React from 'react'
import { useStateContext } from '../context'

const Notifications = () => {
  const {setOpenNotification} = useStateContext()
  return (
    <div className='bg-black h-[650px] w-[400px] fixed z-[99999] right-9 top-20'>
        <div className='flex px-3.5 py-2.5 items-center justify-between w-full'>
          <span>Notification</span>
          <span onClick={() => setOpenNotification(false)}>Notification</span>
        </div>
    </div>
  )
}

export default Notifications