import { ethers } from "ethers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import FormField from "./FormField";
import Loader from "./Loader";

const TrackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { uploadContents } = useStateContext();
  const [form, setForm] = useState({
    image: "",
    video: "",
    musicFile: "",
    title: "",
    category: "",
    description: "",
    name: "",
    price: "",
  });
  const navigate = useNavigate()

  const handleSubmit = async () => {
    setIsLoading(true);
    alert("whats up");
    await uploadContents({
    title:  form.title,
     name: form.name,
     musicFile: form.musicFile,
     video: form.video,
    image:  form.image,
     category: form.category,
     description: form.description,
    price: ethers.utils.parseUnits(form.price, 18),
    });
    setIsLoading(false);
  };

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  return (
    <div className="w-full items-center justify-center">
      {isLoading && <Loader />}
      <section className="flex flex-col items-center w-full">
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
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="bg-[#f0f0f0] rounded-[8px] my-9 px-9 py-3.5 text-[#000000] text-lg font-OpenSans-Bold font-bold"
              >
                Mint Account
              </button>
            </form>
          </div>

        <div className="flex m-5 justify-center w-3/4 overflow-auto">
          <label
            for="checked-checkbox"
            className="ml-5 text-xs w-1/2 text-gray-500 dark:text-gray-300"
          >
            By Uploading this file, you acknowledge that the transaction is
            final and cannot be reversed. Includes{" "}
            <div className="text-white">
              royalty split agreement
            </div>
            . Read and understand
            <div className="text-white">
              {" "}
              contract terms{" "}
            </div>
            and
            <div className="text-white">
              {" "}
              potential risks.
            </div>
          </label>
        </div>
        <div className="flex m-5 justify-center w-3/4 overflow-auto">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-white px-9 py-3 text-lg mr-5 hover:bg-transparent text-black font-semibold hover:text-white border border-white-500 hover:border-white rounded"
          >
            Upload
          </button>
        </div>
        <div className="flex m-5 justify-center w-3/4 overflow-auto"></div>
      </section>
    </div>
  );
};

export default TrackForm;
