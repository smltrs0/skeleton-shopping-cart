import React from 'react';
import PropTypes from 'prop-types';
import visaLogon from './visa.svg';
import mastercard from './mastercard.svg';

const CreditCardPreview = ({
	cardNumber,
	cardName,
	expiryDate,
	cvv,
	cardType,
}) => {
	const formatCardNumber = (number) => {
		return number.replace(/\s+/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
	};

	return (
		<div className="relative w-full sm:w-64 md:w-80 lg:w-96 h-48 bg-gray-800 text-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
			<div>
				<div className="text-xs sm:text-sm font-bold">
					TARJETA DE CRÉDITO
				</div>
				<div className="text-lg sm:text-xl font-bold mt-2">
					{formatCardNumber(cardNumber) ||
						'**** **** **** ****'}
				</div>
				<div className="text-xs sm:text-sm mt-2">
					<span className="font-semibold">Nombre: </span>
					{cardName || 'Nombre Completo'}
				</div>
				<div className="text-xs sm:text-sm mt-2">
					<span className="font-semibold">
						Fecha de Expiración:{' '}
					</span>
					{expiryDate || 'MM/AA'}
				</div>
				<div className="text-xs sm:text-sm mt-2">
					<span className="font-semibold">CVV: </span>
					{cvv || '***'}
				</div>
			</div>
			<div className="absolute bottom-4 right-4">
				{cardType &&
					(cardType === 'VISA' ? (
						<img
							src={visaLogon}
							alt="VISA"
							className="w-12 sm:w-16"
						/>
					) : (
						<img
							src={mastercard}
							alt="MasterCard"
							className="w-12 sm:w-16"
						/>
					))}
			</div>
		</div>
	);
};

CreditCardPreview.propTypes = {
	cardNumber: PropTypes.string.isRequired,
	cardName: PropTypes.string.isRequired,
	expiryDate: PropTypes.string.isRequired,
	cvv: PropTypes.string.isRequired,
	cardType: PropTypes.string.isRequired,
};

export default CreditCardPreview;
