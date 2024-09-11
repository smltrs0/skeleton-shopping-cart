import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PaymentMethodSelection from './PaymentMethodSelection';
import PaymentDetails from '../PaymentModal/PaymentDetails';
import PaymentConfirmation from '../PaymentModal/PaymentConfirmation';

const RenderStepContent = ({ step = 1 }) => {
	const [paymentMethod, setPaymentMethod] = useState('');

	switch (step) {
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
};

export default RenderStepContent;
