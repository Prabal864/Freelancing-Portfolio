import { Hero } from "@/components/ui/hero";
import { AboutKinetic } from "@/components/ui/about-kinetic";
import { ProcessPage } from "@/components/ui/process-page";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { ShaderGradientBg } from "@/components/ui/shader-gradient-bg";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutKinetic />
      <ProcessPage />

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

        <FlowSection aria-label="Skills" style={{ backgroundColor: "#000", color: "#fff" }}>
          <div className="pointer-events-none absolute inset-0 z-0">
            <ShaderGradientBg />
          </div>

          <p className="relative z-10 text-xs font-bold uppercase tracking-[0.2em]">02 — Skills</p>
          <hr className="relative z-10 my-[2vw] border-none border-t border-white/20" />
          <div className="relative z-10">
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Backend.
              <br />
              Cloud.
              <br />
              AI.
            </h2>
          </div>
          <hr className="relative z-10 my-[2vw] border-none border-t border-white/20" />
          <p className="relative z-10 max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            The languages, frameworks, and infrastructure I build production systems with.
          </p>
          <hr className="relative z-10 my-[2vw] border-none border-t border-white/20" />
          <div className="relative z-10 flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Languages</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Java, Python.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Backend</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Spring Boot, FastAPI, Hibernate, REST APIs, FeathersJS.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Databases</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                MySQL, PostgreSQL, DynamoDB, Redis.
              </p>
            </div>
          </div>
          <hr className="relative z-10 my-[2vw] border-none border-t border-white/20" />
          <div className="relative z-10 flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Cloud &amp; DevOps</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                AWS (EC2, S3, IAM), Docker, Kubernetes.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">AI &amp; ML</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                RAG, LLM Integration, LangChain, Vector Databases (FAISS).
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Additional</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Kafka, RabbitMQ, Git, CI/CD.
              </p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="How I work" style={{ backgroundColor: "#F5F0E8", color: "#141210" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — How I work</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Discover.
              <br />
              Define.
              <br />
              Ship.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Four steps. No guesswork. Every engagement moves through the same considered process.
          </p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 — Discover</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Understanding the problem and where the system needs to scale.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 — Define</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Concrete architecture — data model, APIs, infrastructure.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 — Build</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Iterative, tested, deployed continuously — no big-bang releases.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">04 — Ship &amp; Support</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Structured delivery, monitored in production, refined continuously.
              </p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Work" style={{ backgroundColor: "#1A3DE8", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Work</p>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Built.
              <br />
              Shipped.
              <br />
              Live.
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Two live projects, both shipped end-to-end — architecture, backend, and AI integration.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/30" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[260px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">VittaManthan</p>
              <p className="mb-2 text-[clamp(0.75rem,1vw,0.9rem)] uppercase tracking-wide opacity-60">
                Java · Python · Hibernate · Spring Boot · LangChain · RAG
              </p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                A microservices fintech platform on the SETU Account Aggregator framework — real-time
                multi-bank sync, cashflow analysis, and credit intelligence powered by LLMs. Real-time
                sync cut data-fetch latency by 45%; a LangChain + FAISS + GPT-4 RAG system enables
                intelligent querying of financial transactions.
              </p>
            </div>
            <div className="min-w-[260px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">ArchSentinel</p>
              <p className="mb-2 text-[clamp(0.75rem,1vw,0.9rem)] uppercase tracking-wide opacity-60">
                Java · Python · Spring Boot · FastAPI · GitHub Webhooks
              </p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                An AI-powered GitHub App for real-time pull request analysis, catching architectural
                bottlenecks and scalability issues before production. JavaParser AST analysis flags
                N+1 queries, circular dependencies, and layer violations, scored via a DFS-based
                dependency graph and a weighted 0–100 PR health score.
              </p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Let's build" style={{ backgroundColor: "#000", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Let&apos;s build</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Ready
              <br />
              To
              <br />
              Begin?
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
            Take the first step. <a href="#contact" className="underline underline-offset-4 hover:opacity-75">Let&apos;s talk</a> about what you&apos;re building.
          </p>
        </FlowSection>
      </FlowArt>
    </div>
  );
}
