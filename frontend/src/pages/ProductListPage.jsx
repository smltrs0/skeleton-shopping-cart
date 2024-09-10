import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addItemToCart,
	clearShoppingCartNotification,
} from "../features/shopping-cart/shoppingCartSlice";
import { fetchItemsList } from "../features/items/itemsActions";
import ProductItem from "../components/ProductList/ProductItem";
import Toast from "../components/Toast";
const ProductListPage = () => {
	const { products } = useSelector((state) => ({
		products: state.items,
	}));

	const itemsMessage = useSelector(
		(state) => state.shoppincart.itemsMessage,
	);
	const itemsMessageError = useSelector(
		(state) => state.shoppincart.itemsMessageError,
	);

	const [productQuantity, setProductQuantity] = useState({});
	const dispatch = useDispatch();

	const getProductQuantity = (product) => productQuantity[product.id] || 1;

	useEffect(() => {
		dispatch(fetchItemsList({ page: 1, per_page: 10 }));
	}, [dispatch]);

	useEffect(() => {
		if (itemsMessage) {
			Toast.fire({
				icon: "success",
				title: itemsMessage,
			});
		} else if (itemsMessageError) {
			Toast.fire({
				icon: "warning",
				title: itemsMessageError,
			});
		}
		dispatch(clearShoppingCartNotification());
	}, [itemsMessage, itemsMessageError, dispatch]);

	const handlerAddItemToCart = (product) => {
		let quantity = getProductQuantity(product);
		let itemToCart = { ...product, quantity };

		dispatch(addItemToCart(itemToCart));
	};

	const handlerQuantityChange = (product, quantity) => {
		setProductQuantity({ ...productQuantity, [product.id]: quantity });
	};

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					Listado de productos
				</h2>
				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{products.itemsdata.map((product) => (
						<ProductItem
							key={product.id}
							product={product}
							getProductQuantity={
								getProductQuantity
							}
							handlerAddItemToCart={
								handlerAddItemToCart
							}
							handlerQuantityChange={
								handlerQuantityChange
							}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductListPage;
