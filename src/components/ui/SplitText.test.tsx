import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SplitText } from "./SplitText";

describe("SplitText", () => {
  it("renders all characters of the text", () => {
    const { container } = render(<SplitText text="Hello" />);
    const chars = container.querySelectorAll(".split-char");
    expect(chars).toHaveLength(5);
  });

  it("splits multi-word text into word wrappers", () => {
    const { container } = render(<SplitText text="Hello World" />);
    const words = container.querySelectorAll(".word-wrapper");
    expect(words).toHaveLength(2);
  });

  it("applies custom className to root span", () => {
    const { container } = render(<SplitText text="Test" className="accent" />);
    const root = container.querySelector(".split-text");
    expect(root?.classList.contains("accent")).toBe(true);
  });

  it("preserves spaces as non-breaking spaces between words", () => {
    const { container } = render(<SplitText text="A B" />);
    // nbsp separators exist between word wrappers
    expect(container.textContent).toContain("\u00a0");
  });

  it("renders empty text without errors", () => {
    const { container } = render(<SplitText text="" />);
    expect(container.querySelector(".split-text")).toBeInTheDocument();
  });
});
