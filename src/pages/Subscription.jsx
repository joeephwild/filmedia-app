import React from 'react';
import { DAppProvider, Mainnet, useEthers } from "@usedapp/core";
import Notifi from '../components/Notifi';

const Subscription = () => {
  const config = {
    
  }
  return (
   <DAppProvider config={Mainnet}>
    <div className='w-full items-center justify-center flex min-h-screen' >
      <Notifi />
    </div>
   </DAppProvider>
  )
}

export default Subscription 