import React from 'react';
import PropTypes from 'prop-types';

const ModalSteps = ({ step }) => (
	<div className="mb-4">
		<ul className="flex justify-center space-x-4">
			<li
				className={`text-sm font-medium ${step === 1 ? 'text-blue-500' : 'text-gray-400'}`}
			>
				1. Selección del Método
			</li>
			<li
				className={`text-sm font-medium ${step === 2 ? 'text-blue-500' : 'text-gray-400'}`}
			>
				2. Detalles del Pago
			</li>
			<li
				className={`text-sm font-medium ${step === 3 ? 'text-blue-500' : 'text-gray-400'}`}
			>
				3. Información de envío
			</li>
		</ul>
	</div>
);
ModalSteps.propTypes = {
	step: PropTypes.number.isRequired,
};
export default ModalSteps;
