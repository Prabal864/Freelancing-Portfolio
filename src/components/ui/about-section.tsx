"use client";

interface SkillGroup {
  title: string;
  desc: string;
}

const SKILL_GROUPS: SkillGroup[] = [
  { title: "Backend", desc: "Java, Python, Spring Boot, FastAPI, REST APIs" },
  { title: "Cloud & Data", desc: "AWS, Docker, Kubernetes, PostgreSQL, Redis, Kafka" },
  { title: "Applied AI", desc: "RAG, LLM integration, LangChain, FAISS" },
];

function SocialLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      title={title}
      className="grid h-[34px] w-[34px] flex-shrink-0 place-items-center rounded-full border border-[#C9BFB0] text-[#1C1811] transition-colors duration-200 hover:border-[#1C1811] hover:bg-[#1C1811] hover:text-[#E7E1D8]"
    >
      {children}
    </a>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-[#E7E1D8] px-6 pb-0 pt-24 sm:px-10 lg:px-16"
    >
      {/* top bar */}
      <div className="absolute left-6 right-6 top-8 z-[3] flex justify-between font-['Archivo',sans-serif] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4A4238] sm:left-10 sm:right-10 sm:text-[11px] lg:left-16 lg:right-16">
        <span>Software Engineer</span>
        <span>Available for work — 2026</span>
      </div>

      {/* big background heading */}
      <div className="pointer-events-none absolute inset-x-0 top-[9%] z-[1] text-center font-['Bodoni_Moda',serif] font-bold uppercase leading-[0.86] tracking-[-0.03em] text-[#1C1811] [font-size:clamp(96px,13vw,190px)]">
        Software
        <br />
        Engineer
      </div>

      {/* content grid */}
      <div className="relative z-[2] mx-auto grid w-full max-w-[1400px] grid-cols-1 items-end gap-12 lg:grid-cols-[280px_1fr_260px] lg:gap-8">
        {/* left info block */}
        <div className="order-2 w-full lg:order-1">
          <div className="font-['Archivo',sans-serif] text-[11px] font-semibold tracking-[0.2em] text-[#E8321C]">
            HELLO, I&apos;M
          </div>
          <div className="mt-2.5 font-['Anton',sans-serif] text-[40px] uppercase leading-[0.92] text-[#1C1811] sm:text-[46px]">
            Prabal
            <br />
            Pratap Singh
          </div>
          <div className="mt-3 font-['Archivo',sans-serif] text-[11px] font-medium tracking-[0.28em] text-[#8A8072]">
            FREELANCE SOFTWARE ENGINEER
          </div>
          <div className="my-5 h-px w-14 bg-[#B6AB99]" />
          <p className="m-0 max-w-[320px] text-pretty font-['Instrument_Serif',serif] text-[15px] leading-[1.6] text-[#453D31] lg:max-w-none">
            I build custom software and websites for businesses that want more than a
            template — clean architecture, real performance, and practical AI that solves
            actual problems.
          </p>
          <div className="mt-6 font-['Instrument_Serif',serif] text-[30px] italic text-[#1C1811]">
            Prabal
          </div>
        </div>

        {/* portrait */}
        <div className="order-1 mx-auto w-[85%] max-w-[520px] overflow-hidden lg:order-2 lg:w-full lg:max-w-[640px] [height:clamp(420px,78vh,860px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pictures/profilepic.png"
            alt="Portrait of Prabal Pratap Singh"
            className="h-full w-full object-cover object-top [filter:grayscale(.15)_contrast(1.05)]"
            draggable={false}
          />
        </div>

        {/* right block: skills + social icons, clear of the portrait */}
        <div className="order-3 flex w-full flex-col gap-8 lg:relative lg:-top-16 lg:items-start">
          <div className="flex flex-col gap-5">
            {SKILL_GROUPS.map((g) => (
              <div key={g.title} className="flex gap-2.5">
                <span className="text-[11px] leading-[1.5] text-[#E8321C]">&#9679;</span>
                <div>
                  <div className="font-['Archivo',sans-serif] text-[13px] font-bold leading-[1.2] text-[#1C1811]">
                    {g.title}
                  </div>
                  <p className="m-0 mt-[3px] font-['Archivo',sans-serif] text-[12px] leading-[1.5] text-[#6E6558]">
                    {g.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <SocialLink href="mailto:prabal@example.com" title="Email">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                <path d="M3 6l9 7 9-7" />
              </svg>
            </SocialLink>
            <SocialLink href="tel:+919000000000" title="Phone">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 006.5 6.5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.2 2 2 0 016.5 3z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/prabalpratapsingh" title="LinkedIn">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.75V21h-4v-5.6c0-1.33-.03-3.05-1.9-3.05-1.9 0-2.2 1.45-2.2 2.95V21h-4z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://github.com/prabalpratapsingh" title="GitHub">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.555-1.11-4.555-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700&family=Bodoni+Moda:wght@400;700&family=Instrument+Serif:ital@0;1&display=swap");
      `}</style>
    </section>
  );
}
