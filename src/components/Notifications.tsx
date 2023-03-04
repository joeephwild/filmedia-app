import { useStateContext } from '../context'
import React, { useState } from 'react'
import {MdCancel} from 'react-icons/md'
import {IoIosArrowForward} from 'react-icons/io'
import { image13 } from "../assets";
import { image10 } from "../assets";
const Notifications = () => {
  const [general, setGeneral] =  useState(true);
  const [transaction, setTransact] =  useState(false);
  const {setOpenNotification} = useStateContext();

  const changeGeneral = () => {
    setGeneral(!general);
    setTransact(!transaction);
  }

  const changeTransact = () => {
    setTransact(!transaction);
    setGeneral(!general);
  }

   const datas = [
    {pic: image13,name:"choice", details: "Started a Live Stream", duration: "10 mins ago"},
    {pic: image13,name:"Bryan", details: "Just uploaded a new album",  duration:""},
    {pic: image13,name:"choice", details: "you have one new follower",  duration:"20 mins ago"}
    ]

    const datatrans = [
      {pic: image10,name:"choice", details: "Started a Live Stream", duration: "10 mins ago"},
      {pic: image10,name:"Bryan", details: "Just uploaded a new album",  duration:""},
      {pic: image10,name:"choice", details: "you have one new follower",  duration:"20 mins ago"}
      ]

  return (
    <div className='overflow-y-scroll scroll-smooth scrollbar scrollbar-thumb-gray-400 scrollbar-track-red-600 scrollbar-w-2 bg-black h-[550px] w-[420px] fixed z-[99999] right-9' style={{top: "66px"}}>
        <div className='flex px-3.5 py-2.5 items-center justify-between w-full'>
          <span className='text-lg'>Notification</span>
          <span className="-mt-2 cursor-pointer" onClick={() => setOpenNotification(false)}><MdCancel size={20}/></span>
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
        <>
          <div className='px-7 py-3'>
            {datas.map((data,index)=>(
                <div className='flex gap-2 mb-2'>
                  <div className='w-10 h-10 relative rounded-full bg-[#FF2424]' key={index}>
                    <img
                    src={data.pic}
                    alt="photo"
                    className="w-full h-full absolute rounded-full"
                    />
                    </div>
                    <div><p className='mt-2 text-sm text-gray-500'>{data.name}</p></div>
                    <div><p className='mt-2 text-sm text-white font-bold'>{data.details}</p></div>
                    <div><p className='mt-2 text-sm text-gray-500'>{data.duration}</p></div>
                  </div>  
                ))}
            
            {/* second section */}
            <div className='mt-5'>
              <div className='flex'>
                <p>This Week</p>
                <IoIosArrowForward size={25} className='text-gray-500'/>
              </div>

              {datas.map((data,index)=>(           
                <div className='flex gap-2 mb-2'>
                  <div className='w-10 h-10 relative rounded-full bg-[#FF2424]' key={index}>
                    <img
                    src={data.pic}
                    alt="photo"
                    className="w-full h-full absolute rounded-full"
                    />
                    </div>
                    <div><p className='mt-2 text-sm text-gray-500'>{data.name}</p></div>
                    <div><p className='mt-2 text-sm text-white font-bold'>{data.details}</p></div>
                    <div><p className='mt-2 text-sm text-gray-500'>{data.duration}</p></div>
                  </div>              
                ))}
          
            </div>

            {/* third section */}
            <div className='mt-5'>
              <div className='flex'>
                <p>Last Week</p>
                <IoIosArrowForward size={25} className='text-gray-500'/>
              </div>

              {datas.map((data,index)=>(           
                <div className='flex gap-2 mb-2'>
                  <div className='w-10 h-10 relative rounded-full bg-[#FF2424]' key={index}>
                    <img
                    src={data.pic}
                    alt="photo"
                    className="w-full h-full absolute rounded-full"
                    />
                    </div>
                    <div><p className='mt-2 text-sm text-gray-500'>{data.name}</p></div>
                    <div><p className='mt-2 text-sm text-white font-bold'>{data.details}</p></div>
                    <div><p className='mt-2 text-sm text-gray-500'>{data.duration}</p></div>
                  </div>
                ))}
          
            </div>            
          </div> 
        </>
          :
          <></>
        }

        { transaction ?
          <>
            <div className='px-7 py-3'>
              {datatrans.map((data,index)=>(              
                <div className='flex gap-2 mb-2'>
                  <div className='w-10 h-10 relative rounded-full bg-[#FF2424]' key={index}>
                    <img
                    src={data.pic}
                    alt="photo"
                    className="w-full h-full absolute rounded-full"
                    />
                    </div>
                    <div><p className='mt-2 text-sm text-gray-500'>{data.name}</p></div>
                    <div><p className='mt-2 text-sm text-white font-bold'>{data.details}</p></div>
                    <div><p className='mt-2 text-sm text-gray-500'>{data.duration}</p></div>
                  </div>
                ))}             
    
              {/* second section */}
              <div className='mt-5'>
                <div className='flex'>
                  <p>This Week</p>
                  <IoIosArrowForward size={25} className='text-gray-500'/>
                </div>
    
                {datatrans.map((data,index)=>(           
                  <div className='flex gap-2 mb-2'>
                    <div className='w-10 h-10 relative rounded-full bg-[#FF2424]' key={index}>
                      <img
                      src={data.pic}
                      alt="photo"
                      className="w-full h-full absolute rounded-full"
                      />
                      </div>
                      <div><p className='mt-2 text-sm text-gray-500'>{data.name}</p></div>
                      <div><p className='mt-2 text-sm text-white font-bold'>{data.details}</p></div>
                      <div><p className='mt-2 text-sm text-gray-500'>{data.duration}</p></div>
                    </div>                  
                  ))}                         
              </div>
    
              {/* third section */}
              <div className='mt-5'>
                <div className='flex'>
                  <p>Last Week</p>
                  <IoIosArrowForward size={25} className='text-gray-500'/>
                </div>    
                
                {datatrans.map((data,index)=>(           
                  <div className='flex gap-2 mb-2'>
                    <div className='w-10 h-10 relative rounded-full bg-[#FF2424]' key={index}>
                      <img
                      src={data.pic}
                      alt="photo"
                      className="w-full h-full absolute rounded-full"
                      />
                      </div>
                      <div><p className='mt-2 text-sm text-gray-500'>{data.name}</p></div>
                      <div><p className='mt-2 text-sm text-white font-bold'>{data.details}</p></div>
                      <div><p className='mt-2 text-sm text-gray-500'>{data.duration}</p></div>
                    </div>                
                  ))}         
              </div>   
    
            </div>
            </>
            :
            <></>
          }
      </div>
  )
}

export default Notifications