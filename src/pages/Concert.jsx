import { useContractRead } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormField } from "../components";
import { useTicketContext } from "../context/TicketContext";

const Concert = () => {
  const navigate = useNavigate();
  const { state, i } = useLocation();
  const { contract, buyTicket } = useTicketContext()
  const { data: nft } = useContractRead(contract, "getAllTicket")
  console.log(state.cost);
  const [quantity, setQuantity] = useState("");

  const purchase = async () => {
    try {
      await buyTicket(1, quantity, state.cost);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="">
        <div className="w-[100%] h-screen">
          <div className="flex bg-[linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);] mt-20 h-full flex-col col-span-5 md:col-span-12 lg:col-span-9 xl:col-span-9 text-white row-span-6">
            <div className="grid md:grid-cols-2 grid-cols-1 px-5 h-1/2 m-5 -mt-10 ">
              <div>
                <div className="">
                  <span clspanss="h-full  w-[991px]">
                    <img
                      alt="by aldi sigun on Unsplash"
                      src={state.image}
                      className="mx-auto object-cover rounded-xl h-full"
                    />
                  </span>
                </div>
                <div className="m-5">
                  <div className="">
                    <h1 className="font-bold text-[48px] text-[#ffffff] m-2">
                      {state.ticketTitle}
                    </h1>
                    <div className="font-bold items-center  text-[24px] text-[#808080] flex m-2">
                      <h1>
                        {state.begin} - {state.end}
                      </h1>
                      <div className="font-bold flex m-2">
                        <h1> . See Scheduled Dates and Cities</h1>
                      </div>
                    </div>
                    <h1 className="text-[24px] text-[#808080] m-2 overflow-ellipsis">
                      {state.desc}
                    </h1>
                  </div>
                </div>
              </div>
              <section className="flex flex-col  w-full items-center ">
                <div className=" mx-3 w-[470px] my-9 items-center">
                  <div className="border-2 mt-7  space-y-11 px-6 py-3.5 mx-w-[600px] rounded-[8px] broder-[#f0f0f0]">
                    <div className="flex w-full mt-4 flex-col items-start">
                      <label className="text-lg font-OpenSans-Bold">
                        Select Ticket
                      </label>
                      <select class="w-full font-bold font-OpenSans-Bold bg-[#f0f0f0] rounded-[8px] h-16 text-[#000000]">
                        <option>Early Bird</option>
                        <option>Comedy</option>
                        <option>Inspirational</option>
                        <option>Education</option>
                        <option>Movies</option>
                      </select>
                    </div>

                    <div className="w-full space-x-3 flex items-center">
                      <div className="w-full ">
                        <label className="text-lg font-OpenSans-Bold">Quantity</label>
                        <input
                          type="number"
                          placeholder="1"
                          className="w-full bg-[#f0f0f0] text-[#000000] text-sm border-none  h-16 rounded-[8px]"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                      <div className="flex-col w-full items-center mx-auto">
                        <span className="text-lg font-OpenSans-Bold">
                          Price
                        </span>
                        <span className="text-center  rounded-[8px] h-[54px] bg-white text-[#000080] font-bold flex items-center justify-center w-full font-OpenSans-Bold">
                          $50,000.00
                        </span>
                      </div>
                    </div>

                    <div className="w-full space-x-3 flex items-center">
                      <div className="flex-col w-full items-center mx-auto">
                        <span className="text-lg font-OpenSans-Bold">
                          Total
                        </span>
                        <span className="text-[#808080] font-normal">
                          Gas fee are cost of processing transactions
                        </span>
                        <span className="text-center  rounded-[8px] h-[54px] bg-white text-[#000080] font-bold flex items-center justify-center w-full font-OpenSans-Bold">
                          <div className="flex w-full  justify-around items-center ">
                            <span className="text-[#808080] font-normal border-r-2 pr-9 border-gray-500 text-[16px]">
                              $50,000 + $10 Gas fees
                            </span>
                            <span className="text-[#000080] font-bold text-[16px]">
                              $50,000.00
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>

                    <div className="flex-col w-full items-center mx-auto">
                      <FormField
                        isInput
                        labelName="Name on Ticket"
                        inputType="text"
                        placeholder="Enter a Quantity"
                      />
                    </div>

                    <span className="text-[16px] text-[#808080] font-medium w-[30rem]">
                      Transaction has would be sent to you email address and the
                      Ticket will be will minted to your Ethereum Address.
                    </span>

                    <div onClick={() => purchase()} className="flex items-center justify-center my-6 w-full">
                      <button className="bg-[#ffffff] text-[#000080] rounded-[8px] font-bold text-[24px] px-5 py-2.5">
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concert;
