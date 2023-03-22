/**
 * Returns the current time in the specified timezone or in the local timezone if none is provided.
 *
 * @param {string} [timezone] The timezone to return the time in. If not specified, returns the time in the local timezone.
 * @returns {string} The current time in the format "HH:MM:SS".
 */
export function getCurrentTime(timezone?: string): string {
  // Get the current time in the specified timezone or in the local timezone if none is provided
  const now = new Date().toLocaleTimeString("en-US", {
    timeZone: timezone
      ? timezone // Use the specified timezone if provided
      : Intl.DateTimeFormat().resolvedOptions().timeZone, // Otherwise, use the local timezone
  });

  // Split the time string into its components (hour, minute, and second)
  const [hour, minute, second] = now.split(/[ ,:]+/);

  // Return the current time in the format "HH:MM:SS"
  return `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(
    2,
    "0"
  )}`;
}

/**
 * Formats an ISO 8601 date string as a formatted date and time string.
 *
 * @param {string} iso - The ISO 8601 date string to format.
 * @returns {string} The formatted date and time string.
 */
export function formatISODate(iso: string): string {
  // Create a new Date object from the ISO string
  const date = new Date(iso);

  // Check if the date is invalid
  if (isNaN(date.getTime())) return "";

  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  // Returns the formatted date and time string
  return dateString + " " + timeString;
}
