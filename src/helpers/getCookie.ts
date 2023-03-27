/**
 * Get the value of a cookie by its name.
 *
 * @export
 * @param {string} name - The name of the cookie
 * @return {string} The value of the cookie, or an empty string if it does not exist
 */
export function getCookie(name: string): string {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")?.[1];

  return cookie ?? "";
}
