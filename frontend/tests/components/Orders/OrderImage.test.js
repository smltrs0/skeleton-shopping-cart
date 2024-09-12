import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // Add this line
import OrderImage from "../../../src/components/Orders/OrderImage";

describe("OrderImage", () => {
	test("should render the image with correct src and alt", () => {
		const src = "image.jpg";
		const alt = "Product Image";

		const { getByAltText } = render(<OrderImage src={src} alt={alt} />);

		const image = getByAltText(`Product ${alt}`);

		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("src", src);
	});
});
