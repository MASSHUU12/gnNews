import "@testing-library/jest-dom";
import { initReactI18next } from "react-i18next";
import { render, screen } from "@testing-library/react";

import i18n from "@/i18n";
import GridItem from "./GridItem";

describe("GridItem", () => {
  const props = {
    title: "Test title",
    publishedAt: "2069-01-01",
    urlToImage: "http://testurl.com/testimage.jpg",
    description: "Lorem ipsum dolor sit amet.",
  };

  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  it("should render the title, publishedAt, and image props correctly", () => {
    render(<GridItem {...props} />);

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      props.title
    );
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      props.description
    );
    expect(screen.getByRole("heading", { level: 5 })).toHaveTextContent(
      props.publishedAt
    );
    expect(screen.getByRole("img")).toHaveAttribute("src", props.urlToImage);
  });

  it("Should not render description when no description prop is provided.", () => {
    render(<GridItem {...props} description={null} />);

    expect(screen.queryByRole("heading", { level: 4 })).not.toBeInTheDocument();
  });

  it("should render a default image when no urlToImage prop is provided", () => {
    render(<GridItem {...props} urlToImage={null} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", "/no_image.svg");
  });

  it('should have a div with class "grid-item"', () => {
    const { container } = render(<GridItem {...props} />);
    expect(container.firstChild).toHaveClass("grid-item");
  });
});
