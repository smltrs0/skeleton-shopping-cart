const OrderButtons = ({ handleDeleteOrder, handleShowOrder, orderId }) => {
	return (
		<div className="flex space-x-2">
			<button
				onClick={() => handleDeleteOrder(orderId)}
				className="mt-4 px-2 py-1 bg-red-500 text-white rounded"
			>
				Eliminar
			</button>
			<button
				onClick={() => handleShowOrder(orderId)}
				className="mt-4 px-2 py-1 bg-blue-500 text-white rounded"
			>
				Ver
			</button>
		</div>
	);
};

export default OrderButtons;
