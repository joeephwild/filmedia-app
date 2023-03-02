import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { db } from "../firebase";
import { sendDataToIPFS, sendFileToIPFS } from "../pinata";
import FormField from "./FormField";
import Loader from "./Loader";

const TicketForm = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");
  const navigate = useNavigate();
  const ipfsgateway = "gateway.pinata.cloud";
  const { createToken } = useStateContext();

  console.log(
    image,
    startDate,
    endDate,
    quantity,
    price,
    title,
    description,
    location
  );

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const getCid = await sendFileToIPFS(file);
    const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid;
    setImage(ipfsPath);
  };

  const metadata = {
    image: image,
    begin: startDate,
    end: endDate,
    amount: quantity,
    cost: price,
    ticketTitle: title,
    desc: description,
    venue: location,
  };

  const handleSubmit = async () => {
    const result = await sendDataToIPFS(metadata);
    setIpfsHash(result);
    console.log(result);
    try {
      setLoading(true);
      await createToken(
        result,
        price,
        new Date(startDate).getTime(),
        new Date(endDate).getTime(),
        quantity
      );
      const docRef = await addDoc(collection(db, "ticket"), {
        image: image,
        begin: startDate,
        end: endDate,
        amount: quantity,
        cost: price,
        ticketTitle: title,
        desc: description,
        venue: location,
        ipfs: result,
      });
      console.log((await docRef).id);
      setLoading(false);
      navigate("/dashboard/ticket");
    } catch (error) {}
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col space-y-11 mx-auto items-center max-w-full"
    >
      <div className='flex items-center justify-center flex-col'>
      <div className='bg-black w-[600px] h-[200px] text-white font-OpenSans-ExtraBold font-extrabold'>
        <span className='w-full items-center text-3xl mt-[15%] text-center flex justify-center'>Ticket Form</span>
        <span className="font-OpenSans-Bold font-bold text-lg text-center flex justify-center items-center">Upload a ticket for concert and shows</span>
      </div>
    </div>
      {loading && <Loader />}
      <section className="flex flex-col  items-center w-full">
        <div className=" mx-3 lg:w-[85%] my-9 items-center">
          <div className="border-2 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isImageFile
                labelName="Ticket Image"
                inputType="file"
                handleChange={handleUpload}
                placeholder="Enter a valid url"
              />
            </div>
          </div>
          {image && (
            <img
              src={image}
              alt="ticket"
              className="w-[300px] h-[300px] object-cover"
            />
          )}
          <div className="border-2 mt-9 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
            <div className="flex-col items-center mx-auto">
              <FormField
                isInput
                labelName="Title"
                inputType="text"
                value={title}
                handleChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a valid url"
              />
            </div>
            <div className="flex-col font-OpenSans-Bold text-lg items-center mx-auto">
              <FormField
                className="w-full items-center"
                isTextArea
                labelName="Description"
                inputType="text"
                value={description}
                handleChange={(e) => setDescription(e.target.value)}
                placeholder="Enter a valid url"
              />
            </div>
            <div className="flex font-OpenSans-Bold text-lg items-center w-full space-x-6">
              <div className="w-full ">
                <label>Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-[#f0f0f0] text-[#000000] text-sm border-none  h-16 rounded-[8px]"
                />
              </div>

              <div className="w-full font-OpenSans-Bold text-lg ">
                <label>End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-[#f0f0f0] text-[#000000] text-sm border-none  h-16 rounded-[8px]"
                />
              </div>
            </div>
            <div className="flex-col items-center mx-auto">
              <FormField
                isInput
                labelName="Location"
                inputType="text"
                value={location}
                handleChange={(e) => setLocation(e.target.value)}
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
                  value={price}
                  placeholder="enter price in 0.8"
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-[#f0f0f0] text-[#000000] text-sm border-none  h-16 rounded-[8px]"
                />
              </div>
              <div className="w-full font-OpenSans-Bold text-lg ">
                <label>Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  placeholder="Enter quantity to be minted"
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full bg-[#f0f0f0] text-[#000000] text-sm border-none  h-16 rounded-[8px]"
                />
              </div>
            </div>
          </div>
          {/** price section */}
        </div>
      </section>

      <div className="flex m-5 justify-center">
        <label className="ml-5 text-lg w-1/2 text-gray-500 dark:text-gray-300">
          By Uploading this file, you acknowledge that the transaction is final
          and cannot be reversed. Includes{" "}
          <Link to="#" className="text-white">
            royalty split agreement
          </Link>
          . Read and understand
          <Link to="#" className="text-white">
            {" "}
            contract terms{" "}
          </Link>
          and
          <Link to="#" className="text-white">
            {" "}
            potential risks.
          </Link>
        </label>
      </div>
      <div className="flex m-5 w-full justify-center">
        <Web3Button
          contractAddress="0x1Aae1e6ce578CB965b1bd724c80799806AFE7C70"
          action={() => handleSubmit()}
        >
          createToken
        </Web3Button>
      </div>
      <div className="flex m-5 justify-center w-3/4 overflow-auto"></div>
    </form>
  );
};

export default TicketForm;
