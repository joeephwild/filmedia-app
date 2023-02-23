import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import FormField from "./FormField";
import Loader from "./Loader";

const TrackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState("");
 

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  return (
    <div className="w-full items-center justify-center">
      {isLoading && <Loader />}
      <section className="flex flex-col mx-auto items-center max-w-[870px]">
      <div className=" mx-3 lg:w-[85%] my-9 items-center">
            <form
              onSubmit={(e) =>  e.preventDefault()}
              action=""
              className="border-2 px-6 py-3.5 rounded-[8px] broder-[#f0f0f0]"
            >
              <div className="flex-col items-center mx-auto">
                <FormField
                  isImageFile
                  labelName="Avatar"
                  placeholder="enter a vailid url"
                  inputType="file"
                />
                <div className="">
                  <FormField
                    isImageFile
                    labelName="CoverImage"
                    inputType="file"
                    placeholder="Enter a valid url"
                  />
                  <div className="flex flex-col items-start">
                    <label className="text-lg font-OpenSans-Bold">Category</label>
                    <select
                      class="w-full bg-[#f0f0f0] rounded-[8px] h-16 text-[#000000]"
                    >
                      <option>Select Category</option>
                      <option>Singer</option>
                      <option>singer/Song-Writer</option>
                      <option>Rapper</option>
                      <option>Content Creator</option>
                      <option>Comedian</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <FormField
                    isInput
                    placeholder="Enter Handle e.g vitalikEth"
                    labelName="Handle *"
                    inputType="text"
                  />
                  <FormField
                    isInput
                    placeholder="Enter Name"
                    labelName="Name *"
                    inputType="text"
                  />
                  <FormField
                    isTextArea
                    placeholder="Enter valid description"
                    labelName="Description"
                  />
                </div>
              </div>
            </form>
          </div>

        <div className="flex m-5 justify-center w-full text-center">
     
        </div>
        <div className="flex m-5 justify-center overflow-auto">
        <Web3Button
      contractAddress="0x7b16c2a20D13eE84023bDd6dc4543e1e043b2C6F"
      action={(contract) => {
        contract.call("uploadMusic",)
      }}
    >
      uploadMusic
    </Web3Button>
        </div>
        <div className="flex m-5 justify-center w-3/4 overflow-auto"></div>
      </section>
    </div>
  );
};

export default TrackForm;
