import React, { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import CyberConnect, { Env } from "@cyberlab/cyberconnect-v2";
import { auth, db } from "../firebase";
import { ethers } from "ethers";
import {
  useAddress,
  useChainId,
  useContract,
  useContractWrite,
  useMetamask,
} from "@thirdweb-dev/react";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [allPodcast, setAllPodcast] = useState([])
  const [allMusic, setAllMusic] = useState([])
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
  const [ticket, setTicket] = useState([]);
  const [accountExist, setAccountExist] = useState(false);
  const [error, setError] = useState("");
  const [handle, setHandle] = useState("");
  const [openNotification, setOpenNotification] = useState(false);
  const { contract } = useContract(
    "0x72FAa5a90b1D9416f2828F0f8D2190a237B02c89"
  );
  const chainId = useChainId();

  const { mutateAsync: createToken, isLoading } = useContractWrite(
    contract,
    "createToken"
  );

  const createTicket = async (tokenURI, price, _start, _end, _supply) => {
    try {
      const data = await createToken([
        tokenURI,
        ethers.utils.parseUnits(price, 18),
        new Date(_start).getTime(),
        new Date(_end).getTime(),
        _supply,
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

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

  const getTicket = async () => {
    const q = query(collection(db, "ticket"));

    const querySnapshot = await getDocs(q);
    let tickets = [];
    querySnapshot.forEach((doc) => {
      tickets.push({ ...doc.data(), id: doc.id });
    });
    setTicket(tickets);
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

  const connectWallet = () => {
    if (chainId === 97) {
      connect();
    } else {
      console.log("wrong network")
    }
  };

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
    const currentHandle =    currentProfile.map(
      (person) => ({
       handle: person.handle
      })
    );
    setHandle(currentHandle)
  }, [currentProfile, address]);

  useEffect(() => {
    connect();
    getPodcastAccount();
    getArtistAccount();
    getTicket();
    getAllData();
  }, []);

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
        setFollowed,
        followed,
        podcast,
        artist,
        setAccountExist,
        accountExist,
        createToken: createTicket,
        ticket,
        error,
        setError,
        allPodcast,
        setAllPodcast,
        setAllMusic,
        allMusic
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
