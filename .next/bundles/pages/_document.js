
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(529);


/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(54);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(76);

var _extends3 = _interopRequireDefault(_extends2);

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

var _get2 = __webpack_require__(530);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(534);

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/langpavel/Projects/work/numy/reactriot2017-numy/pages/_document.js?entry';


// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.

var IntlDocument = function (_Document) {
  (0, _inherits3.default)(IntlDocument, _Document);

  function IntlDocument() {
    (0, _classCallCheck3.default)(this, IntlDocument);

    return (0, _possibleConstructorReturn3.default)(this, (IntlDocument.__proto__ || (0, _getPrototypeOf2.default)(IntlDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(IntlDocument, [{
    key: 'render',
    value: function render() {
      // Polyfill Intl API for older browsers
      var polyfill = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.' + this.props.locale;

      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('script', { src: polyfill, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html: this.props.localeDataScript
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context) {
        var props, _context$req, locale, localeDataScript;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _get3.default)(IntlDocument.__proto__ || (0, _getPrototypeOf2.default)(IntlDocument), 'getInitialProps', this).call(this, context);

              case 2:
                props = _context.sent;
                _context$req = context.req, locale = _context$req.locale, localeDataScript = _context$req.localeDataScript;
                return _context.abrupt('return', (0, _extends3.default)({}, props, {
                  locale: locale,
                  localeDataScript: localeDataScript
                }));

              case 5:
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

  return IntlDocument;
}(_document2.default);

exports.default = IntlDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/langpavel/Projects/work/numy/reactriot2017-numy/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/langpavel/Projects/work/numy/reactriot2017-numy/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[528]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/ZjhjYTQzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHtIZWFkLCBNYWluLCBOZXh0U2NyaXB0fSBmcm9tICduZXh0L2RvY3VtZW50J1xuXG4vLyBUaGUgZG9jdW1lbnQgKHdoaWNoIGlzIFNTUi1vbmx5KSBuZWVkcyB0byBiZSBjdXN0b21pemVkIHRvIGV4cG9zZSB0aGUgbG9jYWxlXG4vLyBkYXRhIGZvciB0aGUgdXNlcidzIGxvY2FsZSBmb3IgUmVhY3QgSW50bCB0byB3b3JrIGluIHRoZSBicm93c2VyLlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50bERvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBzdXBlci5nZXRJbml0aWFsUHJvcHMoY29udGV4dClcbiAgICBjb25zdCB7cmVxOiB7bG9jYWxlLCBsb2NhbGVEYXRhU2NyaXB0fX0gPSBjb250ZXh0XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlRGF0YVNjcmlwdFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgLy8gUG9seWZpbGwgSW50bCBBUEkgZm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgY29uc3QgcG9seWZpbGwgPSBgaHR0cHM6Ly9jZG4ucG9seWZpbGwuaW8vdjIvcG9seWZpbGwubWluLmpzP2ZlYXR1cmVzPUludGwufmxvY2FsZS4ke3RoaXMucHJvcHMubG9jYWxlfWBcblxuICAgIHJldHVybiAoXG4gICAgICA8aHRtbD5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz17cG9seWZpbGx9IC8+XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiB0aGlzLnByb3BzLmxvY2FsZURhdGFTY3JpcHRcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFHQTtBQUFBOztBQUZBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBSUE7QUFKQTtBQUFBOzs7OztBQXpCQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7O0FBQ0E7QUFFQTtBQUVBOztBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        