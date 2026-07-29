import { Anton, Space_Grotesk } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

const ACCENT = "oklch(0.62 0.22 27)";
const WHITE = "#fff";
const GRAY_LIGHT = "oklch(0.82 0.005 90)";
const GRAY_MED = "oklch(0.7 0.01 90)";
const GRAY_DIM = "oklch(0.6 0.01 90)";
const GRAY_DIMMER = "oklch(0.55 0.01 90)";
const GRAY_FAINT = "oklch(0.45 0.01 90)";
const GRAY_BODY = "oklch(0.72 0.01 90)";
const GREEN_DOT = "oklch(0.75 0.19 145)";

const HERO_IMG =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80";
const VITTAMANTHAN_IMG = "/pictures/Screenshot 2026-02-08 193859.png";
const ARCHSENTINEL_HERO_IMG = "/pictures/Screenshot 2026-07-27 000347.png";
const ARCHSENTINEL_FEATURES_IMG = "/pictures/Screenshot 2026-07-27 000424.png";

interface Stat {
  value: string;
  label: string;
}

interface Project {
  index: string;
  title: string[];
  description: string;
  stats: Stat[];
}

const PROJECTS: Project[] = [
  {
    index: "01 / VITTAMANTHAN",
    title: ["Your transactions,", "decoded"],
    description:
      "A microservices fintech platform built on the Setu Account Aggregator framework — providing consent-based multi-bank data synchronization with a sophisticated RAG-powered chat assistant that intelligently answers questions about your own transactions. Supports 20+ languages including English, Hindi, Hinglish, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, and many more for truly universal accessibility.",
    stats: [
      { value: "45%", label: "FASTER DATA SYNC" },
      { value: "20+", label: "LANGUAGES SUPPORTED" },
    ],
  },
  {
    index: "02 / ARCHSENTINEL",
    title: ["Architecture guardian", "for every PR"],
    description:
      "An intelligent AI-powered GitHub application that automatically clones both sides of a pull request, executes five independent static-analysis engines simultaneously, and posts a comprehensive quantified 0–100 architecture health score as a detailed PR comment. Detects architectural drift by catching coupling hotspots, circular dependencies, layer violations, and design anti-patterns before they ship into production.",
    stats: [
      { value: "5", label: "ANALYSIS ENGINES" },
      { value: "4", label: "RISK TIERS" },
    ],
  },
];

