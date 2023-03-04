import React from 'react'
import {Notifi} from "../components/NotifiCard.tsx";
import { DAppProvider, Mainnet, useEthers } from "@usedapp/core";


const Playlist = () => {
  const config = {
    readOnlyChainId: Mainnet.chainId,
  }

  // const ConnectButton = () => {
  //   const {account, deactivate, activateBrowserWallet} = useEthers()
  //   if(account) return <button onClick={()=> deactivate()}>Dis</button>
  //   else return <button onClick={()=> activateBrowserWallet()}></button>
  // }

  return (
    <div className='h-screen'>
      Playlist
      <DAppProvider config={config}>
           <Notifi/>
           {/* <ConnectButton className='ml-56 bg-red-500 p-5 mt-72'/> */}
      </DAppProvider>
      
    </div>
  )
}

export default Playlist