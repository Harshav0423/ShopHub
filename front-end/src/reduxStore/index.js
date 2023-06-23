import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login-slice";
import uiReducer from "./ui-slice";
import errorReducer from "./error-slice";
import dataReducer from "./data-slice";
const store = configureStore({
	reducer: {
		login: loginReducer,
		ui: uiReducer,
		error: errorReducer,
		data: dataReducer,
	},
});

export default store;
