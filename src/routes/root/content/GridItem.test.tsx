import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GridItem from "./GridItem";

describe("GridItem", () => {
  const props = {
    title: "Test title",
    publishedAt: "2069-01-01",
    urlToImage: "http://testurl.com/testimage.jpg",
    description: "Lorem ipsum dolor sit amet.",
  };

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
    expect(screen.getByAltText("Picture from the article")).toHaveAttribute(
      "src",
      props.urlToImage
    );
  });

  it("Should not render description when no description prop is provided.", () => {
    render(<GridItem {...props} description={null} />);

    expect(screen.queryByRole("heading", { level: 4 })).not.toBeInTheDocument();
  });

  it("should render a default image when no urlToImage prop is provided", () => {
    render(<GridItem {...props} urlToImage={null} />);

    expect(screen.getByAltText("Picture from the article")).toHaveAttribute(
      "src",
      "/no_image.svg"
    );
  });

  it('should have a div with class "grid-item"', () => {
    const { container } = render(<GridItem {...props} />);
    expect(container.firstChild).toHaveClass("grid-item");
  });
});
