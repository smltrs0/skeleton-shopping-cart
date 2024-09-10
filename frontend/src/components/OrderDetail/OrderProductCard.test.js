import React from "react";
import { render } from "@testing-library/react";
import OrderProductCard from "./OrderProductCard";

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

		const { getByAltText, getByText } = render(
			<OrderProductCard order={order} />,
		);

		const productName = getByText(order.product.name);
		expect(productName).toBeInTheDocument();

		const createdAt = getByText(
			`Fecha de creación: ${order.created_at}`,
		);
		expect(createdAt).toBeInTheDocument();

		const quantity = getByText(`Cantidad: ${order.quantity}`);
		expect(quantity).toBeInTheDocument();
	});
});
