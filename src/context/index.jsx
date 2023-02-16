
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import {
  onAuthStateChanged,
} from 'firebase/auth';
import CyberConnect, {
  Env
} from '@cyberlab/cyberconnect-v2';
import {auth} from '../firebase'
import { sendJSONToIPFS } from "../pinata";
import { ethers } from "ethers";
import { profileNft } from "../constant";
import { useAddress, useChainId, useMetamask } from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [usersAccount, setUsersAccount] = useState({});
  const [errors, setErrors] = useState("");
  const [openPlayer, setOpenPlayer] = useState(false);
  const [openPip, setPip] = useState(false);
  const [openBigScreen, setBigScreen] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [registeredUser, setRegisteredUser] = useState({})
  const [openModal, setOpenModal] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({});
  const address = useAddress();
  const connect = useMetamask()
  const chainId = useChainId()
  console.log(chainId);
  const [openNotification, setOpenNotification] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setRegisteredUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const cyberConnect = new CyberConnect({
    namespace: 'Filmedia',
    env: Env.PRODUCTION,
    provider: provider,
    signingMessageEntity: 'CyberConnect' ,
  });

  //follow an handle
  const follow = async(address, handle) => {
    const followed = await cyberConnect.follow(address, handle);
    return followed;
  }

  
  //follow an handle
  const unFollow = async(address, handle) => {
    const followed = await cyberConnect.unfollow(address, handle);
    return followed;
  }

    //handling form submittion and making transaction to store data in the blockchain
    const handleMintCCProfile = async (category, coverImage, handle, avatar, description, name) => {
      if (!category || !coverImage || !avatar || !handle || !description || !name || chainId === "97")
        return alert("come on");
      const receipt = await sendJSONToIPFS(
        category,
        description,
        name,
        coverImage
      );
      console.log(receipt);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0x57e12b7a5f38a7f9c23ebd0400e6e53f2a45f271",
        profileNft,
        signer
      );
      const tx = await contract.createProfile({
        to: address,
        handle: handle,
        metadata: receipt,
        avatar: avatar,
        operator: "0x4946a945aB5d49fa59E81A00Bb9d6677E0fcB8B4",
      },
      "0x",
      "0x"
      ).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
      console.log(`transaction: ${tx}`)
      
    };

  let currentWin = window.location.href.substring(22);
  let currentTab;
  if (currentWin === "") {
    currentTab = "Home";
  } else if (currentWin === "search") {
    currentTab = "Search";
  } else if (currentWin === "library") {
    currentTab = "Library";
  } else if (currentWin === "playlist") {
    currentTab = "Playlist";
  } else if (currentWin === "upload") {
    currentTab = "Upload";
  } else if (currentWin === "profile") {
    currentTab = "Profile";
  }

  const [active, setActive] = useState(currentTab);


  return (
    <StateContext.Provider
      value={{
        setOpenPlayer,
        openPlayer,
        openPip,
        setPip,
        setBigScreen,
        openBigScreen,
        setOpenNotification,
        openNotification,
        errors,
        accounts,
        setSuccess,
        success,
        active,
        setActive,
        setOpenModal,
        openModal,
        registeredUser,
        setRegisteredUser,
        setCurrentProfile,
        currentProfile,
        handleMintCCProfile, 
        connect,
        follow,
        unFollow
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
