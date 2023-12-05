import type { JsonRpcRequest } from '@metamask/snaps-sdk';

import { explorerUrls } from './explorerUrls';
import type { SnapStoreData } from './types';
import { getState, requestSnapPrompt } from './utils';

/**
 *
 * @param explorerUrl
 */
export function getApiUrlOfExplorer(explorerUrl: string) {
  return `https://${
    explorerUrl.match(/\./gu)?.length === 1
      ? `api.${explorerUrl}`
      : `api-${explorerUrl}`
  }`;
}

/**
 *
 * @param request
 */
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
