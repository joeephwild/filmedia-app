import React from "react";
import { useNavigate } from "react-router-dom";
import { bell, upload } from "../assets";
import { useStateContext } from "../context";

const Navbar = () => {
  const { openModal, setOpenModal,setOpenNotification } = useStateContext();
  const handleModal = () => {
    setOpenModal(!openModal);
    setOpenNotification(false)
  };
  const navigate = useNavigate();
  return (
    <nav className="flex items-center h-16  px-9 py-4 justify-between bg-black w-full">
      <h2 className="font-OpenSans-ExtraBold text-3xl font-extrabold">
        Welcome
      </h2>
      <div className="flex items-center cursor-pointer space-x-4">
        <img
          onClick={() => setOpenNotification(true)}
          src={bell}
          alt="upload"
          className="w-6 h-6 object-contain"
        ></img>
        <img
          onClick={() => navigate("/dashboard/upload")}
          src={upload}
          alt="upload"
          className="w-6 h-6 object-contain"
        />
        <button
          onClick={() => handleModal()}
          data-collapse-toggle="navbar-default"
          type="button"
          class="m-2 ml-6"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <img
            src="https://media.gq-magazine.co.uk/photos/5df24f43271d0f00080cabf9/3:2/w_1000,h_666,c_limit/20191212-stormzy-02.jpg"
            class="w-10 h-10 border-2 rounded-xl border-white-200 object-cover"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
