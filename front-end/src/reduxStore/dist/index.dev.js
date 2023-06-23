"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _loginSlice = _interopRequireDefault(require("./login-slice"));

var _uiSlice = _interopRequireDefault(require("./ui-slice"));

var _errorSlice = _interopRequireDefault(require("./error-slice"));

var _dataSlice = _interopRequireDefault(require("./data-slice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    login: _loginSlice["default"],
    ui: _uiSlice["default"],
    error: _errorSlice["default"],
    data: _dataSlice["default"]
  }
});
var _default = store;
exports["default"] = _default;