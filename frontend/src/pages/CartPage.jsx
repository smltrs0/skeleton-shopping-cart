import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	removeItemFromCart,
	setQuality,
} from '../features/shopping-cart/shoppingCartSlice';
import { createOrder } from '../features/orders/orderAction';
import { clearOrderMessage, clearOrders } from '../features/orders/orderSlice';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';
import CartItemList from '../components/ShoppinCart/CartItemList';
import PaymentModal from '../components/PaymentModal';

const CartPage = () => {
	const products = useSelector((state) => state.shoppincart.shoppingCart);
	const { ordersMessage, ordersMessageError } = useSelector(
		(state) => state.order,
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlerDeleteItem = (product) =>
		dispatch(removeItemFromCart(product));
	const handlerQuantityChange = (product, quantity) =>
		dispatch(setQuality({ product, quantity }));
	const handlerSaveOrder = () => {
		// Reutilizar la lógica de la acción createOrder
		if (products.length === 0) {
			Toast.fire({
				icon: 'warning',
				title: 'No hay productos en el carrito',
			});
			return;
		}
		const orderToSave = products.map((product) => ({
			id: product.id,
			quantity: product.quantity,
			price: product.price,
		}));
		dispatch(createOrder(orderToSave));
		dispatch(clearOrders());
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (ordersMessage) {
			Toast.fire({
				icon: 'success',
				title: ordersMessage,
			});
		} else if (ordersMessageError) {
			Toast.fire({
				icon: 'warning',
				title: ordersMessageError,
			});
		}
		dispatch(clearOrderMessage());
	}, [ordersMessage, ordersMessageError, dispatch]);

	const total = products.reduce(
		(acc, product) =>
			acc +
			parseFloat(product.price) * parseFloat(product.quantity),
		0,
	);

	const handleContinueShopping = () => {
		navigate(`/products`);
	};

	return (
		<div className="container mx-auto px-4 pt-16">
			<div className="flex h-full flex-col bg-white shadow-xl">
				<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
					<div className="flex items-start justify-between">
						<div className="text-lg font-medium text-gray-900">
							Carrito de compra
						</div>
					</div>
					{products.length === 0 ? (
						<>Sin items</>
					) : (
						<div className="mt-8">
							<CartItemList
								products={products}
								handlerDeleteItem={
									handlerDeleteItem
								}
								handlerQuantityChange={
									handlerQuantityChange
								}
							/>
						</div>
					)}
				</div>

				<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
					<div className="flex justify-between text-base font-medium text-gray-900">
						<p>Subtotal</p>
						<p>${total}</p>
					</div>
					<p className="mt-0.5 text-sm text-gray-500">
						Envío e impuestos es calculado al finalizar
						la compra.
					</p>
					<div className="mt-6">
						<button
							disabled={products.length === 0}
							href="#"
							className="flex rounded-md border bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
							onClick={() => setIsModalOpen(true)}
						>
							{products.length === 0
								? 'Carrito de compra vacío, debe seleccionar productos para finalizar la compra'
								: 'Pagar'}
						</button>
						<PaymentModal
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
						/>
					</div>
					<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
						<p>
							<button
								type="button"
								className="font-medium text-indigo-600 hover:text-indigo-500"
								onClick={handleContinueShopping}
							>
								Continuar comprando &rarr;
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
