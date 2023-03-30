import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Info from "./Info";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Info", () => {
  it("renders the component with translated strings", () => {
    render(<Info togglePopup={jest.fn()} />);
    expect(screen.getByText("about_project")).toBeInTheDocument();
    expect(screen.getByText("biggest_challenge")).toBeInTheDocument();
    expect(screen.getByText("the_most_fun")).toBeInTheDocument();
  });
});
