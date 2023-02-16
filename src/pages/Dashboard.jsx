import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FullScreen,
  MainBody,
  Notifications,
  PictureInPicture,
  Sidebar,
} from "../components";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import PlayerSection from "../components/PlayerSection";
import { useStateContext } from "../context";
import { PlayerState } from "../context/PlayerState";

const Dashboard = () => {
  const {
    openBigScreen,
    openPip,
    openPlayer,
    openModal,
    openNotification,
  } = useStateContext();
  const navigate = useNavigate();
  return (
    <PlayerState>
      <div className="flex relative items-center overflow-hidden flex-row">
        <Sidebar />
        <div className="flex-1 mx-auto  overflow-y-scroll flex-col text-white w-full  md:">
          <Navbar />
          {openBigScreen && <FullScreen />}
          {openNotification && <Notifications />}
          {openModal && <Modal />}
          <MainBody />
        </div>
        {openPip && <PictureInPicture />}
        {openPlayer && <PlayerSection />}
      </div>
    </PlayerState>
  );
};

export default Dashboard;

/**
 *
 */
