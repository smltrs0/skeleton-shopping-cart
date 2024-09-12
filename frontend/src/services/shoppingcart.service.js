import axios from "../axios";
import { API_URL } from "../env";

const saveShoppingCart = async (data) => {
	const response = await axios.post(API_URL + "shoppingcar", { ...data });
	return response;
};

const getShoppingCart = async (data) => {
	const response = await axios.get(API_URL + "shoppingcar", { ...data });
	return response.data;
};


const createPurchaseOrder = async (data) => {
	const response = await axios.post(API_URL + "payments", { ...data });
	return response.data;
}

export { saveShoppingCart, getShoppingCart, createPurchaseOrder };
