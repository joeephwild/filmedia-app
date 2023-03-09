import { ethers } from "ethers";

export const connectingWithContract = (contractAddress, contractABI) => {
  //Note: Your contractAddress will start with 0x, delete everything between the quotes and paste your contract address.

  let rsvpContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      rsvpContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return rsvpContract;
};

export const formatToDollars = (fee) => {
  const ethToDollarRate = 3000; // $3000 per ether
  const dollarFee = fee * ethToDollarRate;
  return dollarFee;
};
