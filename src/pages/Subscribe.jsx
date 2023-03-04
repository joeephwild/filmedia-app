// import React from 'react';
// import {Notifi} from "../components/NotifiCard.tsx";
// import { DAppProvider, Mainnet, useEthers } from "@usedapp/core";

// const Subscribe = () => {
    // const config = {
    //     readOnlyChainId: Mainnet.chainId,
    // }
    
    // const ConnectButton = () => {
    //   const {account, deactivate, activateBrowserWallet} = useEthers()
    //   if(account) return <button onClick={()=> deactivate()}>Dis</button>
    //   else return <button onClick={()=> activateBrowserWallet()}></button>
    // }

//   return (
//     <div className="absolute z-10 my-9">
//       <h1>
//       subscribe now!!!!111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
//       {/* <DAppProvider config={config}>
//           <Notifi/>
//             <ConnectButton className='ml-56 bg-red-500 p-5 mt-72'/>
//       </DAppProvider> */}
//     </h1>
//   </div>
//   )
// }

// export default Subscribe

import { Banner } from "../components";
import React from "react";


const Subscribe = () => {

  return (
    <div className='h-screen'>Playlist</div>
    // <section className="h-screen items-start">
    //   <div>
    //     <Banner />
    //   </div>
    // </section>
  );
};

export default Subscribe;