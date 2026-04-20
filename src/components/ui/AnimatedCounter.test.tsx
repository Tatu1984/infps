import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
import { AnimatedCounter } from "./AnimatedCounter";

type ObserverCallback = (entries: IntersectionObserverEntry[]) => void;
let observerCallback: ObserverCallback | null = null;

beforeEach(() => {
  class MockIntersectionObserver {
    constructor(cb: ObserverCallback) { observerCallback = cb; }
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  }
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  observerCallback = null;
});

describe("AnimatedCounter", () => {
  it("starts at 0 before intersection", () => {
    const { container } = render(<AnimatedCounter end={100} />);
    expect(container.querySelector("span")?.textContent).toBe("0");
  });

  it("renders prefix and suffix at start", () => {
    const { container } = render(<AnimatedCounter end={50} prefix="$" suffix="k" />);
    expect(container.querySelector("span")?.textContent).toBe("$0k");
  });

  it("counts to end value: startTime captured, then elapsed exceeds duration", () => {
    // Strategy: rAF fires once, but by then elapsed >> duration so progress=1
    let callCount = 0;
    const startMs = 1000;
    let currentMs = startMs;

    vi.spyOn(Date, "now").mockImplementation(() => currentMs);

    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      callCount++;
      if (callCount === 1) {
        // On the first rAF tick, jump past duration so the loop terminates
        currentMs = startMs + 5000;
        cb(currentMs);
      }
      // Subsequent calls from the recursive branch won't happen (progress=1 stops it)
      return callCount;
    });

    const { container } = render(<AnimatedCounter end={42} duration={100} />);

    act(() => {
      observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry]);
    });

    expect(container.querySelector("span")?.textContent).toBe("42");
  });

  it("hasAnimated guard: re-intersection does not call rAF again", () => {
    let callCount = 0;
    const startMs = 1000;
    let currentMs = startMs;

    vi.spyOn(Date, "now").mockImplementation(() => currentMs);
    const rafSpy = vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      callCount++;
      if (callCount === 1) {
        currentMs = startMs + 5000;
        cb(currentMs);
      }
      return callCount;
    });

    const { container } = render(<AnimatedCounter end={99} duration={50} />);

    act(() => {
      observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry]);
    });

    expect(parseInt(container.querySelector("span")!.textContent ?? "0")).toBe(99);
    const rafCallsAfterFirst = rafSpy.mock.calls.length;

    act(() => {
      // Second trigger — hasAnimated.current=true, effect guard prevents re-entry
      observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry]);
    });

    expect(rafSpy.mock.calls.length).toBe(rafCallsAfterFirst);
  });
});
