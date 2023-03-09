import React, { useContext, createContext, useState, useEffect } from "react";
import CyberConnect, {
  Env
} from '@cyberlab/cyberconnect-v2';
import { ethers } from "ethers";

import * as LitJsSdk from '@lit-protocol/lit-node-client';
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";



const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
const provider = new ethers.providers.Web3Provider(window.ethereum)
const [content, setContent] = useState([])

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
const getPodcast = async () => {
  const q = query(
    collection(db, "content"), 
  );

  const querySnapshot = await getDocs(q);
  let account = [];
  querySnapshot.forEach((doc) => {
    account.push({ ...doc.data(), id: doc.id });
  });
  setContent(account);
};

useEffect(() => {
  getPodcast()
}, [])


  return (
    <PodcastContext.Provider
      value={{
        createAPost,
        content
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcastContext = () => useContext(PodcastContext);
