/**
 * Detects the user's preferred language based on the `navigator` object.
 *
 * @export
 * @returns {string} The user's preferred language without regional identifier, or "en" if the language cannot be detected.
 */
export function detectUserLanguage(): string {
  if (navigator.languages && navigator.languages.length) {
    // Modern browser with multiple language preferences
    return navigator.languages[0].split("-")[0];
  }

  if (navigator.language) {
    // Old browser with single language preference
    return navigator.language.split("-")[0];
  }

  // Browser does not support navigator object or language detection
  return "en";
}
