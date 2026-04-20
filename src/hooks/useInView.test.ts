import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useInView } from "./useInView";

type ObserverCallback = (entries: IntersectionObserverEntry[]) => void;
let observerCallback: ObserverCallback | null = null;
let observeSpy: ReturnType<typeof vi.fn>;
let unobserveSpy: ReturnType<typeof vi.fn>;
let disconnectSpy: ReturnType<typeof vi.fn>;

beforeEach(() => {
  observeSpy = vi.fn();
  unobserveSpy = vi.fn();
  disconnectSpy = vi.fn();

  class MockIntersectionObserver {
    constructor(cb: ObserverCallback) {
      observerCallback = cb;
    }
    observe = observeSpy;
    unobserve = unobserveSpy;
    disconnect = disconnectSpy;
  }

  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

afterEach(() => {
  vi.unstubAllGlobals();
  observerCallback = null;
});

describe("useInView", () => {
  it("returns inView=false initially", () => {
    const { result } = renderHook(() => useInView());
    expect(result.current[1]).toBe(false);
  });

  it("sets inView=true when element intersects", () => {
    const { result } = renderHook(() => useInView());
    act(() => {
      observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry]);
    });
    expect(result.current[1]).toBe(true);
  });

  it("stays true after intersection when triggerOnce=true", () => {
    const { result } = renderHook(() => useInView(0.1, true));
    act(() => {
      observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry]);
    });
    expect(result.current[1]).toBe(true);
  });

  it("resets inView when element leaves viewport with triggerOnce=false", () => {
    const { result } = renderHook(() => useInView(0.1, false));
    act(() => {
      observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry]);
    });
    expect(result.current[1]).toBe(true);

    act(() => {
      observerCallback?.([{ isIntersecting: false } as IntersectionObserverEntry]);
    });
    expect(result.current[1]).toBe(false);
  });

  it("does not reset when triggerOnce=true and element leaves", () => {
    const { result } = renderHook(() => useInView(0.1, true));
    act(() => {
      observerCallback?.([{ isIntersecting: true } as IntersectionObserverEntry]);
    });
    act(() => {
      observerCallback?.([{ isIntersecting: false } as IntersectionObserverEntry]);
    });
    expect(result.current[1]).toBe(true);
  });

  it("disconnects observer on unmount", () => {
    const { unmount } = renderHook(() => useInView());
    unmount();
    expect(disconnectSpy).toHaveBeenCalledOnce();
  });
});
