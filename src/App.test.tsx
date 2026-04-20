import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

vi.mock("@/components/effects", () => ({
  ParticleField: () => <canvas data-testid="particle-field" />,
  ScrollProgress: () => <div data-testid="scroll-progress" />,
  CustomCursor: () => null,
}));

vi.mock("@/components/common", () => ({
  Navigation: () => <nav data-testid="navigation" />,
  Footer: () => <footer data-testid="footer" />,
}));

vi.mock("@/pages/HomePage", () => ({ HomePage: () => <div>Home Page</div> }));
vi.mock("@/pages/AboutPage", () => ({ AboutPage: () => <div>About Page</div> }));
vi.mock("@/pages/ServicesPageNew", () => ({ ServicesPageNew: () => <div>Services Page</div> }));
vi.mock("@/pages/ServiceBucketDetailPage", () => ({ ServiceBucketDetailPage: () => <div>Service Detail</div> }));
vi.mock("@/pages/ProductsPage", () => ({ ProductsPage: () => <div>Products Page</div> }));
vi.mock("@/pages/ProductDetailPage", () => ({ ProductDetailPage: () => <div>Product Detail</div> }));
vi.mock("@/pages/PortfolioPage", () => ({ PortfolioPage: () => <div>Portfolio Page</div> }));
vi.mock("@/pages/PortfolioDetailPage", () => ({ PortfolioDetailPage: () => <div>Portfolio Detail</div> }));
vi.mock("@/pages/CaseStudiesPage", () => ({ CaseStudiesPage: () => <div>Case Studies</div> }));
vi.mock("@/pages/CaseStudyDetailPage", () => ({ CaseStudyDetailPage: () => <div>Case Study Detail</div> }));
vi.mock("@/pages/TeamPage", () => ({ TeamPage: () => <div>Team Page</div> }));
vi.mock("@/pages/ContactPage", () => ({ ContactPage: () => <div>Contact Page</div> }));
vi.mock("@/pages/PreviousVersionsPage", () => ({ PreviousVersionsPage: () => <div>Previous Versions</div> }));

afterEach(() => vi.restoreAllMocks());

describe("App routing", () => {
  it("renders shared layout elements on every page", async () => {
    window.history.pushState({}, "", "/");
    render(<App />);
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("particle-field")).toBeInTheDocument();
    expect(screen.getByTestId("scroll-progress")).toBeInTheDocument();
  });

  it("renders HomePage at /", async () => {
    window.history.pushState({}, "", "/");
    render(<App />);
    await waitFor(() => expect(screen.getByText("Home Page")).toBeInTheDocument());
  });

  it("renders AboutPage at /about", async () => {
    window.history.pushState({}, "", "/about");
    render(<App />);
    await waitFor(() => expect(screen.getByText("About Page")).toBeInTheDocument());
  });

  it("renders ServicesPage at /services", async () => {
    window.history.pushState({}, "", "/services");
    render(<App />);
    await waitFor(() => expect(screen.getByText("Services Page")).toBeInTheDocument());
  });

  it("renders TeamPage at /team", async () => {
    window.history.pushState({}, "", "/team");
    render(<App />);
    await waitFor(() => expect(screen.getByText("Team Page")).toBeInTheDocument());
  });

  it("renders ContactPage at /contact", async () => {
    window.history.pushState({}, "", "/contact");
    render(<App />);
    await waitFor(() => expect(screen.getByText("Contact Page")).toBeInTheDocument());
  });

  it("renders ProductsPage at /products", async () => {
    window.history.pushState({}, "", "/products");
    render(<App />);
    await waitFor(() => expect(screen.getByText("Products Page")).toBeInTheDocument());
  });

  it("renders PortfolioPage at /portfolio", async () => {
    window.history.pushState({}, "", "/portfolio");
    render(<App />);
    await waitFor(() => expect(screen.getByText("Portfolio Page")).toBeInTheDocument());
  });

  it("renders CaseStudiesPage at /case-studies", async () => {
    window.history.pushState({}, "", "/case-studies");
    render(<App />);
    await waitFor(() => expect(screen.getByText("Case Studies")).toBeInTheDocument());
  });
});
