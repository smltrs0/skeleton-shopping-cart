import OrderButtons from "./OrderButtons";
import OrderImage from "./OrderImage";

const OrderItem = ({ order, index, handleDeleteOrder, handleShowOrder }) => {
	const { id, order_products } = order;

	return (
		<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
			<div className="bg-white rounded shadow">
				<div className="p-4">
					<h3 className="text-lg font-semibold mb-2">
						Pedido #{index + 1}
					</h3>
					<div className="flex flex-wrap">
						{order_products.map((order_product) => (
							<OrderImage
								key={order_product.product.id}
								src={
									order_product.product
										.imageSrc
								}
								alt={
									order_product.product
										.imageAlt
								}
							/>
						))}
					</div>
					<OrderButtons
						handleDeleteOrder={handleDeleteOrder}
						handleShowOrder={handleShowOrder}
						orderId={id}
					/>
				</div>
			</div>
		</div>
	);
};

export default OrderItem;
