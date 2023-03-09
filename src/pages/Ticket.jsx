import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";
import { useStateContext } from "../context";
import { useNavigate } from "react-router";

const Ticket = () => {
  const navigate = useNavigate();
  const { ticket } = useStateContext()
  console.log(ticket)

  const handleNavigate = (item, i) => {
    navigate(`/dashboard/ticket/${item.ticketTitle}`, { state: item, i });
  };
  return (
    <div>
      {ticket.map((item, i) => (
        <div key={i} className="flex h-screen">
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full max-w-[477px] max-h-[400px] lg:my-4 lg:px-4 ">
              <article className="overflow-hidden bg-white  rounded-lg shadow-lg">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={item.image}
                  />
                <div className="bg-black">
                  <header className="items-center relative justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-2xl font-semibold font-OpenSans-ExtraBold">
                      <div
                        className="no-underline hover:underline text-[#fafafa]"
                        href="#"
                      >
                        {item.ticketTitle}
                      </div>
                    </h1>
                    <div className="flex items-center justify-between px-2 py-4">
                      <p className="text-gray-500 text-xs font-OpenSans-Bold md:text-lg">
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
                      onClick={() => handleNavigate(item, i)}
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
      ))}
                      

    </div>
  );
};

export default Ticket;
