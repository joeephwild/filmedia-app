import React, { useContext, createContext, useState, useEffect } from "react";
import CyberConnect, {
  Env
} from '@cyberlab/cyberconnect-v2';
import { ethers } from "ethers";



const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
const provider = new ethers.providers.Web3Provider(window.ethereum)

const cyberConnect = new CyberConnect({
  namespace: 'FilMedia Content',
  env: Env.STAGING,
  provider: provider,
  signingMessageEntity: 'FilMedia Content',
});
const createAPost = async(content) => {
  try {
    const postPodcast = await cyberConnect.createPost(content);
    console.log(postPodcast);
    return postPodcast
  } catch (error) {
    console.log(error)
  }
}
  return (
    <PodcastContext.Provider
      value={{
        createAPost
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcastContext = () => useContext(PodcastContext);
