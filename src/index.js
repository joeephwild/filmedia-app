import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { apolloClient } from "./apollo";
import { TrackProvider } from "./context/TrackContext";
import { TicketProvider } from "./context/TicketContext";
import { PodcastProvider } from "./context/PodcastContext";

const client = new ApolloClient({
  uri: "https://api.cyberconnect.dev/testnet/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider desiredChainId={ChainId.BinanceSmartChainTestnet}>
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
  </ThirdwebProvider>
);
