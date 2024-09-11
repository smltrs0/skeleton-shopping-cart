import React, { useState } from 'react'; // Importa React si usas JSX
import PaymentMethodSelection from './PaymentMethodSelection';
import PaymentDetails from './PaymentModal/PaymentDetails';
import PaymentConfirmation from './PaymentModal/PaymentConfirmation';

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

export default RenderStepContent;
