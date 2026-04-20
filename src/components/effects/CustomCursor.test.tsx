import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
import { CustomCursor } from "./CustomCursor";

// setup.ts removes ontouchstart. Ensure maxTouchPoints is 0 before every test.
beforeEach(() => {
  Object.defineProperty(navigator, "maxTouchPoints", { value: 0, configurable: true });
  try { delete (window as unknown as Record<string, unknown>).ontouchstart; } catch { /* ok */ }
});

afterEach(() => {
  vi.restoreAllMocks();
  Object.defineProperty(navigator, "maxTouchPoints", { value: 0, configurable: true });
});

describe("CustomCursor", () => {
  it("renders cursor elements after non-touch check resolves", async () => {
    const { container } = render(<CustomCursor />);
    await act(async () => {});
    expect(container.querySelector(".custom-cursor")).toBeInTheDocument();
    expect(container.querySelector(".custom-cursor-dot")).toBeInTheDocument();
  });

  it("starts with hidden class on cursor elements", async () => {
    const { container } = render(<CustomCursor />);
    await act(async () => {});
    const cursor = container.querySelector(".custom-cursor");
    expect(cursor).toBeInTheDocument();
    expect(cursor!.classList.contains("hidden")).toBe(true);
  });

  it("removes hidden class on mousemove after rAF", async () => {
    let rafCb: FrameRequestCallback | undefined;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCb = cb;
      return 1;
    });

    let moveHandler: EventListener | undefined;
    const origAdd = window.addEventListener.bind(window);
    vi.spyOn(window, "addEventListener").mockImplementation((event, handler, opts) => {
      if (event === "mousemove") moveHandler = handler as EventListener;
      origAdd(event, handler, opts);
    });

    const { container } = render(<CustomCursor />);
    await act(async () => {});

    await act(async () => {
      moveHandler?.(new MouseEvent("mousemove", { clientX: 100, clientY: 200 }));
      rafCb?.(0);
    });

    const cursor = container.querySelector(".custom-cursor");
    expect(cursor).toBeInTheDocument();
    expect(cursor!.classList.contains("hidden")).toBe(false);
  });

  it("cleans up all event listeners on unmount", async () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(<CustomCursor />);
    await act(async () => {});
    unmount();
    expect(removeSpy).toHaveBeenCalled();
  });

  it("renders nothing on touch device after effect resolves", async () => {
    Object.defineProperty(navigator, "maxTouchPoints", { value: 5, configurable: true });
    const { container } = render(<CustomCursor />);
    await act(async () => {});
    expect(container.querySelector(".custom-cursor")).not.toBeInTheDocument();
  });
});
