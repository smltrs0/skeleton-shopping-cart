const ProductButton = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className="absolute h-10 w-16 rounded-l-md bg-blue-500 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-orange-400 group-focus-within:hover:bg-green-600"
		>
			Comprar
		</button>
	);
};

export default ProductButton;
