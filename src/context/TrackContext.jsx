import React, { useContext, createContext, useState, useEffect } from "react";
import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useStateContext } from ".";

const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
  const { setAllMusic } = useStateContext()
  const { contract } = useContract("0x56a48eF3c0F06B55F5A97417481FA77579478799");
  const { mutateAsync: uploadMusic, isLoading } = useContractWrite(contract, "uploadMusic")
  const { mutateAsync: buyMusic } = useContractWrite(contract, "buyMusic")
  const address = useAddress()

  const call = async ( _musicHash, _videoHash, _imageHash, _title, _price) => {
    try {
      const data = await uploadMusic([ _musicHash, _videoHash, _imageHash, _title, _price ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  const getTracks = async (owner) => {
    const allTracks = await contract.call("getMyContent", owner);

    const parsedTracks = allTracks.map((content, i) => ({
      audio: content.musicFile,
      video: content.videoFile,
      image: content.image,
      title: content.title,
      cost: ethers.utils.formatEther(content.price.toString()),
      artist: content.owner
    }));
    return parsedTracks;
  }

  const purchaseTrack = async (index) => {
    try {
      const data = await buyMusic([ index ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  return <TrackContext.Provider value={{
    isLoading,
    uploadMusic: call,
    contract,
    address,
    getTracks,
    purchaseTrack
  }}>{children}</TrackContext.Provider>;
};

export const useTrackContext = () => useContext(TrackContext);
