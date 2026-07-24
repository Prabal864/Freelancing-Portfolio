import {
  Boxes,
  CloudCog,
  Container,
  Cpu,
  Database,
  GitBranch,
  Leaf,
  Sparkles,
  Workflow,
  CodeXml,
} from "lucide-react";

type SkillTile = {
  label: string;
  detail: string;
  copy: string;
  icon: typeof Boxes;
  tint: string;
  size?: string;
};

const SKILL_TILES: SkillTile[] = [
  {
    label: "Java & Spring",
    detail: "Core backend stack",
    copy: "Services, APIs, and business logic that stay readable after the first launch.",
    icon: CodeXml,
    tint: "rgba(249,115,22,0.12)",
    size: "sm:col-span-2 sm:row-span-2",
  },
  {
    label: "AWS",
    detail: "Cloud delivery",
    copy: "Infrastructure choices that keep deployments controlled and predictable.",
    icon: CloudCog,
    tint: "rgba(14,165,233,0.12)",
  },
  {
    label: "Kubernetes",
    detail: "Runtime operations",
    copy: "Release, scale, and recover without turning the platform into a mystery box.",
    icon: Boxes,
    tint: "rgba(99,102,241,0.12)",
  },
  {
    label: "Docker",
    detail: "Container packaging",
    copy: "Portable builds that behave the same locally, in CI, and in prod.",
    icon: Container,
    tint: "rgba(34,211,238,0.12)",
  },
  {
    label: "PostgreSQL",
    detail: "Data layer",
    copy: "Schemas and queries designed for real usage, not demo-size data.",
    icon: Database,
    tint: "rgba(16,185,129,0.12)",
  },
  {
    label: "CI / CD",
    detail: "Delivery automation",
    copy: "Workflow automation that removes manual steps without hiding the release path.",
    icon: Workflow,
    tint: "rgba(244,63,94,0.12)",
    size: "sm:col-span-2 sm:row-span-2",
  },
  {
    label: "AI integrations",
    detail: "Automation and RAG",
    copy: "Useful model features wired into products with guardrails, context, and visibility.",
    icon: Sparkles,
    tint: "rgba(168,85,247,0.12)",
  },
  {
    label: "Delivery",
    detail: "Git and coordination",
    copy: "Small, controlled changes that keep handoffs clear and the codebase calm.",
    icon: GitBranch,
    tint: "rgba(15,23,42,0.08)",
  },
  {
    label: "Spring security",
    detail: "Access and trust",
    copy: "Authentication and authorization patterns that fit the rest of the stack.",
    icon: Leaf,
    tint: "rgba(34,197,94,0.12)",
  },
  {
    label: "Automation",
    detail: "Tooling and scripts",
    copy: "Small utilities and checks that save time every day, not just in demos.",
    icon: Cpu,
    tint: "rgba(245,158,11,0.12)",
  },
];

function SkillCard({ tile }: { tile: SkillTile }) {
  const Icon = tile.icon;

  return (
    <article
      className={`group relative flex min-h-[10rem] flex-col overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#ffffff_0%,#fbfbf8_100%)] p-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 ${tile.size ?? ""}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 20% 20%, ${tile.tint}, transparent 58%)` }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.72rem] font-medium text-slate-500">{tile.detail}</p>
          <h3 className="mt-1 text-[1.05rem] font-semibold tracking-[-0.03em] text-slate-950">
            {tile.label}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/5 text-slate-950 transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
      </div>

      <p className="relative mt-auto max-w-[22ch] pt-10 text-sm leading-6 text-slate-600">
        {tile.copy}
      </p>
    </article>
  );
}

export function SkillsPage() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#f5f6f2] px-4 py-4 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_36%)]" />

      <div className="relative mx-auto min-h-screen w-full max-w-7xl rounded-[2rem] bg-[#f5f6f2] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <div className="max-w-xl pt-2">
            <p className="text-sm font-medium text-slate-500">Skills</p>
            <h2 className="mt-4 max-w-[12ch] text-balance text-[clamp(2.6rem,6vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-slate-950">
              Built for backend systems that need to last.
            </h2>
            <p className="mt-6 max-w-[60ch] text-pretty text-base leading-7 text-slate-600">
              This section sits before the story page in the flow and uses the same
              floating-tile idea from your reference, but swaps in the stack I actually
              work with: Java, Spring, AWS, Kubernetes, data, and AI integrations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Java",
                "Spring Boot",
                "AWS",
                "Kubernetes",
                "PostgreSQL",
                "CI / CD",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid auto-rows-[10rem] grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[9.5rem]">
            {SKILL_TILES.map((tile) => (
              <SkillCard key={tile.label} tile={tile} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}