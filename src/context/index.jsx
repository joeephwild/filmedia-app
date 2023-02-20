
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
import { ethers } from "ethers";
import { useMetamask } from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState("");
  const [openPlayer, setOpenPlayer] = useState(false);
  const [openPip, setPip] = useState(false);
  const [openBigScreen, setBigScreen] = useState(false);
  const [profile, setProfile] = useState([]);
  const [registeredUser, setRegisteredUser] = useState({})
  const [openModal, setOpenModal] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({});
  const [accounts, setAcounts] = useState([])
  const connect = useMetamask()
  console.log("hell owrld")
  const [openNotification, setOpenNotification] = useState(false);
 const data = "helo"
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
    signingMessageEntity: 'Filmedia' ,
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
        connect,
        follow,
        unFollow,
        accounts,
        setAcounts,
        profile,
        setProfile,
        data
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
