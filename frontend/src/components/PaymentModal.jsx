import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ModalHeader from './PaymentModal/ModalHeader';
import ModalSteps from './PaymentModal/ModalSteps';
import ModalNavigation from './PaymentModal/ModalNavigation';
import RenderStepContent from './PaymentModal/RenderStepContent';

import { useDispatch, useSelector } from 'react-redux';
import { accepTerms } from '../features/shopping-cart/shoppingCartSlice';
import { generatePaymentIntent } from '../features/payment/paymentsActions';

const PaymentModal = ({ isOpen, onClose }) => {
	const [step, setStep] = useState(0);

	const dispatch = useDispatch();
	const termsAccepted = useSelector(
		(state) => state.shoppincart.accepTerms,
	);
	const paymentInfo = useSelector((state) => state.payment);
	const shoppincart = useSelector((state) => state.shoppincart);

	const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 3));
	const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

	const closeModal = () => {
		setStep(1);
		onClose();
	};

	const handleTermsChange = (event) =>
		dispatch(accepTerms(event.target.checked));

	if (!isOpen) return null;

	const finalizePurchase = () => {
		// Finalize purchase
		const purchaseData = {
			card: paymentInfo.card,
			shipment: paymentInfo.shipment,
			shoppingCart: {
				accepTerms: shoppincart.accepTerms,
				shoppingCart: shoppincart.shoppingCart,
			},
		};

		dispatch(generatePaymentIntent(purchaseData));
		console.log(purchaseData);
	};

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-90 flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-11/12 md:w-3/4 lg:w-1/2 p-4 md:p-6 max-h-screen overflow-y-auto">
				<ModalHeader closeModal={closeModal} />
				<ModalSteps step={step} />
				<div>
					<RenderStepContent
						step={step}
						handleTermsChange={handleTermsChange}
					/>
				</div>
				{termsAccepted && (
					<ModalNavigation
						step={step}
						prevStep={prevStep}
						nextStep={nextStep}
						closeModal={closeModal}
						finalizePurchase={finalizePurchase}
					/>
				)}
			</div>
		</div>
	);
};

PaymentModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default PaymentModal;
