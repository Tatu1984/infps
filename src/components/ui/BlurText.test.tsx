import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
import { BlurText } from "./BlurText";

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
  observerCallback = null;
});

describe("BlurText", () => {
  it("renders one span per character", () => {
    const { container } = render(<BlurText text="abc" />);
    expect(container.querySelectorAll(".blur-char")).toHaveLength(3);
  });

  it("renders spaces as non-breaking spaces", () => {
    const { container } = render(<BlurText text="a b" />);
    const chars = container.querySelectorAll(".blur-char");
    expect(chars[1].textContent).toBe("\u00a0");
  });

  it("does not have in-view class before intersection", () => {
    const { container } = render(<BlurText text="hello" />);
    expect(container.querySelector(".blur-text")?.classList.contains("in-view")).toBe(false);
  });

  it("adds in-view class after intersection", () => {
    const { container } = render(<BlurText text="hello" />);
    act(() => {
      observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry]);
    });
    expect(container.querySelector(".blur-text")?.classList.contains("in-view")).toBe(true);
  });

  it("applies custom className", () => {
    const { container } = render(<BlurText text="hi" className="hero-sub" />);
    expect(container.querySelector(".blur-text")?.classList.contains("hero-sub")).toBe(true);
  });

  it("applies delay offset to animation-delay style", () => {
    const { container } = render(<BlurText text="ab" delay={0.5} />);
    const chars = container.querySelectorAll<HTMLElement>(".blur-char");
    expect(chars[0].style.animationDelay).toBe("0.5s");
    expect(chars[1].style.animationDelay).toBe("0.52s");
  });
});
