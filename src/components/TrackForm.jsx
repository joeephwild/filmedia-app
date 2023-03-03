import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { TrackProvider, useTrackContext } from "../context/TrackContext";
import FormField from "./FormField";
import Loader from "./Loader";

const TrackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { hello } = useTrackContext()
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [music, setMusic] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async() => {}

  return (
    <div className="w-full items-center justify-center">
      <div className='flex items-center justify-center flex-col'>
      <div className='bg-black md:w-[600px] w-[350px] h-[200px] md:h-[200px] text-white font-OpenSans-ExtraBold font-extrabold'>
        <span className='w-full items-center text-xl md:text-3xl mt-[15%] text-center flex justify-center'>Track Form</span>
        <span className="font-OpenSans-Bold font-bold text-sm md:text-lg text-center flex justify-center items-center">Upload your latest music for fans to play</span>
      </div>
    </div>
      {isLoading && <Loader />}
      <section className="flex flex-col  items-center w-full">
        <div className=" mx-3 lg:w-[85%] my-9 items-center">
          <div className="border-2 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isImageFile
                labelName="Music Image"
                inputType="file"
                placeholder="Enter a valid url"
                value={image}
                handleChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <div className="border-2 mt-7 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isImageFile
                labelName="Video"
                inputType="file"
                placeholder="Enter a valid url"
                value={video}
                handleChange={(e) => setVideo(e.target.value)}
              />
            </div>
          </div>

          <div className="border-2 mt-7 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isImageFile
                labelName="Music File"
                inputType="file"
                placeholder="Enter a valid url"
                value={music}
                handleChange={(e) => setMusic(e.target.value)}
              />
            </div>
          </div>
        
          <div className="border-2 mt-9 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isInput
                labelName="Title"
                inputType="text"
                placeholder="Enter a valid url"
                value={title}
                handleChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex-col font-OpenSans-Bold text-lg items-center mx-auto">
            <div className="w-full ">
                <label>Price</label>
                <input
                  type="number"
                  step="0.05"
                  placeholder="enter price in 0.8"
                  className="w-full bg-[#f0f0f0] text-[#000000] text-sm border-none  h-16 rounded-[8px]"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
              
        </div>
      </section>
    </div>
  );
};

export default TrackForm;
