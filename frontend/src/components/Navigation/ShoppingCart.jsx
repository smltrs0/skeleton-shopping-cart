import { Link } from "react-router-dom";
import shoppingCartLogo from "./../ShoppinCart/shopping-cart-logo.svg";
import { useSelector } from "react-redux";

const ShoppinCart = () => {
	const itemsSelected = useSelector(
		(state) => state.shoppincart.shoppingCart,
	);

	const itemCount = itemsSelected
		.map((item) => item.quantity)
		.reduce((acc, item) => parseInt(acc) + parseInt(item), 0);

	return (
		<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
			<Link
				to="/car"
				type="button"
				className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
			>
				{itemCount > 0 && <span>{parseInt(itemCount)}</span>}
				<img
					src={shoppingCartLogo}
					alt="shopping cart"
					className="h-5 w-5"
				/>
			</Link>
		</div>
	);
};

export default ShoppinCart;
