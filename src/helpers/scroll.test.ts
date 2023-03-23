import Scroll from "./scroll";

describe("Scroll", () => {
  describe("enable", () => {
    it("should enable scrolling on the specified element", () => {
      document.body.style.overflow = "hidden";

      Scroll.enable();

      expect(document.body.style.overflow).toBe("");
    });

    it("should not enable scrolling if the specified element does not exist", () => {
      const selector = "#non-existing-element";

      Scroll.enable(selector);

      expect(document.querySelector(selector)).toBeNull();
    });
  });

  describe("disable", () => {
    it("should disable scrolling on the specified element", () => {
      Scroll.disable();

      expect(document.body.style.overflow).toBe("hidden");
    });

    it("should not disable scrolling if the specified element does not exist", () => {
      const selector = "#non-existing-element";

      Scroll.disable(selector);

      expect(document.querySelector(selector)).toBeNull();
    });
  });

  describe("intoView", () => {
    it("should scroll to the specified target element", () => {
      const target = document.createElement("div");
      target.id = "target";
      document.body.appendChild(target);

      Scroll.intoView({ target: "#target" });

      expect(window.scrollY).toBeGreaterThanOrEqual(0); // the window should have scrolled
      expect(target.getBoundingClientRect().top).toBeCloseTo(0); // the target should be at the top of the viewport
    });
  });
});
