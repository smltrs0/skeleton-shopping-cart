import { render, fireEvent, screen } from "@testing-library/react";
import ProductButton from "../../../src/components/ProductList/ProductButton";

describe("ProductButton", () => {
	it("renders without error", () => {
		render(<ProductButton />);
	});

	it("calls onClick callback correctly", () => {
		const mockOnClick = jest.fn();
		render(<ProductButton onClick={mockOnClick} />);
		const productButton = screen.getByText("Comprar");

		fireEvent.click(productButton);

		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});