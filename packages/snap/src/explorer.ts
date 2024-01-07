import type { JsonRpcRequest } from '@metamask/snaps-sdk';

import { explorerUrls } from './explorerUrls';
import type { GetContractResponse, SnapStoreData } from './types';
import { getState, requestSnapPrompt } from './utils';

export function getApiUrlOfExplorer(explorerUrl: string) {
  return `https://${
    explorerUrl.match(/\./gu)?.length === 1
      ? `api.${explorerUrl}`
      : `api-${explorerUrl}`
  }`;
}

export async function setExplorerApiKey(
  request: JsonRpcRequest<Record<string, any>>,
) {
  const chainId: string = request?.params?.chainId;

  if (!chainId) {
    throw new Error('chainId param not provided');
  }

  const explorerUrl = explorerUrls[chainId];
  if (!explorerUrl) {
    throw new Error(`${chainId} not supported yet`);
  }

  const explorerApiKey = await requestSnapPrompt(`${explorerUrl} Api Key`);

  if (explorerApiKey !== null) {
    const state = await getState();
    const newState: SnapStoreData = {
      ...state,
      explorerApiKeys: {
        ...state.explorerApiKeys,
        [chainId]: explorerApiKey,
      },
    };
    await snap.request({
      method: 'snap_manageState',
      params: {
        operation: 'update',
        newState,
      },
    });
  }

  return null;
}

export async function getContractData({
  explorerApiUrl,
  apiKey,
  contractAddress,
}: {
  explorerApiUrl: string;
  apiKey: string;
  contractAddress: string;
}): Promise<GetContractResponse> {
  const contractDataResponse = await fetch(
    `${explorerApiUrl}/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${apiKey}`,
  );
  return contractDataResponse.json();
}

export async function getImplementationContractData({
  explorerApiUrl,
  apiKey,
  contractAddress,
}: {
  explorerApiUrl: string;
  apiKey: string;
  contractAddress: string;
}) {
  let contractData = await getContractData({
    explorerApiUrl,
    apiKey,
    contractAddress,
  });
  while (contractData.result[0]?.Proxy === '1') {
    contractData = await getContractData({
      explorerApiUrl,
      apiKey,
      contractAddress: contractData.result[0].Implementation,
    });
  }
  return contractData.result[0];
}
