import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  edsheran,
} from "../assets";
import { HiLocationMarker } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";

const Ticket = () => {
  const navigate = useNavigate();

  const artists = [
    {
      id: "1",
      artist: "Ed Sheeran",
      concert: "Mathematics Tour",
      imgSrc: edsheran,
    },
  ];

  const handleNavigate = () => {
    navigate(`/dashboard/ticket/${artists[0].concert}`, { state: artists[0] });
  };
  return (
    <div>
      <div className="flex h-screen">
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full max-w-[477px] max-h-[400px] lg:my-4 lg:px-4 ">
              <article className="overflow-hidden bg-white  rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://www.mcg.org.au/_/media/images/shared/placeholders/1800x800/es23-1800x1000.jpg"
                  />
                </a>
                <div className="bg-black">
                  <header className="items-center relative justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-2xl font-semibold font-OpenSans-ExtraBold">
                      <a
                        className="no-underline hover:underline text-[#fafafa]"
                        href="#"
                      >
                        Mathematics Tour
                      </a>
                    </h1>
                    <div className="flex items-center justify-between px-2 py-4">
                      <p className="text-gray-500 text-lg">
                        Wed 10 Feb 2023 - Wed 27 Feb 2023{" "}
                      </p>
                      <span className="text-gray-500 flex items-center absolute right-0 mr-5">
                        <HiLocationMarker size={29} />
                        <p>Stockholm</p>
                      </span>
                    </div>
                  </header>
                  <footer className="leading-none flex justify-between p-2 md:p-4">
                    <div>
                      <button className="bg-[#fafafa] hover:bg-white mr-2 text-white-700 text-lg font-semibold  py-3 px-6 text-[#000080] hover:border-gray-900 rounded-xl">
                        $50,000
                      </button>
                      <button className="bg-transparent text-lg rounded-xl font-semibold hover:text-white py-3 px-6 text-[#fafafa] border-2 border-[#fafafa]">
                        Available
                      </button>
                    </div>
                    <button
                      onClick={() => handleNavigate()}
                      className="bg-transparent flex font-semibold text-[#fafafa] txt-lg  py-2 space-x-2 items-center"
                    >
                      Learn More
                      <BsChevronRight size={29} />
                    </button>
                  </footer>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
