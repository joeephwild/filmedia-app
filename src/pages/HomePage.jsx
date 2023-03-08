import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { group, logo } from "../assets";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen justify-center items-center">
      <nav className="bg-[#000100] w-full items-center px-5 py-2 flex justify-between">
        <div className="flex items-center space-x-[8px]">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <h2 className="text-xl hidden md:block md:text-2xl font-extrabold font-OpenSans-ExtraBold">
            FilMedia
          </h2>
        </div>
        <button onClick={() => navigate("/login")} className="border-2 font-bold md:text-lg md:block border-[##F0F0F0] px-4 py-2.5 rounded-lg text-xs">
          Login/Signup
        </button>
      </nav>
      {/** hero section */}
      <div className="grid grid-cols-1 mx-6 text-left my-12 lg:grid-cols-2 w-full items-center">
        <div className=" items-start  w-[800px] flex flex-col justify-start">
        <h1 className="text-[40px] ml-[79px] mr-[33px]  md:text-[70px] xl:text-[80px] font-bold text-[##F0F0F0]">
            Music Revolution
          </h1>
          <p className="mt-[40px] ml-[79px] mr-[33px] md:text-[20px] w-[80%] text-start  text-[#808080] ">
            Support your favorite artists by purchasing unique music tracks
            directly from artist with split royalties for resale. <br /> <br/> Experience
            live streams and videos, and purchase tickets for events, all while
            being a part of a true decentralized platform. Join Fil Media now
            where Music meets decentralization!
          </p>
          <Link to="/login" className="flex ml-[79px] mr-[33px] justify-start mx-6 items-start">
            <button className=" mt-[80px] bg-[#f0f0f0] py-5 px-3.5  text-[#000080] text-[20px] font-bold rounded-[8px] ">
              Get Started with FilMedia
            </button>
          </Link>
        </div>
        <div>
        <div className=" mx-9 my-9 items-center">
          <img src={group} alt="" className="w-full h-full" />
        </div>
        </div>
      </div>
       {/** hero section end */}
    </div>
  );
};

export default HomePage;

