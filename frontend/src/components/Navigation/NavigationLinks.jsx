import { Link } from 'react-router-dom';

const NavigationLinks = () => (
	<>
		<Link
			to="/home"
			className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
		>
			LOGO
		</Link>
		<Link
			to="/products"
			className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
		>
			Productos
		</Link>
		<Link
			to="/orders"
			className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
		>
			Tarjeta de crédito/información de entrega
		</Link>
	</>
);

export default NavigationLinks;
