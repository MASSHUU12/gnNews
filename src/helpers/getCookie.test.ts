import { getCookie } from "./getCookie";

describe("getCookie", () => {
  test("should return the value of an existing cookie", () => {
    // Mock the document object
    const mockDocument = {
      cookie: "cookie1=value1; cookie2=value2; cookie3=value3",
    };
    // Spy on the document.cookie property
    const spy = jest
      .spyOn(document, "cookie", "get")
      .mockReturnValue(mockDocument.cookie);

    const result = getCookie("cookie1");

    expect(spy).toHaveBeenCalled();
    expect(result).toEqual("value1");

    // Restore the original behavior of the document.cookie property
    spy.mockRestore();
  });

  test("should return an empty string for a non-existing cookie", () => {
    // Mock the document object
    const mockDocument = {
      cookie: "cookie1=value1; cookie2=value2; cookie3=value3",
    };
    // Spy on the document.cookie property
    const spy = jest
      .spyOn(document, "cookie", "get")
      .mockReturnValue(mockDocument.cookie);

    const result = getCookie("nonExistingCookie");

    expect(spy).toHaveBeenCalled();
    expect(result).toEqual("");

    // Restore the original behavior of the document.cookie property
    spy.mockRestore();
  });

  test("should return an empty string for a cookie with an empty value", () => {
    // Mock the document object
    const mockDocument = {
      cookie: "cookieWithEmptyValue=",
    };
    // Spy on the document.cookie property
    const spy = jest
      .spyOn(document, "cookie", "get")
      .mockReturnValue(mockDocument.cookie);

    const result = getCookie("cookieWithEmptyValue");

    expect(spy).toHaveBeenCalled();
    expect(result).toEqual("");

    // Restore the original behavior of the document.cookie property
    spy.mockRestore();
  });
});
