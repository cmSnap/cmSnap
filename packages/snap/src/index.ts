import { Interface } from '@ethersproject/abi';
import type {
  JsonRpcRequest,
  OnRpcRequestHandler,
  OnTransactionHandler,
} from '@metamask/snaps-sdk';
import { divider, heading, panel, text } from '@metamask/snaps-sdk';
import type { Component } from '@metamask/snaps-sdk/dist/types/ui/components/panel';

import { getMethodExplanation, setOpenAiApiKey } from './ai';
import {
  explorerUrls,
  getApiUrlOfExplorer,
  setExplorerApiKey,
} from './explorer';
import type { GetContractResponse, SnapStoreData } from './types';
import { getState } from './utils';

const InputDataDecoder = require('ethereum-input-data-decoder');

export type DecodedCall = {
  inputs: any[];
  types: string[];
  names: string[];
  method: string;
};

/**
 *
 * @param abi
 * @param input
 */
function decodeFunctionCall(abi: any[], input: string): DecodedCall {
  const decoder = new InputDataDecoder(abi);
  const { method, names, types } = decoder.decodeData(input);
  const iface = new Interface(abi);
  return {
    method,
    inputs: iface.decodeFunctionData(method, input) as any[],
    types,
    names,
  };
}

export const onTransaction: OnTransactionHandler = async ({
  transaction,
  chainId,
}) => {
  const txData = transaction?.data;
  const chainIdStr = chainId.split(':')[1];
  if (typeof txData !== 'string' || txData === '0x' || !chainIdStr) {
    return null;
  }
  const explorerUrl = explorerUrls[chainIdStr];
  if (!explorerUrl) {
    return null;
  }
  const { explorerApiKeys, showArguments } = await getState();
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
  const contractDataResponse = await fetch(
    `${getApiUrlOfExplorer(
      explorerUrl,
    )}/api?module=contract&action=getsourcecode&address=${
      transaction.to
    }&apikey=${explorerApiKey}`,
  );
  let json: GetContractResponse = await contractDataResponse.json();
  while (json.result[0]?.Proxy === '1') {
    const contractImplementationResponse = await fetch(
      `${getApiUrlOfExplorer(
        explorerUrl,
      )}/api?module=contract&action=getsourcecode&address=${
        json.result[0].Implementation
      }&apikey=${explorerApiKey}`,
    );
    json = await contractImplementationResponse.json();
  }
  const result = json.result[0];

  const abi = JSON.parse(json.result[0].ABI);
  const { method, inputs, names } = decodeFunctionCall(abi, txData);

  const sourceCode = result.SourceCode;
  if (!sourceCode) {
    return {
      content: panel([
        heading(`Warning`),
        text(`Contract source code is not verified`),
      ]),
    };
  }
  let sourcesRaw: string[] = [];
  try {
    sourcesRaw = Object.values(
      JSON.parse(sourceCode.slice(1, sourceCode.length - 1)).sources,
    );
  } catch (_e) {
    sourcesRaw = sourceCode
      .split('// File')
      .map((content) => content.slice(content.indexOf('pragma')));
  }
  const sources = sourcesRaw
    .filter((source) => source.includes(`function ${method}(`))
    .map((source) => `\`\`\`${source}\`\`\``)
    .join('\n');
  const methodExplanation = await getMethodExplanation(sources, method);
  const panelComponents: Component[] = [
    heading(`Contract Name`),
    text(result.ContractName),
    divider(),
    heading(`Method`),
    text(method),
    divider(),
    heading(`What it does: (AI generated)`),
    text(String(methodExplanation)),
  ];
  if (showArguments) {
    panelComponents.push(
      ...[
        divider(),
        heading(`Arguments`),
        ...names.map((name, i) => text(`${name}: ${String(inputs[i])}`)),
      ],
    );
  }
  return {
    content: panel(panelComponents),
  };
};

/**
 *
 * @param request
 */
export async function setShowArguments(
  request: JsonRpcRequest<Record<string, any>>,
) {
  const value = Boolean(request?.params?.value);

  const state = await getState();
  const newState: SnapStoreData = {
    ...state,
    showArguments: value,
  };
  await snap.request({
    method: 'snap_manageState',
    params: {
      operation: 'update',
      newState,
    },
  });

  return null;
}

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
  switch (request.method) {
    case 'set_openai_api_key':
      return setOpenAiApiKey();
    case 'set_explorer_api_key':
      return setExplorerApiKey(request);
    case 'set_show_arguments':
      return setShowArguments(request);
    case 'get_show_arguments':
      return Boolean((await getState()).showArguments);
    default:
      throw new Error('Method not found.');
  }
};
