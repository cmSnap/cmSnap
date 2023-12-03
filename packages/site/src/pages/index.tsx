import { useContext, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Web3 } from 'web3';

import { explorerUrls } from '../../../snap/src/explorer';
import {
  Button,
  Card,
  ConnectButton,
  InstallFlaskButton,
  ReconnectButton,
} from '../components';
import { defaultSnapOrigin } from '../config';
import { USDT_ABI } from '../config/abis';
import { MetamaskActions, MetaMaskContext } from '../hooks';
import {
  connectSnap,
  getSnap,
  isLocalSnap,
  sendGetShowArgumentsRequest,
  sendSetExplorerApiKeyRequest,
  sendSetOpenAiApiKeyRequest,
  sendSetShowArgumentsRequest,
  shouldDisplayReconnectButton,
} from '../utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 7.6rem;
  margin-bottom: 7.6rem;

  ${({ theme }) => theme.mediaQueries.small} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: auto;
  }
`;

const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 2.4rem;
  text-align: center;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.primary?.default};
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 64.8rem;
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
`;

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.error?.muted};
  border: 1px solid ${({ theme }) => theme.colors.error?.default};
  color: ${({ theme }) => theme.colors.error?.alternative};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 2.4rem;
  margin-bottom: 2.4rem;
  margin-top: 2.4rem;
  max-width: 60rem;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.small} {
    padding: 1.6rem;
    margin-bottom: 1.2rem;
    margin-top: 1.2rem;
    max-width: 100%;
  }
`;

const Index = () => {
  const [state, dispatch] = useContext(MetaMaskContext);

  const isMetaMaskReady = isLocalSnap(defaultSnapOrigin)
    ? state.isFlask
    : state.snapsDetected;

  const handleConnectClick = async () => {
    try {
      await connectSnap();
      const installedSnap = await getSnap();

      dispatch({
        type: MetamaskActions.SetInstalled,
        payload: installedSnap,
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: MetamaskActions.SetError, payload: error });
    }
  };

  const handleSetOpenAiApiKeyClick = async () => {
    try {
      await sendSetOpenAiApiKeyRequest();
    } catch (error) {
      console.error(error);
      dispatch({ type: MetamaskActions.SetError, payload: error });
    }
  };

  const [chainId, setChainId] = useState('1');
  const explorerUrl = useMemo(() => explorerUrls[chainId], [chainId]);
  const handleSetExplorerApiKeyRequest = async () => {
    try {
      await sendSetExplorerApiKeyRequest(chainId);
    } catch (error) {
      console.error(error);
      dispatch({ type: MetamaskActions.SetError, payload: error });
    }
  };

  const [showArguments, setShowArguments] = useState(false);
  useEffect(() => {
    sendGetShowArgumentsRequest()
      .then((val) => setShowArguments(val))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSetShowArgumentsRequest = async (value: boolean) => {
    try {
      await sendSetShowArgumentsRequest(value);
      setShowArguments(value);
    } catch (error) {
      console.error(error);
      dispatch({ type: MetamaskActions.SetError, payload: error });
    }
  };
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

    const tokenAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174';

    const abi = USDT_ABI;

    const receiver = '0x0000000000000000000000000000000000000000';

    const contract = new web3.eth.Contract(abi, tokenAddress, {
      from: account,
    });

    const amount = '1';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    contract?.methods?.transfer(receiver, amount)?.send().catch(console.log);
  };

  return (
    <Container>
      <Heading>
        Welcome to <Span>cmSnap</Span>
      </Heading>
      <CardContainer>
        {state.error && (
          <ErrorMessage>
            <b>An error happened:</b> {state.error.message}
          </ErrorMessage>
        )}
        {!isMetaMaskReady && (
          <Card
            content={{
              title: 'Install',
              description:
                'Snaps is pre-release software only available in MetaMask Flask, a canary distribution for developers with access to upcoming features.',
              button: <InstallFlaskButton />,
            }}
            fullWidth
          />
        )}
        {!state.installedSnap && (
          <Card
            content={{
              title: 'Connect',
              description:
                'Get started by connecting to and installing the example snap.',
              button: (
                <ConnectButton
                  onClick={handleConnectClick}
                  disabled={!isMetaMaskReady}
                />
              ),
            }}
            disabled={!isMetaMaskReady}
          />
        )}
        {shouldDisplayReconnectButton(state.installedSnap) && (
          <Card
            content={{
              title: 'Reconnect',
              description:
                'While connected to a local running snap this button will always be displayed in order to update the snap if a change is made.',
              button: (
                <ReconnectButton
                  onClick={handleConnectClick}
                  disabled={!state.installedSnap}
                />
              ),
            }}
            disabled={!state.installedSnap}
          />
        )}
        <Card
          content={{
            title: 'Set Blockchain Explorer Api Key',
            description: (
              <div>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <label style={{ marginTop: '3px' }}>chainId:</label>
                  <input
                    id="chainId"
                    type="number"
                    style={{
                      width: '60px',
                      height: '20px',
                      marginLeft: '5px',
                      textAlign: 'center',
                    }}
                    value={chainId}
                    onChange={(changeEvent) =>
                      setChainId(changeEvent.target.value)
                    }
                  />
                </div>
                {explorerUrl ? (
                  <div>
                    <div style={{ paddingBottom: '10px' }}>
                      For the snap to work on this chain, get an API Key from
                      this link and then press the bellow button.
                    </div>
                    <a
                      href={`https://${explorerUrl}/myapikey`}
                      target="_blank"
                      style={{ color: 'white' }}
                    >
                      https://{explorerUrl}/myapikey
                    </a>
                  </div>
                ) : (
                  <div>chain not supported</div>
                )}
              </div>
            ),
            button: (
              <Button
                onClick={handleSetExplorerApiKeyRequest}
                disabled={!state.installedSnap}
              >
                Set
              </Button>
            ),
          }}
          disabled={!state.installedSnap}
        />
        <Card
          content={{
            title: 'Set OpenAI Api Key',
            description: (
              <div>
                <div style={{ paddingBottom: '10px' }}>
                  To get insight on contract method source codes, get an API Key
                  from OpenAI and then press the bellow button.
                </div>
                <a
                  href="https://platform.openai.com/api-keys"
                  target="_blank"
                  style={{ color: 'white' }}
                >
                  https://platform.openai.com/api-keys
                </a>
              </div>
            ),
            button: (
              <Button
                onClick={handleSetOpenAiApiKeyClick}
                disabled={!state.installedSnap}
              >
                Set
              </Button>
            ),
          }}
          disabled={!state.installedSnap}
        />
        <Card
          content={{
            title: 'Show Arguments',
            description:
              'Show arguments used to call the method in the insights. Suggested for developers',
            button: (
              <Button
                onClick={async () =>
                  handleSetShowArgumentsRequest(!showArguments)
                }
                disabled={!state.installedSnap}
              >
                {showArguments ? 'Hide Arguments' : 'Show Arguments'}
              </Button>
            ),
          }}
          disabled={!state.installedSnap}
        />
      </CardContainer>
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
    </Container>
  );
};

export default Index;
