import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom library
import OrderProductCard from "../../../src/components/OrderDetail/OrderProductCard";

describe("OrderProductCard", () => {
	test("should render the order product card with correct data", () => {
		const order = {
			product: {
				imageSrc: "image.jpg",
				name: "Product Name",
				price: 10.99,
			},
			created_at: "2023-07-01",
			quantity: 2,
		};

		render(<OrderProductCard order={order} />);

		const productName = screen.getByText(order.product.name);
		expect(productName).toBeInTheDocument();

		const createdAt = screen.getByText(
			`Fecha de creación: ${order.created_at}`,
		);
		expect(createdAt).toBeInTheDocument();
		const quantity = screen.getByText(`Cantidad: ${order.quantity}`);
		expect(quantity).toBeInTheDocument();
	});
});
