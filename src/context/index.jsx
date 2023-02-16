
import { ethers } from "ethers";
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useRef,
} from "react";
import {
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {auth} from '../firebase'

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [address, setAddress] = useState("");
  const [usersAccount, setUsersAccount] = useState({});
  const [errors, setErrors] = useState("");
  const [openPlayer, setOpenPlayer] = useState(false);
  const [openPip, setPip] = useState(false);
  const [openBigScreen, setBigScreen] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [registeredUser, setRegisteredUser] = useState({})
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({});
  console.log(registeredUser);
  const [openNotification, setOpenNotification] = useState(false);

  const logOut = ()  => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setRegisteredUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  let currentWin = window.location.href.substring(22);
  let currentTab;
  if (currentWin == "") {
    currentTab = "Home";
  } else if (currentWin == "search") {
    currentTab = "Search";
  } else if (currentWin == "library") {
    currentTab = "Library";
  } else if (currentWin == "playlist") {
    currentTab = "Playlist";
  } else if (currentWin == "upload") {
    currentTab = "Upload";
  } else if (currentWin == "profile") {
    currentTab = "Profile";
  }

  const [active, setActive] = useState(currentTab);


  return (
    <StateContext.Provider
      value={{
        address,
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
        logOut,
        user,
        registeredUser,
        setRegisteredUser
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
