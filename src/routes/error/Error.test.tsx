import "@testing-library/jest-dom";
import { useRouteError } from "react-router";
import { MemoryRouter } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import { render, screen } from "@testing-library/react";

import i18n from "@/i18n";
import Error from "./Error";

// Mock the useRouteError hook
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"), // Spread the properties of the original react-router module
  useRouteError: jest.fn(() => ({
    // Mock implementation of useRouteError hook that returns a specific error object
    status: 404,
    statusText: "Not Found",
    message: "Page not found",
  })),
}));

describe("Error component", () => {
  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  it("should display error message", () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    // Assert that certain elements are rendered with expected text and attributes
    expect(
      screen.getByText("Oops! Looks like something went wrong!")
    ).toBeInTheDocument();
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Not Found")).toBeInTheDocument();
    expect(screen.getByText("Take me home")).toHaveAttribute(
      "href",
      "/country/pl"
    );

    // Assert that the mocked useRouteError hook was called once
    expect(useRouteError).toHaveBeenCalledTimes(1);
  });
});
