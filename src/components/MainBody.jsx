import React from "react";
import { Route, Routes } from "react-router-dom";
import { useStateContext } from "../context";
import { PlayerState } from "../context/PlayerState";
import {
  Home,
  Search,
  Library,
  Upload,
  AlbumDetails,
  Ticket,
  Livestream,
  Playlist,
  ProfileDetails,
  Profile,
  Subscribe
} from "../pages";
import Concert from "../pages/Concert";
import FullScreen from "./FullScreen";
import Modal from "./Modal";
import Navbar from "./Navbar.jsx";
import Notifications from "./Notifications.jsx";
import {Notifi} from "./NotifiCard.jsx";
import PictureInPicture from "./PictureInPicture";
import PlayerSection from "./PlayerSection";
import Sidebar from "./Sidebar";
import { DAppProvider, Mainnet, useEthers } from "@usedapp/core";

const config = {
    readOnlyChainId: Mainnet.chainId,
}

const ConnectButton = () => {
  const {account, deactivate, activateBrowserWallet} = useEthers()
  if(account) return <button onClick={()=> deactivate()}>Dis</button>
  else return <button onClick={()=> activateBrowserWallet()}></button>
}
const MainBody = () => {
  const { openBigScreen, openNotification, modal, openPip, openPlayer } =
    useStateContext();
  return (
    <PlayerState>
      <div className="flex relative items-center h-full overflow-hidden flex-row">
        <Sidebar />
        <div className="flex-1 mx-auto h-screen  overflow-y-scroll flex-col text-white w-full  md:">
          <Navbar />
          {openBigScreen && <FullScreen />}
          {openNotification &&<Notifications/> }
          {modal && <Modal />}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard/search" element={<Search />} />
            <Route path="/dashboard/library" element={<Library />} />
            <Route path="/dashboard/upload" element={<Upload />} />
            <Route path="/dashboard/profile/:id" element={<ProfileDetails />} />
            <Route path="/dashboard/Album/:id" element={<AlbumDetails />} />
            <Route path="/dashboard/ticket" element={<Ticket />} />
            <Route path="/dashboard/stream" element={<Livestream />} />
            <Route path="/dashboard/ticket/:id" element={<Concert />} />
            <Route path="/dashboard/playlist" element={<Playlist />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </div>
        {openPip && <PictureInPicture />}
        {openPlayer && <PlayerSection />}
      </div>
    </PlayerState>
  );
};

export default MainBody;
