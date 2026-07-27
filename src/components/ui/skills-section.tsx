"use client";

import { useEffect, useRef, useState } from "react";
import MarqueeAlongSvgPath from "@/components/ui/marquee-along-svg-path";

function Reveal({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

interface Category {
  n: string;
  title: string;
  tagLine: string;
}

const CATEGORIES: Category[] = [
  { n: "01", title: "Languages", tagLine: "Java, Python" },
  {
    n: "02",
    title: "Backend",
    tagLine: "Spring Boot, FastAPI, Hibernate, REST APIs, FeathersJS",
  },
  { n: "03", title: "Databases", tagLine: "MySQL, PostgreSQL, DynamoDB, Redis" },
  { n: "04", title: "Cloud & DevOps", tagLine: "AWS (EC2, S3, IAM), Docker, Kubernetes" },
  { n: "05", title: "AI / ML", tagLine: "RAG, LLM Integration, LangChain, FAISS" },
  { n: "06", title: "Additional", tagLine: "Kafka, RabbitMQ, Git, CI/CD" },
];

interface FeaturedCard {
  n: string;
  title: string;
  tags: string[];
}

const FEATURED_REST: FeaturedCard[] = [
  { n: "02", title: "Backend", tags: ["Spring Boot", "FastAPI", "Hibernate", "REST APIs"] },
  { n: "03", title: "Databases", tags: ["MySQL", "PostgreSQL", "DynamoDB", "Redis"] },
  { n: "04", title: "Cloud & DevOps", tags: ["AWS EC2", "AWS S3", "Docker", "Kubernetes"] },
  { n: "01", title: "Languages", tags: ["Java", "Python"] },
];

interface Logo {
  name: string;
  icon: string;
}

const LOGOS: Logo[] = [
  { name: "Java", icon: "java/java-original" },
  { name: "Python", icon: "python/python-original" },
  { name: "Spring Boot", icon: "spring/spring-original" },
  { name: "FastAPI", icon: "fastapi/fastapi-original" },
  { name: "Hibernate", icon: "hibernate/hibernate-original" },
  { name: "MySQL", icon: "mysql/mysql-original" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
  { name: "Redis", icon: "redis/redis-original" },
  { name: "AWS", icon: "amazonwebservices/amazonwebservices-original-wordmark" },
  { name: "Docker", icon: "docker/docker-original" },
  { name: "Kubernetes", icon: "kubernetes/kubernetes-plain" },
  { name: "Kafka", icon: "apachekafka/apachekafka-original" },
  { name: "Git", icon: "git/git-original" },
];

function LogoChip({ logo }: { logo: Logo }) {
  return (
    <div
      title={logo.name}
      className="h-full w-14 duration-300 ease-in-out hover:scale-150"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logo.icon}.svg`}
        alt={logo.name}
        className="h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );
}

const LOGO_WAVE_PATH =
  "M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5";

export function SkillsSection() {
  return (
    <section
      className="w-full font-sans font-semibold"
      style={{ background: "#E9E5DD", color: "#241a16" }}
    >
      <Reveal className="relative flex items-end justify-between gap-10 overflow-hidden px-8 py-16 sm:px-14 sm:py-[90px] lg:px-[6vw]">
        <div className="relative z-[1] text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase leading-[0.86] tracking-tight">
          I DON&apos;T
          <br />
          DO GENERIC
          <br />
          <span style={{ color: "#b3231f" }}>STACKS.</span>
        </div>
        <div className="relative z-[1] max-w-[240px] flex-shrink-0">
          <div className="mb-5 text-sm leading-relaxed" style={{ color: "#6b5a4d" }}>
            No boilerplate frameworks, no cargo-cult architecture — every choice here
            earns its place in production.
          </div>
          <div
            className="text-[13px] font-black uppercase"
            style={{ color: "#b3231f" }}
          >
            View The Stack ↓
          </div>
        </div>
      </Reveal>

      <Reveal className="px-8 pb-16 sm:px-14 sm:pb-[70px]">
        <div
          className="mb-5 text-[13px] font-black tracking-[0.2em]"
          style={{ color: "#b3231f" }}
        >
          WHAT I WORK WITH
        </div>
        <div
          className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6"
          style={{ background: "#d8b9a8" }}
        >
          {CATEGORIES.map((c) => (
            <div
              key={c.n}
              className="box-border p-5 transition-colors duration-200 ease-out hover:bg-[#f5e6d3]"
              style={{ background: "#faf3e5" }}
            >
              <div className="mb-3 text-xs font-black" style={{ color: "#b3231f" }}>
                {c.n}
              </div>
              <div className="mb-2 text-sm font-black uppercase leading-tight">
                {c.title}
              </div>
              <div className="text-[11px] leading-snug" style={{ color: "#7a6a5c" }}>
                {c.tagLine}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal
        className="relative flex flex-col items-start justify-between gap-10 overflow-hidden px-8 py-16 sm:flex-row sm:items-center sm:px-14 sm:py-16"
        style={{ background: "#0d0d0d" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-[20%] h-[280px] w-[280px] rounded-full blur-[10px]"
          style={{
            background: "radial-gradient(circle, rgba(179,35,31,0.4), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 right-[5%] h-[260px] w-[260px] rounded-full blur-[10px]"
          style={{
            background: "radial-gradient(circle, rgba(253,248,238,0.06), transparent 70%)",
          }}
        />
        <div
          className="relative z-[1] max-w-[640px] text-[clamp(1.75rem,6vw,3.5rem)] font-black uppercase leading-[0.95]"
          style={{ color: "#fdf8ee" }}
        >
          STOP SHIPPING
          <br />
          <span style={{ color: "#e8544b" }}>SPAGHETTI CODE.</span>
        </div>
        <div className="relative z-[1] flex flex-shrink-0 flex-col items-start gap-3.5 sm:items-end">
          <div
            className="max-w-[220px] text-sm leading-relaxed sm:text-right"
            style={{ color: "#d9c9be" }}
          >
            Clean architecture. Typed contracts. Systems that scale on purpose.
          </div>
          <a
            href="#contact"
            className="rounded-[2px] px-6 py-3 text-[13px] font-black uppercase transition-transform duration-200 ease-out hover:translate-x-1"
            style={{ background: "#b3231f", color: "#fdf8ee" }}
          >
            Let&apos;s talk stack ↗
          </a>
        </div>
      </Reveal>

      <Reveal className="px-8 py-16 sm:px-14 sm:py-[70px]">
        <div className="mb-2 flex items-baseline justify-between">
          <div
            className="text-[13px] font-black tracking-[0.2em]"
            style={{ color: "#6b5a4d" }}
          >
            FEATURED
          </div>
          <div className="cursor-pointer text-[13px] font-bold" style={{ color: "#b3231f" }}>
            View All ↗
          </div>
        </div>
        <div className="mb-8 text-[clamp(1.75rem,4.5vw,2.5rem)] font-black uppercase">
          Where I Go Deepest
        </div>

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-3">
          <div
            className="relative box-border flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[10px] p-8 transition-transform duration-300 ease-out hover:-translate-y-2 sm:row-span-2"
            style={{ background: "#b3231f", color: "#fdf8ee" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-[180px] w-[180px] rounded-full"
              style={{ background: "rgba(253,248,238,0.1)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-10 h-40 w-40 rounded-full"
              style={{ background: "rgba(253,248,238,0.06)" }}
            />
            <div className="relative flex items-center justify-between">
              <div className="text-xs font-black tracking-wide">05 / PRIMARY FOCUS</div>
              <div className="text-lg">↗</div>
            </div>
            <div className="relative">
              <div className="mb-3.5 text-3xl font-black uppercase">AI / ML</div>
              <div className="flex flex-wrap gap-2">
                {["RAG", "LLM Integration", "LangChain", "FAISS Vector DB"].map((t) => (
                  <div
                    key={t}
                    className="rounded-full px-3 py-1.5 text-xs font-bold"
                    style={{
                      background: "rgba(253,248,238,0.15)",
                      border: "1px solid rgba(253,248,238,0.3)",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {FEATURED_REST.map((c) => (
            <div
              key={c.n}
              className="box-border flex min-h-[190px] flex-col justify-between rounded-[10px] p-6 transition-all duration-300 ease-out hover:-translate-y-2"
              style={{ background: "#faf3e5", border: "1px solid #d8b9a8" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f5e6d3";
                e.currentTarget.style.borderColor = "#b3231f";
                e.currentTarget.style.boxShadow = "0 16px 30px rgba(179,35,31,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#faf3e5";
                e.currentTarget.style.borderColor = "#d8b9a8";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-black" style={{ color: "#b3231f" }}>
                  {c.n} /
                </div>
                <div className="text-[15px]" style={{ color: "#7a6a5c" }}>
                  ↗
                </div>
              </div>
              <div>
                <div className="mb-2.5 text-lg font-black uppercase">{c.title}</div>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <div
                      key={t}
                      className="rounded-full px-2.5 py-1 text-[10px] font-bold"
                      style={{ background: "#241a16", color: "#fdf8ee" }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[640px]">
        <MarqueeAlongSvgPath
          path={LOGO_WAVE_PATH}
          pathId="skills-logo-wave"
          viewBox="0 0 996 330"
          baseVelocity={8}
          slowdownOnHover={true}
          draggable={true}
          dragSensitivity={0.1}
          repeat={2}
          responsive
          grabCursor
          className="h-full w-full scale-105"
        >
          {LOGOS.map((logo) => (
            <LogoChip key={logo.name} logo={logo} />
          ))}
        </MarqueeAlongSvgPath>
      </div>

      <Reveal className="px-8 py-20 text-center sm:px-14">
        <div className="mb-7 text-[clamp(1.75rem,6vw,3.25rem)] font-black uppercase leading-none">
          Let&apos;s Build Something
          <br />
          <span style={{ color: "#b3231f" }}>Reliable.</span>
        </div>
        <a
          href="#contact"
          className="inline-block rounded-[2px] px-8 py-4 text-sm font-black uppercase transition-transform duration-200 ease-out hover:translate-x-1"
          style={{ background: "#b3231f", color: "#241a16" }}
        >
          Get In Touch ↗
        </a>
      </Reveal>
    </section>
  );
}
