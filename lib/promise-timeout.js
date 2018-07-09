'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeoutError = exports.TimeoutError = function (_Error) {
  _inherits(TimeoutError, _Error);

  function TimeoutError(message) {
    _classCallCheck(this, TimeoutError);

    return _possibleConstructorReturn(this, (TimeoutError.__proto__ || Object.getPrototypeOf(TimeoutError)).call(this, message));
  }

  return TimeoutError;
}(Error);

TimeoutError.prototype = Error.prototype;

exports.default = function (promise, timeout) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? 'Timeout' : _ref$errorMessage;

  return Promise.race([promise, new Promise(function (resolve, reject) {
    return setTimeout(function () {
      reject(new TimeoutError(errorMessage));
    }, timeout);
  })]);
};