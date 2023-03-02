import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import FormField from "./FormField";
import Loader from "./Loader";

const TrackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    image: "",
    file: "",
  });
 

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  return (
    <div className="w-full items-center justify-center">
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
              />
            </div>
            <div className="flex-col font-OpenSans-Bold text-lg items-center mx-auto">
              <FormField
                className="w-full items-center"
                isTextArea
                labelName="Description"
                inputType="text"
                placeholder="Enter a valid url"
              />
            </div>
           
            <div className="flex-col items-center mx-auto">
              <FormField
                isInput
                labelName="Location"
                inputType="text"
                placeholder="Enter a valid url"
              />
            </div>
          </div>

          {/** price section */}
          <div className="border-2 mt-9 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex  font-OpenSans-Bold text-lg items-center w-full space-x-6">
              <div className="w-full ">
                <label>Price</label>
                <input
                  type="number"
                  step="0.05"
                  placeholder="enter price in 0.8"
                  className="w-full bg-[#f0f0f0] text-[#000000] text-sm border-none  h-16 rounded-[8px]"
                />
              </div>
            </div>
          </div>
          {/** price section */}
        </div>
      </section>
    </div>
  );
};

export default TrackForm;
