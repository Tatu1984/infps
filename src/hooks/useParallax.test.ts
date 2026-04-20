import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useParallax } from "./useParallax";

beforeEach(() => {
  try { delete (window as unknown as Record<string, unknown>).ontouchstart; } catch { /* ok */ }
  Object.defineProperty(navigator, "maxTouchPoints", { value: 0, configurable: true });
  Object.defineProperty(window, "innerHeight", { value: 800, configurable: true });
});

afterEach(() => {
  vi.restoreAllMocks();
  Object.defineProperty(navigator, "maxTouchPoints", { value: 0, configurable: true });
});

describe("useParallax", () => {
  it("returns initial offset of 0", () => {
    const { result } = renderHook(() => useParallax(0.5));
    expect(result.current[1]).toBe(0);
  });

  it("returns a ref and a numeric offset", () => {
    const { result } = renderHook(() => useParallax());
    const [ref, offset] = result.current;
    expect(ref).toBeDefined();
    expect(typeof offset).toBe("number");
  });

  it("registers a passive scroll listener on non-touch device", () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    renderHook(() => useParallax());
    const scrollCall = addSpy.mock.calls.find(([e]) => e === "scroll");
    expect(scrollCall).toBeDefined();
  });

  it("removes scroll listener on unmount", () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useParallax());
    unmount();
    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
  });

  it("does not register scroll listener on touch device", () => {
    Object.defineProperty(navigator, "maxTouchPoints", { value: 5, configurable: true });
    const addSpy = vi.spyOn(window, "addEventListener");
    renderHook(() => useParallax());
    const scrollCall = addSpy.mock.calls.find(([e]) => e === "scroll");
    expect(scrollCall).toBeUndefined();
  });

  it("calculates offset when scroll fires with ref attached", () => {
    let scrollHandler: (() => void) | undefined;
    vi.spyOn(window, "addEventListener").mockImplementation((event, handler, _opts) => {
      if (event === "scroll") scrollHandler = handler as () => void;
    });
    vi.spyOn(window, "removeEventListener").mockImplementation(() => {});

    const { result } = renderHook(() => useParallax(0.5));

    const el = document.createElement("div");
    el.getBoundingClientRect = () => ({
      top: 300, bottom: 500, left: 0, right: 0,
      width: 0, height: 200, x: 0, y: 300, toJSON: () => {},
    });
    (result.current[0] as React.MutableRefObject<HTMLElement>).current = el;

    act(() => { scrollHandler?.(); });

    // scrolled = innerHeight(800) - rect.top(300) = 500; offset = 500 * 0.5 * 0.1 = 25
    expect(result.current[1]).toBe(25);
  });
});
