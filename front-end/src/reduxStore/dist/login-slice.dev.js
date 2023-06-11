"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.loginActions = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialLoginState = {
  isAuthenticated: false,
  userType: "user"
}; //

var loginSlice = (0, _toolkit.createSlice)({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login: function login(state) {
      state.isAuthenticated = true;
    },
    logout: function logout(state) {
      state.isAuthenticated = false;
      state.userType = "user";
    },
    changingUser: function changingUser(state, action) {
      state.userType = action.payload;
    }
  }
});
var loginActions = loginSlice.actions;
exports.loginActions = loginActions;
var _default = loginSlice.reducer;
exports["default"] = _default;