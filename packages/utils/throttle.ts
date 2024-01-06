export type CallbackFunction = (...args: Array<unknown>) => void

// throttles the passed function with wait.
export const throttle = (callbackFunction: CallbackFunction, wait: number) => {
  let lastCall = 0;

  return (...args: Array<unknown>) => {
    const now: number = new Date().getTime();
    const isInvalid: boolean = Boolean(now - lastCall < wait)

    if (isInvalid) return;

    lastCall = now;

    return callbackFunction(...args);
  };
};
