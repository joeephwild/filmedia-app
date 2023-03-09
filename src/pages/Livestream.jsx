import React, { useMemo, useState } from "react";

import { useCreateStream } from "@livepeer/react";
import { Link, useNavigate } from "react-router-dom";

const Livestream = () => {
  const [streamKey, setStreamKey] = useState();
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate(`/stream/${item?.name}`, { state: item });
  };

  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamKey ? { name: streamKey } : null);

  const handleStram = async () => {
    await createStream?.();
  };

  const isLoading = useMemo(() => status === "loading", [status]);

  return (
    <div className="min-h-screen flex items-center justify-center w-full flex-col">
      <span className="text-[48px] font-bold font-OpenSans-Bold text-[#ffffff]">
        Ready to livestream?
      </span>
      <div className="flex items-center space-x-2">
        <Link
          className="text-[18px] mb-3 hover:underline font-bold font-OpenSans-Bold text-[#ffffff]"
          to="https://obsproject.com/"
        >
          Download an OBS for liveStream
        </Link>
        or
        <Link
          className="text-[18px] mb-3 hover:underline font-bold font-OpenSans-Bold text-[#ffffff]"
          to="https://livepeer.studio/"
        >
          {" "}
          Login and sign up at Livepeer Studio's
        </Link>
      </div>
      <label className="text-lg font-OpenSans-Bold">Stream Name</label>
      <input
        type="text"
        placeholder="Stream name"
        value={streamKey}
        className="text-black w-[75%] border-none rounded-[8px] placeholder:text-black  bg-white px-6 py-3"
        onChange={(e) => setStreamKey(e.target.value)}
      />
      <div className="flex flex-col">
        {stream && (
          <button
            className="bg-white px-5 py-2.5 text-[#000080] cursor-pointer text-lg font-bold rounded-[8px] font-OpenSans-Bold mt-6"
            onClick={() => handleNavigate(stream)}
          >
            View Stream
          </button>
        )}
        {!stream && (
          <button
            onClick={async () => handleStram()}
            disabled={isLoading || !createStream}
            className="bg-white px-5 py-2.5 text-[#000080] cursor-pointer text-lg font-bold rounded-[8px] font-OpenSans-Bold mt-6"
          >
            Create Stream
          </button>
        )}
      </div>
    </div>
  );
};

export default Livestream;
