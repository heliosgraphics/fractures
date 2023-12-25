export const debounce = (callback: Function, wait: number) => {
  let timeoutId: any;

  return (...args: any) => {
    globalThis.clearTimeout(timeoutId);

    timeoutId = globalThis.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}
