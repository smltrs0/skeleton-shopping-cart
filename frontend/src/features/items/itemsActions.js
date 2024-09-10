import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../env";
import axios from "../../axios";

export const fetchItemsList = createAsyncThunk(
	"auth/items",
	async ({ page = 1, per_page = 10 }, { rejectWithValue }) => {
		try {
			// const response = await axios.post(API_URL + 'items', {
			//   page,
			//   per_page
			// });
			// Dummy data

			return {
				data: [
					{
						id: 1,
						attributes: {
							id: 1,
							imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
							imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
							href: "",
							name: "negra",
							color: "",
							price: "123",
						},
					},
					{
						id: 2,
						attributes: {
							id: 2,
							imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
							imageAlt: "Long rectangular black fabric bag with brass snap and strap loops.",
							href: "",
							name: "blanca",
							color: "",
							price: "123",
						},
					},
					{
						id: 3,
						attributes: {
							id: 3,
							imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
							imageAlt: "Chambray blue canvas cover with leather loop and snap closure.",
							href: "",
							name: "gris",
							color: "",
							price: "123",
						},
					},
					{
						id: 4,
						attributes: {
							id: 4,
							imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
							imageAlt: "Olive drab canvas cover with leather loop and snap closure.",
							href: "",
							name: "roja com puntos",
							color: "",
							price: "123",
						},
					},
				],
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
			};
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
