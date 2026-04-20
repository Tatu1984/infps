import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MagneticButton } from "./MagneticButton";

beforeEach(() => {
  // Ensure non-touch environment for every test
  try { delete (window as unknown as Record<string, unknown>).ontouchstart; } catch { /* ok */ }
  Object.defineProperty(navigator, "maxTouchPoints", { value: 0, configurable: true });
});

afterEach(() => {
  vi.restoreAllMocks();
  Object.defineProperty(navigator, "maxTouchPoints", { value: 0, configurable: true });
});

const wrap = (ui: React.ReactElement) => render(ui, { wrapper: MemoryRouter });

describe("MagneticButton", () => {
  it("renders children inside magnetic-button", () => {
    const { container } = wrap(<MagneticButton>Click me</MagneticButton>);
    expect(container.querySelector(".magnetic-button")).toBeInTheDocument();
    expect(container.querySelector(".magnetic-button-inner")).toHaveTextContent("Click me");
  });

  it("renders as <a> for external href", () => {
    const { container } = wrap(<MagneticButton href="https://example.com">link</MagneticButton>);
    const el = container.querySelector(".magnetic-button");
    expect(el?.tagName).toBe("A");
    expect(el).toHaveAttribute("href", "https://example.com");
  });

  it("renders as <a> for anchor href", () => {
    const { container } = wrap(<MagneticButton href="#section">anchor</MagneticButton>);
    expect(container.querySelector("a.magnetic-button")).toBeInTheDocument();
  });

  it("renders as router Link for internal href", () => {
    const { container } = wrap(<MagneticButton href="/about">about</MagneticButton>);
    const el = container.querySelector(".magnetic-button");
    expect(el?.tagName).toBe("A");
    expect(el).toHaveAttribute("href", "/about");
  });

  it("applies translate(0px,0px) on mouse leave on non-touch device", async () => {
    let rafCb: FrameRequestCallback | undefined;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCb = cb;
      return 1;
    });

    const { container } = wrap(<MagneticButton href="/x">test</MagneticButton>);
    // Wait for isTouch effect to resolve
    await act(async () => {});

    const btn = container.querySelector(".magnetic-button") as HTMLElement;
    vi.spyOn(btn, "getBoundingClientRect").mockReturnValue({
      left: 0, top: 0, width: 200, height: 50,
      right: 200, bottom: 50, x: 0, y: 0, toJSON: () => {},
    });

    // Trigger a mousemove so position state is set
    await act(async () => {
      fireEvent.mouseMove(btn, { clientX: 50, clientY: 10 });
      rafCb?.(0);
    });

    // Then leave — position resets to 0,0
    await act(async () => { fireEvent.mouseLeave(btn); });

    expect(btn.style.transform).toBe("translate(0px, 0px)");
  });

  it("calls onClick handler when provided", () => {
    const onClick = vi.fn();
    const { container } = wrap(<MagneticButton href="#" onClick={onClick}>btn</MagneticButton>);
    fireEvent.click(container.querySelector(".magnetic-button")!);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
