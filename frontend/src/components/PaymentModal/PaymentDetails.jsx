import React from 'react';
import PropTypes from 'prop-types';
import CreditCardForm from './CreditCardForm';

const PaymentDetails = ({ paymentMethod }) => (
	<div>
		<h3 className="text-lg font-medium mb-2">Detalles del Pago</h3>
		{paymentMethod === 'credit' ? (
			<div>
				<h2>Pago con tarjeta de crédito</h2>
				<CreditCardForm />
			</div>
		) : (
			<p>
				El método de pago seleccionado no está disponible. Por
				favor, seleccione otro método de pago.
			</p>
		)}
	</div>
);

export default PaymentDetails;

PaymentDetails.propTypes = {
	paymentMethod: PropTypes.string.isRequired,
};
