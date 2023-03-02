import React, { useContext, createContext, useState, useEffect } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
  const { contract } = useContract(
    "0x5cA4280cffA430e4bE6ea06E61953bB20b56154a"
  );
  const { mutateAsync: createPodcast, isLoading } = useContractWrite(
    contract,
    "createPodcast"
  );

  return <TrackContext.Provider value={{}}>{children}</TrackContext.Provider>;
};

export const useTrackContext = () => useContext(TrackContext);
