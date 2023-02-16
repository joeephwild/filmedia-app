// importing axios
import axios from "axios";

const WEB3_STORAGE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA4MEFEZTkwMjFkRjMwNEJBODVmRDk3NDNFN0E0MERiN2I5OGEyODkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzUyNjIxMzg3NTQsIm5hbWUiOiJGaWxtZWRpYSJ9.R6BQs5BQ9hH4BgNPuFvA6beK-iWLK4htamwwo44vM2U";

const saveToIPFS = async (file) => {
  // create a new multipart form data
  const formData = new FormData();
  // add file to the form data
  formData.append("file", file);

  const config = {
    method: "post",
    url: "https://api.web3.storage/upload",
    headers: {
      Authorization: `Bearer ${WEB3_STORAGE_TOKEN}`,
      "Content-Type": "text/plain",
    },
    data: formData,
  };

  // Posting the form data to the IPFS API
  const response = await axios(config);
  // returning the CID
  return response.data.cid;
};

export default saveToIPFS;
