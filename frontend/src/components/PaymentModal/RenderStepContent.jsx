import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PaymentMethodSelection from './PaymentMethodSelection';
import PaymentDetails from '../PaymentModal/PaymentDetails';
import PaymentConfirmation from '../PaymentModal/PaymentConfirmation';

const RenderStepContent = ({ step, handleTermsChange }) => {
	const [paymentMethod, setPaymentMethod] = useState('');

	switch (step) {
		case 0:
			return (
				<div className="mt-4">
					<label onChange={handleTermsChange}>
						<input type="checkbox" className="mr-2" />{' '}
						Acepto los términos y condiciones descritas
						en el siguiente link{' '}
						<a
							target="_blank"
							rel="noreferrer"
							href="https://wompi.com/assets/downloadble/reglamento-Usuarios-Colombia.pdf"
						>
							terminos y condiciones
						</a>
					</label>
				</div>
			);
		case 1:
			return (
				<PaymentMethodSelection
					setPaymentMethod={setPaymentMethod}
				/>
			);
		case 2:
			return <PaymentDetails paymentMethod={paymentMethod} />;
		case 3:
			return <PaymentConfirmation />;
		default:
			return <></>;
	}
};

RenderStepContent.propTypes = {
	step: PropTypes.number.isRequired,
	handleTermsChange: PropTypes.func.isRequired,
};

export default RenderStepContent;
