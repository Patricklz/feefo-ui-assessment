import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

beforeEach(() => {
  jest.spyOn(console, "error");
  console.error.mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test("renders Header Title correctly", () => {
  const { container } = render(
    <Header />
  );
  expect(screen.getByText("Account Overview")).toBeInTheDocument();


  expect(console.error).not.toHaveBeenCalled();
});








