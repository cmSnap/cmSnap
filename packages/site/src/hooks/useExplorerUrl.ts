import { useMemo } from 'react';

import { explorerUrls } from '../../../snap/src/explorerUrls';

/**
 *
 * @param chainId
 */
export function useExplorerUrl(chainId: string) {
  return useMemo(() => explorerUrls[chainId], [chainId]);
}
