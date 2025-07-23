import OpenAI from 'openai';
import { ApiKeys } from './constants';
const  client = new OpenAI({
  apiKey: ApiKeys, // This is the default and can be omitted
  dangerouslyAllowBrowser:true
});
export default client;

// const completion = await client.chat.completions.create({
//   model: 'gpt-4o',
//   messages: [
//     { role: 'developer', content: 'Talk like a pirate.' },
//     { role: 'user', content: 'Are semicolons optional in JavaScript?' },
//   ],
// });

// console.log(completion.choices[0].message.content);