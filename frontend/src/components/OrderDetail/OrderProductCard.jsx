import React from "react";

const OrderProductCard = ({ order }) => {
	return (
		<div className="bg-white shadow-lg rounded-md p-4">
			<img
				src={order.product.imageSrc}
				alt={order.name}
				className="w-full h-48 object-cover mb-4"
			/>
			<div className="flex justify-between mb-2">
				<span className="font-bold">{order.product.name}</span>
				<span className="font-bold">
					${order.product.price}
				</span>
			</div>
			<div className="flex flex-direction-row">
				<span className="text-sm">
					Fecha de creación: {order.created_at}
				</span>
				<span className="text-sm ml-2 text-center">
					Cantidad: {order.quantity}
				</span>
			</div>
		</div>
	);
};

export default OrderProductCard;
