import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider desiredChainId={ChainId.BinanceSmartChainTestnet}>
    <Router>
      <StateProvider>
        <App />
      </StateProvider>
    </Router>
  </ThirdwebProvider>
);
