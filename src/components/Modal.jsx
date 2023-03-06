import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Modal = () => {
  const navigate = useNavigate()
  const handleSignOut = async() => {
   await signOut(auth)
      .then((response) => {
        console.log(response);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-[150px] flex flex-col z-[99999] items-start text-lg space-y- h-[160px] cursor-pointer font-bold font-OpenSans-Bold fixed top-[8%] right-9 bg-black">
      <Link to="/profile" className=" w-full px-4 py-2">My Profile</Link>
      <Link to="/dashboard/stream" className="w-full px-4 py-2">
        Livestream
      </Link>
      <Link to='/subscription' className=" w-full px-4 py-2">Notifications</Link>
      <div onClick={handleSignOut} className=" w-full px-4 py-2">
        LogOut
      </div>
    </div>
  );
};

export default Modal;
