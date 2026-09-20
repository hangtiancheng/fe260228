import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import type { ReactNode } from "react";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  Observer,
  Flip,
  useGSAP,
);

gsap.defaults({ ease: "power3.out", duration: 0.6 });

export function GsapProvider({ children }: { children: ReactNode }) {
  useGSAP(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    return () => {
      smoother.kill();
    };
  });

  return <>{children}</>;
}
