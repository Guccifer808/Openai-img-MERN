import { surpriseMePrompts } from "../constants";
//generating random prompt index
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  //check if prompt unique
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}
