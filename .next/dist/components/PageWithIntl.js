'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/langpavel/Projects/work/numy/reactriot2017-numy/components/PageWithIntl.js';


// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  (0, _keys2.default)(window.ReactIntlLocaleData).forEach(function (lang) {
    (0, _reactIntl.addLocaleData)(window.ReactIntlLocaleData[lang]);
  });
}

exports.default = function (Page) {
  var IntlPage = (0, _reactIntl.injectIntl)(Page);

  return function (_Component) {
    (0, _inherits3.default)(PageWithIntl, _Component);

    function PageWithIntl() {
      (0, _classCallCheck3.default)(this, PageWithIntl);

      return (0, _possibleConstructorReturn3.default)(this, (PageWithIntl.__proto__ || (0, _getPrototypeOf2.default)(PageWithIntl)).apply(this, arguments));
    }

    (0, _createClass3.default)(PageWithIntl, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            locale = _props.locale,
            messages = _props.messages,
            now = _props.now,
            props = (0, _objectWithoutProperties3.default)(_props, ['locale', 'messages', 'now']);

        return _react2.default.createElement(_reactIntl.IntlProvider, { locale: locale, messages: messages, initialNow: now, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react2.default.createElement(IntlPage, (0, _extends3.default)({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        })));
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
          var props, req, _ref2, locale, messages, now;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  props = void 0;

                  if (!(typeof Page.getInitialProps === 'function')) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return Page.getInitialProps(context);

                case 4:
                  props = _context.sent;

                case 5:

                  // Get the `locale` and `messages` from the request object on the server.
                  // In the browser, use the same values that the server serialized.
                  req = context.req;
                  _ref2 = req || window.__NEXT_DATA__.props, locale = _ref2.locale, messages = _ref2.messages;

                  // Always update the current time on page load/transition because the
                  // <IntlProvider> will be a new instance even with pushState routing.

                  now = Date.now();
                  return _context.abrupt('return', (0, _extends3.default)({}, props, { locale: locale, messages: messages, now: now }));

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return PageWithIntl;
  }(_react.Component);
};