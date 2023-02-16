import { useAddress } from "@thirdweb-dev/react";
import { Route, Routes } from "react-router-dom";
import {
  FullScreen,
  MainBody,
  Notifications,
  PictureInPicture,
  Sidebar,
} from "./components";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PlayerSection from "./components/PlayerSection";
import { useStateContext } from "./context";
import { PlayerState } from "./context/PlayerState";
import {
  CreateAccount,
  HomePage,
  LoginScreen,
} from "./pages";

function App() {
  const {
    registeredUser,
    openBigScreen,
    openNotification,
    openModal,
    openPip,
    openPlayer,
  } = useStateContext();
  const address = useAddress();
  return (
    <div className="bg-gradient-to-r from-[#000100] to-[#000080]">
      {!registeredUser && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/account" element={<CreateAccount />} />
        </Routes>
      )}
      {registeredUser && (
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
      )}
    </div>
  );
}

export default App;
