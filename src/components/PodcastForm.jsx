import React, { useState } from "react";
import FormField from "./FormField";
import { useCreateAsset } from "@livepeer/react";
import { usePodcastContext } from "../context/PodcastContext";
import { ethers } from "ethers";
import { sendFileToIPFS, sendJSONToIPFS } from "../pinata";
import { Loader } from "../components";
import { useStorageUpload } from "@thirdweb-dev/react";

const PodcastForm = () => {
  const ipfsgateway = "gateway.pinata.cloud";

  // Creating state for the input field
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const [handle, setHandle] = useState("");
  console.log(video);
  const { createAPost } = usePodcastContext();

  const { mutateAsync: upload } = useStorageUpload();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const getCid = await sendFileToIPFS(file);
    const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid;
    setThumbnail(ipfsPath);
    console.log(ipfsPath);
  };

  const uploadVideo = async (e) => {
    const file = e.target.files[0];
    const getCid = await sendFileToIPFS(file);
    const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid;
    setVideo(ipfsPath);
    console.log(ipfsPath);
  };

  const content = {
    title: title,
    image: thumbnail,
    video: video,
    section: category,
    desc: description,
    handle: handle
  };

  const handlePodcastUpload = async () => {
    if (!thumbnail || !video || !description || !category) return null;
    try {
      setIsLoading(true);
      const data = await createAPost(content);
      setIsLoading(false);
      alert("done");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
      {isLoading && <Loader />}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col  items-center w-full"
      >
        <div className=" mx-3 lg:w-[85%] my-9 items-center">
          <div className="border-2 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isImageFile
                labelName="Podcast Image"
                inputType="file"
                handleChange={uploadImage}
              />
            </div>
          </div>

          <div className="border-2 mt-7 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isFile
                labelName="Podcast Video"
                inputType="file"
                placeholder="Enter a valid url"
                handleChange={uploadVideo}
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

            <div className="flex font-OpenSans-Bold text-lg items-center mx-auto">
              <div className="w-full ">
                <FormField
                  isTextArea
                  labelName="Description"
                  inputType="text"
                  placeholder="Enter a valid description"
                  value={description}
                  handleChange={(e) => setDescription(e.target.value)}
                />
                <FormField
                  isInput
                  labelName="Handle"
                  inputType="text"
                  placeholder="Enter a valid description"
                  value={handle}
                  handleChange={(e) => setHandle(e.target.value)}
                />
                <div className="flex w-full mt-4 flex-col items-start">
                  <label className="text-lg font-OpenSans-Bold">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    class="w-full font-bold font-OpenSans-Bold bg-[#f0f0f0] rounded-[8px] h-16 text-[#000000]"
                  >
                    <option>Select Category</option>
                    <option>Comedy</option>
                    <option>Inspirational</option>
                    <option>Education</option>
                    <option>Movies</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-center items-center">
        <button
          className="bg-white text-[#000080] font-OpenSans-Bold font-bold text-lg px-5 py-2.5 rounded-lg"
          onClick={() => handlePodcastUpload()}
          type="submit"
        >
          Create Podcast
        </button>
      </div>
    </div>
  );
};

export default PodcastForm;
