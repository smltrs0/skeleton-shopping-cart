import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "./CartItem";

const product = {
	id: 1,
	name: "Product Name",
	imageSrc: "path/to/image",
	imageAlt: "Product Image",
	href: "product-link",
	price: "10.99",
	color: "Red",
	quantity: 2,
};

const handlerDeleteItem = jest.fn();
const handlerQuantityChange = jest.fn();

test("renders CartItem component", () => {
	render(
		<CartItem
			product={product}
			handlerDeleteItem={handlerDeleteItem}
			handlerQuantityChange={handlerQuantityChange}
		/>,
	);

	const productName = screen.getByText("Product Name");
	expect(productName).toBeInTheDocument();

	const productPrice = screen.getByText("10.99");
	expect(productPrice).toBeInTheDocument();

	const productColor = screen.getByText("Red");
	expect(productColor).toBeInTheDocument();

	const deleteButton = screen.getByRole("button", { name: "Eliminar" });
	expect(deleteButton).toBeInTheDocument();
});

test("calls handlerDeleteItem when delete button is clicked", () => {
	render(
		<CartItem
			product={product}
			handlerDeleteItem={handlerDeleteItem}
			handlerQuantityChange={handlerQuantityChange}
		/>,
	);

	const deleteButton = screen.getByRole("button", { name: "Eliminar" });
	fireEvent.click(deleteButton);

	expect(handlerDeleteItem).toHaveBeenCalledTimes(1);
	expect(handlerDeleteItem).toHaveBeenCalledWith(product);
});

test("calls handlerQuantityChange when quantity is changed", () => {
	render(
		<CartItem
			product={product}
			handlerDeleteItem={handlerDeleteItem}
			handlerQuantityChange={handlerQuantityChange}
		/>,
	);

	const quantityInput = screen.getByPlaceholderText("Cantidad solicitada");
	fireEvent.change(quantityInput, { target: { value: "3" } });

	expect(handlerQuantityChange).toHaveBeenCalledTimes(1);
	expect(handlerQuantityChange).toHaveBeenCalledWith(product, "3");
});
