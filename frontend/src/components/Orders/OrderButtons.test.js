import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OrderButtons from "./OrderButtons";

describe("OrderButtons", () => {
	test('should call handleDeleteOrder when "Eliminar" button is clicked', () => {
		const handleDeleteOrderMock = jest.fn();
		const handleShowOrderMock = jest.fn();
		const orderId = 123;

		const { getByText } = render(
			<OrderButtons
				handleDeleteOrder={handleDeleteOrderMock}
				handleShowOrder={handleShowOrderMock}
				orderId={orderId}
			/>,
		);

		const deleteButton = getByText("Eliminar");
		fireEvent.click(deleteButton);

		expect(handleDeleteOrderMock).toHaveBeenCalledTimes(1);
		expect(handleDeleteOrderMock).toHaveBeenCalledWith(orderId);
		expect(handleShowOrderMock).not.toHaveBeenCalled();
	});

	test('should call handleShowOrder when "Ver" button is clicked', () => {
		const handleDeleteOrderMock = jest.fn();
		const handleShowOrderMock = jest.fn();
		const orderId = 123;

		const { getByText } = render(
			<OrderButtons
				handleDeleteOrder={handleDeleteOrderMock}
				handleShowOrder={handleShowOrderMock}
				orderId={orderId}
			/>,
		);

		const showButton = getByText("Ver");
		fireEvent.click(showButton);

		expect(handleShowOrderMock).toHaveBeenCalledTimes(1);
		expect(handleShowOrderMock).toHaveBeenCalledWith(orderId);
		expect(handleDeleteOrderMock).not.toHaveBeenCalled();
	});
});
