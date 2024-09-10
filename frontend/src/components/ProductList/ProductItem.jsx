import { Capitalizer } from '../Helpers';
import ProductButton from './ProductButton';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import ProductQuantity from './ProductQuantity';
import PropTypes from 'prop-types';

const ProductItem = ({
	product,
	getProductQuantity,
	handlerAddItemToCart,
	handlerQuantityChange,
}) => {
	const { imageSrc, imageAlt, href, name, color, price } =
		product.attributes;
	const quantity = getProductQuantity(product.attributes);

	const handleQuantityChange = (e) => {
		handlerQuantityChange(product.attributes, e.target.value);
	};

	const handleAddToCart = () => {
		handlerAddItemToCart(product.attributes);
	};

	return (
		<div
			key={product.id}
			className="group border p-5 rounded-lg bg-slate-100"
		>
			<ProductImage src={imageSrc} alt={imageAlt} />
			<ProductDetails
				name={Capitalizer(name)}
				href={href}
				color={color}
				price={price}
			/>
			<div className="group mt-4">
				<div className="relative flex items-center">
					<ProductQuantity
						onChange={handleQuantityChange}
						value={quantity}
					/>
					<ProductButton onClick={handleAddToCart} />
				</div>
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		attributes: PropTypes.shape({
			imageSrc: PropTypes.string.isRequired,
			imageAlt: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
			price: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
	getProductQuantity: PropTypes.func.isRequired,
	handlerAddItemToCart: PropTypes.func.isRequired,
	handlerQuantityChange: PropTypes.func.isRequired,
};

export default ProductItem;
