import { createSlice } from "@reduxjs/toolkit";
import { fetchPurchaseOrder } from "./shoppingCartActions";

export const shoppingCart = createSlice({
	name: "shoppincart",
	initialState: {
		shoppingCart: [],
		itemsMessage: false,
		itemsMessageError: false,
		accepTerms: false,
	},
	reducers: {
		addItemToCart: (state, action) => {
			let item = state.shoppingCart.find(
				(item) => item.id === action.payload.id,
			);
			if (item) {
				state.itemsMessageError = `${action.payload.name} ya existe en el carrito`;
				return;
			}
			state.shoppingCart.push(action.payload);
			state.itemsMessage = `${action.payload.name} agregado al carrito`;
		},
		removeItemFromCart: (state, action) => {
			state.shoppingCart = state.shoppingCart.filter(
				(item) => item.id !== action.payload.id,
			);
		},
		setQuality: (state, action) => {
			if (action.payload.quantity < 1) return;
			let item = state.shoppingCart.find(
				(item) => item.id === action.payload.product.id,
			);
			item.quantity = action.payload.quantity;
		},
		clearShoppingCartNotification: (state) => {
			state.itemsMessage = false;
			state.itemsMessageError = false;
		},
		findItem: (state, action) => {
			state.find((item) => item.id === action.payload);
		},
		accepTerms: (state, action) => {
			state.accepTerms = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPurchaseOrder.pending, (state) => { })
			.addCase(fetchPurchaseOrder.fulfilled, (state, action) => {
				state.meta = action.payload.meta;
				state.itemsdata = action.payload.data;
			})
			.addCase(fetchPurchaseOrder.rejected, (state, action) => {
				console.warn("Sin acceso");
			});
	}
});

export const {
	addItemToCart,
	removeItemFromCart,
	findItem,
	setQuality,
	clearShoppingCartNotification,
	accepTerms,
} = shoppingCart.actions;
export default shoppingCart.reducer;
