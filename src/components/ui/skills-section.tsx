"use client";

import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- marquee disabled below, kept for later use
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

interface GridCard {
  n: string;
  title: string;
  desc: string;
  primary?: boolean;
}

const GRID_CARDS: GridCard[] = [
  { n: "01", title: "Languages", desc: "Java · Python · TypeScript · SQL" },
  { n: "02", title: "Backend", desc: "Spring Boot · FastAPI · Hibernate · REST APIs" },
  { n: "03", title: "Databases", desc: "MySQL · PostgreSQL · DynamoDB · Redis" },
  { n: "04 · PRIMARY", title: "Applied AI", desc: "LangChain · RAG · FAISS · LLM Integration", primary: true },
  { n: "05", title: "Cloud & DevOps", desc: "AWS · Docker · Kubernetes" },
  { n: "06", title: "Additional", desc: "Kafka · RabbitMQ · Git · CI/CD" },
];

interface ServiceCard {
  n: string;
  title: string;
  desc: string;
  tags: string;
  primary?: boolean;
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    n: "01",
    title: "Custom web applications",
    desc: "End-to-end product builds — Java, Python, Spring Boot and FastAPI behind interfaces people actually want to use.",
    tags: "Java · Spring Boot · FastAPI",
  },
  {
    n: "02",
    title: "Backend & API engineering",
    desc: "REST APIs, Hibernate data layers, Kafka and RabbitMQ pipelines designed for clean failure modes.",
    tags: "REST · Hibernate · Kafka",
  },
  {
    n: "03",
    title: "AI integration & RAG systems",
    desc: "LLM integration, LangChain orchestration and FAISS vector search wired into your existing product.",
    tags: "LangChain · FAISS · RAG",
    primary: true,
  },
  {
    n: "04",
    title: "Cloud & DevOps setup",
    desc: "AWS (EC2, S3, IAM), Docker, Kubernetes and Jenkins CI/CD so releases stop being events.",
    tags: "AWS · Docker · Kubernetes",
  },
  {
    n: "05",
    title: "Database design & optimisation",
    desc: "MySQL, PostgreSQL, DynamoDB and Redis — schemas and caching tuned for the queries you actually run.",
    tags: "PostgreSQL · DynamoDB · Redis",
  },
  {
    n: "06",
    title: "Architecture consulting",
    desc: "A second pair of eyes on scale, cost and reliability decisions before they become expensive.",
    tags: "Reviews · Roadmaps · Scaling",
  },
];

