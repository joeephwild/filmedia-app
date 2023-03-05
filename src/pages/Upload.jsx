import React, { useState } from "react";
import { PodcastForm, TicketForm, TrackForm } from "../components";
import { PodcastProvider } from "../context/PodcastContext";
import { TrackProvider } from "../context/TrackContext";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { TicketProvider } from "../context/TicketContext";

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: "24797498-709f-4ad3-b348-06e40d3bc888",
  }),
});

const Upload = () => {
  const [page, setPage] = useState(1);
  return (
    <LivepeerConfig client={livepeerClient}>
      <section className="flex flex-col  h-screen">
        <div class="grid grid-cols-2  p-5 gap-5">
          <div class="items-start flex">
            <button
              onClick={() => setPage(1)}
              className={
                page
                  ? `bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded`
                  : `bg-white text-black`
              }
            >
              Track
            </button>
            <button
              onClick={() => setPage(2)}
              className={
                page
                  ? `bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded`
                  : `bg-white text-black`
              }
            >
              Ticket
            </button>
            <button
              onClick={() => setPage(3)}
              className={
                page
                  ? `bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded`
                  : `bg-white text-black`
              }
            >
              Podcast
            </button>
          </div>
        </div>
        {page === 1 && (
          <TrackProvider>
            <TrackForm />
          </TrackProvider>
        )}
        {page === 2 && (
          <TicketProvider>
            <TicketForm />
          </TicketProvider>
        )}
        {page === 3 && (
          <PodcastProvider>
            <PodcastForm />
          </PodcastProvider>
        )}
      </section>
    </LivepeerConfig>
  );
};

export default Upload;
