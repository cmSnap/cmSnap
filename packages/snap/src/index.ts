import type {
  OnRpcRequestHandler,
  OnTransactionHandler,
} from '@metamask/snaps-sdk';
import { divider, heading, panel, text } from '@metamask/snaps-sdk';
import type { Component } from '@metamask/snaps-sdk/dist/types/ui/components/panel';

import { getMethodExplanation, setOpenAiApiKey } from './ai';
import {
  decodeFunctionCall,
  filterSourceFilesWithContextAboutTheMethod,
} from './contract';
import {
  getApiUrlOfExplorer,
  getImplementationContractData,
  setExplorerApiKey,
} from './explorer';
import { explorerUrls } from './explorerUrls';
import { getState } from './utils';

export const onTransaction: OnTransactionHandler = async ({
  transaction,
  chainId,
}) => {
  const txData = transaction?.data;
  if (typeof txData !== 'string' || txData === '0x') {
    return {
      content: panel([
        heading(`This transaction does not call a contract's method`),
      ]),
    };
  }
  const chainIdHex = chainId.split(':')[1];
  if (!chainIdHex) {
    return {
      content: panel([heading(`chainId not provided`)]),
    };
  }
  const chainIdStr = String(parseInt(chainIdHex, 16));
  const explorerUrl = explorerUrls[chainIdStr];
  if (!explorerUrl) {
    return {
      content: panel([heading(`Chain ${chainId} explorer not supported`)]),
    };
  }
  const { explorerApiKeys } = await getState();
  const explorerApiKey = explorerApiKeys?.[chainIdStr];
  if (!explorerApiKey) {
    return {
      content: panel([
        heading(
          `Please first provide Api Key for ${explorerUrl} in the dashboard`,
        ),
      ]),
    };
  }
  const contractData = await getImplementationContractData({
    explorerApiUrl: getApiUrlOfExplorer(explorerUrl),
    apiKey: explorerApiKey,
    contractAddress: transaction.to,
  });

  const sourceCode = contractData.SourceCode;
  if (!sourceCode) {
    return {
      content: panel([
        heading(`Warning`),
        text(`Contract source code is not verified`),
      ]),
    };
  }

  const panelComponents: Component[] = [
    heading(`Contract Name`),
    text(contractData.ContractName),
    divider(),
    heading(`Method`),
  ];

  const abi = JSON.parse(contractData.ABI);
  const { method } = decodeFunctionCall(abi, txData);

  if (method) {
    panelComponents.push(text(method));
  } else {
    return {
      content: panel([
        ...panelComponents,
        text('Could not read the method from the ABI'),
      ]),
    };
  }

  const sources = filterSourceFilesWithContextAboutTheMethod(
    sourceCode,
    method,
  );
  const methodExplanation = await getMethodExplanation(sources, method);

  return {
    content: panel([
      ...panelComponents,
      divider(),
      heading(`What it does: (AI generated)`),
      text(String(methodExplanation)),
    ]),
  };
};

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
  switch (request.method) {
    case 'set_openai_api_key':
      return setOpenAiApiKey();
    case 'set_explorer_api_key':
      return setExplorerApiKey(request);
    default:
      throw new Error('Method not found.');
  }
};
