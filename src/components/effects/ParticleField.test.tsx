import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { ParticleField } from "./ParticleField";

beforeEach(() => {
  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
    fillStyle: "",
    strokeStyle: "",
    lineWidth: 0,
    fillRect: vi.fn(),
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
  });

  vi.spyOn(window, "requestAnimationFrame").mockReturnValue(1);
  vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
  // matchMedia already returns matches:false from setup.ts
});

afterEach(() => vi.restoreAllMocks());

describe("ParticleField", () => {
  it("renders a canvas element", () => {
    const { container } = render(<ParticleField />);
    expect(container.querySelector("canvas")).toBeInTheDocument();
  });

  it("canvas has correct positioning classes", () => {
    const { container } = render(<ParticleField />);
    const canvas = container.querySelector("canvas")!;
    expect(canvas.className).toContain("fixed");
    expect(canvas.className).toContain("pointer-events-none");
  });

  it("registers mousemove and resize listeners", () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    render(<ParticleField />);
    const events = addSpy.mock.calls.map(([e]) => e);
    expect(events).toContain("mousemove");
    expect(events).toContain("resize");
  });

  it("removes event listeners and cancels animation on unmount", () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");
    const cancelSpy = vi.spyOn(window, "cancelAnimationFrame");
    const { unmount } = render(<ParticleField />);
    unmount();
    expect(removeSpy).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("mousemove", expect.any(Function));
    expect(cancelSpy).toHaveBeenCalled();
  });

  it("skips animation registration when prefers-reduced-motion is set", () => {
    // Override matchMedia to return reduced-motion match
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({ matches: query.includes("reduce"), media: query }),
    });

    const addSpy = vi.spyOn(window, "addEventListener");
    render(<ParticleField />);
    const events = addSpy.mock.calls.map(([e]) => e);
    expect(events).not.toContain("mousemove");
  });
});
