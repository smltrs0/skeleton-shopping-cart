import axios from "axios";
import { API_URL } from "./env";
// Interceptors
// In case to implement a global error handling, you can use interceptors

const instance = axios.create({
	baseURL: API_URL,
});

instance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("userToken");
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(new Error(error));
	},
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response && [401, 500].includes(error.response.status)) {
			window.location.href = "/login";
		} else if (error.response?.data) {
			return Promise.reject(new Error(error.response.data));
		}
		return Promise.reject(new Error(error.message));
	},
);

export default instance;
