import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bell, upload } from "../assets";
import { Card, Videos } from "../components";
import { useStateContext } from "../context";

const Library = () => {
  const navigate = useNavigate();
  const { accounts, podcast, artist } = useStateContext();
  const [tab, setTab] = useState("playlist");

  const handleNavigate = (item) => {
    navigate(`/dashboard/profile/${item.handle}`, { state: item });
  };

  return (
    <section className="h-screen">
      <div className="p-5">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2" role="presentation">
            <button
              onClick={() => setTab("playlist")}
              id="show-playlists"
              type="button"
              role="tab"
              aria-controls="playlists-content"
              aria-selected="false"
              className={`${
                tab === "playlist"
                  ? "bg-white p-4 text-[#000080]"
                  : "inline-block p-4 bg-gray-100 rounded-lg active dark:bg-gray-800 dark:text-blue-500"
              }`}
            >
              Playlists
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              onClick={() => setTab("artist")}
              id="show-artists"
              type="button"
              role="tab"
              aria-controls="artists-content"
              aria-selected="false"
              className={`${
                tab === "artist"
                  ? "bg-white p-4 text-[#000080]"
                  : "inline-block p-4 bg-gray-100 rounded-lg active dark:bg-gray-800 dark:text-blue-500"
              }`}
            >
              Artists
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              onClick={() => setTab("podcast")}
              id="show-podcasts"
              type="button"
              role="tab"
              aria-controls="podcasts-content"
              aria-selected="false"
              className={`${
                tab === "podcast"
                  ? "bg-white p-4 text-[#000080]"
                  : "inline-block p-4 bg-gray-100 rounded-lg active dark:bg-gray-800 dark:text-blue-500"
              }`}
            >
              Podcasts
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              onClick={() => setTab("albums")}
              id="show-albums"
              type="button"
              role="tab"
              aria-controls="albums-content"
              aria-selected="false"
              className={`${
                tab === "albums"
                  ? "bg-white p-4 text-[#000080]"
                  : "inline-block p-4 bg-gray-100 rounded-lg active dark:bg-gray-800 dark:text-blue-500"
              }`}
            >
              Albums
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              onClick={() => setTab("allcreator")}
              id="show-assets"
              type="button"
              role="tab"
              aria-controls="assets-content"
              aria-selected="false"
              className={`${
                tab === "allcreator"
                  ? "bg-white p-4 text-[#000080]"
                  : "inline-block p-4 bg-gray-100 rounded-lg active dark:bg-gray-800 dark:text-blue-500"
              }`}
            >
              Creators
            </button>
          </li>
        </ul>
      </div>

      <div>
        {/** artist */}
        {tab === "artist" && (
          <div>
            <h1 className="m-3 text-xl font-bold">Artists</h1>
            <div className="relative flex items-center group">
              <div className="relative flex w-full h-full overflow-y-hidden scrollbar-none scroll-smooth whitespace-nowrap">
                {artist.map((item, id) => (
                  <Card
                    content={item}
                    key={id}
                    handleClick={() => handleNavigate(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/**podcast */}
        {tab === "podcast" && (
          <div>
            <h1 className="m-3 text-xl font-bold">Podcat</h1>
            <div className="relative flex items-center group">
              <div className="relative grid grid-cols-5 w-full h-full overflow-y-hidden scrollbar-none scroll-smooth whitespace-nowrap">
                {podcast.map((item, id) => (
                  <Card
                    content={item}
                    key={id}
                    handleClick={() => handleNavigate(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "allcreator" && (
          <div>
            <h1 className="m-3 text-xl font-bold">All Creators</h1>
            <div className="relative flex items-center group">
              <div className="relative grid grid-cols-5 w-full h-full overflow-y-hidden scrollbar-none scroll-smooth whitespace-nowrap">
                {accounts.map((item, id) => (
                  <Card
                    content={item}
                    key={id}
                    handleClick={() => handleNavigate(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "podcast" && (
          <div>
            <h1 className="m-3 text-xl font-bold">All Content</h1>
             <Videos />
          </div>
        )}
      </div>
    </section>
  );
};

export default Library;
