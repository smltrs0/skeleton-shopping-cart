const CartItem = ({ product, handlerDeleteItem, handlerQuantityChange }) => {
	return (
		<li key={product.id} className="flex py-6">
			<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
				<img
					src={product.imageSrc}
					alt={product.imageAlt}
					className="h-full w-full object-cover object-center"
				/>
			</div>

			<div className="ml-4 flex flex-1 flex-col">
				<div>
					<div className="flex justify-between text-base font-medium text-gray-900">
						<h3>
							<a href={product.href}>
								{product.name}
							</a>
						</h3>
						<p className="ml-4">{product.price}</p>
					</div>
					<p className="mt-1 text-sm text-gray-500">
						{product.color}
					</p>
				</div>
				<div className="flex flex-1 items-end justify-between text-sm">
					<div>
						<div className="group mt-4">
							<div className="relative flex items-center">
								<input
									type="number"
									min={1}
									value={product.quantity}
									onChange={(e) =>
										handlerQuantityChange(
											product,
											e.target
												.value,
										)
									}
									placeholder="Cantidad solicitada"
									className="peer relative h-10 w-full text-center rounded-md bg-gray-50 pl-20 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg shadow-inner"
								/>
								<span className="absolute z-1 py-3 pl-3 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
									<p>Cantidad</p>
								</span>
							</div>
						</div>
					</div>
					<div className="flex">
						<button
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
							onClick={() =>
								handlerDeleteItem(product)
							}
						>
							Eliminar
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
