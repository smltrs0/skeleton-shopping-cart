import { createSlice } from "@reduxjs/toolkit";
import { fetchItemsList } from "./itemsActions";

export const itemsSlice = createSlice({
	name: "items",
	initialState: {
		itemsdata: [],
		meta: {
			pagination: {
				current_page: 1,
				from: null,
				last_page: 1,
				per_page: 10,
				to: null,
				total: 0,
			},
		},
	},
	reducers: {
		addItem: (state, action) => {
			state.push(action.payload);
		},
		removeItem: (state, action) => {
			state.splice(action.payload, 1);
		},
		findItem: (state, action) => {
			state.find((item) => item.id === action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchItemsList.pending, (state) => {})
			.addCase(fetchItemsList.fulfilled, (state, action) => {
				state.meta = action.payload.meta;
				state.itemsdata = action.payload.data;
			})
			.addCase(fetchItemsList.rejected, (state, action) => {
				console.warn("Sin acceso");
			});
	},
});

export default itemsSlice.reducer;
