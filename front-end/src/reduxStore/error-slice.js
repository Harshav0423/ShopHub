import { createSlice } from "@reduxjs/toolkit";

const initialErrorState = { isError: false, message: "" };
const errorSlice = createSlice({
	name: "error",
	initialState: initialErrorState,
	reducers: {
		activateError(state, action) {
			state.isError = true;
			state.message = action.payload;
		},
		deactivateError(state) {
			state.isError = false;
			state.message = "";
		},
	},
});

export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
