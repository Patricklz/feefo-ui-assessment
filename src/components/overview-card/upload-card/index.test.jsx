import React from "react";
import { render, screen } from "@testing-library/react";
import UploadCard from "./";

beforeEach(() => {
  jest.spyOn(console, "error");
  console.error.mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test("renders UploadCard with plural uploads and lines correctly", () => {
  render(<UploadCard uploads={2} linesAdded={2} />);
  expect(screen.getByText("Sales")).toBeInTheDocument();
  expect(screen.getByText("2 uploads")).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();
  expect(screen.getByText(/lines added./)).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders UploadCard with singular uploads and lines correctly", () => {
  render(<UploadCard uploads={1} linesAdded={1} />);
  expect(screen.getByText("Sales")).toBeInTheDocument();
  expect(screen.getByText("1 upload")).toBeInTheDocument();
  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText(/line added./)).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders UploadCard with no uploads and lines correctly", () => {
  render(<UploadCard uploads={0} linesAdded={0} />);
  expect(screen.getByText("Sales")).toBeInTheDocument();
  expect(screen.getByText("0 uploads")).toBeInTheDocument();
  expect(screen.getByText("0")).toBeInTheDocument();
  expect(screen.getByText(/lines added./)).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders UploadCard with no props correctly", () => {
  render(<UploadCard />);
  expect(screen.getByText("Sales")).toBeInTheDocument();
  const sentenceNotFound = screen.queryByText(/added/);
  expect(sentenceNotFound).not.toBeInTheDocument();
});
