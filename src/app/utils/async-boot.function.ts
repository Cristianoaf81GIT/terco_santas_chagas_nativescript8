export const asyncBoot = (): Function => {
  return (): Promise<void> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
};
