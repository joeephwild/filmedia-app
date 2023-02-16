import { Web3Storage, File, getFilesFromPath } from "web3.storage";
//import { resolve } from "path";

const WEB3STORAGE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA4MEFEZTkwMjFkRjMwNEJBODVmRDk3NDNFN0E0MERiN2I5OGEyODkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzUyNjIxMzg3NTQsIm5hbWUiOiJGaWxtZWRpYSJ9.R6BQs5BQ9hH4BgNPuFvA6beK-iWLK4htamwwo44vM2U";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await storeEventData(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function storeEventData(req, res) {
  const body = req.body;
  try {
    const files = await makeFileObjects(body);
    const cid = await storeFiles(files);
    return res.status(200).json({ success: true, cid: cid });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Error creating event", success: false });
  }
}

async function makeFileObjects(body, event) {
  const buffer = Buffer.from(JSON.stringify(body));

  const file = event.target.files[0]

  file.push(new File([buffer], "data.json"));
  return file;
}

export const makeStorageClient = () => {
  return new Web3Storage({ token: WEB3STORAGE_TOKEN });
};
