import React from "react";
import { render } from "@testing-library/react";
import OrderItem from "./OrderItem";

describe("OrderItem", () => {
	test("should render the order item with correct order data", () => {
		const order = {
			id: 1,
			order_products: [
				{
					product: {
						id: 1,
						imageSrc: "image1.jpg",
						imageAlt: "Product 1",
					},
				},
				{
					product: {
						id: 2,
						imageSrc: "image2.jpg",
						imageAlt: "Product 2",
					},
				},
			],
		};
		const index = 0;
		const handleDeleteOrder = jest.fn();
		const handleShowOrder = jest.fn();

		const { getByText, getAllByAltText } = render(
			<OrderItem
				order={order}
				index={index}
				handleDeleteOrder={handleDeleteOrder}
				handleShowOrder={handleShowOrder}
			/>,
		);

		const orderNumber = getByText(`Pedido #${index + 1}`);
		expect(orderNumber).toBeInTheDocument();

		const images = getAllByAltText(/Product/);
		expect(images.length).toBe(order.order_products.length);

		images.forEach((image, index) => {
			expect(image).toHaveAttribute(
				"src",
				order.order_products[index].product.imageSrc,
			);
		});
	});
});
