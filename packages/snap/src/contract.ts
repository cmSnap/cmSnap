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

function findNextContractSourceIndexIndex(sourceCodesSlice: string) {
  const interfaceIndex = sourceCodesSlice
    .slice(sourceCodesSlice.startsWith('interface ') ? 1 : 0)
    .indexOf('interface ');
  const contractIndex = sourceCodesSlice
    .slice(sourceCodesSlice.startsWith('contract ') ? 1 : 0)
    .indexOf('contract ');
  if (interfaceIndex === -1) {
    if (contractIndex === -1) {
      return sourceCodesSlice.length;
    }
    return contractIndex;
  }
  if (contractIndex === -1) {
    return interfaceIndex;
  }
  return Math.min(interfaceIndex, contractIndex);
}

export function filterSourceFilesWithContextAboutTheMethod(
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
  sourceFiles.forEach((source) => {
    if (!source.includes(`function ${method}(`)) {
      return;
    }
    let index = 0;
    while (index < source.length) {
      let sourceCodesSlice = source.slice(index);
      const nextSourceIndex =
        findNextContractSourceIndexIndex(sourceCodesSlice);
      const newIndex = index + nextSourceIndex;
      sourceCodesSlice = source.slice(index, newIndex);
      if (sourceCodesSlice.includes(`function ${method}(`)) {
        sources.push(sourceCodesSlice);
      }
      index = newIndex;
    }
  });
  return sources;
}
