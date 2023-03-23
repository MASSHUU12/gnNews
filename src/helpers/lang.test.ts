import { detectUserLanguage } from "./lang";

describe("detectUserLanguage", () => {
  test("returns the user's preferred language if navigator.languages is available", () => {
    const mockNavigator = {
      ...navigator,
      languages: ["en-US", "fr", "pl"],
    };
    jest.spyOn(global, "navigator", "get").mockReturnValue(mockNavigator);
    expect(detectUserLanguage()).toEqual("en");
  });

  test("returns the user's preferred language if navigator.language is available", () => {
    const mockNavigator = {
      ...navigator,
      languages: undefined,
      language: "pl-PL",
    };
    jest.spyOn(global, "navigator", "get").mockReturnValue(mockNavigator);
    expect(detectUserLanguage()).toEqual("pl");
  });

  test("returns 'en' if navigator object or language detection is not available", () => {
    const mockNavigator = {
      ...navigator,
      languages: undefined,
      language: undefined,
    };
    jest.spyOn(global, "navigator", "get").mockReturnValue(mockNavigator);
    expect(detectUserLanguage()).toEqual("en");
  });
});
