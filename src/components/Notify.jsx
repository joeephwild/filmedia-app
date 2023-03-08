import { arrayify } from '@ethersproject/bytes';
import {
  NotifiContext,
  NotifiInputFieldsText,
  NotifiInputSeparators,
  NotifiSubscriptionCard,
} from '@notifi-network/notifi-react-card';
import '@notifi-network/notifi-react-card/dist/index.css';
import { useAddress } from '@thirdweb-dev/react';
import { useEthers } from '@usedapp/core';
import { providers } from 'ethers';
import React, { useMemo } from 'react'


export const Notifi = () => {
  const { account, library } = useEthers();
  const signer = useMemo(() => {
    if (library instanceof providers.JsonRpcProvider) {
      return library.getSigner();
    }
    return undefined;
  }, [library]);
  const address = useAddress()

  if (address === undefined) {
    // account is required
    return null;
  }

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
    smsSeparator: {
      content: 'OR',
    },
    emailSeparator: {
      content: 'OR',
    },
  };

  return (
    <NotifiContext
      dappAddress="Filmedia"
      env="Development"
      signMessage={async (message) => {
        const result = await signer.signMessage(message);
        return arrayify(result);
      }}
      walletPublicKey={address}
      walletBlockchain="BINANCE" // NOTE - Please update to the correct chain name.
      //If Polygon, use "POLYGON"
      //If Arbitrum, use "ARBITRUM"
      //If Binance, use "BINANCE"
    >
      <NotifiSubscriptionCard
        cardId="b206b75d1fbf4cd0bc79e594315308fc"
        inputLabels={inputLabels}
        inputSeparators={inputSeparators}
        darkMode //optional
      />
    </NotifiContext>
  );
};

