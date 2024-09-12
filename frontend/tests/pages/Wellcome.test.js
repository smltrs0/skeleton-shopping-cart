import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // Add this line
import Wellcome from "../../src/pages/Wellcome";

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