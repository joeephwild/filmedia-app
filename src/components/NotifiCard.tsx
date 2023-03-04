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

export const Notifi: React.FC = () => {
  const { account, library } = useEthers();
  const signer = useMemo(() => {
    if (library instanceof providers.JsonRpcProvider) {
      return library.getSigner();
    }
    return undefined;
  }, [library]);

  if (account === undefined || signer === undefined) {
    // account is required
    return null;
  }

  const inputLabels: NotifiInputFieldsText = {
    label: {
      email: 'Email',
      sms: 'Text Message',
      telegram: 'Telegram',
    },
    placeholderText: {
      email: 'Email',
    },
  };

  const inputSeparators: NotifiInputSeparators = {
    smsSeparator: {
      content: 'OR',
    },
    emailSeparator: {
      content: 'OR',
    },
  };

  return (
    <NotifiContext
      dappAddress="filmapp"
      env="Development"
      signMessage={async (message: Uint8Array) => {
        const result = await signer.signMessage(message);
        return arrayify(result);
      }}
      walletPublicKey={account}
      walletBlockchain="ETHEREUM" // NOTE - Please update to the correct chain name.
      //If Polygon, use "POLYGON"
      //If Arbitrum, use "ARBITRUM"
      //If Binance, use "BINANCE"
    >
      <NotifiSubscriptionCard
        cardId="ae2fc63ed6ef4b289ae3735f0a32da9b"
        inputLabels={inputLabels}
        inputSeparators={inputSeparators}
        darkMode //optional
      />
    </NotifiContext>
  );
};