'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _PageWithIntl = require('../components/PageWithIntl');

var _PageWithIntl2 = _interopRequireDefault(_PageWithIntl);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/langpavel/Projects/work/numy/reactriot2017-numy/pages/index.js?entry';


var _defineMessages = (0, _reactIntl.defineMessages)({
  description: {
    'id': 'description',
    'defaultMessage': 'An example app integrating React Intl with Next.js'
  }
}),
    description = _defineMessages.description;

exports.default = (0, _PageWithIntl2.default)(function (_ref) {
  var intl = _ref.intl;
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('meta', { name: 'description', content: intl.formatMessage(description), __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'greeting', defaultMessage: 'Hello, World!', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_reactIntl.FormattedNumber, { value: 1000, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })));
});