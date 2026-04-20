import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
import { ScrollProgress } from "./ScrollProgress";

beforeEach(() => {
  Object.defineProperty(document.documentElement, "scrollHeight", {
    value: 2000,
    configurable: true,
  });
  Object.defineProperty(window, "innerHeight", { value: 800, configurable: true });
  Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
});

afterEach(() => vi.restoreAllMocks());

describe("ScrollProgress", () => {
  it("renders the progress bar at 0% initially", () => {
    const { container } = render(<ScrollProgress />);
    const bar = container.querySelector(".scroll-progress-bar") as HTMLElement;
    expect(bar).toBeInTheDocument();
    expect(bar.style.width).toBe("0%");
  });

  it("updates progress bar width on scroll", () => {
    const listeners: Record<string, EventListener> = {};
    vi.spyOn(window, "addEventListener").mockImplementation((event, handler) => {
      listeners[event] = handler as EventListener;
    });
    vi.spyOn(window, "removeEventListener").mockImplementation(() => {});

    const { container } = render(<ScrollProgress />);

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 600, configurable: true });
      listeners["scroll"]?.(new Event("scroll"));
    });

    const bar = container.querySelector(".scroll-progress-bar") as HTMLElement;
    // (2000 - 800) = 1200 scrollable height; 600/1200*100 = 50%
    expect(bar.style.width).toBe("50%");
  });

  it("reaches 100% when scrolled to bottom", () => {
    const listeners: Record<string, EventListener> = {};
    vi.spyOn(window, "addEventListener").mockImplementation((event, handler) => {
      listeners[event] = handler as EventListener;
    });
    vi.spyOn(window, "removeEventListener").mockImplementation(() => {});

    const { container } = render(<ScrollProgress />);

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 1200, configurable: true });
      listeners["scroll"]?.(new Event("scroll"));
    });

    const bar = container.querySelector(".scroll-progress-bar") as HTMLElement;
    expect(bar.style.width).toBe("100%");
  });

  it("removes scroll listener on unmount", () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(<ScrollProgress />);
    unmount();
    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
  });
});
