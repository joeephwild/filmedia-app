import React, { useState } from "react";
import { PodcastForm, TicketForm, TrackForm } from "../components";

const Upload = () => {
  const [page, setPage] = useState(1);
  return (
    <section className="flex flex-col  h-screen">
      <div class="grid grid-cols-2  p-5 gap-5">
        <div class="items-start">
          <button
            onClick={() => setPage(1)}
            className={page ? `bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded` : `bg-white text-black`}
          >
            Track
          </button>
          <button
            onClick={() => setPage(2)}
            className={page? `bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded` : `bg-white text-black`}
          >
            Ticket
          </button>
        </div>
      </div>
      {page === 1 && ( 
         <TrackForm />
      )}
      {page === 2 && (
         <TicketForm />
      )}
    </section>
  );
};

export default Upload;
