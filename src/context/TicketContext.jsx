import React, { useContext, createContext, useState, useEffect } from "react";
import { useContract, useContractMetadata, useContractRead, useContractWrite, useNFT, useNFTs } from "@thirdweb-dev/react";
import { useCreateStream } from "@livepeer/react";
import { ethers } from "ethers";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const { contract } = useContract("0x0C8b911AF2AE745417EE6EFa4Ad331Fc226F2fDE");
    const { mutateAsync: createToken, isLoading } = useContractWrite(contract, "createToken");
    const { mutateAsync: executeSale } = useContractWrite(contract, "executeSale")
   

    const call = async ( tokenURI, price, _start, _end, _supply ) => {
        try {
          const data = await createToken([ tokenURI, price, _start, _end, _supply ]);
          console.info("contract call successs", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      }

      
  const buyTicket = async (pId, _quantity, amount) => {
    const data = await contract.call('executeSale', pId, _quantity, { value: ethers.utils.parseEther(amount)});
    return data;
  }

      const payTicketFee = async (tokenId, _quantity, price) => {
        try {
          const data = await executeSale([ tokenId, _quantity ]);
          console.info("contract call successs", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      }
    

  return <TicketContext.Provider value={{
    isLoading,
    createToken: call,
    executeSale: payTicketFee, 
    buyTicket,
    contract
  }}>{children}</TicketContext.Provider>;
};

export const useTicketContext = () => useContext(TicketContext);
