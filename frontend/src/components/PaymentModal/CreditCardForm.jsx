import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CreditCardPreview from './CreditCardPreview';
import useCreditCardValidation from '../../hooks/useCreditCardValidation';
import { updateCardInfo } from '../../features/payment/paymentSlice';
import { debounce } from 'lodash';

const CreditCardForm = () => {
	const {
		cardNumber,
		cardName,
		expiryDate,
		cvv,
		cardType,
		cardNumberError,
		cardNameError,
		expiryDateError,
		cvvError,
		handleCardNumberChange,
		handleCardNameChange,
		handleExpiryDateChange,
		handleCvvChange,
	} = useCreditCardValidation();

	const dispatch = useDispatch();

	const debouncedUpdateCardInfo = useCallback(
		debounce((cardInfo) => {
			dispatch(updateCardInfo(cardInfo));
		}, 700),
		[dispatch],
	);

	useEffect(() => {
		debouncedUpdateCardInfo({
			cardNumber: cardNumber,
			cardName: cardName,
			expiryDate: expiryDate,
			cvv: cvv,
		});
	}, [cardNumber, cardName, expiryDate, cvv, debouncedUpdateCardInfo]);

	return (
		<div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 p-4 md:p-5">
			<div className="flex-1">
				<div className="space-y-4">
					<div>
						<label
							htmlFor="cardNumber"
							className="block text-sm font-medium text-gray-700"
						>
							Número de tarjeta
						</label>
						<input
							id="cardNumber"
							type="text"
							value={cardNumber}
							onChange={handleCardNumberChange}
							className={`mt-1 block w-full border ${cardNumberError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2`}
							placeholder="1234 5678 9012 3456"
							maxLength="19"
							required
						/>
						{cardNumberError && (
							<p className="text-sm text-red-500 mt-1">
								{cardNumberError}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="cardName"
							className="block text-sm font-medium text-gray-700"
						>
							Nombre en la tarjeta
						</label>
						<input
							id="cardName"
							type="text"
							value={cardName}
							onChange={handleCardNameChange}
							className={`mt-1 block w-full border ${cardNameError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2`}
							placeholder="Nombre Completo"
							required
						/>
						{cardNameError && (
							<p className="text-sm text-red-500 mt-1">
								{cardNameError}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="expiryDate"
							className="block text-sm font-medium text-gray-700"
						>
							Fecha de Expiración
						</label>
						<input
							id="expiryDate"
							type="text"
							value={expiryDate}
							onChange={handleExpiryDateChange}
							className={`mt-1 block w-full border ${expiryDateError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2`}
							placeholder="MM/AA"
							maxLength="5"
							required
						/>
						{expiryDateError && (
							<p className="text-sm text-red-500 mt-1">
								{expiryDateError}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="cvv"
							className="block text-sm font-medium text-gray-700"
						>
							CVV
						</label>
						<input
							id="cvv"
							type="password"
							value={cvv}
							onChange={handleCvvChange}
							className={`mt-1 block w-1/2 sm:w-1/3 border ${cvvError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2`}
							placeholder="123"
							maxLength="3"
							required
						/>
						{cvvError && (
							<p className="text-sm text-red-500 mt-1">
								{cvvError}
							</p>
						)}
					</div>
				</div>
			</div>
			<div className="flex-1">
				<CreditCardPreview
					cardNumber={cardNumber}
					cardName={cardName}
					expiryDate={expiryDate}
					cvv={cvv}
					cardType={cardType}
				/>
			</div>
		</div>
	);
};

export default CreditCardForm;
