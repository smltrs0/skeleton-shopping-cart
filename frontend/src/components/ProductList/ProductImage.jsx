import PropTypes from 'prop-types';

const ProductImage = ({ src, alt }) => {
	return (
		<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:border group-hover:bg-slate-50 lg:h-80 transition duration-300">
			<img
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center lg:h-full lg:w-full"
			/>
		</div>
	);
};

ProductImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};
export default ProductImage;
