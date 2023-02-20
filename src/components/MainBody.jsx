import { Modal } from "flowbite";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useStateContext } from "../context";
import { PlayerState } from "../context/PlayerState";
import {
  Home,
  Search,
  Library,
  Upload,
  Profile,
  AlbumDetails,
  Ticket,
  Livestream,
  Playlist,
} from "../pages";
import Concert from "../pages/Concert";
import FullScreen from "./FullScreen";
import Navbar from "./Navbar";
import Notifications from "./Notifications";
import PictureInPicture from "./PictureInPicture";
import PlayerSection from "./PlayerSection";
import Sidebar from "./Sidebar";

const MainBody = () => {
  const {
    openBigScreen,
    openNotification,
    openModal,
    openPip,
    openPlayer,
  } = useStateContext();
  return (
    <PlayerState>
      <div className="flex relative items-center overflow-hidden flex-row">
        <Sidebar />
        <div className="flex-1 mx-auto  overflow-y-scroll flex-col text-white w-full  md:">
          <Navbar />
          {openBigScreen && <FullScreen />}
          {openNotification && <Notifications />}
          {openModal && <Modal />}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard/search" element={<Search />} />
            <Route path="/dashboard/library" element={<Library />} />
            <Route path="/dashboard/upload" element={<Upload />} />
            <Route path="/dashboard/profile/:id" element={<Profile />} />
            <Route path="/dashboard/Album/:id" element={<AlbumDetails />} />
            <Route path="/dashboard/ticket" element={<Ticket />} />
            <Route path="/dashboard/stream" element={<Livestream />} />
            <Route path="/dashboard/ticket/:id" element={<Concert />} />
            <Route path="/dashboard/playlist" element={<Playlist />} />
          </Routes>
        </div>
        {openPip && <PictureInPicture />}
        {openPlayer && <PlayerSection />}
      </div>
    </PlayerState>
  );
};

export default MainBody;
