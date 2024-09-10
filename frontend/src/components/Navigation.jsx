import React from "react";
import NavigationLinks from "./Navigation/NavigationLinks";
import ShoppinCart from "./Navigation/ShoppingCart";
import MovileMenuButton from "./Navigation/MovileMenuButton";

const Navigation = () => {
	const [toggle, setToggle] = React.useState(false);

	return (
		<nav className="bg-gray-800">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<MovileMenuButton
							toggle={toggle}
							setToggle={setToggle}
						/>
					</div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center"></div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								<NavigationLinks />
							</div>
						</div>
					</div>
					<ShoppinCart />
				</div>
			</div>
			{toggle && (
				<div className="sm:hidden">
					<div className="space-y-1 px-2 pb-3 pt-2">
						<NavigationLinks />
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
