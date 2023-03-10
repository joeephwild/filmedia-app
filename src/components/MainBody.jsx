import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
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
  Subscribe,
} from "../pages";
import { Videos } from '../components';
import Concert from "../pages/Concert";
import Modal from "./Modal";
import Navbar from "./Navbar.jsx";
import Notifications from "./Notifications.jsx";
import PictureInPicture from "./PictureInPicture";
import PlayerSection from "./PlayerSection";
import Sidebar from "./Sidebar";
import Stream from "./Stream";
import DisPlayVideos from "../pages/DisPlayVideos";

const MainBody = () => {
  const {
    openNotification,
    modal,
    openPip,
    openPlayer,
    setPip,
    setOpenNotification,
    setModal,
  } = useStateContext();
  return (
    <PlayerState>
      <div className="flex relative items-center h-full overflow-x-hidden flex-row">
        <Sidebar />
        <div className="flex-1 mx-auto h-screen  overflow-y-scroll flex-col text-white w-full  md:">
          <Navbar />
          {openNotification && (
            <OutsideClickHandler
            onOutsideClick={() => setOpenNotification(false)}
            >
              <Notifications />
            </OutsideClickHandler>
          )}
          {modal &&(
               <OutsideClickHandler
               onOutsideClick={() => setModal(false)}
               >
             <Modal />
             </OutsideClickHandler>
             )}
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
            <Route path="/stream/:id" element={<Stream />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/videos/:id" element={<DisPlayVideos />} />
          </Routes>
        </div>

        {openPip && (
          <OutsideClickHandler onOutsideClick={() => setPip(false)}>
            <PictureInPicture />
          </OutsideClickHandler>
        )}
      </div>
      {openPlayer && (
            <PlayerSection />
        )}
    </PlayerState>
  );
};

export default MainBody;
