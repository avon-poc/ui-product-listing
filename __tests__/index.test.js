/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
  it("renders a container", () => {
    render(<App />);

    const container = screen.getByTestId("avon-container");

    expect(container).toBeInTheDocument();
  });
});
