import Footer from "./Footer";
import "@testing-library/jest-dom";
import { useAppSelector } from "@/hooks";
import { getCurrentTime } from "@/helpers/time";
import { render, screen } from "@testing-library/react";

jest.mock("@/hooks");
jest.mock("@/helpers/time");

describe("Footer", () => {
  const newsNumber = 10;
  const now = "12:00:00 PM";

  beforeEach(() => {
    // Mock the useAppSelector hook to return a news number
    (useAppSelector as jest.Mock).mockReturnValue(newsNumber);

    // Mock the getCurrentTime function to return a fixed time string
    (getCurrentTime as jest.Mock).mockReturnValue(now);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("displays the current time and news number", () => {
    render(<Footer />);

    expect(
      screen.getByText(`time: ${now}, articles: ${newsNumber}`)
    ).toBeInTheDocument();
  });
});
