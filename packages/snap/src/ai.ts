import OpenAI from 'openai';

import { OPEN_AI_SECRET_KEY } from './secrets';

const openai = new OpenAI({
  apiKey: OPEN_AI_SECRET_KEY,
});

/**
 *
 * @param sources
 * @param methdo
 * @param method
 */
export async function getMethodExplanation(sources: string, method: string) {
  try {
    const res = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Explain what does the \`${method}\` function do in this contract in maximum 30 words for a non technical person, and then tell if the method looks like a scam or not in a short sentence: ${sources}`,
        },
      ],
      model: 'gpt-4',
    });
    return res.choices[0]?.message.content;
  } catch (e) {
    return String(e);
  }
}
