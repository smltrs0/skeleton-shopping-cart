import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderButtons from '../../../src/components/Orders/OrderButtons';

describe('OrderButtons component', () => {
	const mockHandleDeleteOrder = jest.fn();
	const mockHandleShowOrder = jest.fn();
	const orderId = '123';

	it('renders correctly', () => {
		const { getByText } = render(
			<OrderButtons
				handleDeleteOrder={mockHandleDeleteOrder}
				handleShowOrder={mockHandleShowOrder}
				orderId={orderId}
			/>,
		);

		// Verifica que los botones se rendericen con el texto adecuado
		expect(getByText('Eliminar')).toBeInTheDocument();
		expect(getByText('Ver')).toBeInTheDocument();
	});

	it('calls handleDeleteOrder with the correct orderId when Eliminar is clicked', () => {
		const { getByText } = render(
			<OrderButtons
				handleDeleteOrder={mockHandleDeleteOrder}
				handleShowOrder={mockHandleShowOrder}
				orderId={orderId}
			/>,
		);

		const deleteButton = getByText('Eliminar');
		fireEvent.click(deleteButton);

		// Verifica que la función handleDeleteOrder haya sido llamada con el orderId correcto
		expect(mockHandleDeleteOrder).toHaveBeenCalledWith(orderId);
		expect(mockHandleDeleteOrder).toHaveBeenCalledTimes(1);
	});

	it('calls handleShowOrder with the correct orderId when Ver is clicked', () => {
		const { getByText } = render(
			<OrderButtons
				handleDeleteOrder={mockHandleDeleteOrder}
				handleShowOrder={mockHandleShowOrder}
				orderId={orderId}
			/>,
		);

		const showButton = getByText('Ver');
		fireEvent.click(showButton);

		// Verifica que la función handleShowOrder haya sido llamada con el orderId correcto
		expect(mockHandleShowOrder).toHaveBeenCalledWith(orderId);
		expect(mockHandleShowOrder).toHaveBeenCalledTimes(1);
	});
});
