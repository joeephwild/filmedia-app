import React, { useContext, createContext, useState, useEffect } from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { ethers } from "ethers";
import axios from "axios";
import { useStateContext } from ".";

const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
  const { 
    allPodcast,
    setAllPodcast} = useStateContext()
  const { contract } = useContract(
    "0xF1e175EBa3D005Bf9253C97aD33F1Fcde1477901"
  );
  const { mutateAsync: createPodcast, isLoading } = useContractWrite(
    contract,
    "createPodcast"
  );
  const { mutateAsync: accessPodcast } = useContractWrite(contract, "accessPodcast")

  const call = async ( _title, _thumbnail, _price, _file, _category) => {
    try {
      const data = await createPodcast([ _title, _thumbnail, _price, _file, _category ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const tipPodcasts = async (id) => {
    try {
      const data = await accessPodcast([ id ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const downloadJson = async (hash) => {
    const storage = new ThirdwebStorage();
    let result = [];
    const data = await storage.downloadJSON(hash).then((response) => {
      result.push(response);
    });
  };

  const getPodcasts = async () => {
    const podcast = await contract.call("getPodcasts");
    const parsedPodcast = podcast.map((campaign, i) => ({
      pid: campaign.id.toNumber(),
      owner: campaign.author,
      price: ethers.utils.formatEther(campaign.price.toString()),
      time: campaign.time.toNumber(),
      image: campaign.thumbnail,
      video: campaign.file,
      title: campaign.title
    }));
    setAllPodcast(parsedPodcast)
    return parsedPodcast;
  };

  useEffect(() => {
    getPodcasts()
  }, [] )

  return (
    <PodcastContext.Provider
      value={{
        isLoading,
        createPodcast: call,
        tipPodcast: tipPodcasts,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcastContext = () => useContext(PodcastContext);
