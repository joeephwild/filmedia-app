import axios from "axios";
import {
  getHeader,
  pinata_apikey,
  pinata_secret,
  readHeader,
  sendJsonHeader,
} from "./confg";

export async function sendJSONToIPFS (category, description, name, coverImage) {
  const url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
  const data = JSON.stringify({
    pinataMetadata: {
      name: "listdata",
    },
    pinataOptions: {
      cidVersion: 1,
    },
    pinataContent: {
      profileInfo: {
        category: category,
        description: description,
        name: name,
        coverImage: coverImage
      },
    },
  });
  const sendJson = await axios.post(url, data, sendJsonHeader);
  const hash = `ipfs://${sendJson.data.IpfsHash}`;
  return hash;
};

export async function sendFileToIPFS (file) {
  const formData = new FormData();
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS"
  formData.append("file", file);
  const opts = JSON.stringify({
    cidVersion: 0,
  })
  formData.append('pinataOptions', opts);
  const options = {
    maxBodyLength: "Infinity",
    headers: {
    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      pinata_api_key: pinata_apikey,
      pinata_secret_api_key: pinata_secret,
      Accept: 'text/plain',
  }
}
  const resFile = await axios.post(url, formData, options);
  return resFile.data.IpfsHash
}
