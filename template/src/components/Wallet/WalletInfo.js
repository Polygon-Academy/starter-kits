import {useWeb3React} from '@web3-react/core';
import styles from './wallet.module.css'


const WalletInfo = (props) => {
  const {active, chainId, account, error} = useWeb3React();
  return (

  <div className={styles.walletInfo}>
    <p>Create React Ethereum DApp</p>
    <p>active: {active.toString()}</p>
    {active && (
    <div >
      <p>account: {account}</p>
      <p>chainId: {chainId}</p>
    </div>
    )}
    {error && <p className="text-error">error: {error.message}</p>}
  </div>
  );
};

export default WalletInfo;
