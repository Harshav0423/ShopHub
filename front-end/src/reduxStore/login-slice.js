import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = { isAuthenticated: false, userType: "user" }; //
const loginSlice = createSlice({
	name: "login",
	initialState: initialLoginState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
			state.userType = "user";
		},
		changingUser(state, action) {
			state.userType = action.payload;
		},
	},
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
