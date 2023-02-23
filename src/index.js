import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { apolloClient } from "./apollo";

const client = new ApolloClient({
  uri: "https://api.cyberconnect.dev/testnet/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider desiredChainId={ChainId.BinanceSmartChainTestnet}>
    <Router>
      <ApolloProvider client={apolloClient}>
        <StateProvider>
          <App />
        </StateProvider>
      </ApolloProvider>
    </Router>
  </ThirdwebProvider>
);
