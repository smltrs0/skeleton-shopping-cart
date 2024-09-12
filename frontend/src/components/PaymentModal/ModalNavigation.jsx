import { useState } from 'react';
import PropTypes from 'prop-types';

const ModalNavigation = ({
	step,
	prevStep,
	nextStep,
	closeModal,
	finalizePurchase,
}) => {
	const [isVerified, setIsVerified] = useState(false);

	const handleVerify = () => {
		// Simular una consulta con setTimeout
		setTimeout(() => {
			setIsVerified(true);
		}, 2000); // Simula una consulta de 2 segundos
	};

	return (
		<div className="mt-4 flex justify-between">
			{step > 1 && (
				<button
					onClick={prevStep}
					className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
				>
					Atrás
				</button>
			)}
			{step < 3 && !isVerified && (
				<button
					onClick={handleVerify}
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Verificar
				</button>
			)}
			{step < 3 && isVerified && (
				<button
					onClick={nextStep}
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Siguiente
				</button>
			)}
			{step >= 3 && (
				<button
					onClick={finalizePurchase}
					className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
				>
					Finalizar compra
				</button>
			)}
		</div>
	);
};

ModalNavigation.propTypes = {
	step: PropTypes.number.isRequired,
	prevStep: PropTypes.func.isRequired,
	nextStep: PropTypes.func.isRequired,
	closeModal: PropTypes.func.isRequired,
	finalizePurchase: PropTypes.func.isRequired,
};

export default ModalNavigation;
