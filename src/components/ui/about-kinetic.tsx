"use client";

const ROW_1_TEXT = "BACKEND ENGINEER ✦ BACKEND ENGINEER ✦";
const ROW_2_TEXT = "AWS CLOUD ARCHITECT ✦ AWS CLOUD ARCHITECT ✦";
const ROW_3_TEXT = "AI & RAG BUILDER ✦ AI & RAG BUILDER ✦";

export function AboutKinetic() {
  return (
    <section className="about-kinetic" id="about">
      <div className="ak-top">
        <span className="ak-label">(ABOUT ME)</span>
        <a className="ak-cta" href="#contact">
          Hire me &rarr;
        </a>
      </div>

      <div className="ak-rows" aria-hidden="true">
        <div className="ak-row ak-row-1">
          <div className="ak-track">
            <span>{ROW_1_TEXT}</span>
            <span>{ROW_1_TEXT}</span>
          </div>
        </div>
        <div className="ak-row ak-row-2">
          <div className="ak-track">
            <span>{ROW_2_TEXT}</span>
            <span>{ROW_2_TEXT}</span>
          </div>
        </div>
        <div className="ak-row ak-row-3">
          <div className="ak-track">
            <span>{ROW_3_TEXT}</span>
            <span>{ROW_3_TEXT}</span>
          </div>
        </div>
      </div>

      <div className="ak-bottom">
        <p className="ak-blurb">
          I&apos;m Prabal — one engineer covering the full stack of modern product
          infrastructure. 15+ projects shipped, 3 AI products live.
        </p>
        <span className="ak-scroll">SCROLL &darr;</span>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap");

        @keyframes marqueeL {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeR {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .about-kinetic {
          position: relative;
          overflow: hidden;
          background: #f0ede6;
          font-family: "Archivo", sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ak-top {
          position: absolute;
          top: 40px;
          left: 5%;
          right: 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 3;
        }
        .ak-label {
          font-family: "JetBrains Mono", monospace;
          font-size: 15px;
          color: #8a8578;
          letter-spacing: 0.15em;
        }
        .ak-cta {
          font-size: 16px;
          font-weight: 600;
          color: #141210;
          text-decoration: none;
          border: 1px solid #141210;
          border-radius: 999px;
          padding: 12px 26px;
          transition: background 0.25s, color 0.25s;
        }
        .ak-cta:hover {
          background: #141210;
          color: #f0ede6;
        }

        .ak-rows {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ak-row {
          overflow: hidden;
          white-space: nowrap;
        }
        .ak-track {
          display: inline-flex;
          gap: 56px;
          padding-right: 56px;
          will-change: transform;
        }
        .ak-track span {
          font-size: clamp(64px, 8vw, 150px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .ak-row-1 .ak-track { animation: marqueeL 22s linear infinite; }
        .ak-row-1 span { color: #141210; }
        .ak-row-2 .ak-track { animation: marqueeR 26s linear infinite; }
        .ak-row-2 span { color: transparent; -webkit-text-stroke: 2px #141210; }
        .ak-row-3 .ak-track { animation: marqueeL 30s linear infinite; }
        .ak-row-3 span { color: #ff5c38; }

        .ak-bottom {
          position: absolute;
          bottom: 40px;
          left: 5%;
          right: 5%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          z-index: 3;
        }
        .ak-blurb {
          margin: 0;
          width: min(420px, 60vw);
          font-size: 19px;
          line-height: 1.6;
          color: #57534a;
        }
        .ak-scroll {
          font-family: "JetBrains Mono", monospace;
          font-size: 15px;
          color: #8a8578;
          letter-spacing: 0.15em;
        }

        @media (prefers-reduced-motion: reduce) {
          .ak-track { animation: none !important; }
        }

        @media (max-width: 768px) {
          .ak-blurb { font-size: 16px; }
          .ak-scroll { display: none; }
        }
      `}</style>
    </section>
  );
}
