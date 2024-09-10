import React from "react";

const ModalHeader = ({ closeModal }) => (
	<div className="flex justify-between items-center mb-4">
		<h2 className="text-xl font-semibold">Método de Pago</h2>
		<button
			onClick={closeModal}
			className="text-gray-500 hover:text-gray-700"
		>
			&times;
		</button>
	</div>
);

export default ModalHeader;
