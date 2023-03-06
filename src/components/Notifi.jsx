import { arrayify } from '@ethersproject/bytes';
import {
  NotifiContext,
  NotifiInputFieldsText,
  NotifiInputSeparators,
  NotifiSubscriptionCard,
} from '@notifi-network/notifi-react-card';
import '@notifi-network/notifi-react-card/dist/index.css';
import { useEthers } from '@usedapp/core';
import React, { useMemo } from 'react';
import { providers } from 'ethers';

const Notifi = () => {
  const { account, library } = useEthers();
  const signer = useMemo(() => {
    if (library instanceof providers.JsonRpcProvider) {
      return library.getSigner();
    }
    return undefined;
  }, [library]);


  const inputLabels = {
    label: {
      email: 'Email',
      sms: 'Text Message',
      telegram: 'Telegram',
    },
    placeholderText: {
      email: 'Email',
    },
  };

  const inputSeparators = {
    // smsSeparator: {
    //   content: 'OR',
    // },
    emailSeparator: {
      content: 'OR',
    },
  };

  return (
    <div className='w-[80%] h-full mt-[10px]'>
    <NotifiContext
      dappAddress="filmapp"
      env="Development"
      signMessage={async (message) => {
        const result = await signer.signMessage(message);
        return arrayify(result);
      }}
      walletPublicKey={account}
      walletBlockchain="BINANCE" // NOTE - Please update to the correct chain name.
      //If Polygon, use "POLYGON"
      //If Arbitrum, use "ARBITRUM"
      //If Binance, use "BINANCE"
    >
      <NotifiSubscriptionCard
        cardId="ae2fc63ed6ef4b289ae3735f0a32da9b"
        inputLabels={inputLabels}
        inputSeparators={inputSeparators}
       inputs
      />
    </NotifiContext>
    </div>
  )
}

export default Notifi