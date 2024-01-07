import InputDataDecoder from 'ethereum-input-data-decoder';
import type { SourceCodeDetails } from 'src/types';

export function decodeFunctionCall(abi: any[], input: string) {
  const decoder = new InputDataDecoder(abi);
  const { method, names, types } = decoder.decodeData(input);
  return {
    method,
    types,
    names,
  };
}

function parseSourceFilesFromSourceCodesObject(sourceCode: string) {
  const sourceCodesObject: SourceCodeDetails = JSON.parse(
    sourceCode.slice(1, sourceCode.length - 1),
  );
  return Object.values(sourceCodesObject.sources).map((scc) => scc.content);
}

function parseSourceFilesFromSingleTextSourceCode(sourceCode: string) {
  return sourceCode
    .split('// File')
    .map((content) => content.slice(content.indexOf('pragma')));
}

function findNextContractOrInterfaceIndexInSourceFile(
  sourceFile: string,
  afterIndex: number,
) {
  const sourceFileSlice = sourceFile.slice(afterIndex);
  const interfaceIndex = sourceFileSlice
    .slice(sourceFileSlice.startsWith('interface ') ? 1 : 0)
    .indexOf('interface ');
  const contractIndex = sourceFileSlice
    .slice(sourceFileSlice.startsWith('contract ') ? 1 : 0)
    .indexOf('contract ');
  if (interfaceIndex === -1) {
    if (contractIndex === -1) {
      return sourceFileSlice.length;
    }
    return contractIndex;
  }
  if (contractIndex === -1) {
    return interfaceIndex;
  }
  return Math.min(interfaceIndex, contractIndex);
}

export function filterSourceCodeSlicesWithContextAboutTheMethod(
  sourceCode: string,
  method: string,
) {
  let sourceFiles: string[] = [];
  try {
    sourceFiles = parseSourceFilesFromSourceCodesObject(sourceCode);
  } catch (_e) {
    sourceFiles = parseSourceFilesFromSingleTextSourceCode(sourceCode);
  }

  const sources: string[] = [];
  sourceFiles.forEach((sourceFile) => {
    if (!sourceFile.includes(`function ${method}(`)) {
      return;
    }
    let index = 0;
    while (index < sourceFile.length) {
      const nextContractOrInterfaceIndex =
        findNextContractOrInterfaceIndexInSourceFile(sourceFile, index);
      const nextContractOrInterfaceSlice = sourceFile.slice(
        index,
        nextContractOrInterfaceIndex,
      );
      if (nextContractOrInterfaceSlice.includes(`function ${method}(`)) {
        sources.push(nextContractOrInterfaceSlice);
      }
      index = nextContractOrInterfaceIndex;
    }
  });
  return sources;
}
