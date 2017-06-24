
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 552:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(76);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(573);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(238);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(547);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/langpavel/Projects/work/numy/reactriot2017-numy/components/PageWithIntl.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/langpavel/Projects/work/numy/reactriot2017-numy/components/PageWithIntl.js"); } } })();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(547);

var _head = __webpack_require__(227);

var _head2 = _interopRequireDefault(_head);

var _Nav = __webpack_require__(575);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/langpavel/Projects/work/numy/reactriot2017-numy/components/Layout.js';


var messages = (0, _reactIntl.defineMessages)({
  title: {
    'id': 'title',
    'defaultMessage': 'React Intl Next.js Example'
  }
});

exports.default = (0, _reactIntl.injectIntl)(function (_ref) {
  var intl = _ref.intl,
      title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, title || intl.formatMessage(messages.title))), _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_Nav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  })), children);
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/langpavel/Projects/work/numy/reactriot2017-numy/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/langpavel/Projects/work/numy/reactriot2017-numy/components/Layout.js"); } } })();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(576);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(547);

var _link = __webpack_require__(577);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/langpavel/Projects/work/numy/reactriot2017-numy/components/Nav.js';

exports.default = function () {
  return _react2.default.createElement('nav', {
    'data-jsx': 239317663,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('li', {
    'data-jsx': 239317663,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 239317663,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'nav.home', defaultMessage: 'Home', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })))), _react2.default.createElement('li', {
    'data-jsx': 239317663,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 239317663,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'nav.about', defaultMessage: 'About', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })))), _react2.default.createElement(_style2.default, {
    styleId: 239317663,
    css: 'nav[data-jsx="239317663"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}li[data-jsx="239317663"]{list-style:none;margin-right:1rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHc0IsQUFDRyxpQkFBMkIsbUJBQU8sMENBRDlCIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2xhbmdwYXZlbC9Qcm9qZWN0cy93b3JrL251bXkvcmVhY3RyaW90MjAxNy1udW15Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxuYXY+XG4gICAgPGxpPlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxhPjxGb3JtYXR0ZWRNZXNzYWdlIGlkPSduYXYuaG9tZScgZGVmYXVsdE1lc3NhZ2U9J0hvbWUnIC8+PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cbiAgICAgICAgPGE+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9J25hdi5hYm91dCcgZGVmYXVsdE1lc3NhZ2U9J0Fib3V0JyAvPjwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/Nav.js */'
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/langpavel/Projects/work/numy/reactriot2017-numy/components/Nav.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/langpavel/Projects/work/numy/reactriot2017-numy/components/Nav.js"); } } })();

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(581);


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(55);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(547);

var _PageWithIntl = __webpack_require__(572);

var _PageWithIntl2 = _interopRequireDefault(_PageWithIntl);

var _Layout = __webpack_require__(574);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/langpavel/Projects/work/numy/reactriot2017-numy/pages/about.js?entry';


var About = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About() {
    (0, _classCallCheck3.default)(this, About);

    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
  }

  (0, _createClass3.default)(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_reactIntl.FormattedRelative, {
        value: this.props.someDate,
        updateInterval: 1000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', { someDate: Date.now() });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return About;
}(_react.Component);

exports.default = (0, _PageWithIntl2.default)(About);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/langpavel/Projects/work/numy/reactriot2017-numy/pages/about.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/langpavel/Projects/work/numy/reactriot2017-numy/pages/about.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(71)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[580]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9sb2NhbGUtZGF0YS9pbmRleC5qcyAoaWdub3JlZCk/ZWNjMTFjMSIsIndlYnBhY2s6Ly8vLi9saWIvbG9jYWxlcyAoaWdub3JlZCk/ZWNjMTFjMSIsIndlYnBhY2s6Ly8vLi9saWIvbG9jYWxlcyAoaWdub3JlZCk/ZmY2NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VXaXRoSW50bC5qcz9lY2MxMWMxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzP2VjYzExYzEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYuanM/ZWNjMTFjMSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz9lY2MxMWMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2xvY2FsZS1kYXRhL2luZGV4LmpzIChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gNTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvbG9jYWxlcyAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDU2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2xvY2FsZXMgKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSA1Njdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtJbnRsUHJvdmlkZXIsIGFkZExvY2FsZURhdGEsIGluamVjdEludGx9IGZyb20gJ3JlYWN0LWludGwnXG5cbi8vIFJlZ2lzdGVyIFJlYWN0IEludGwncyBsb2NhbGUgZGF0YSBmb3IgdGhlIHVzZXIncyBsb2NhbGUgaW4gdGhlIGJyb3dzZXIuIFRoaXNcbi8vIGxvY2FsZSBkYXRhIHdhcyBhZGRlZCB0byB0aGUgcGFnZSBieSBgcGFnZXMvX2RvY3VtZW50LmpzYC4gVGhpcyBvbmx5IGhhcHBlbnNcbi8vIG9uY2UsIG9uIGluaXRpYWwgcGFnZSBsb2FkIGluIHRoZSBicm93c2VyLlxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5SZWFjdEludGxMb2NhbGVEYXRhKSB7XG4gIE9iamVjdC5rZXlzKHdpbmRvdy5SZWFjdEludGxMb2NhbGVEYXRhKS5mb3JFYWNoKChsYW5nKSA9PiB7XG4gICAgYWRkTG9jYWxlRGF0YSh3aW5kb3cuUmVhY3RJbnRsTG9jYWxlRGF0YVtsYW5nXSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKFBhZ2UpID0+IHtcbiAgY29uc3QgSW50bFBhZ2UgPSBpbmplY3RJbnRsKFBhZ2UpXG5cbiAgcmV0dXJuIGNsYXNzIFBhZ2VXaXRoSW50bCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoY29udGV4dCkge1xuICAgICAgbGV0IHByb3BzXG4gICAgICBpZiAodHlwZW9mIFBhZ2UuZ2V0SW5pdGlhbFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3BzID0gYXdhaXQgUGFnZS5nZXRJbml0aWFsUHJvcHMoY29udGV4dClcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBgbG9jYWxlYCBhbmQgYG1lc3NhZ2VzYCBmcm9tIHRoZSByZXF1ZXN0IG9iamVjdCBvbiB0aGUgc2VydmVyLlxuICAgICAgLy8gSW4gdGhlIGJyb3dzZXIsIHVzZSB0aGUgc2FtZSB2YWx1ZXMgdGhhdCB0aGUgc2VydmVyIHNlcmlhbGl6ZWQuXG4gICAgICBjb25zdCB7cmVxfSA9IGNvbnRleHRcbiAgICAgIGNvbnN0IHtsb2NhbGUsIG1lc3NhZ2VzfSA9IHJlcSB8fCB3aW5kb3cuX19ORVhUX0RBVEFfXy5wcm9wc1xuXG4gICAgICAvLyBBbHdheXMgdXBkYXRlIHRoZSBjdXJyZW50IHRpbWUgb24gcGFnZSBsb2FkL3RyYW5zaXRpb24gYmVjYXVzZSB0aGVcbiAgICAgIC8vIDxJbnRsUHJvdmlkZXI+IHdpbGwgYmUgYSBuZXcgaW5zdGFuY2UgZXZlbiB3aXRoIHB1c2hTdGF0ZSByb3V0aW5nLlxuICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuXG4gICAgICByZXR1cm4gey4uLnByb3BzLCBsb2NhbGUsIG1lc3NhZ2VzLCBub3d9XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgIGNvbnN0IHtsb2NhbGUsIG1lc3NhZ2VzLCBub3csIC4uLnByb3BzfSA9IHRoaXMucHJvcHNcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXtsb2NhbGV9IG1lc3NhZ2VzPXttZXNzYWdlc30gaW5pdGlhbE5vdz17bm93fT5cbiAgICAgICAgICA8SW50bFBhZ2Ugey4uLnByb3BzfSAvPlxuICAgICAgICA8L0ludGxQcm92aWRlcj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGFnZVdpdGhJbnRsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtkZWZpbmVNZXNzYWdlcywgaW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnXG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICB0aXRsZToge1xuICAgIGlkOiAndGl0bGUnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnUmVhY3QgSW50bCBOZXh0LmpzIEV4YW1wbGUnXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwoKHtpbnRsLCB0aXRsZSwgY2hpbGRyZW59KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8dGl0bGU+e3RpdGxlIHx8IGludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy50aXRsZSl9PC90aXRsZT5cbiAgICA8L0hlYWQ+XG5cbiAgICA8aGVhZGVyPlxuICAgICAgPE5hdiAvPlxuICAgIDwvaGVhZGVyPlxuXG4gICAge2NoaWxkcmVufVxuXG4gIDwvZGl2PlxuKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxuYXY+XG4gICAgPGxpPlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxhPjxGb3JtYXR0ZWRNZXNzYWdlIGlkPSduYXYuaG9tZScgZGVmYXVsdE1lc3NhZ2U9J0hvbWUnIC8+PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cbiAgICAgICAgPGE+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9J25hdi5hYm91dCcgZGVmYXVsdE1lc3NhZ2U9J0Fib3V0JyAvPjwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdi5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0Zvcm1hdHRlZFJlbGF0aXZlfSBmcm9tICdyZWFjdC1pbnRsJ1xuaW1wb3J0IHBhZ2VXaXRoSW50bCBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VXaXRoSW50bCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcX0pIHtcbiAgICByZXR1cm4ge3NvbWVEYXRlOiBEYXRlLm5vdygpfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPEZvcm1hdHRlZFJlbGF0aXZlXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zb21lRGF0ZX1cbiAgICAgICAgICAgIHVwZGF0ZUludGVydmFsPXsxMDAwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlV2l0aEludGwoQWJvdXQpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hYm91dC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7OztBQUFBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBbUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTtBQXZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFDQTtBQUVBO0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWZBO0FBZ0JBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBNEJBO0FBL0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOztBQUNBO0FBTUE7QUFOQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFSQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFNQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTs7QUFGQTtBQU9BO0FBUEE7QUFDQTs7Ozs7O0FBVEE7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        