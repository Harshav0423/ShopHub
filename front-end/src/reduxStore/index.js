import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login-slice";
import uiReducer from "./ui-slice";
const store = configureStore({
	reducer: { login: loginReducer, ui: uiReducer },
});

export default store;
