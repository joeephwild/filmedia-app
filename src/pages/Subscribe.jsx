import React from 'react';
import { DAppProvider, Mainnet, useEthers, BNB } from "@usedapp/core";
import { Notifi } from '../components/NotifiCard.tsx';

const Subscribe = () => {
    const config = {
        readOnlyChainId: Mainnet.chainId ,
    }
    
return (
    <div className="absolute z-10 my-9 mx-20">
      <DAppProvider config={config}>
        <div className='card' style={{width: 900}}>
          <Notifi className=''/>
        </div>
      </DAppProvider>
  </div>
  )
}

export default Subscribe
