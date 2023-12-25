export const throttle = (fn, delay: number) => {
  let lastCall = 0;

  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;

    lastCall = now;
    return fn(...args);
  };
};
