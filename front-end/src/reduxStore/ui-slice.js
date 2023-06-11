import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: { cartIsVisible: false, addProductIsVisible:false },
	reducers: {
		toggleCart(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		toggleAddProduct(state) {
			state.addProductIsVisible = !state.addProductIsVisible;
		}
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;