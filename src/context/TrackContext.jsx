import React, { useContext, createContext, useState, useEffect } from "react";
import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useStateContext } from ".";

const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
  const { setAllMusic } = useStateContext()
  const { contract } = useContract("0xd270A86dFEd39123637F462d26B93612E5ad80e7");
  const { mutateAsync: uploadMusic, isLoading } = useContractWrite(contract, "uploadMusic")

  const address = useAddress()

  const call = async ( _musicHash, _videoHash, _imageHash, _title, _price) => {
    try {
      const data = await uploadMusic([ _musicHash, _videoHash, _imageHash, _title, _price ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
    const { data } = useContractRead(contract, "getAllContent", address)

    const getMusicTracks = async (owner) => {
     const result = await contract.call("getAllContent", owner)
      const parsedMusic = result.map((content, i) => ({
        audio: content.musicFile,
        video: content.videoFile,
        image: content.image,
        title: content.title,
        price: ethers.utils.formatEther(content.price.toString()),
        owner: content.owner,
        collected: content.amountCollected.toNumber(),
      }));
      console.log(parsedMusic)
      return parsedMusic;
    };
    getMusicTracks()

  return <TrackContext.Provider value={{
    isLoading,
    uploadMusic: call,
    data,
    getMusicTracks,
    contract,
    address
  }}>{children}</TrackContext.Provider>;
};

export const useTrackContext = () => useContext(TrackContext);
