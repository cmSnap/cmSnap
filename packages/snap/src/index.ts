import type { OnTransactionHandler } from '@metamask/snaps-sdk';
import { copyable, divider, heading, panel, text } from '@metamask/snaps-sdk';
import type { GetContractResponse } from 'src/types';

const apiKey = 'BQPXIFRXIU9GPFUNEVRNT34YNN39WEDPME';
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
    return {
      content: panel([
        heading(`TxAi`),
        text(`Some Insight ${chainId}`),
        divider(),
        text(sourceCode.slice(0, 100)),
        copyable(`https://www.google.com`),
      ]),
    };
  }
  return null;
};
