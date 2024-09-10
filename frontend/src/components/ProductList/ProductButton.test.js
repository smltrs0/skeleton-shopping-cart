import { render, fireEvent } from "@testing-library/react";
import ProductButton from "./ProductButton";

describe("ProductButton", () => {
	it("renders without error", () => {
		render(<ProductButton />);
	});

	it("calls onClick callback correctly", () => {
		const mockOnClick = jest.fn();
		const { getByText } = render(
			<ProductButton onClick={mockOnClick} />,
		);
		const productButton = getByText("Comprar");

		fireEvent.click(productButton);

		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
