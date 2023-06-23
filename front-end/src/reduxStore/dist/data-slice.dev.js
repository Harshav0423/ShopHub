"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dataActions = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialDataState = {
  products: {},
  wishlist: {}
};
var dataSlice = (0, _toolkit.createSlice)({
  name: "data",
  initialState: initialDataState,
  reducers: {
    setProducts: function setProducts(state, action) {
      state.products = action.payload;
    }
  }
});
var dataActions = dataSlice.actions;
exports.dataActions = dataActions;
var _default = dataSlice.reducer;
exports["default"] = _default;