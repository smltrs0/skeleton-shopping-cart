import { render } from "@testing-library/react";
import ProductDetails from "./ProductDetails";

describe("ProductDetails", () => {
	it("renders without error", () => {
		render(<ProductDetails />);
	});

	it("displays product details correctly", () => {
		const testProduct = {
			name: "Test Product",
			href: "/product/123",
			color: "Red",
			price: "$19.99",
		};

		const { getByText } = render(
			<ProductDetails
				name={testProduct.name}
				href={testProduct.href}
				color={testProduct.color}
				price={testProduct.price}
			/>,
		);

		const productName = getByText(testProduct.name);
		const productColor = getByText(testProduct.color);
		const productPrice = getByText(testProduct.price);

		expect(productName).toBeInTheDocument();
		expect(productName.getAttribute("href")).toBe(testProduct.href);
		expect(productColor).toBeInTheDocument();
		expect(productPrice).toBeInTheDocument();
	});
});
