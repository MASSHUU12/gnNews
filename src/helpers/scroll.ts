export type ScrollIntoView = {
  target: string;
} & ScrollIntoViewOptions;

/**
 * A static class that provides utilities for scrolling and managing scroll behavior.
 */
export default class Scroll {
  /**
   * Enables scrolling on an HTML element by setting its overflow style to an empty string.
   *
   * @static
   * @param {string} [selector="body"] - A CSS selector for the HTML element to enable scrolling on. Defaults to "body".
   * @return {*}  {void}
   * @memberof Scroll
   */
  public static enable(selector: string = "body"): void {
    const element = document.querySelector<HTMLElement>(selector);

    if (!element) return;

    element.style.overflow = "";
  }

  /**
   * Disables scrolling on an HTML element by setting its overflow style to "hidden".
   *
   * @static
   * @param {string} [selector="body"] - A CSS selector for the HTML element to disable scrolling on. Defaults to "body".
   * @return {*}  {void}
   * @memberof Scroll
   */
  public static disable(selector: string = "body"): void {
    const element = document.querySelector<HTMLElement>(selector);

    if (!element) return;

    element.style.overflow = "hidden";
  }

  /**
   * Scrolls an HTML element into view using the specified options.
   *
   * @static
   * @param {Readonly<ScrollIntoView>} options - An options object that specifies the target element to scroll to and the scrolling behavior to use.
   * @param options.target - A CSS selector or DOM element to scroll into view.
   * @param options.behavior - The scrolling behavior to use. Defaults to "smooth".
   * @param options.block - The vertical position to align the target element within the viewport. Defaults to "start".
   * @param options.inline - The horizontal position to align the target element within the viewport. Defaults to "nearest".
   * @memberof Scroll
   */
  public static intoView({
    target,
    behavior = "smooth",
    block = "start",
    inline = "nearest",
  }: Readonly<ScrollIntoView>): void {
    const element = document.querySelector(target);

    if (
      element instanceof HTMLElement &&
      typeof element.scrollIntoView === "function"
    ) {
      element.scrollIntoView({ behavior, block, inline });
    }
  }
}
