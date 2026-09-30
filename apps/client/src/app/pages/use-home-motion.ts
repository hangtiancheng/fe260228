import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

function formatStatValue(value: number, suffix: string): string {
  if (value >= 1_000_000) {
    return `${Math.round(value / 1_000_000)}M${suffix}`;
  }

  return `${Math.round(value)}${suffix}`;
}

export function useHomeMotion() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context, contextSafe) => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduced) {
        gsap.set(
          ".home-hero-title, .home-hero-subtitle, .home-hero-cta, .home-hero-visual, .home-intro, .home-feature-card",
          { opacity: 1, y: 0, scale: 1, clearProps: "transform" },
        );
        return;
      }

      SplitText.create(".home-hero-title", {
        type: "lines, words",
        mask: "lines",
        aria: "auto",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.words, {
            opacity: 0,
            yPercent: 120,
            rotation: 4,
            stagger: 0.04,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });
      tl.from(".home-hero-subtitle", { opacity: 0, y: 16 })
        .from(".home-hero-cta", { opacity: 0, y: 12 }, "<0.1")
        .from(".home-hero-visual", { opacity: 0, scale: 0.95 }, "<");

      gsap.from(".home-intro", {
        opacity: 0,
        y: 48,
        scrollTrigger: {
          trigger: ".home-intro",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.set(".home-feature-card", { opacity: 0, y: 40, scale: 0.98 });
      ScrollTrigger.batch(".home-feature-card", {
        start: "top 75%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.5,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, {
            opacity: 0,
            y: 40,
            scale: 0.98,
            overwrite: true,
          }),
      });

      gsap.utils.toArray<HTMLElement>(".home-stat-value").forEach((el) => {
        const target = Number(el.dataset.target ?? "0");
        const suffix = el.dataset.suffix ?? "";
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = formatStatValue(Math.round(obj.value), suffix);
          },
        });
      });

      const xTo = gsap.quickTo(".home-hero-visual", "x", {
        duration: 0.6,
        ease: "power3",
      });
      const yTo = gsap.quickTo(".home-hero-visual", "y", {
        duration: 0.6,
        ease: "power3",
      });
      const onMove = contextSafe?.((e: PointerEvent) => {
        const rx = (e.clientX / window.innerWidth - 0.5) * 20;
        const ry = (e.clientY / window.innerHeight - 0.5) * 20;
        xTo(rx);
        yTo(ry);
      });
      if (onMove) {
        window.addEventListener("pointermove", onMove);
        context.add(() => window.removeEventListener("pointermove", onMove));
      }
    },
    { scope: containerRef },
  );

  return containerRef;
}
