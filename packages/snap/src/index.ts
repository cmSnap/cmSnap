import { Interface } from '@ethersproject/abi';
import type { OnTransactionHandler } from '@metamask/snaps-sdk';
import { copyable, divider, heading, panel, text } from '@metamask/snaps-sdk';
import type { GetContractResponse } from 'src/types';

const InputDataDecoder = require('ethereum-input-data-decoder');

const apiKey = 'BQPXIFRXIU9GPFUNEVRNT34YNN39WEDPME';

export type DecodedCall = {
  inputs: any;
  method: string;
};

/**
 *
 * @param abi
 * @param input
 */
function decodeFunctionCall(abi: any[], input: string): DecodedCall {
  const decoder = new InputDataDecoder(abi);
  const decoded = decoder.decodeData(input);
  let { method } = decoded;
  if (abi.filter((func) => func.name === method).length > 1) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    method = `${method}(${decoded.types.join(',')})`;
  }
  const iface = new Interface(abi);
  return {
    method,
    inputs: iface.decodeFunctionData(method, input),
  };
}

export const onTransaction: OnTransactionHandler = async ({
  transaction,
  chainId,
}) => {
  const txData = transaction?.data;

  // TODO: only check Polygon contracts
  if (typeof txData === 'string' && txData !== '0x') {
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
    const sourceCode = json.result[0]?.SourceCode;
    if (!sourceCode) {
      return {
        content: panel([
          heading(`Warning`),
          text(`Contract source code is not verified`),
        ]),
      };
    }
    const { method } = decodeFunctionCall(
      JSON.parse(json.result[0].ABI),
      txData,
    );
    return {
      content: panel([
        heading(`Method: ${method}`),
        text(`Some Insight ${chainId}`),
        divider(),
        text(sourceCode.slice(0, 100)),
        copyable(`https://www.google.com`),
      ]),
    };
  }
  return null;
};
