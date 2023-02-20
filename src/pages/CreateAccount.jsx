import { sendFileToIPFS, sendJSONToIPFS } from "../pinata";
import React, { useState } from "react";
import { logo } from "../assets";
import { FormField, Loader } from "../components";
import { ConnectWallet, useAddress, useChainId } from "@thirdweb-dev/react";
import { useStateContext } from "../context";
import { ethers } from "ethers";
import { profileNft } from "../constant";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { connect, profile, setProfile, data } = useStateContext();

  //form state for handling changes in input
  const [category, setCategory] = useState("");
  const [other, setOther] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [avatars, setAvatars] = useState("");
  const [handles, setHandles] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const address = useAddress();
  const chainId = useChainId();
  console.log(chainId);

  const ipfsgateway = "gateway.pinata.cloud";

  const onChange = async (e) => {
    const file = e.target.files[0];
    const getCid = await sendFileToIPFS(file);
    const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid;
    console.log(ipfsPath);
    setCoverImage(ipfsPath);
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const getCid = await sendFileToIPFS(file);
    const ipfsPath = "https://" + ipfsgateway + "/ipfs/" + getCid;
    setAvatars(ipfsPath);
  };

  const connectContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      "0x57e12b7a5f38a7f9c23ebd0400e6e53f2a45f271",
      profileNft,
      signer
    );
    return contract;
  };

  const contractOperator = "0xb35d0ad43A320f7c9F398d040BaE6B7e163e5b8c"

  //handling form submittion and making transaction to store data in the blockchain
  const handleMintCCProfile = async () => {
    if (
      !category ||
      !coverImage ||
      !avatars ||
      !handles ||
      !description ||
      !name
    )
      return alert("wrong")
    try {
      setIsLoading(true);
      const receipt = await sendJSONToIPFS(
        category,
        description,
        name,
        coverImage
      );
      //sending transaction for creating profile
      const contract = await connectContract();
      const tx = await contract.createProfile(
        {
          to: address,
          handle: handles,
          metadata: receipt,
          avatar: avatars,
          operator: contractOperator,
        },
       /* preData */
				0x0,
				/* postData */
				0x0
      );
      console.log(tx);
      const docRef = await addDoc(collection(db, "accounts"), {
        avatar: avatars,
        to: address,
        metadata: receipt,
        handle: handles,
        operator: contractOperator,
      });
      console.log((await docRef).id);
      setIsLoading(false);
    } catch (error) {
      console.log("Error creating profile", error);
    }
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
          <button className=" mt-[80px] py-4 px-2.5  text-[#000080] text-[20px] font-bold text-center rounded-[8px] ">
            <ConnectWallet accentColor="white" />
          </button>
        </div>
        <div>
          {/** form */}
          <div className=" mx-3 lg:w-[85%] my-9 items-center">
            <form
              onSubmit={(e) => e.preventDefault()}
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
                {avatars && (
                  <img
                    src={avatars}
                    alt="avatar"
                    className="h-[200px] w-[200px] object-cover"
                  />
                )}
                <div className="">
                  <FormField
                    isImageFile
                    labelName="CoverImage"
                    inputType="file"
                    placeholder="Enter a valid url"
                    handleChange={onChange}
                  />
                  {coverImage && (
                    <img
                      src={coverImage}
                      alt="avatar"
                      className="h-[200px] w-[200px] object-cover"
                    />
                  )}
                  <div className="flex flex-col items-start">
                    <label className="text-lg font-OpenSans-Bold">
                      Category
                    </label>
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
                  {category === "Other" && (
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
                    value={handles}
                    handleChange={(e) => setHandles(e.target.value)}
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
                onClick={() => handleMintCCProfile()}
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
