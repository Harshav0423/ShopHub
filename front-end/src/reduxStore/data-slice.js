import { createSlice } from "@reduxjs/toolkit";

const initialDataState = { products: {}, wishlist: {} };
const dataSlice = createSlice({
	name: "data",
	initialState: initialDataState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload;
		},
	},
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
