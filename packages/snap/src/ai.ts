import OpenAI from 'openai';

import type { SnapStoreData } from './types';
import { getState, requestSnapPrompt } from './utils';

export async function getMethodExplanation(sources: string[], method: string) {
  const { openAiApiKey } = await getState();

  if (!openAiApiKey) {
    return 'Error: Please first enter an OpenAI Api Key in the dashboard for this feature to work';
  }

  const openai = new OpenAI({
    apiKey: openAiApiKey,
  });
  try {
    const res = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Explain what does the \`${method}\` function do in this contract in maximum 20 words for a non technical person:\n${sources
            .map((source) => `\`\`\`${source}\`\`\``)
            .join('\n')}`,
        },
      ],
      model: 'gpt-4',
    });
    return res.choices[0]?.message.content;
  } catch (error) {
    return String(error);
  }
}

export async function setOpenAiApiKey() {
  const openAiApiKey = await requestSnapPrompt('OpenAI Api Key');

  if (openAiApiKey !== null) {
    const state = await getState();
    const newState: SnapStoreData = {
      ...state,
      openAiApiKey,
    };
    await snap.request({
      method: 'snap_manageState',
      params: {
        operation: 'update',
        newState,
      },
    });
  }

  return null;
}
