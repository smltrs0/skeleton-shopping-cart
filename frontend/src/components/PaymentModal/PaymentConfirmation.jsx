import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IVA, weightPerItem, shippingRatePerKg } from '../../env';

const PaymentConfirmation = () => {
	const [formData, setFormData] = useState({
		direccion: '',
		importe: '',
		tarifaBase: '',
		tarifaEnvio: '',
	});
	const [errors, setErrors] = useState({});

	const shoppingCart = useSelector(
		(state) => state.shoppincart.shoppingCart,
	);

	useEffect(() => {
		let importe = 0;
		let tarifaBase = 0;
		let tarifaEnvio = 0;

		shoppingCart.forEach((item) => {
			importe += item.price * item.quantity * IVA;
			tarifaBase += item.price * item.quantity;
			// Configuración del envío

			// Calcular peso total del paquete
			const totalWeight = item.quantity * weightPerItem;

			// Calcular costo de envío en USD
			const shippingCostUSD = totalWeight * shippingRatePerKg;

			// Convertir costos a pesos colombianos (COP)
			tarifaEnvio += shippingCostUSD;
			importe += shippingCostUSD;
		});

		setFormData({
			...formData,
			importe: importe.toFixed(2),
			tarifaBase: tarifaBase.toFixed(2),
			tarifaEnvio: tarifaEnvio.toFixed(2),
		});
	}, [shoppingCart]);

	const validate = () => {
		let tempErrors = {};
		if (!formData.direccion)
			tempErrors.direccion = 'La dirección de envío es requerida.';
		if (!formData.importe || isNaN(formData.importe))
			tempErrors.importe =
				'El importe del producto debe ser un número válido.';
		if (!formData.tarifaBase || isNaN(formData.tarifaBase))
			tempErrors.tarifaBase =
				'La tarifa base debe ser un número válido.';
		if (!formData.tarifaEnvio || isNaN(formData.tarifaEnvio))
			tempErrors.tarifaEnvio =
				'La tarifa de envío debe ser un número válido.';
		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			console.log('Formulario válido', formData);
		}
	};

	return (
		<div>
			<h3 className="text-lg font-medium mb-4">
				Información de envío
			</h3>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="direccion"
						className="block text-gray-700"
					>
						Dirección de envío
					</label>
					<input
						type="text"
						id="direccion"
						name="direccion"
						value={formData.direccion}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.direccion && (
						<p className="text-red-500 text-sm mt-1">
							{errors.direccion}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="importe"
						className="block text-gray-700"
					>
						Importe del producto
					</label>
					<input
						type="text"
						id="importe"
						disabled={true}
						name="importe"
						value={formData.importe}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.importe && (
						<p className="text-red-500 text-sm mt-1">
							{errors.importe}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="tarifaBase"
						className="block text-gray-700"
					>
						Tarifa base
					</label>
					<input
						type="text"
						id="tarifaBase"
						name="tarifaBase"
						disabled={true}
						value={formData.tarifaBase}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.tarifaBase && (
						<p className="text-red-500 text-sm mt-1">
							{errors.tarifaBase}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="tarifaEnvio"
						className="block text-gray-700"
					>
						Tarifa de envío
					</label>
					<input
						type="text"
						id="tarifaEnvio"
						name="tarifaEnvio"
						disabled={true}
						value={formData.tarifaEnvio}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.tarifaEnvio && (
						<p className="text-red-500 text-sm mt-1">
							{errors.tarifaEnvio}
						</p>
					)}
				</div>
			</form>
		</div>
	);
};

export default PaymentConfirmation;
