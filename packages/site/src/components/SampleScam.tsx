import { useContext } from 'react';
import { Web3 } from 'web3';

import { DEPOSIT_MANAGER_ABI } from '../config/abis';
import { MetaMaskContext } from '../hooks';
import { Button } from './Buttons';
import { Card } from './Card';
import { CardContainer } from './CardContainer';

export const SampleScam = () => {
  const [state] = useContext(MetaMaskContext);

  const sendUSDT = async () => {
    await window.ethereum.enable();
    const web3 = new Web3(window.ethereum);
    const [account] = await web3.eth.getAccounts();
    if (!account) {
      // eslint-disable-next-line no-alert
      alert('Wallet not connected');
      return;
    }

    // Get chain id
    const chainId = await web3.eth.getChainId();

    // If the current network is not polygon
    if (chainId !== 137n) {
      const networkConfig = {
        chainId: '0x89',
        chainName: 'Polygon Mainnet',
        rpcUrls: ['https://polygon-rpc.com/'],
        nativeCurrency: {
          name: 'MATIC',
          symbol: 'MATIC',
          decimals: 18,
        },
      };

      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [networkConfig],
      });
    }

    const contractAddress = '0xffb8ed477bc5c2ee3d5d7eb894cbbe9c5167e162';

    const abi = DEPOSIT_MANAGER_ABI;

    const contract = new web3.eth.Contract(abi, contractAddress, {
      from: account,
    });

    const amount = '1000000000000000';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    contract?.methods
      ?.deposit()
      ?.send({ from: account, value: amount })
      .catch(console.log);
  };

  return (
    <CardContainer>
      <Card
        content={{
          title: 'Sample SCAM',
          description: (
            <div style={{ fontWeight: 'bold' }}>
              <p style={{ color: 'red' }}>
                Warning: this is a sample scam to show the usage of the snap.
                Press the button but DO NOT approve the transaction
              </p>
              <p>Press the button below to mint my NFT and win a prize!😍</p>
            </div>
          ),
          button: (
            <Button onClick={sendUSDT} disabled={!state.installedSnap}>
              Mint NFT
            </Button>
          ),
        }}
        disabled={!state.installedSnap}
        fullWidth={true}
      />
    </CardContainer>
  );
};
