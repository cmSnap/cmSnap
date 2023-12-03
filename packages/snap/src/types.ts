/* eslint-disable @typescript-eslint/naming-convention */
export type GetContractResponse = {
  status: string;
  message: string;
  result: [
    {
      SourceCode: string;
      ABI: string;
      ContractName: string;
      CompilerVersion: string;
      OptimizationUsed: string;
      Runs: string;
      ConstructorArguments: string;
      EVMVersion: string;
      Library: string;
      LicenseType: string;
      Proxy: string;
      Implementation: string;
      SwarmSource: string;
    },
  ];
};

export type SourceCodeDetails = {
  sources: {
    [key: string]: { content: string };
  };
};

export type SnapStoreData = {
  showArguments?: boolean;
  explorerApiKeys?: {
    [chainId: string]: string;
  };
  openAiApiKey?: string;
};
