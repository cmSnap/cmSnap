import type { OnTransactionHandler } from '@metamask/snaps-sdk';
import { copyable, divider, heading, panel, text } from '@metamask/snaps-sdk';

// Handle outgoing transactions.
export const onTransaction: OnTransactionHandler = async ({
  transaction,
  chainId,
}) => {
  const txData = transaction?.data;

  // Display Token Audit details.
  if (
    !(
      (typeof transaction.data === 'string' && transaction.data === '0x') ||
      txData === undefined
    )
  ) {
    return {
      content: panel([
        heading(`TxAi`),
        text(`Some Insight ${chainId}`),
        divider(),
        text(`Visit:`),
        copyable(`https://www.google.com`),
      ]),
    };
  }
  return null;
};
