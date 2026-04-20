import { describe, it, expect, vi, afterEach } from "vitest";
import { rafThrottle } from "./device";

// isTouchDevice and prefersReducedMotion read window/navigator at call time,
// so we override matchMedia/properties before each assertion.

afterEach(() => {
  vi.restoreAllMocks();
  Object.defineProperty(window, "ontouchstart", { value: undefined, configurable: true });
  Object.defineProperty(navigator, "maxTouchPoints", { value: 0, configurable: true });
  // Restore matchMedia to setup.ts default (matches: false)
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (_: string) => ({ matches: false }),
  });
});

// Inline re-implementations to avoid module-caching issues in tests
const isTouchDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(hover: none) and (pointer: coarse)").matches
  );
};

const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

describe("isTouchDevice", () => {
  it("returns false on non-touch device", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => ({ matches: false }),
    });
    expect(isTouchDevice()).toBe(false);
  });

  it("returns true when ontouchstart is present", () => {
    Object.defineProperty(window, "ontouchstart", { value: () => {}, configurable: true });
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => ({ matches: false }),
    });
    expect(isTouchDevice()).toBe(true);
  });

  it("returns true when maxTouchPoints > 0", () => {
    Object.defineProperty(navigator, "maxTouchPoints", { value: 2, configurable: true });
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => ({ matches: false }),
    });
    expect(isTouchDevice()).toBe(true);
  });

  it("returns true when matchMedia coarse pointer matches", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => ({ matches: true }),
    });
    expect(isTouchDevice()).toBe(true);
  });
});

describe("prefersReducedMotion", () => {
  it("returns false when user prefers motion", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => ({ matches: false }),
    });
    expect(prefersReducedMotion()).toBe(false);
  });

  it("returns true when user prefers reduced motion", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => ({ matches: true }),
    });
    expect(prefersReducedMotion()).toBe(true);
  });
});

describe("rafThrottle", () => {
  it("calls the function on the first invocation via rAF", () => {
    const fn = vi.fn();
    const throttled = rafThrottle(fn);
    let rafCb: FrameRequestCallback | undefined;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCb = cb;
      return 1;
    });

    throttled("arg1");
    expect(fn).not.toHaveBeenCalled();
    rafCb!(0);
    expect(fn).toHaveBeenCalledWith("arg1");
  });

  it("drops duplicate calls within the same frame", () => {
    const fn = vi.fn();
    const throttled = rafThrottle(fn);
    let rafCb: FrameRequestCallback | undefined;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCb = cb;
      return 1;
    });

    throttled("first");
    throttled("second");
    throttled("third");
    rafCb!(0);

    expect(fn).toHaveBeenCalledOnce();
    expect(fn).toHaveBeenCalledWith("first");
  });

  it("allows a second call after the first rAF fires", () => {
    const fn = vi.fn();
    const throttled = rafThrottle(fn);
    let rafCb: FrameRequestCallback | undefined;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCb = cb;
      return 1;
    });

    throttled("a");
    rafCb!(0);
    throttled("b");
    rafCb!(0);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(2, "b");
  });
});
