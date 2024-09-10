import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/items/itemsSlice";
import cartReducer from "../features/shopping-cart/shoppingCartSlice";
import orderSlice from "../features/orders/orderSlice";
import paymentSlice from "../features/payment/paymentSlice";

const index = configureStore({
	reducer: {
		items: itemsReducer,
		shoppincart: cartReducer,
		order: orderSlice,
		payment: paymentSlice,
	},
});

export default index;
