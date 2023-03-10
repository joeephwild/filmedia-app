import React, { useEffect } from 'react'
import { Loader } from "../components";
import { formatToDollars } from "../utils/connectContract";
import { HiLocationMarker } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useTicketContext } from '../context/TicketContext';

const TicketCard = ({ticket, loading, content}) => {
    const navigate = useNavigate()
    const { setTicketContent} = useTicketContext()
    const formatDateRange = (date) => {
        const options = {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        };
        const startDate = new Date(date).toLocaleDateString("en-US", options);
        return startDate;
      };

      useEffect(() => {
        setTicketContent(content)
      }, [content])
      

      const handleNavigate = (item) => {
        navigate(`/dashboard/ticket/${item.ticketTitle}`, { state: item });
      };
  return (
    <div className=" flex flex-col w-full  h-screen overflow-x-hidden ml-5 items-start">
    {loading && (<Loader />)}
    <span className="text-[#ffffff] mt-[136px] font-bold text-[16px] ">
      This Week{" "}
      <span className="text-[#808080] font-bold text-[16px] ">
        {" "}
        May 10 - May 17
      </span>
    </span>
    <div className="grid grid-cols-3 gap-6 items-center w-full">
      {ticket.map((item, i) => (
        <div key={i} className="min-w-[477px] h-[400px] mt-[22px] bg-black">
          <img
            src={item.image}
            alt="content"
            className="w-full h-[220px] object-cover"
          />
          <div className="px-[24px]  flex items-start flex-col">
            <span className="mt-6 text-[24px] font-bold font-OpenSans-Bold text-[#ffffff]">
              {item.ticketTitle}
            </span>
            <div className="flex my-4 items-center space-x-5 w-full">
              <span className="text-[16px] font-bold font-OpenSans-Bold text-[#808080]">
                {formatDateRange(item.begin)} - {formatDateRange(item.end)}{" "}
              </span>
              <span className="text-[16px] flex items-center font-bold font-OpenSans-Bold text-[#ffffff]">
                <HiLocationMarker size={20} />
                <span className="text-[#808080]">{item.venue}</span>
              </span>
            </div>
            <div className="flex items-center space-x-5 justify-around pb-5 w-full">
              <button className="bg-[#ffffff] rounded-[8px] text-[#000080] font-bold px-6 py-2.5 font-OpenSans-Bold text-[16px]">
                ${formatToDollars(item.cost)}
              </button>
              <button className="border-[#ffffff] border-2 rounded-[8px] text-[#ffffff] font-bold px-6 py-2.5 font-OpenSans-Bold text-[16px]">
                Available
              </button>
              <button
                onClick={() => handleNavigate(item)}
                className=" flex items-center rounded-[8px] hover:underline text-[#808080] font-bold px-6 py-2.5 font-OpenSans-Bold text-[16px]"
              >
                <span className="text-[16px] text-[#ffffff]">Learn More</span>
                <BsChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TicketCard