"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.errorActions = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialErrorState = {
  isError: false,
  message: ""
};
var errorSlice = (0, _toolkit.createSlice)({
  name: "error",
  initialState: initialErrorState,
  reducers: {
    activateError: function activateError(state, action) {
      state.isError = true;
      state.message = action.payload;
    },
    deactivateError: function deactivateError(state) {
      state.isError = false;
      state.message = "";
    }
  }
});
var errorActions = errorSlice.actions;
exports.errorActions = errorActions;
var _default = errorSlice.reducer;
exports["default"] = _default;