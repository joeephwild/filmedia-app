import React from "react";
import { DAppProvider, Mainnet, BSCTestnet, TestBNB } from "@usedapp/core";
import { Notifi } from "../components/Notify";


const Subscription = () => {
  const config = {
    readOnlyChainId: TestBNB.chainId,
}
  return (
    <div className="w-full items-center justify-center flex min-h-screen">
      <DAppProvider config={config}>
      <Notifi />
      </DAppProvider>
    </div>
  );
};

export default Subscription;
