import { ethers } from "ethers";


export default function getContract(contractAddress, contractAbi) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );
  return contract;
  }

  /**
   *     // Creating a new provider
     
      // Returning the contract
      return contract;
   */