export function WorkSection() {
  return (
    <div id="work" className={`${grotesk.className} relative w-full overflow-hidden`}>
      {/* Hero */}
      <div className="relative h-[560px] sm:h-[680px] lg:h-[760px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt="Moody workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(9,9,10,0.94) 0%, rgba(9,9,10,0.35) 45%, rgba(9,9,10,0.9) 100%)",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-6 py-6 sm:px-10">
          <div className="flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: GREEN_DOT }}
            />
            <span className="text-xs font-medium" style={{ color: WHITE }}>
              Available for projects
            </span>
            <span
              className="ml-3.5 hidden text-xs font-medium sm:inline"
              style={{ color: GRAY_DIM }}
            >
              FROM AUG 2026
            </span>
          </div>
          <span
            className="hidden text-xs font-medium tracking-wider sm:inline"
            style={{ color: GRAY_MED }}
          >
            08:45 PM (GMT+5:30)
          </span>
        </div>

        <h2
          className={`${anton.className} pointer-events-none absolute left-6 top-12 m-0 uppercase leading-[0.8] sm:left-10 sm:top-14`}
          style={{
            color: GRAY_LIGHT,
            fontSize: "clamp(4.5rem, 14vw, 11.25rem)",
            letterSpacing: "-4px",
          }}
        >
          Work
          <span
            className={grotesk.className}
            style={{
              fontSize: "1.25rem",
              fontWeight: 500,
              verticalAlign: "top",
              color: ACCENT,
            }}
          >
            ®
          </span>
        </h2>
        <span
          className="pointer-events-none absolute left-7 top-[150px] text-xs font-medium sm:left-12 sm:top-[236px]"
          style={{ color: GRAY_MED, letterSpacing: "6px" }}
        >
          FREELANCE · WEB DEVELOPMENT
        </span>

        <div className="pointer-events-none absolute right-6 top-24 text-right sm:right-10 sm:top-[150px]">
          <span
            className={`${anton.className} block uppercase`}
            style={{ color: GRAY_DIM, fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
          >
            Beyond mockups.
          </span>
          <span
            className={`${anton.className} block uppercase`}
            style={{ color: WHITE, fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
          >
            Built to ship.
          </span>
        </div>

        <div className="pointer-events-none absolute inset-x-6 bottom-[86px] sm:inset-x-10 sm:bottom-[110px]">
          <p
            className="m-0 max-w-[640px]"
            style={{ color: WHITE, fontSize: "clamp(1rem, 2vw, 1.5rem)", lineHeight: 1.45, fontWeight: 500 }}
          >
            <span style={{ color: ACCENT }}>/</span>
            &nbsp;&nbsp;I build production web apps end to end —{" "}
            <span style={{ color: GRAY_MED }}>
              architecture, interface, database and deploy, without a team in
              between.
            </span>
          </p>
        </div>

        <div className="absolute inset-x-6 bottom-6 flex flex-col gap-6 sm:inset-x-10 sm:bottom-[34px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span
              className="text-[11px] font-medium"
              style={{ color: GRAY_DIMMER, letterSpacing: "2px" }}
            >
              SHIPPED SOLO
            </span>
            {["VittaManthan", "ArchSentinel"].map((project) => (
              <span
                key={project}
                className={`${anton.className} text-2xl uppercase sm:text-3xl`}
                style={{ color: GRAY_FAINT }}
              >
                {project}
              </span>
            ))}
          </div>
          <div className="flex gap-3.5">
            <a
              href="#work"
              className="inline-block border px-6 py-3.5 text-[13px] font-semibold transition-colors sm:px-8"
              style={{ borderColor: ACCENT, color: ACCENT, letterSpacing: "2px" }}
            >
              WORK ↘
            </a>
            <a
              href="#contact"
              className="inline-block border px-6 py-3.5 text-[13px] font-semibold transition-colors sm:px-8"
              style={{ borderColor: ACCENT, color: ACCENT, letterSpacing: "2px" }}
            >
              CONTACT ↘
            </a>
          </div>
        </div>
      </div>

      {/* Ledger project */}
      <div className="grid grid-cols-1 gap-8 px-6 pt-16 sm:gap-10 sm:px-10 sm:pt-20 lg:grid-cols-[200px_1fr]">
        <span
          className="text-[13px] font-medium sm:pt-3.5 sm:text-[15px]"
          style={{ color: ACCENT, letterSpacing: "3px" }}
        >
          {PROJECTS[0].index}
        </span>
        <div>
          <h3
            className={`${anton.className} m-0 mb-6 uppercase leading-[0.9]`}
            style={{ color: WHITE, fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
          >
            {PROJECTS[0].title[0]}
            <br />
            {PROJECTS[0].title[1]}
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            <p
              className="m-0 text-[13px] leading-[1.8]"
              style={{ color: GRAY_BODY }}
            >
              {PROJECTS[0].description}
            </p>
            <div className="flex gap-8 sm:gap-10">
              {PROJECTS[0].stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className={`${anton.className} text-4xl sm:text-[52px]`}
                    style={{ color: ACCENT, lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[11px] font-medium"
                    style={{ color: GRAY_DIM, letterSpacing: "2px" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-11 sm:px-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={VITTAMANTHAN_IMG}
          alt="VittaManthan — finance copilot dashboard"
          className="h-[450px] w-full object-cover sm:h-[600px] lg:h-[800px]"
        />
      </div>

      {/* ArchSentinel project */}
      <div className="grid grid-cols-1 gap-8 px-6 pt-20 sm:gap-10 sm:px-10 sm:pt-28 lg:grid-cols-[200px_1fr]">
        <span
          className="text-[13px] font-medium sm:pt-3.5 sm:text-[15px]"
          style={{ color: ACCENT, letterSpacing: "3px" }}
        >
          {PROJECTS[1].index}
        </span>
        <div>
          <h3
            className={`${anton.className} m-0 mb-6 uppercase leading-[0.9]`}
            style={{ color: WHITE, fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
          >
            {PROJECTS[1].title[0]}
            <br />
            {PROJECTS[1].title[1]}
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            <p
              className="m-0 text-[13px] leading-[1.8]"
              style={{ color: GRAY_BODY }}
            >
              {PROJECTS[1].description}
            </p>
            <div className="flex gap-8 sm:gap-10">
              {PROJECTS[1].stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className={`${anton.className} text-4xl sm:text-[52px]`}
                    style={{ color: ACCENT, lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[11px] font-medium"
                    style={{ color: GRAY_DIM, letterSpacing: "2px" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 px-6 pb-16 pt-11 sm:grid-cols-[2fr_1fr] sm:px-10 sm:pb-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ARCHSENTINEL_HERO_IMG}
          alt="ArchSentinel — landing page"
          className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[560px]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ARCHSENTINEL_FEATURES_IMG}
          alt="ArchSentinel — analysis engines"
          className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[560px]"
        />
      </div>

    </div>
  );
}
