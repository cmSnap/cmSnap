import { heading, panel } from '@metamask/snaps-sdk';

import type { SnapStoreData } from './types';

export const getState = async (): Promise<SnapStoreData> => {
  const res = await snap.request({
    method: 'snap_manageState',
    params: {
      operation: 'get',
    },
  });
  return res ?? {};
};

export const requestSnapPrompt = async (
  paramName: string,
): Promise<string | null> => {
  const res = await snap.request({
    method: 'snap_dialog',
    params: {
      type: 'prompt',
      content: panel([heading(`Enter your ${paramName}`)]),
      placeholder: paramName,
    },
  });
  return res ? res.toString() : null;
};
