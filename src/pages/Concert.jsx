import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Concert = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    return (
        <div>
            <div className=''>
                <div className="w-[100%] h-screen">
                    <div className="flex bg-gradient-to-b from-gray-500 via-purple-500 to-indigo-900 mt-20 h-full flex-col col-span-5 md:col-span-12 lg:col-span-9 xl:col-span-9 text-white row-span-6">
                        <div className="grid md:grid-cols-2 grid-cols-1 px-5 h-1/2 m-5 -mt-10 ">
                            <div>
                                <div className="">
                                    <span clspanss="h-full w-48">
                                        <img alt="by aldi sigun on Unsplash"
                                            src={state.image}
                                            className="mx-auto object-cover rounded-xl h-full w-full" />
                                    </span>
                                </div>
                                <div className="m-5">
                                    <div className="">
                                        <h1 className="font-bold text-4xl m-2">{state.ticketTitle}</h1>
                                        <div className="font-bold flex m-2">
                                            <h1>{state.begin} - {state.end}</h1>
                                        </div>
                                        <div className="font-bold flex m-2">
                                            <h1>See Scheduled Dates and Cities</h1>
                                        </div>
                                        <h1 className="text-xs m-2 overflow-ellipsis">{state.desc}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 w-3/4 m-5 mt-[20px] border-2 rounded-lg">
                                <div>
                                    <h1 className="mt-5">Select Ticket</h1>
                                    <select id="countries" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Early Birds</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div>
                                        <h1 className="mt-5">Quantity</h1>
                                        <select id="countries" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Select Genre</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h1 className="mt-5">Cost</h1>
                                        <select id="countries" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Select up to 3 Tags</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="mt-5">Total</h1>
                                    <select id="countries" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Early Birds</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                <h1 className="mt-5">Name on Ticket</h1>
                                <input type="text" id="input-group-1" className="bg-white-50 w-full mt-5 focus:outline-none border border-white-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray" placeholder="Search..." />
                                <div className="flex m-5 justify-center w-3/4 overflow-auto">
                                    <button className="bg-white mr-5 hover:bg-transparent text-black font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-white rounded">
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Concert