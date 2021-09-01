import React from 'react'
import { useWeb3React } from '@web3-react/core'

import { useEagerConnect, useInactiveListener } from '../../hooks'
import connectorList, { resetWalletConnectConnector } from '../../lib/connectors'
import { Dropdown } from 'semantic-ui-react'

const ConnectWallet = () => {
  const { activate, deactivate, active, error } = useWeb3React();

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);

  const handleClick = (connectorName) => () => {
    activate(connectorList[connectorName]);
  };

  const handleDisconnect = () => {
    deactivate();
  };

  const handleRetry = () => {
    resetWalletConnectConnector(connectorList['WalletConnect']);
    deactivate();
  };

  return (
    <Dropdown text='Wallet' pointing className='link item'>


      {(() => {
        if (active) {
          return <Dropdown.Menu>
            <Dropdown.Item className="button-disconnect" onClick={handleDisconnect}>
              Disconnect Wallet
            </Dropdown.Item>
          </Dropdown.Menu>
        } else {
          if (!error) {
            return <Dropdown.Menu>
              <Dropdown.Item onClick={handleClick('MetaMask')}>MetaMask</Dropdown.Item>
              <Dropdown.Item onClick={handleClick('WalletConnect')}>WalletConnect</Dropdown.Item>
              <Dropdown.Item onClick={handleClick('WalletLink')}>WalletLink</Dropdown.Item>
            </Dropdown.Menu>
          } else {
            return <Dropdown.Menu>
              <Dropdown.Item onClick={handleRetry}>Retry</Dropdown.Item>
            </Dropdown.Menu>
          }
        }
      })()}

    </Dropdown>
  );
};

export default ConnectWallet;
