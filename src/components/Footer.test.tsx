import "@testing-library/jest-dom";
import { initReactI18next } from "react-i18next";
import { render, screen } from "@testing-library/react";

import i18n from "@/i18n";
import { useAppSelector } from "@/hooks";
import { getCurrentTime } from "@/helpers/time";

import Footer from "./Footer";

jest.mock("@/hooks");
jest.mock("@/helpers/time");

describe("Footer", () => {
  const newsNumber = 10;
  const now = "12:00:00 PM";

  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

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
      screen.getByText(`Time: ${now}, articles: ${newsNumber}`)
    ).toBeInTheDocument();
  });
});
