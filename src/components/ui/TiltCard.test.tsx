import { describe, it, expect, vi, afterEach } from "vitest";
import { render, fireEvent, act } from "@testing-library/react";
import { TiltCard } from "./TiltCard";

afterEach(() => vi.restoreAllMocks());

describe("TiltCard", () => {
  it("renders children inside tilt-card", () => {
    const { container } = render(<TiltCard><span>content</span></TiltCard>);
    expect(container.querySelector(".tilt-card")).toBeInTheDocument();
    expect(container.querySelector(".tilt-card span")).toHaveTextContent("content");
  });

  it("renders glare overlay element", () => {
    const { container } = render(<TiltCard>test</TiltCard>);
    expect(container.querySelector(".tilt-card-glare")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<TiltCard className="my-card">test</TiltCard>);
    expect(container.querySelector(".tilt-card")?.classList.contains("my-card")).toBe(true);
  });

  it("resets transform on mouse leave", async () => {
    const { container } = render(<TiltCard>test</TiltCard>);
    const card = container.querySelector(".tilt-card") as HTMLElement;

    await act(async () => {
      fireEvent.mouseLeave(card);
    });

    expect(card.style.transform).toContain("rotateX(0)");
    expect(card.style.transform).toContain("rotateY(0)");
  });

  it("updates transform on mouse move via rAF throttle", async () => {
    const rafSpy = vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      cb(0);
      return 0;
    });

    // Mock getBoundingClientRect
    const { container } = render(<TiltCard>test</TiltCard>);
    const card = container.querySelector(".tilt-card") as HTMLElement;
    vi.spyOn(card, "getBoundingClientRect").mockReturnValue({
      left: 0, top: 0, width: 200, height: 200,
      right: 200, bottom: 200, x: 0, y: 0, toJSON: () => {},
    });

    await act(async () => {
      fireEvent.mouseMove(card, { clientX: 100, clientY: 100 });
    });

    // At center (0.5, 0.5) → rotateX = 0deg, rotateY = 0deg
    expect(card.style.transform).toContain("rotateX(0deg)");
    rafSpy.mockRestore();
  });
});
