"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FloatingPaths } from "@/components/ui/background-paths";

gsap.registerPlugin(ScrollTrigger);

/**
 * Converted from "Process Page - 7A.dc.html" (your design file). The four
 * interactive step tabs used a small pseudo-framework (DCLogic / setState)
 * in the source markup — reimplemented here as plain React state
 * (activeStep), which is exactly what that pattern was standing in for.
 * The decorative flowing lines (FloatingPaths) in the hero are kept as-is
 * from the current implementation, per instruction.
 *
 * The full-bleed photo is real, verified stock photography (a dark, moody
 * code-editor shot) rather than a placeholder — the source only asked for
 * an "engineer photo" mood shot, not a portrait of Prabal specifically, so
 * there's no identity-misrepresentation concern here.
 */

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
const heroPhoto = unsplash("1518773553398-650c184e0bb3");

const PROCESS_STEPS = [
  { n: "01", label: "DISCOVER", copy: "Understanding the problem and where the system needs to scale." },
  { n: "02", label: "DEFINE", copy: "Concrete architecture — data model, APIs, infrastructure." },
  { n: "03", label: "BUILD", copy: "Iterative, tested, deployed continuously." },
  { n: "04", label: "SHIP", copy: "Structured delivery, monitored in production." },
];

export function ProcessPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray<HTMLElement>("[data-reveal-group]");
      groups.forEach((group) => {
        const items = group.querySelectorAll("[data-reveal]");
        gsap.from(items, {
          autoAlpha: 0,
          y: 28,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 82%" },
        });

        const lines = group.querySelectorAll(".draw-line");
        if (lines.length) {
          gsap.from(lines, {
            scaleX: 0,
            transformOrigin: "right center",
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: "top 82%" },
          });
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} style={{ width: "100%", position: "relative", overflow: "hidden", background: "#0e0e0e", color: "#f2ede2", fontFamily: "'Helvetica Neue',Arial,sans-serif", boxSizing: "border-box" }}>
      {/* HERO */}
      <section id="process" data-reveal-group style={{ position: "relative", padding: "clamp(32px,6vw,64px) clamp(24px,5vw,64px) clamp(28px,4vw,44px)", borderBottom: "1px solid #232323", boxSizing: "border-box" }}>
        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
          <div data-reveal>
            <div style={{ fontSize: "clamp(44px,7vw,80px)", lineHeight: 1.02, fontWeight: 800, letterSpacing: "-0.01em" }}>
              START WITH<br />ARCHITECTURE
            </div>
            <div style={{ marginTop: 22, fontSize: 12, lineHeight: 1.6, color: "#8a8a8a", maxWidth: 280 }}>
              A considered process that brings architecture, engineering discipline, and craft together to build systems with clarity and lasting value.
            </div>
          </div>
          <div data-reveal style={{ textAlign: "right" }}>
            <div style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 800, color: "#1c1c1c", letterSpacing: "0.02em" }}>SYSTEMS</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#d8d8d8", letterSpacing: "0.04em", marginTop: 6 }}>DELIVERY</div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ overflow: "hidden", borderBottom: "1px solid #232323", padding: "10px 0" }}>
        <div style={{ display: "flex", whiteSpace: "nowrap", width: "max-content", animation: "ticker 18s linear infinite" }}>
          {[0, 1].map((i) => (
            <span key={i} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(14px,2vw,20px)", letterSpacing: "0.08em", color: "#666", paddingRight: 8 }}>
              TURNING REQUIREMENTS INTO CODE&nbsp;&nbsp;•&nbsp;&nbsp;SOFTWARE ENGINEER&nbsp;&nbsp;•&nbsp;&nbsp;TURNING REQUIREMENTS INTO CODE&nbsp;&nbsp;•&nbsp;&nbsp;SOFTWARE ENGINEER&nbsp;&nbsp;•&nbsp;&nbsp;TURNING REQUIREMENTS INTO CODE&nbsp;&nbsp;•&nbsp;&nbsp;SOFTWARE ENGINEER&nbsp;&nbsp;•&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* RED BANNER */}
      <div data-reveal-group style={{ background: "#c0392b", color: "#fff", padding: "20px clamp(24px,5vw,64px)", fontFamily: "'Anton',sans-serif", fontSize: "clamp(28px,5vw,44px)", boxSizing: "border-box" }}>
        <span data-reveal>OUR PROCESS</span>
      </div>

      {/* FULL-BLEED PHOTO */}
      <section style={{ position: "relative", minHeight: "clamp(420px,60vw,620px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroPhoto}
          alt="Engineer working at a dark code editor"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.1)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(14,14,14,0.15) 0%,rgba(14,14,14,0.75) 78%,rgba(14,14,14,0.92) 100%)" }} />

        <div data-reveal-group style={{ position: "relative", zIndex: 2, padding: "48px clamp(24px,5vw,56px) 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
          <span data-reveal style={{ display: "inline-block", border: "1px solid #f2ede2", color: "#f2ede2", fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", padding: "6px 14px" }}>
            [ OUR APPROACH ]
          </span>
          <div data-reveal style={{ width: 110, height: 110, borderRadius: "50%", background: "#c0392b", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.05em", padding: 10, transform: "rotate(-8deg)", flexShrink: 0 }}>
            ARCHITECTURE-FIRST DELIVERY
          </div>
        </div>

        <div data-reveal style={{ position: "relative", zIndex: 2, padding: "32px clamp(24px,5vw,56px) 64px", color: "#f2ede2" }}>
          <div style={{ fontFamily: "'Anton',sans-serif", fontSize: "clamp(32px,5vw,52px)", lineHeight: 0.98, textTransform: "uppercase", maxWidth: 820 }}>
            A thoughtful process built around architecture{" "}
            <span style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", textTransform: "none", color: "#e0653a" }}>and momentum.</span>
          </div>
        </div>
      </section>

      {/* LIGHT SECTION */}
      <div id="contact" data-reveal-group style={{ position: "relative", padding: "clamp(40px,8vw,64px) clamp(24px,5vw,64px)", background: "#e9e5dd", color: "#1a1816", boxSizing: "border-box", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", transform: "scaleX(-1)" }}>
          <FloatingPaths position={1} color="#1a1816" />
          <FloatingPaths position={-1} color="#1a1816" />
        </div>

        <div data-reveal style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div style={{ fontFamily: "'Anton',sans-serif", fontSize: "clamp(36px,5vw,56px)", lineHeight: 1, textTransform: "uppercase", maxWidth: 900 }}>
            A process built on{" "}
            <span style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", textTransform: "none", color: "#c0392b" }}>good questions,</span> not guesses.
          </div>
        </div>

        <div data-reveal style={{ position: "relative", display: "flex", marginTop: 48, flexWrap: "wrap" }}>
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.n}
              onClick={() => setActiveStep(i)}
              style={{
                flex: "1 1 60px",
                textAlign: "center",
                padding: "16px 0",
                fontFamily: "'Anton',sans-serif",
                fontSize: 20,
                cursor: "pointer",
                userSelect: "none",
                background: activeStep === i ? "#1a1816" : "transparent",
                color: activeStep === i ? "#e9e5dd" : "#8a8378",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {step.n}
            </div>
          ))}
          <div className="draw-line" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: "#1a1816" }} />
        </div>

        <div data-reveal style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 28 }}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.label}>
              <b style={{ fontFamily: "'Anton',sans-serif", fontSize: 22, color: activeStep === i ? "#c0392b" : "#1a1816", transition: "color 0.15s" }}>
                {step.label}
              </b>
              <div style={{ fontSize: 16, color: "#4a4438", marginTop: 8, lineHeight: 1.5 }}>{step.copy}</div>
            </div>
          ))}
        </div>

        <div data-reveal style={{ position: "relative", padding: "44px 0", marginTop: 56, fontFamily: "'Anton',sans-serif", fontSize: "clamp(30px,5vw,54px)", lineHeight: 1.25, textTransform: "uppercase" }}>
          <div className="draw-line" style={{ position: "absolute", left: 0, right: 0, top: 0, height: 2, background: "#1a1816" }} />
          GOOD SOFTWARE IS BUILT ON <span style={{ color: "#c0392b" }}>GOOD QUESTIONS.</span> ARCHITECTURE PROVIDES THE DIRECTION, CODE GIVES IT FORM, AND TESTING ENSURES EVERY DETAIL SUPPORTS THE BIGGER PICTURE.
          <div className="draw-line" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: "#1a1816" }} />
        </div>

        <div data-reveal style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
          <a href="#contact" className="hov-1" style={{ background: "#1a1816", color: "#e9e5dd", fontFamily: "'JetBrains Mono',monospace", fontSize: 14, fontWeight: 700, letterSpacing: "0.04em", padding: "16px 30px" }}>
            START A PROJECT
          </a>
          <a href="#contact" className="hov-2" style={{ border: "1px solid #1a1816", color: "#1a1816", fontFamily: "'JetBrains Mono',monospace", fontSize: 14, fontWeight: 700, letterSpacing: "0.04em", padding: "16px 30px" }}>
            GET IN TOUCH
          </a>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:ital@1&family=JetBrains+Mono:wght@400;600&display=swap");

        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .hov-1:hover { background: #c0392b; }
        .hov-2:hover { background: rgba(26,24,22,0.06); }

        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
