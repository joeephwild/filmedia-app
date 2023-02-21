import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { bell, stromzy, upload } from "../assets";
import { useStateContext } from "../context";


const AlbumDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { setOpenPlayer, openPlayer } = useStateContext();
  const handleCLick = () =>{
    if (!openPlayer) {
      setOpenPlayer(true);
    }else{
      setOpenPlayer(false);
    }
  }
  
  return (
    <div className='h-screen'>
        
        <div className="w-[100%] h-screen">
          <div className="flex bg-gradient-to-b from-gray-500 via-purple-500 to-indigo-900 mt-20 h-full flex-col col-span-5 md:col-span-12 lg:col-span-9 xl:col-span-9 text-white row-span-6">
            <div className="grid grid-cols-3 px-5 h-1/2 m-5 -mt-10 w-auto relative">
                    <div className="">
                        <span className="h-full w-48">
                            <img alt="Photo by aldi sigun on Unsplash"
                            src={state.imgSrc}
                            className="mx-auto object-cover rounded-xl h-full w-auto" />
                        </span>
                    </div>

                    <div className="m-5">
                        <div className="bottom-0 absolute">
                            <h1 className="font-bold m-2">{state.name}</h1>
                            <h1 className="font-bold text-4xl m-2">ALBUM NAME</h1>
                            <div className="font-bold flex m-2">
                                <h1>Album</h1>
                                <button disabled className="w-2 h-2 mt-[1%] ml-2 mr-2 rounded-full bg-white"></button>
                                <h1>{state.name}</h1>
                                <button disabled className="w-2 h-2 mt-[1%] ml-2 mr-2 rounded-full bg-white"></button>
                                <h1>2022</h1>
                                <button disabled className="w-2 h-2 mt-[1%] ml-2 mr-2 rounded-full bg-white"></button>
                                <h1>19 Songs</h1>
                                <button disabled className="w-2 h-2 mt-[1%] ml-2 mr-2 rounded-full bg-white"></button>
                                <h1>1 Hour</h1>
                            </div>
                            <h1 className="text-xs m-2 overflow-ellipsis">ALBUM NAME is the sixth studio album by Nigerian singer {state.name}. It was released on 8 July 2022 through Atlantic Records.</h1>
                            <div className="gap-2 space-x-4 flex m-2">
                                <button className="bg-transparent hover:bg-white text-white-700 font-semibold hover:text-gray-500 py-2 px-4 border border-white-500 hover:border-transparent rounded">View As NFT</button>
                                <button onClick={() => handleCLick()}className="hover:bg-white w-10 h-10 text-white-700 font-semibold hover:text-gray-500 hover:border-transparent rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                                        <polygon className="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
                                        <path className="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>
                                    </svg> 
                                </button>
                                <button>
                                    <svg className="text-white-400 w-6 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
                                    </svg>
                                </button>
                                <button>MONEY</button>
                                <button>...</button>
                            </div>
                        </div>

                    </div>
                </div>
                
              <div className="flex justify-center">
                <div className="w-full m-5 mt-10">
                  <div className="overflow-auto lg:overflow-visible ">
                    <table className="table w-full text-white-400 border-separate border-spacing-y-3 space-y-6 text-sm">
                      <thead className="rounded-lg text-white">
                        <tr>
                          <th className="p-3 text-left border-b-2 border-white-100">#</th>
                          <th className="p-3 text-left border-b-2 border-white-100">Name</th>
                          <th className="p-3 text-left border-b-2 border-white-100">Featured Artist</th>
                          <th className="p-3 text-left border-b-2 border-white-100">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-black/40 cursor-pointer">
                          <td className="p-3 rounded-l-xl">
                              <img className="rounded-full h-12 w-12  object-cover" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/play-icon-18-256.png" alt="unsplash image"/>
                          </td>
                          <td className="p-3">
                              <div>
                                <div className="">Song Name</div>
                                <div className="text-gray-500">mail@rgmail.com</div>
                              </div>
                          </td>
                          <td className="p-3">
                          {state.name}
                          </td>
                          <td className="p-3 rounded-r-xl">
                            3:15
                          </td>
                        </tr>

                        <tr className="hover:bg-black/40 cursor-pointer">
                          <td className="p-3 rounded-l-xl">
                              <img className="rounded-full h-12 w-12  object-cover" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/play-icon-18-256.png" alt="unsplash image"/>
                          </td>
                          <td className="p-3">
                              <div>
                                <div className="">Song Name</div>
                                <div className="text-gray-500">mail@rgmail.com</div>
                              </div>
                          </td>
                          <td className="p-3">
                          {state.name}
                          </td>
                          <td className="p-3 rounded-r-xl">
                            3:15
                          </td>
                        </tr>

                        <tr className="hover:bg-black/40 cursor-pointer">
                          <td className="p-3 rounded-l-xl">
                              <img className="rounded-full h-12 w-12  object-cover" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/play-icon-18-256.png" alt="unsplash image"/>
                          </td>
                          <td className="p-3">
                              <div>
                                <div className="">Song Name</div>
                                <div className="text-gray-500">mail@rgmail.com</div>
                              </div>
                          </td>
                          <td className="p-3">
                          {state.name}
                          </td>
                          <td className="p-3 rounded-r-xl">
                            3:15
                          </td>
                        </tr>

                        <tr className="hover:bg-black/40 cursor-pointer">
                          <td className="p-3 rounded-l-xl">
                              <img className="rounded-full h-12 w-12  object-cover" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/play-icon-18-256.png" alt="unsplash image"/>
                          </td>
                          <td className="p-3">
                              <div>
                                <div className="">Song Name</div>
                                <div className="text-gray-500">mail@rgmail.com</div>
                              </div>
                          </td>
                          <td className="p-3">
                          {state.name}
                          </td>
                          <td className="p-3 rounded-r-xl">
                            3:15
                          </td>
                        </tr>

                        

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </div>
        </div>
    </div>
  )
}

export default AlbumDetails