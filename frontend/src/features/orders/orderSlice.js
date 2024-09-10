import { createSlice } from "@reduxjs/toolkit";
import { createOrder, deleteOrder, getOrder, getOrders } from "./orderAction";

export const orderSlice = createSlice({
	name: "orders",
	initialState: {
		order_items: {
			data: [],
		},
		order: {
			order_products: [],
		},
		ordersLoading: false,
		ordersError: false,
		ordersMessage: false,
		ordersMessageError: false,
		orderDeleteMesage: false,
	},
	reducers: {
		clearOrderMessage: (state) => {
			state.ordersError = false;
			state.ordersMessage = false;
			state.ordersMessageError = false;
			state.orderDeleteMesage = false;
		},
		clearOrders: (state) => {
			state.order_items = {
				data: [],
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createOrder.fulfilled, (state, action) => {
				state.ordersMessage =
					"Se ha creado el pedido correctamente";
			})
			.addCase(createOrder.rejected, (state, action) => {})
			.addCase(createOrder.pending, (state, action) => {})
			.addCase(getOrders.fulfilled, (state, action) => {
				state.order_items.data = action.payload.data;
			})
			.addCase(getOrders.rejected, (state, action) => {})
			.addCase(getOrders.pending, (state, action) => {})
			.addCase(getOrder.fulfilled, (state, action) => {
				state.order = action.payload;
			})
			.addCase(getOrder.rejected, (state, action) => {})
			.addCase(getOrder.pending, (state, action) => {})
			.addCase(deleteOrder.fulfilled, (state, action) => {
				state.order_items.data = state.order_items.data.filter(
					(item) => item.id !== action.meta.arg,
				);
				state.orderDeleteMesage =
					"Se ha eliminado el pedido correctamente";
			});
	},
});

export const { clearOrderMessage, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
