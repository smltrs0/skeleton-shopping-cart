import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // Importa jest-dom para usar toBeInTheDocument
import ProductImage from "../../../src/components/ProductList/ProductImage";

describe("ProductImage", () => {
	it("renders without error", () => {
		render(<ProductImage />);
	});

	it("displays image with correct src and alt attributes", () => {
		const testSrc = "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg";
		const testAlt = "Test Image";
		const { getByAltText } = render(
			<ProductImage src={testSrc} alt={testAlt} />
		);
		const productImage = getByAltText(testAlt);

		expect(productImage).toBeInTheDocument();
		expect(productImage.getAttribute("src")).toBe(testSrc);
		expect(productImage.getAttribute("alt")).toBe(testAlt);
	});
});