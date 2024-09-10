import React from "react";

const Home = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-white shadow">
				<div className="container mx-auto px-4 py-6">
					<h1 className="text-3xl font-bold text-gray-800">
						Bienvenido a nuestra tienda virtual
					</h1>
				</div>
			</header>

			<main className="flex-grow container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-white p-4 shadow rounded-lg">
						<h2 className="text-xl font-semibold mb-4">
							Aqui puedes ver la lista de productos
						</h2>
						<p>
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Duis
							tincidunt diam nec nisi hendrerit
							lobortis.
						</p>
					</div>
					<div className="bg-white p-4 shadow rounded-lg">
						<h2 className="text-xl font-semibold mb-4">
							Generar ordenes de compra
						</h2>
						<p>
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Duis
							tincidunt diam nec nisi hendrerit
							lobortis.
						</p>
					</div>
					<div className="bg-white p-4 shadow rounded-lg">
						<h2 className="text-xl font-semibold mb-4">
							Crear tus ordenes de compra a través
							de un carrito
						</h2>
						<p>
							Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Duis
							tincidunt diam nec nisi hendrerit
							lobortis.
						</p>
					</div>
				</div>
			</main>

			<footer className="bg-gray-800 py-4">
				<div className="container mx-auto px-4 text-center">
					<p className="text-white">
						© 2023 Nuestra Tienda Online. Todos los
						derechos reservados.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
