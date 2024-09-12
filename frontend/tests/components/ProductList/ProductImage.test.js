import { render } from "@testing-library/react";
import ProductImage from "./ProductImage";

describe("ProductImage", () => {
	it("renders without error", () => {
		render(<ProductImage />);
	});

	it("displays image with correct src and alt attributes", () => {
		const testSrc = "test-image.jpg";
		const testAlt = "Test Image";
		const { getByAltText } = render(
			<ProductImage src={testSrc} alt={testAlt} />,
		);
		const productImage = getByAltText(testAlt);

		expect(productImage).toBeInTheDocument();
		expect(productImage.getAttribute("src")).toBe(testSrc);
		expect(productImage.getAttribute("alt")).toBe(testAlt);
	});
});
