import { Interface } from '@ethersproject/abi';
import type { OnTransactionHandler } from '@metamask/snaps-sdk';
import { divider, heading, panel, text } from '@metamask/snaps-sdk';

import { getMethodExplanation } from './ai';
import { POLYGON_SCAN_API_KEY } from './secrets';
import type { GetContractResponse, SourceCodeDetails } from './types';

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
 * @param num
 */
function truncateString(str: string, num: number) {
  return str.length > num ? `${str.slice(0, num)}...` : str;
}

export const onTransaction: OnTransactionHandler = async ({
                                                            transaction,
                                                            chainId,
                                                          }) => {
  const txData = transaction?.data;

  if (typeof txData !== 'string' || txData === '0x') {
    return null;
  }
  if (!chainId.endsWith('137')) {
    return {
      content: panel([heading(`Only on polygon`)]),
    };
  }
  const contractDataResponse = await fetch(
    `https://api.polygonscan.com/api?module=contract&action=getsourcecode&address=${transaction.to}&apikey=${POLYGON_SCAN_API_KEY}`,
  );
  let json: GetContractResponse = await contractDataResponse.json();
  while (json.result[0]?.Proxy === '1') {
    const contractImplementationResponse = await fetch(
      `https://api.polygonscan.com/api?module=contract&action=getsourcecode&address=${json.result[0].Implementation}&apikey=${POLYGON_SCAN_API_KEY}`,
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
  let sourceCodeObj: SourceCodeDetails = { sources: {} };
  try {
    sourceCodeObj = JSON.parse(sourceCode.slice(1, sourceCode.length - 1));
  } catch (_e) {
    sourceCodeObj = { sources: { source: { content: sourceCode } } };
  }
  // TODO: minify source codes
  const sources = Object.values(sourceCodeObj.sources)
    .filter((source) => source.content.includes(`function ${method}`))
    .map((source) => `\`\`\`${source.content}\`\`\``)
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
