import React from 'react';
import {Notifi} from "../components/NotifiCard.tsx";
import { DAppProvider, Mainnet, useEthers } from "@usedapp/core";

const Subscribe = () => {
    const config = {
        readOnlyChainId: Mainnet.chainId,
    }
    
return (
    <div className="absolute z-10 my-9">
      <DAppProvider config={config}>
          <Notifi/>
      </DAppProvider>
  </div>
  )
}

export default Subscribe
