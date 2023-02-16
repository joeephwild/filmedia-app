import { sendFileToIPFS, sendJSONToIPFS } from "../pinata";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { FormField, Loader } from "../components";
import { useAddress } from "@thirdweb-dev/react";

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const address = useAddress()

  //form state for handling changes in input
  const [category, setCategory] = useState("");
  const [other, setOther] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [avatar, setAvatar] = useState("");
  const [handle, setHandle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
 
  const ipfsgateway = "gateway.pinata.cloud"

 const onChange = async(e) => {
  const file = e.target.files[0];
  const getCid = await sendFileToIPFS(file)
  setCoverImage(getCid)
  const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid 
  console.log(ipfsPath)
 }

 const handleUpload = async(e) => {
  const file = e.target.files[0];
  const getCid = await sendFileToIPFS(file)
  setAvatar(getCid)
  const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid 
  console.log(ipfsPath)
 }
  
  //handling form submittion and cmaking transaction to store data in the blockchain
  const handleSubmit = async () => {
    if(!category || !coverImage || !avatar || !handle || !description || !name)return null
    const receipt = await sendJSONToIPFS(category, description, name, coverImage);
    console.log(receipt);
   
  };


  return (
    <div className="w-screen h-screen overflow-y-scroll">
      {isLoading && <Loader />}
      <nav className="bg-[#000100] text-start items-start w-full px-5 py-2 flex justify-between">
        <div className="flex items-center space-x-[8px]">
          <img src={logo} alt="logo" />
          <h2 className="text-3xl font-extrabold font-OpenSans-ExtraBold">
            FilMedia
          </h2>
        </div>
      </nav>
      {/** hero section */}
      <div className="grid grid-cols-1 my-12 lg:grid-cols-2 w-full items-center mx-auto">
        <div className="w-full mx-auto items-center flex flex-col justify-center">
          <h1 className="text-[25px] md:text-[40px] xl:text-[50px] font-bold text-[##F0F0F0]">
            Welcome To FilMedia Where <br /> Music meets Decentralization
          </h1>
          <p className="mt-[40px] text-sm md:text-[20px] w-[80%] text-center  text-[#808080] ">
            Create your Fil Media profile on the right to become a part of the
            music revolution. By providing your authentic details, you will have
            a personalized experience with us. Don't worry, you can edit your
            information at any time.
            <br />
            <br />
            To start your transactions, connect a wallet of your choice below.
            This wallet will be used for purchasing music tracks, tickets, and
            more. Please do connect an Ethereum wallet as we only accept
            Ethereum at the moment.
            <br />
            <br />
            By connecting your wallet, you can enjoy the benefits of true
            decentralization and secure transactions.
          </p>
          <Link
            to="/createaccount"
            className="flex justify-center mx-auto items-center"
          >
            <button className=" mt-[80px] bg-[#f0f0f0] py-4 px-2.5  text-[#000080] text-[20px] font-bold text-center rounded-[8px] ">
              Connect Wallet
            </button>
          </Link>
        </div>
        <div>
          {/** form */}
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
                  handleChange={handleUpload}
                />
                <div className="">
                  <FormField
                    isImageFile
                    labelName="CoverImage"
                    inputType="file"
                    placeholder="Enter a valid url"
                    handleChange={onChange}
                  />
                  <div className="flex flex-col items-start">
                    <label className="text-lg font-OpenSans-Bold">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
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
                  {category == "Other" && (
                    <FormField
                      isInput
                      placeholder="Enter your specific category"
                      labelName="Enter Category *"
                      inputType="text"
                      value={other}
                      handleChange={(e) => setOther(e.target.value)}
                    />
                  )}
                  <FormField
                    isInput
                    placeholder="Enter Handle e.g vitalikEth"
                    labelName="Handle *"
                    inputType="text"
                    value={handle}
                    handleChange={(e) => setHandle(e.target.value)}
                  />
                  <FormField
                    isInput
                    placeholder="Enter Name"
                    labelName="Name *"
                    inputType="text"
                    value={name}
                    handleChange={(e) => setName(e.target.value)}
                  />
                  <FormField
                    isTextArea
                    placeholder="Enter valid description"
                    labelName="Description"
                    value={description}
                    handleChange={(e) => setDescription(e.target.value)}
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
          {/** form end */}
        </div>
      </div>
      {/** hero section end */}
    </div>
  );
};

export default CreateAccount;
