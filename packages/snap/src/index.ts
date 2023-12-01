import { Interface } from '@ethersproject/abi';
import type { OnTransactionHandler } from '@metamask/snaps-sdk';
import { heading, panel, text } from '@metamask/snaps-sdk';
import type { GetContractResponse } from 'src/types';

const InputDataDecoder = require('ethereum-input-data-decoder');

const apiKey = 'BQPXIFRXIU9GPFUNEVRNT34YNN39WEDPME';

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

  if (typeof txData !== 'string' || txData === '0x') {
    return null;
  }
  if (!chainId.endsWith('137')) {
    return {
      content: panel([heading(`Only on polygon`)]),
    };
  }
  const contractDataResponse = await fetch(
    `https://api.polygonscan.com/api?module=contract&action=getsourcecode&address=${transaction.to}&apikey=${apiKey}`,
  );
  let json: GetContractResponse = await contractDataResponse.json();
  while (json.result[0]?.Proxy === '1') {
    const contractImplementationResponse = await fetch(
      `https://api.polygonscan.com/api?module=contract&action=getsourcecode&address=${json.result[0].Implementation}&apikey=${apiKey}`,
    );
    json = await contractImplementationResponse.json();
  }
  const result = json.result[0];
  const sourceCode = result.SourceCode;
  if (!sourceCode) {
    return {
      content: panel([
        heading(`Warning`),
        text(`Contract source code is not verified`),
      ]),
    };
  }
  const abi = JSON.parse(json.result[0].ABI);
  const { method, inputs, names } = decodeFunctionCall(abi, txData);
  return {
    content: panel([
      heading(`Contract Name: ${result.ContractName}`),
      heading(`Method: ${method}`),
      heading(`Arguments`),
      ...names.map((name, i) => text(`${name}: ${String(inputs[i])}`)),
    ]),
  };
};
