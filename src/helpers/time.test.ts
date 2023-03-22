import { formatISODate, getCurrentTime } from "./time";

describe("Time helpers", () => {
  beforeAll(() => {
    // Set the timezone to UTC for these tests
    process.env.TZ = "UTC";
  });

  test("returns the current time in the local timezone if no timezone is specified", () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date(2023, 2, 22, 10, 30, 0).getTime()); // March 22, 2023 10:30:00 AM

    const currentTime = getCurrentTime();

    // Expect the function to return the correct time in the format "HH:MM:SS"
    expect(currentTime).toBe("10:30:00 AM");

    // Restore the original implementation timer functions
    jest.useRealTimers();
  });

  test("returns the current time in the specified timezone if a timezone is provided", () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date(2023, 2, 22, 10, 30, 0).getTime()); // March 22, 2023 10:30:00 AM

    const currentTime = getCurrentTime("America/New_York");

    // Expect the function to return the correct time in the format "HH:MM:SS"
    expect(currentTime).toEqual("05:30:00 AM");

    // Restore the original implementation of timer functions
    jest.useRealTimers();
  });

  test("formats an ISO date string correctly", () => {
    const iso = "2022-03-15T13:30:00.000Z";

    expect(formatISODate(iso)).toMatch(
      /^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4}) (\d{1,2}):(\d{2}):(\d{2})\s*([ap]m)$/i
    );
  });

  test("returns an empty string if given an invalid ISO date string", () => {
    const iso = "invalid-date-string";

    expect(formatISODate(iso)).toBe("");
  });
});
