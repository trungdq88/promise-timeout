export default (promise, timeout, { errorMessage = 'Timeout' } = {}) =>
  Promise.race([
    promise,
    new Promise((resolve, reject) =>
      setTimeout(() => {
        reject(new Error(errorMessage));
      }, timeout),
    ),
  ]);
