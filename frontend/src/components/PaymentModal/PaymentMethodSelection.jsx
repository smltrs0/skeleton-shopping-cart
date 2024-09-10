import React, { useState } from 'react';

const PaymentMethodSelection = ({ setPaymentMethod }) => {
	const [selectedMethod, setSelectedMethod] = useState('');

	const handleSelection = (method) => {
		setSelectedMethod(method);
		setPaymentMethod(method);
	};

	const paymentMethods = [
		{
			name: 'credit',
			imgSrc: 'https://w7.pngwing.com/pngs/650/310/png-transparent-credit-card-american-express-visa-logo-payment-credit-card-payment-logo-internet.png',
			alt: 'Tarjeta de crédito',
			label: 'Tarjeta de crédito',
		},
		{
			name: 'paypal',
			imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
			alt: 'PayPal',
			label: 'PayPal',
		},
		{
			name: 'bank',
			imgSrc: 'https://cdn-icons-png.flaticon.com/512/4140/4140809.png',
			alt: 'Transferencia Bancaria',
			label: 'Transferencia Bancaria',
		},
	];

	const getClassNames = (method) =>
		`p-4 border rounded-md cursor-pointer flex flex-col items-center justify-center h-32 ${
			selectedMethod === method
				? 'border-blue-500 bg-blue-100'
				: 'border-gray-300'
		}`;

	return (
		<div>
			<h3 className="text-lg font-medium mb-2">
				Seleccione un método de pago
			</h3>
			<ul className="space-y-2 grid grid-cols-3 gap-4">
				{paymentMethods.map(({ name, imgSrc, alt, label }) => (
					<li key={name}>
						<div
							className={getClassNames(name)}
							onClick={() => handleSelection(name)}
							style={{ height: '150px' }} // Altura fija para todos los elementos
						>
							<img
								src={imgSrc}
								alt={alt}
								className="h-16 w-16 mb-2"
							/>
							{label}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PaymentMethodSelection;
