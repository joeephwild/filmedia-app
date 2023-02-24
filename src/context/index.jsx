import React, { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import CyberConnect, { Env } from "@cyberlab/cyberconnect-v2";
import { auth, db } from "../firebase";
import { ethers } from "ethers";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState("");
  const [openPlayer, setOpenPlayer] = useState(false);
  const [openPip, setPip] = useState(false);
  const [openBigScreen, setBigScreen] = useState(false);
  const [profile, setProfile] = useState([]);
  const [registeredUser, setRegisteredUser] = useState({});
  const [modal, setModal] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [currentProfile, setCurrentProfile] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [podcast, setPodcast] = useState([]);
  const [artist, setArtist] = useState([]);
  console.log(podcast)
  const [openNotification, setOpenNotification] = useState(false);

  const connect = useMetamask();
  const address = useAddress();

  const getPodcastAccount = async () => {
    const q = query(
      collection(db, "accounts"),
      where("titles", "==", "Content Creator")
    );

    const querySnapshot = await getDocs(q);
    let account = [];
    querySnapshot.forEach((doc) => {
      account.push({ ...doc.data(), id: doc.id });
    });
   setPodcast(account);
  };

  const getArtistAccount = async () => {
    const q = query(
      collection(db, "accounts"),
      where("titles", "==", "Artist")
    );

    const querySnapshot = await getDocs(q);
    let account = [];
    querySnapshot.forEach((doc) => {
      account.push({ ...doc.data(), id: doc.id });
    });
    setArtist(account);
  };

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setRegisteredUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  const getAllData = () => {
    const q = query(collection(db, "accounts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setAccounts(messages);
    });
    return () => unsubscribe();
  };

  useEffect(() => {
    const getCurrentProfile = accounts.filter(
      (person) => person.to === address
    );
    setCurrentProfile(getCurrentProfile);
  }, [accounts, address]);

  useEffect(() => {
    connect();
    getPodcastAccount();
    getArtistAccount();
    getAllData();
  }, []);

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const cyberConnect = new CyberConnect({
    namespace: "Filmedia",
    env: Env.PRODUCTION,
    provider: provider,
    signingMessageEntity: "Filmedia",
  });

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

  useEffect(() => {}, []);

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
        setModal,
        modal,
        registeredUser,
        setRegisteredUser,
        setCurrentProfile,
        currentProfile,
        connect,
        accounts,
        setAccounts,
        profile,
        setProfile,
        setErrors,
        cyberConnect,
        setFollowed,
        followed,
        podcast,
        artist
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
