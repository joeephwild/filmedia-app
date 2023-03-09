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

const NotifiCard = () => {

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
    <NotifiContext
      dappAddress="filmapp"
      env="Development"
      signMessage={async (message) => {
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
        cardId="cf5bff770906478882187dfced5fee16"
        inputLabels={inputLabels}
        inputSeparators={inputSeparators}
        darkMode //optional
      />
    </NotifiContext>
  );
};
