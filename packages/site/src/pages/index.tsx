import { useContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import { explorerUrls } from '../../../snap/src/explorer';
import {
  Button,
  Card,
  ConnectButton,
  InstallFlaskButton,
  ReconnectButton,
} from '../components';
import { defaultSnapOrigin } from '../config';
import { MetamaskActions, MetaMaskContext } from '../hooks';
import {
  connectSnap,
  getSnap,
  isLocalSnap,
  sendSetExplorerApiKeyRequest,
  sendSetOpenAiApiKeyRequest,
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

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;

  ${({ theme }) => theme.mediaQueries.small} {
    font-size: ${({ theme }) => theme.fontSizes.text};
  }
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

const Notice = styled.div`
  background-color: ${({ theme }) => theme.colors.background?.alternative};
  border: 1px solid ${({ theme }) => theme.colors.border?.default};
  color: ${({ theme }) => theme.colors.text?.alternative};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 2.4rem;
  margin-top: 2.4rem;
  max-width: 60rem;
  width: 100%;

  & > * {
    margin: 0;
  }

  ${({ theme }) => theme.mediaQueries.small} {
    margin-top: 1.2rem;
    padding: 1.6rem;
  }
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
      </CardContainer>
    </Container>
  );
};

export default Index;
