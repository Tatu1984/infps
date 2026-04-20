import "@testing-library/jest-dom";

// jsdom doesn't implement matchMedia — provide a stub
if (!window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}

// jsdom adds ontouchstart to window, making isTouchDevice() always return true.
// Remove it so non-touch tests work correctly.
// Individual tests can restore it to simulate touch devices.
try {
  delete (window as unknown as Record<string, unknown>).ontouchstart;
} catch {
  // Some environments don't allow deletion; define as non-enumerable non-present
  Object.defineProperty(window, "ontouchstart", {
    value: undefined,
    configurable: true,
    writable: true,
  });
}
