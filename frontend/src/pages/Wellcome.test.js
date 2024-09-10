import React from "react";
import { render, screen } from "@testing-library/react";
import Wellcome from "./Wellcome";

describe("Wellcome Component", () => {
	test("renders welcome message", () => {
		render(<Wellcome />);

		const welcomeHeading = screen.getByText(
			/Bienvenido a nuestra tienda virtual/i,
		);
		const exploreProductsLink = screen.getByText(/Explorar productos/i);

		expect(welcomeHeading).toBeInTheDocument();
		expect(exploreProductsLink).toBeInTheDocument();
	});
});
