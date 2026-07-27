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

const LOGO_WAVE_PATH =
  "M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5";

export function SkillsSection() {
  return (
    <section className="w-full overflow-hidden bg-[#0C0C0C] font-['Archivo',sans-serif] text-white">
      {/* top bar */}
      <div className="flex items-center justify-between px-6 py-5 font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.18em] sm:px-10 sm:text-[11px]">
        <div className="hidden gap-7 sm:flex">
          <span>Stack</span>
          <span>Systems</span>
          <span>Writing</span>
        </div>
        <span className="font-['Anton',sans-serif] text-xl tracking-[0.02em]">&#9670;</span>
        <div className="flex gap-5 sm:gap-7">
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>

      {/* heading */}
      <Reveal className="grid grid-cols-1 gap-6 border-b border-[#222] px-6 pb-6 sm:grid-cols-[280px_1fr] sm:gap-9 sm:px-10">
        <div className="font-['Anton',sans-serif] text-[36px] uppercase tracking-[0.01em] sm:text-[46px]">
          Skills
        </div>
        <p className="m-0 max-w-[640px] font-['Anton',sans-serif] text-[13px] uppercase leading-[1.35] tracking-[0.02em] text-[#C9C6C1] sm:text-[15px]">
          Backend systems, data platforms and applied AI. Six years of production work — every tool
          below has been on call with me, and stayed.
        </p>
      </Reveal>

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

      {/* case study + stats */}
      <Reveal className="grid grid-cols-1 border-t border-[#222] sm:grid-cols-2">
        <div className="border-b border-[#222] p-8 sm:border-b-0 sm:border-r sm:p-10">
          <div className="mb-7 h-[220px] overflow-hidden border border-[#2A2A2A] sm:h-[300px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
              alt="Data center servers"
              className="h-full w-full object-cover grayscale"
              draggable={false}
            />
          </div>
          <div className="font-['Anton',sans-serif] text-[26px] uppercase sm:text-[34px]">
            Case · Retrieval platform
          </div>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#9E9B95] sm:text-[16px]">
            1.2B events a month, 84ms p95, answers that link back to the document that produced
            them.
          </p>
        </div>
        <div className="flex flex-col gap-6 p-8 sm:gap-[26px] sm:p-10">
          {[
            ["Services in prod", "40+"],
            ["Events / month", "1.2B"],
            ["Uptime", "99.98%"],
            ["Years shipping", "6"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between border-b border-[#222] pb-3.5">
              <span className="font-['JetBrains_Mono',monospace] text-[12px] uppercase text-[#8B8880]">
                {label}
              </span>
              <span className="font-['Anton',sans-serif] text-[28px] sm:text-[34px]">{value}</span>
            </div>
          ))}
          <div className="mt-3.5 font-['Anton',sans-serif] text-[32px] uppercase leading-[1.05] text-[#E8321C] sm:text-[44px]">
            Available for Q4 builds
          </div>
        </div>
      </Reveal>

      {/* footer links */}
      <div className="grid grid-cols-2 gap-6 border-t border-[#222] px-6 py-12 font-['JetBrains_Mono',monospace] text-[12px] uppercase tracking-[0.1em] text-[#C9C6C1] sm:grid-cols-4 sm:gap-6 sm:px-10 sm:py-14 sm:text-[13px]">
        <div>
          GitHub
          <br />
          LinkedIn
        </div>
        <div>
          Email
          <br />
          Calendar
        </div>
        <div>
          +1 (000) 000-0000
          <br />
          hello@stack.dev
        </div>
        <div className="text-right text-[#E8321C] sm:col-auto">Start a project &#8599;</div>
      </div>

      {/* lower space: svg-path logo marquee */}
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

      {/* giant sign-off */}
      <Reveal className="px-6 pb-10 text-center font-['Anton',sans-serif] text-[64px] uppercase leading-[0.82] tracking-[-0.01em] sm:px-10 sm:pb-10 sm:text-[110px] lg:text-[160px] xl:text-[196px]">
        Reliable
      </Reveal>

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
      `}</style>
    </section>
  );
}
