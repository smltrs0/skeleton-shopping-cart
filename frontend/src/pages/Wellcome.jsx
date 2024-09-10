import React from "react";

const Wellcome = () => {
	return (
		<div className="bg-gray-200 min-h-screen flex items-center justify-center">
			<div className="max-w-lg bg-white p-8 shadow-lg rounded-lg">
				<h1 className="text-3xl font-bold mb-4">
					Bienvenido a nuestra tienda virtual
				</h1>
				<p className="text-gray-700 mb-6">
					Encuentra los mejores productos al mejor precio.
				</p>
				<a
					href="/products"
					className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
				>
					Explorar productos
				</a>
			</div>
		</div>
	);
};

export default Wellcome;
