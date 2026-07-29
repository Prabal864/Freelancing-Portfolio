import { Hero } from "@/components/ui/hero";
import { AboutSection } from "@/components/ui/about-section";
import { ProcessPage } from "@/components/ui/process-page";
import { SkillsSection } from "@/components/ui/skills-section";
import { WorkSection } from "@/components/ui/work-section";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import { FAQ, defaultCategories, defaultFaqData } from "@/components/ui/faq-tabs";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProcessPage />
      <SkillsSection />
      <WorkSection />

      <FlowArt aria-label="Prabal Singh — Story">
        <FlowSection aria-label="Available now" style={{ backgroundColor: "#000", color: "#fff" }}>
          <div className="pointer-events-none absolute inset-0 z-0">
            <ShaderAnimation />
          </div>

          <p className="relative z-10 text-xs font-bold uppercase tracking-[0.2em]">01 — Available now</p>
          <hr className="relative z-10 my-[2vw] border-none border-t border-white/30" />
          <div className="relative z-10">
            <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Open.
              <br />
              Ready.
              <br />
              Available.
            </h1>
          </div>
          <hr className="relative z-10 my-[2vw] border-none border-t border-white/30" />
          <p className="relative z-10 max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            I take on scoped builds, retainers, and embedded sprints — one engineer covering backend,
            cloud, and AI, so you&apos;re not juggling three different hires.
          </p>
          <hr className="relative z-10 my-[2vw] border-none border-t border-white/30" />
          <div className="relative z-10 mt-auto flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Fast start</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                No lengthy onboarding — most engagements are scoped and moving within days.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Direct communication</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                You talk to the engineer building your system, not a layer of account managers.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Full ownership</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                From architecture to deployment — one person accountable for the whole system.
              </p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Frequently Asked Questions" style={{ backgroundColor: "#F5F0E8", color: "#141210" }} noPadding>
          <FAQ
            title="Frequently Asked Questions"
            subtitle="Let's answer some questions"
            categories={defaultCategories}
            faqData={defaultFaqData}
          />
        </FlowSection>

        <FlowSection id="contact" aria-label="Let's build" className="dark" style={{ backgroundColor: "#000", color: "#fff" }} noPadding>
          <LetsWorkTogether />
        </FlowSection>
      </FlowArt>
    </div>
  );
}
