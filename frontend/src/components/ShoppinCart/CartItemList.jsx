import React from "react";
import CartItem from "./CartItem";
import PropTypes from "prop-types";

const CartItemList = ({
	products,
	handlerDeleteItem,
	handlerQuantityChange,
}) => {
	return (
		<div className="flow-root">
			<ul className="-my-6 divide-y divide-gray-200">
				{products.map((product) => (
					<CartItem
						key={product.id}
						product={product}
						handlerDeleteItem={handlerDeleteItem}
						handlerQuantityChange={
							handlerQuantityChange
						}
					/>
				))}
			</ul>
		</div>
	);
};

CartItemList.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired,
		}),
	).isRequired,
	handlerDeleteItem: PropTypes.func.isRequired,
	handlerQuantityChange: PropTypes.func.isRequired,
};

export default CartItemList;
