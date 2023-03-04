import React, { useContext, createContext, useState, useEffect } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import axios from "axios";
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

      const downloadJson = async () => {
        const storage = new ThirdwebStorage();
        const data = await storage.downloadJSON("ipfs://QmWgbcjKWCXhaLzMz4gNBxQpAHktQK6MkLvBkKXbsoWEEy/0")
        return data;
      };

      const payTicketFee = async (tokenId, _quantity) => {
        try {
          const data = await executeSale([ tokenId, _quantity ]);
          console.info("contract call successs", data);
        } catch (err) {
          console.error("contract call failure", err);
        }
      }

      const getPodcasts = async () => {
        const campaigns = await contract.call("getAllTicket");
        console.log(campaigns);
        const parsedPodcast = campaigns.map((campaign, i) => ({
        
        }));
        return parsedPodcast;
      };
    
      useEffect(() => {
        getPodcasts()
      }, )
    

  return <TicketContext.Provider value={{
    isLoading,
    createToken: call,
    executeSale: payTicketFee
  }}>{children}</TicketContext.Provider>;
};

export const useTicketContext = () => useContext(TicketContext);
