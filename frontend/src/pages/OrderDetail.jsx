import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrder } from "../features/orders/orderAction";
import OrderProductCard from "../components/OrderDetail/OrderProductCard";

const OrderDetail = () => {
	const { orderId } = useParams();
	const dispatch = useDispatch();
	const orderData = useSelector((state) => state.order.order);

	useEffect(() => {
		dispatch(getOrder(orderId));
	}, [dispatch, orderId]);

	return (
		<div className="container mx-auto px-4">
			<h2 className="text-2xl font-bold my-4">
				Productos del pedido
			</h2>
			{orderData.order_products.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{orderData.order_products.map((order) => (
						<OrderProductCard
							key={order.id}
							order={order}
						/>
					))}
				</div>
			) : (
				<p>No se encontraron productos.</p>
			)}
		</div>
	);
};

export default OrderDetail;
