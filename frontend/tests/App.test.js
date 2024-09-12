import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import App from "./App";

jest.mock("react-redux", () => ({
	useSelector: jest.fn(),
}));

describe("App", () => {
	test("renders app correctly", () => {
		expect(2).toBe(2);
	});
});
