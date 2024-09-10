const ProductDetails = ({ name, href, color, price }) => {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">
					<a href={href}>{name}</a>
				</h3>
				<p className="mt-1 text-sm text-gray-500">{color}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{price}</p>
		</div>
	);
};

export default ProductDetails;
