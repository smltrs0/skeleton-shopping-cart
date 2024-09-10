import PropTypes from "prop-types";

const ProductQuantity = ({ onChange, value }) => {
	return (
		<input
			type="number"
			onChange={onChange}
			value={value}
			className="peer relative h-10 w-full rounded-md bg-gray-50 pl-20 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
		/>
	);
};

ProductQuantity.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
};

export default ProductQuantity;
