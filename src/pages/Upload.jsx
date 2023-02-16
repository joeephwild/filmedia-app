import React, { useState } from "react";
import { PodcastForm, TicketForm, TrackForm } from "../components";

const Upload = () => {
  const [page, setPage] = useState(1);
  return (
    <section className="flex flex-col h-screen">
      <div class="grid grid-cols-2  p-5 gap-5 flex">
        <div class="items-start">
          <button
            onClick={() => setPage(1)}
            class="bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded"
          >
            Track
          </button>
          <button
            onClick={() => setPage(2)}
            class="bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded"
          >
            Album
          </button>
          <button
            onClick={() => setPage(3)}
            class="bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded"
          >
            Podcast
          </button>
        </div>
      </div>
      {page == 1 && (
         <TrackForm />
      )}

       {page == 3 && (
         <PodcastForm />
      )}
      {page == 2 && (
         <TicketForm />
      )}
    </section>
  );
};

export default Upload;