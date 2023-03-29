import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import CountryItem from "./CountryItem";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

const mockStore = configureStore([]);

describe("CountryItem component", () => {
  const name = "United States";
  const code = "us";

  it("renders the country name", () => {
    const store = mockStore({ news: { targetCountry: code } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CountryItem code={code} name={name} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("sets the correct link path", () => {
    const store = mockStore({ news: { targetCountry: code } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CountryItem code={code} name={name} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole("link")).toHaveAttribute("href", "/country/us");
  });

  it("sets the active data attribute when the code matches the target country", () => {
    const store = mockStore({ news: { targetCountry: code } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CountryItem code={code} name={name} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole("link")).toHaveAttribute("data-active", "true");
  });

  it("does not set the active data attribute when the code does not match the target country", () => {
    const store = mockStore({ news: { targetCountry: code } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CountryItem code="pl" name={name} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole("link")).toHaveAttribute("data-active", "false");
  });
});
