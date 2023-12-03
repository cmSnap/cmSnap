import { Interface } from '@ethersproject/abi';
import type {
  OnRpcRequestHandler,
  OnTransactionHandler,
} from '@metamask/snaps-sdk';
import { divider, heading, panel, text } from '@metamask/snaps-sdk';

import { getMethodExplanation, setOpenAiApiKey } from './ai';
import {
  explorerUrls,
  getApiUrlOfExplorer,
  setExplorerApiKey,
} from './explorer';
import type { GetContractResponse } from './types';
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

/**
 *
 * @param str
 * @param len
 */
function truncateString(str: string, len: number) {
  return str.length > len ? `${str.slice(0, len)}...` : str;
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
  return {
    content: panel([
      heading(`Contract Name`),
      text(result.ContractName),
      divider(),
      heading(`Method`),
      text(method),
      divider(),
      heading(`What it does: (AI generated)`),
      text(String(methodExplanation)),
      divider(),
      heading(`Arguments`),
      ...names.map((name, i) =>
        text(`${name}: ${truncateString(String(inputs[i]), 15)}`),
      ),
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
