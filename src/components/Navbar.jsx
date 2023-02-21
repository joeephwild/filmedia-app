import { useAddress } from "@thirdweb-dev/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { bell, upload } from "../assets";
import { useStateContext } from "../context";

const Navbar = () => {
  const { openModal, setOpenModal, setOpenNotification, accounts } =
    useStateContext();
    const address = useAddress()
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
        ></img>
        <img
          onClick={() => navigate("/dashboard/upload")}
          src={upload}
          alt="upload"
          className="w-6 h-6 object-contain"
        />
         {accounts.filter(person => person.to === address).map(filteredPerson => (
          <img
          onClick={() => setOpenModal(!openModal)}
          src={filteredPerson.avatar}
          class="w-10 h-10 border-2 rounded-xl border-white-200 object-cover"
          alt="PROFILE"
        />
  ))}

      </div>
    </nav>
  );
};

export default Navbar;
