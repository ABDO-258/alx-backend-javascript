export default function returnHowManyArguments(...args) {
  let totalArgs = 0;
  /* eslint-disable no-unused-vars */
  for (const arg of args) {
    totalArgs += 1;
  }
  return totalArgs;
}
