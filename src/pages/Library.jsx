import React from "react";
import { useNavigate } from "react-router-dom";
import { bell, upload } from "../assets";

const Library = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen">
      <div className="p-5">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2" role="presentation">
            <button
              id="show-playlists"
              type="button"
              role="tab"
              aria-controls="playlists-content"
              aria-selected="false"
              className="inline-block p-4 bg-gray-100 rounded-lg active dark:bg-gray-800 dark:text-blue-500"
            >
              Playlists
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              id="show-artists"
              type="button"
              role="tab"
              aria-controls="artists-content"
              aria-selected="false"
              className="inline-block p-4 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Artists
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              id="show-podcasts"
              type="button"
              role="tab"
              aria-controls="podcasts-content"
              aria-selected="false"
              className="inline-block p-4 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Podcasts
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              id="show-albums"
              type="button"
              role="tab"
              aria-controls="albums-content"
              aria-selected="false"
              className="inline-block p-4 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Albums
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              id="show-assets"
              type="button"
              role="tab"
              aria-controls="assets-content"
              aria-selected="false"
              className="inline-block p-4 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Assets
            </button>
          </li>
        </ul>
      </div>
      <div id="tabContentExample">
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="playlists-content"
          role="tabpanel"
          aria-labelledby="show-playlists"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="artists-content"
          role="tabpanel"
          aria-labelledby="show-artists"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="podcasts-content"
          role="tabpanel"
          aria-labelledby="show-podcasts"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="albums-content"
          role="tabpanel"
          aria-labelledby="show-albums"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Library;
