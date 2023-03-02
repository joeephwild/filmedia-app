import React, { useContext, createContext, useState, useEffect } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
  const { contract } = useContract(
    "0x5cA4280cffA430e4bE6ea06E61953bB20b56154a"
  );
  const { mutateAsync: createPodcast, isLoading } = useContractWrite(
    contract,
    "createPodcast"
  );

  const call = async (_title, _description, _ipfsHash, _price) => {
    try {
      const data = await createPodcast([ _title, _description, _ipfsHash, _price ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  return <PodcastContext.Provider value={{
    isLoading,
    createPodcast: call
  }}>{children}</PodcastContext.Provider>;
};

export const usePodcastContext = () => useContext(PodcastContext);