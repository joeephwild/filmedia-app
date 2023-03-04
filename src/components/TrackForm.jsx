import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTrackContext } from "../context/TrackContext";
import { sendFileToIPFS } from "../pinata";
import FormField from "./FormField";
import Loader from "./Loader";

const TrackForm = () => {
  const { isLoading, uploadMusic } = useTrackContext();
  const ipfsgateway = "gateway.pinata.cloud";
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [music, setMusic] = useState("");
  const [price, setPrice] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const getCid = await sendFileToIPFS(file);
    const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid;
    setImage(ipfsPath);
    console.log(ipfsPath);
  };

  const uploadVideo = async (e) => {
    const file = e.target.files[0];
    const getCid = await sendFileToIPFS(file);
    const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid;
    setVideo(ipfsPath);
    console.log(ipfsPath);
  };

  const uploadMusicFile = async (e) => {
    const file = e.target.files[0];
    const getCid = await sendFileToIPFS(file);
    const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid;
    setMusic(ipfsPath);
    console.log(ipfsPath);
  };

  const handleSubmit = async () => {
    try {
      const data = await uploadMusic(
        music,
        video,
        image,
        title,
        ethers.utils.parseEther(price)
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="w-full items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <div className="bg-black md:w-[600px] w-[350px] h-[200px] md:h-[200px] text-white font-OpenSans-ExtraBold font-extrabold">
          <span className="w-full items-center text-xl md:text-3xl mt-[15%] text-center flex justify-center">
            Track Form
          </span>
          <span className="font-OpenSans-Bold font-bold text-sm md:text-lg text-center flex justify-center items-center">
            Upload your latest music for fans to play
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
                labelName="Music Image"
                inputType="file"
                placeholder="Enter a valid url"
                handleChange={uploadImage}
              />
            </div>
          </div>
          {image && (
            <img
              src={image}
              className="h-[200px] w-[200px] object-cover"
              alt="track"
            />
          )}
          <div className="border-2 mt-7 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isImageFile
                labelName="Video"
                inputType="file"
                placeholder="Enter a valid url"
                handleChange={uploadVideo}
              />
            </div>
          </div>
           {video && (
            <video muted className="h-[200px] w-[200px] object-cover" src={video}></video>
           )}
          <div className="border-2 mt-7 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isImageFile
                labelName="Music File"
                inputType="file"
                placeholder="Enter a valid url"
                handleChange={uploadMusicFile}
              />
            </div>
          </div>
           {music && (
            <audio controls src={music}></audio>
           )}
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
        <button
          onClick={() => handleSubmit()}
          className="bg-white my-8 text-black font-OpenSans-Bold font-bold text-lg px-5 py-2.5 rounded-lg"
          type="submit"
        >
          {" "}
          upload Music
        </button>
      </form>
    </div>
  );
};

export default TrackForm;
