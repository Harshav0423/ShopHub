"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.uiActions = void 0;

var _toolkit = require("@reduxjs/toolkit");

var uiSlice = (0, _toolkit.createSlice)({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    addProductIsVisible: false
  },
  reducers: {
    toggleCart: function toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleAddProduct: function toggleAddProduct(state) {
      state.addProductIsVisible = !state.addProductIsVisible;
    }
  }
});
var uiActions = uiSlice.actions;
exports.uiActions = uiActions;
var _default = uiSlice.reducer;
exports["default"] = _default;