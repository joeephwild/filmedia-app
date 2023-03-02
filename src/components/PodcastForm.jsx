import React, { useState } from "react";
import FormField from "./FormField";
import { useCreateAsset } from "@livepeer/react";

const PodcastForm = () => {
  const {
    mutate: createAsset,
    data: asset,
    status,
    progress,
    error,
  } = useCreateAsset();
  // Creating state for the input field
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");

  return (
    <div className="w-full items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <div className="bg-black w-[600px] h-[200px] text-white font-OpenSans-ExtraBold font-extrabold">
          <span className="w-full items-center text-3xl mt-[15%] text-center flex justify-center">
            Podcast Form
          </span>
          <span className="font-OpenSans-Bold font-bold text-lg text-center flex justify-center items-center">
            Upload a Podcast and share with Fans
          </span>
        </div>
      </div>
      <section className="flex flex-col  items-center w-full">
        <div className=" mx-3 lg:w-[85%] my-9 items-center">
          <div className="border-2 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isImageFile
                labelName="Podcast Image"
                inputType="file"
                placeholder="Enter a valid url"
                value={thumbnail}
                handleChange={(e) => setThumbnail(e.target.value)}
              />
            </div>
          </div>

          <div className="border-2 mt-7 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isImageFile
                labelName="Podcast Video"
                inputType="file"
                placeholder="Enter a valid url"
                value={video}
                handleChange={(e) => setVideo(e.target.value)}
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
            <div className="flex-col items-center mx-auto">
              <FormField
                isTextArea
                labelName="Description"
                inputType="text"
                placeholder="Enter a valid url"
                value={description}
                handleChange={(e) => setDescription(e.target.value)}
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
                  handleChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastForm;
