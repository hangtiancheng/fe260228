import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { useHomeMotion } from "../src/app/pages/use-home-motion";

const timelineMock = vi.hoisted(() => {
  const chain = { from: vi.fn(() => chain) };
  return chain;
});

const gsapCalls = vi.hoisted(() => ({
  from: vi.fn(),
  set: vi.fn(),
  timeline: vi.fn(() => timelineMock),
  to: vi.fn(),
  quickTo: vi.fn(() => vi.fn()),
  utils: {
    toArray: vi.fn(() => [{ dataset: { target: "100", suffix: "+" } }]),
  },
  defaults: vi.fn(),
}));

const splitTextCalls = vi.hoisted(() => ({ create: vi.fn() }));
const scrollTriggerCalls = vi.hoisted(() => ({ batch: vi.fn() }));
const useGSAPCalls = vi.hoisted(() => ({ add: vi.fn() }));

vi.mock("gsap", () => ({
  default: gsapCalls,
  gsap: gsapCalls,
}));

vi.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: scrollTriggerCalls,
}));

vi.mock("gsap/SplitText", () => ({
  SplitText: splitTextCalls,
}));

vi.mock("@gsap/react", () => ({
  useGSAP: (callback: (ctx: unknown, ctxSafe: unknown) => void) => {
    callback({ add: useGSAPCalls.add }, () => vi.fn());
  },
}));

function setReducedMotion(matches: boolean): void {
  vi.stubGlobal("matchMedia", () => ({ matches }));
}

function HomeMotionHarness() {
  const containerRef = useHomeMotion();

  return (
    <div ref={containerRef}>
      <h1 className="home-hero-title">Hero</h1>
      <p className="home-hero-subtitle">Subtitle</p>
      <section className="home-intro">Intro</section>
      <article className="home-feature-card">Card</article>
      <span className="home-stat-value" data-suffix="+" data-target={100}>
        0
      </span>
    </div>
  );
}

describe("useHomeMotion", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  test("runs GSAP timeline, SplitText, ScrollTrigger.batch, and stat counter when motion is allowed", () => {
    setReducedMotion(false);

    render(<HomeMotionHarness />);

    expect(screen.getByText("Hero")).toBeInTheDocument();
    expect(splitTextCalls.create).toHaveBeenCalled();
    expect(gsapCalls.timeline).toHaveBeenCalled();
    expect(scrollTriggerCalls.batch).toHaveBeenCalled();
    expect(gsapCalls.to).toHaveBeenCalled();
    expect(gsapCalls.quickTo).toHaveBeenCalled();
  });

  test("skips GSAP animations when reduced motion is preferred", () => {
    setReducedMotion(true);

    render(<HomeMotionHarness />);

    expect(screen.getByText("Hero")).toBeInTheDocument();
    expect(splitTextCalls.create).not.toHaveBeenCalled();
    expect(gsapCalls.timeline).not.toHaveBeenCalled();
    expect(scrollTriggerCalls.batch).not.toHaveBeenCalled();
    expect(gsapCalls.to).not.toHaveBeenCalled();
  });
});
