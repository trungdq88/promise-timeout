export default (function (promise, timeout) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? 'Timeout' : _ref$errorMessage;

  return Promise.race([promise, new Promise(function (resolve, reject) {
    return setTimeout(function () {
      reject(new Error(errorMessage));
    }, timeout);
  })]);
});