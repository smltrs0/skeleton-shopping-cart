import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../env";
import axios from "../../axios";

// Define la acción asincrónica para crear un usuario
export const createOrder = createAsyncThunk(
	"order/create",
	async (orderToSave, { rejectWithValue }) => {
		try {
			const respuesta = await axios.post(`${API_URL}order`, {
				orders: JSON.stringify(orderToSave),
			});
			return respuesta.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);

export const getOrders = createAsyncThunk(
	"order/get-all",
	async (_, { rejectWithValue }) => {
		try {
			const respuesta = await axios.post(`${API_URL}orders`);
			return respuesta.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);

export const getOrder = createAsyncThunk(
	"order/get",
	async (orderId, { rejectWithValue }) => {
		try {
			const respuesta = await axios.get(
				`${API_URL}order/${orderId}`,
			);
			return respuesta.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);

export const deleteOrder = createAsyncThunk(
	"order/delete",
	async (orderId, { rejectWithValue }) => {
		try {
			const respuesta = await axios.post(`${API_URL}orderdelete`, {
				id: orderId,
			});
			return respuesta.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	},
);
