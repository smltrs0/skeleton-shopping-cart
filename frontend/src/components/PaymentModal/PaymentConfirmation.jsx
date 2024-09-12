import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IVA, weightPerItem, shippingRatePerKg } from '../../env';

const PaymentConfirmation = () => {
	const [formData, setFormData] = useState({
		address_line_1: '',
		address_line_2: '',
		country: 'CO',
		region: '',
		city: '',
		name: '',
		phone_number: '',
		postal_code: '',
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
		if (!formData.address_line_1)
			tempErrors.address_line_1 =
				'La dirección línea 1 es requerida.';
		if (!formData.city) tempErrors.city = 'La ciudad es requerida.';
		if (!formData.region) tempErrors.region = 'La región es requerida.';
		if (!formData.name) tempErrors.name = 'El nombre es requerido.';
		if (!formData.phone_number)
			tempErrors.phone_number =
				'El número de teléfono es requerido.';
		if (!formData.postal_code)
			tempErrors.postal_code = 'El código postal es requerido.';
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
						htmlFor="address_line_1"
						className="block text-gray-700"
					>
						Dirección Línea 1 *
					</label>
					<input
						type="text"
						id="address_line_1"
						name="address_line_1"
						value={formData.address_line_1}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.address_line_1 && (
						<p className="text-red-500 text-sm mt-1">
							{errors.address_line_1}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="address_line_2"
						className="block text-gray-700"
					>
						Dirección Línea 2
					</label>
					<input
						type="text"
						id="address_line_2"
						name="address_line_2"
						value={formData.address_line_2}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.address_line_2 && (
						<p className="text-red-500 text-sm mt-1">
							{errors.address_line_2}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="city"
						className="block text-gray-700"
					>
						Ciudad *
					</label>
					<input
						type="text"
						id="city"
						name="city"
						value={formData.city}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.city && (
						<p className="text-red-500 text-sm mt-1">
							{errors.city}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="region"
						className="block text-gray-700"
					>
						Región *
					</label>
					<input
						type="text"
						id="region"
						name="region"
						value={formData.region}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.region && (
						<p className="text-red-500 text-sm mt-1">
							{errors.region}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-gray-700"
					>
						Nombre
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.name && (
						<p className="text-red-500 text-sm mt-1">
							{errors.name}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="phone_number"
						className="block text-gray-700"
					>
						Número de teléfono *
					</label>
					<input
						type="text"
						id="phone_number"
						name="phone_number"
						value={formData.phone_number}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.phone_number && (
						<p className="text-red-500 text-sm mt-1">
							{errors.phone_number}
						</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="postal_code"
						className="block text-gray-700"
					>
						Código postal
					</label>
					<input
						type="text"
						id="postal_code"
						name="postal_code"
						value={formData.postal_code}
						onChange={handleChange}
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					/>
					{errors.postal_code && (
						<p className="text-red-500 text-sm mt-1">
							{errors.postal_code}
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
