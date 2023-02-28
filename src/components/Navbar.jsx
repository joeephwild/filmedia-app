import { useAddress } from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bell, stromzy, upload } from "../assets";
import { useStateContext } from "../context";

const Navbar = () => {
  const { modal, setModal, setOpenNotification, currentProfile } =
    useStateContext();
  const handleModal = () => {
    setOpenNotification(false);
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
        />
        <img
          onClick={() => navigate("/dashboard/upload")}
          src={upload}
          alt="upload"
          className="w-6 h-6 object-contain"
        />
        <div>

          {currentProfile.map((item, i) => (
            <div key={i} onClick={() => setModal(!modal)}>
              <img
                src={item.avatar}
                class="w-10 h-10 border-2 rounded-xl border-white-200 object-cover"
                alt="PROFILE"
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
