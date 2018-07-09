export class TimeoutError extends Error {
  constructor(message) {
    super(message);
  }
}

TimeoutError.prototype = Error.prototype;

export default (promise, timeout, { errorMessage = 'Timeout' } = {}) =>
  Promise.race([
    promise,
    new Promise((resolve, reject) =>
      setTimeout(() => {
        reject(new TimeoutError(errorMessage));
      }, timeout),
    ),
  ]);
