import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ListItem from "./ListItem";

// https://www.w3.org/TR/html-aria/#docconformance

describe("ListItem", () => {
  const props = {
    title: "Test title",
    publishedAt: "2069-01-01",
  };

  it("should render the title and publishedAt props correctly", () => {
    render(<ListItem {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.publishedAt)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      props.title
    );
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      props.publishedAt
    );
  });

  it('should have a div with class "list-item"', () => {
    const { container } = render(<ListItem {...props} />);
    expect(container.firstChild).toHaveClass("list-item");
  });
});
