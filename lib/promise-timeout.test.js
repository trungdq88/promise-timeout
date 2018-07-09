'use strict';

var _promiseTimeout = require('./promise-timeout.js');

var _promiseTimeout2 = _interopRequireDefault(_promiseTimeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('timeout', function () {
  it('resolves', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var test;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _promiseTimeout2.default)(new Promise(function (r) {
              return setTimeout(function () {
                return r(1);
              }, 300);
            }), 500);

          case 2:
            test = _context.sent;

            expect(test).toBe(1);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  it('rejects', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var test2;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _promiseTimeout2.default)(new Promise(function (r) {
              return setTimeout(function () {
                return r(2);
              }, 300);
            }), 100).catch(function (_) {
              return _;
            });

          case 2:
            test2 = _context2.sent;

            expect(test2).toBeInstanceOf(_promiseTimeout.TimeoutError);
            expect(test2.message).toBe('Timeout');

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));
});