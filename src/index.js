import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context";
import { createReactClient, LivepeerConfig, studioProvider, } from '@livepeer/react';
import { TrackProvider } from "./context/TrackContext";
import { TicketProvider } from "./context/TicketContext";
import { PodcastProvider } from "./context/PodcastContext";

const client = createReactClient({
  provider: studioProvider({ apiKey: '24797498-709f-4ad3-b348-06e40d3bc888' }),
});
 
const livepeerTheme = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider desiredChainId={ChainId.BinanceSmartChainTestnet}>
   <LivepeerConfig client={client} theme={livepeerTheme}>
    <Router>
      <StateProvider>
        <TrackProvider>
          <TicketProvider>
            <PodcastProvider>
              <App />
            </PodcastProvider>
          </TicketProvider>
        </TrackProvider>
      </StateProvider>
    </Router>
    </LivepeerConfig>
  </ThirdwebProvider>
);
