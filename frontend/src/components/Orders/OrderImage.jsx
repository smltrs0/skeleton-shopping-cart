const OrderImage = ({ src, alt }) => {
	return (
		<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-1">
			<img
				src={src}
				alt={`Product ${alt}`}
				className="w-full rounded shadow"
			/>
		</div>
	);
};

export default OrderImage;