interface Logo {
  name: string;
  icon: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- marquee disabled below, kept for later use
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- marquee disabled below, kept for later use
function LogoChip({ logo }: { logo: Logo }) {
  return (
    <div title={logo.name} className="h-full w-12 duration-300 ease-in-out hover:scale-150 sm:w-14">
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- marquee disabled below, kept for later use
const LOGO_WAVE_PATH =
  "M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full overflow-hidden bg-[#0C0C0C] font-['Archivo',sans-serif] text-white">
      {/* hero */}
      <Reveal className="relative bg-[#E8321C] pb-8 sm:pb-10">
        <div className="relative h-[260px] overflow-hidden sm:h-[420px] lg:h-[480px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pictures/photo-1605379399642-870262d3d051.avif"
            alt="Portrait"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
        <div className="relative -mt-[90px] px-6 font-['Anton',sans-serif] uppercase leading-[0.88] sm:-mt-[190px] sm:px-10">
          <div className="text-right text-[52px] tracking-[0.01em] sm:text-[90px] lg:text-[120px]">Depth</div>
          <div className="ml-4 text-left text-[52px] sm:ml-16 sm:text-[90px] lg:text-[120px]">Over breadth</div>
          <div className="text-right text-[50px] text-[#090808] sm:text-[86px] lg:text-[115px]">Kept sharp</div>
          <div className="text-center text-[50px] text-white sm:text-[86px] lg:text-[115px]">Fewer tools</div>
        </div>
      </Reveal>

      {/* ticker */}
      <div className="overflow-hidden border-b border-[#222]">
        <div className="ticker-track flex w-[200%] py-3.5">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="whitespace-nowrap pr-10 font-['JetBrains_Mono',monospace] text-[12px] uppercase tracking-[0.22em] text-[#E9E5DD] sm:text-[13px]"
            >
              {[
                "Java",
                "Python",
                "Spring Boot",
                "Kafka",
                "AWS",
                "Kubernetes",
                "PostgreSQL",
                "Redis",
                "LangChain",
                "FAISS",
                "Terraform",
                "Airflow",
              ].map((t) => (
                <span key={t}>
                  <span className={i === 0 ? "" : "text-[#E9E5DD]"}>{t}</span>
                  <span className="text-[#E8321C]"> &#10003; </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* quote */}
      <Reveal className="relative px-6 py-14 sm:px-10 sm:py-[72px]">
        <div className="absolute left-1/2 top-8 hidden h-[280px] w-[240px] -translate-x-1/2 overflow-hidden border border-[#2A2A2A] sm:block md:top-11 md:h-[340px] md:w-[300px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80"
            alt="Working at a laptop at night"
            className="h-full w-full object-cover grayscale"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <p className="relative m-0 text-center font-['Anton',sans-serif] text-[30px] uppercase leading-[1.1] tracking-[0.005em] sm:text-[42px] lg:text-[56px]">
          I build backend systems that survive their second year — typed contracts, honest schemas,
          and retrieval pipelines that cite their sources.
        </p>
      </Reveal>

      {/* grid */}
      <Reveal className="grid grid-cols-1 gap-px border-y border-[#222] bg-[#222] sm:grid-cols-3">
        {GRID_CARDS.map((c) => (
          <div
            key={c.n}
            className={
              c.primary
                ? "bg-[#E8321C] p-8 text-[#0C0C0C] sm:p-[30px]"
                : "bg-[#0C0C0C] p-8 sm:p-[30px]"
            }
          >
            <div
              className={
                "font-['JetBrains_Mono',monospace] text-[11px] tracking-[0.16em] " +
                (c.primary ? "" : "text-[#E8321C]")
              }
            >
              {c.n}
            </div>
            <div className="my-[22px] mb-3 font-['Anton',sans-serif] text-[32px] uppercase sm:text-[36px]">
              {c.title}
            </div>
            <p className={"m-0 text-[15px] leading-[1.6] " + (c.primary ? "opacity-75" : "text-[#9E9B95]")}>
              {c.desc}
            </p>
          </div>
        ))}
      </Reveal>

      {/* services */}
      <Reveal className="border-t border-[#222]">
        <div className="flex flex-col justify-between gap-8 px-6 pt-14 sm:flex-row sm:gap-12 sm:px-10 sm:pt-16">
          <div>
            <div className="mb-5 font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-[0.2em] text-[#E8321C]">
              What I do
            </div>
            <h2 className="m-0 max-w-[470px] font-['Anton',sans-serif] text-[52px] uppercase leading-[0.86] tracking-[0.005em] sm:text-[80px] lg:text-[100px]">
              Services
              <br />
              that ship
            </h2>
          </div>
          <div className="max-w-[400px] pt-1">
            <p className="m-0 text-[16px] leading-[1.75] text-[#9E9B95] sm:text-[18px]">
              Clean architecture, real performance, and practical AI. Fixed-scope engagements or
              ongoing retainer — whichever fits how your team works.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 border-b border-[#E8321C] pb-2 font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-[0.18em] text-[#E8321C]"
            >
              Request a quote &#8599;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3.5 bg-black px-6 pb-11 pt-14 sm:grid-cols-2 sm:px-10 lg:grid-cols-3">
          {SERVICE_CARDS.map((s) => (
            <div
              key={s.n}
              className={
                "flex min-h-[260px] flex-col gap-4 border p-8 sm:min-h-[280px] " +
                (s.primary
                  ? "border-[#E8321C] bg-[#E8321C] text-[#0C0C0C]"
                  : "border-[#242424] bg-[#141414]")
              }
            >
              <div className="flex items-center justify-between">
                <span
                  className={
                    "font-['JetBrains_Mono',monospace] text-[11px] tracking-[0.18em] " +
                    (s.primary ? "text-[#F4EDED]" : "text-[#E8321C]")
                  }
                >
                  {s.n}
                </span>
                <span className="text-[18px] opacity-60">&#8599;</span>
              </div>
              <div className="mt-auto font-['Anton',sans-serif] text-[26px] uppercase leading-[1.05] sm:text-[28px]">
                {s.title}
              </div>
              <p
                className={
                  "m-0 text-[14px] leading-[1.6] " + (s.primary ? "text-[#2A0B06]" : "text-[#9E9B95]")
                }
              >
                {s.desc}
              </p>
              <div
                className={
                  "border-t pt-3.5 font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.14em] " +
                  (s.primary ? "border-[#C2260F] text-[#3A140D]" : "border-[#242424] text-[#6E6B65]")
                }
              >
                {s.tags}
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden border-t border-[#222] bg-black">
          <div className="services-ticker-track flex w-[200%] py-4">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex gap-8 whitespace-nowrap pr-8 font-['JetBrains_Mono',monospace] text-[12px] uppercase tracking-[0.2em] text-[#6E6B65]"
              >
                {[
                  "Java",
                  "Python",
                  "Spring Boot",
                  "FastAPI",
                  "PostgreSQL",
                  "Redis",
                  "AWS",
                  "Kubernetes",
                  "Kafka",
                  "LangChain",
                  "FAISS",
                  "Jenkins",
                ].map((t) => (
                  <span key={t}>{t} &middot;</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* lower space: svg-path logo marquee — disabled, kept for later use
      <Reveal className="relative h-[280px] w-full sm:h-[380px] lg:h-[440px]">
        <MarqueeAlongSvgPath
          path={LOGO_WAVE_PATH}
          pathId="skills-parabola-logo-wave"
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
      </Reveal>
      */}

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;600;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap");

        @keyframes skillsTick {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .ticker-track {
          animation: skillsTick 26s linear infinite;
        }
        .services-ticker-track {
          animation: skillsTick 26s linear infinite;
        }
      `}</style>
    </section>
  );
}
