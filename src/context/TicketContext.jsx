import React, { useContext, createContext, useState, useEffect } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import axios from "axios";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const { contract } = useContract("0x72FAa5a90b1D9416f2828F0f8D2190a237B02c89");
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

      const downloadJson = async (hash) => {
        const storage = new ThirdwebStorage();
        let result = [];
        const data = await storage.downloadJSON(hash).then((response) => {
         
        });
      };
      downloadJson()

      const payTicketFee = async (tokenId, _quantity) => {
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
    executeSale: payTicketFee
  }}>{children}</TicketContext.Provider>;
};

export const useTicketContext = () => useContext(TicketContext);
