import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormField } from "../components";

const Concert = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <div>
      <div className="">
        <div className="w-[100%] h-screen">
          <div className="flex bg-gradient-to-b from-gray-500 via-purple-500 to-indigo-900 mt-20 h-full flex-col col-span-5 md:col-span-12 lg:col-span-9 xl:col-span-9 text-white row-span-6">
            <div className="grid md:grid-cols-2 grid-cols-1 px-5 h-1/2 m-5 -mt-10 ">
              <div>
                <div className="">
                  <span clspanss="h-full w-48">
                    <img
                      alt="by aldi sigun on Unsplash"
                      src={state.image}
                      className="mx-auto object-cover rounded-xl h-full w-full"
                    />
                  </span>
                </div>
                <div className="m-5">
                  <div className="">
                    <h1 className="font-bold text-4xl m-2">
                      {state.ticketTitle}
                    </h1>
                    <div className="font-bold flex m-2">
                      <h1>
                        {state.begin} - {state.end}
                      </h1>
                    </div>
                    <div className="font-bold flex m-2">
                      <h1>See Scheduled Dates and Cities</h1>
                    </div>
                    <h1 className="text-xs m-2 overflow-ellipsis">
                      {state.desc}
                    </h1>
                  </div>
                </div>
              </div>
                <section className="flex flex-col  items-center w-full">
                  <div className=" mx-3 lg:w-[85%] my-9 items-center">

                    <div className="border-2 mt-7 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
                      <div className="flex-col items-center mx-auto">
                        <FormField
                          isInput
                          labelName="Video"
                          inputType="text"
                          placeholder="Enter a valid url"
                        />
                      </div>
                    </div>
                    </div>
                </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concert;
