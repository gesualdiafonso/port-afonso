"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageDeactivated() {
  const [dots, setDots] = useState(".");
  const [timestamp] = useState(() => new Date().toISOString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const lines = [
    { delay: 0,   color: "#2d3748", text: "$ initializing lookup" },
    { delay: 300, color: "#2d3748", text: "$ connecting to database" },
    { delay: 600, color: "#4a5568", text: "> scanning records" + dots },
    { delay: 900, color: "rgba(255,180,50,0.7)", text: "! record not found in active registry" },
    { delay: 1200, color: "rgba(255,80,80,0.6)", text: "✕ page is not active in our database" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#06090f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        padding: "2rem",
      }}
    >
      {/* Amber radial glow top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 70% 40% at 50% -10%, rgba(255, 180, 50, 0.06) 0%, transparent 60%),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,180,50,0.02) 39px, rgba(255,180,50,0.02) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,180,50,0.02) 39px, rgba(255,180,50,0.02) 40px)
          `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          textAlign: "center",
          maxWidth: "640px",
          width: "100%",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 72,
            height: 72,
            border: "1.5px solid rgba(255,180,50,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", inset: 4, border: "1px solid rgba(255,180,50,0.12)" }} />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,180,50,0.75)" strokeWidth="1.5">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
            <line x1="8" y1="12" x2="8" y2="12" />
            <line x1="3" y1="19" x2="21" y2="5" stroke="rgba(255,80,80,0.6)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 14px",
            border: "1px solid rgba(255,180,50,0.2)",
            background: "rgba(255,180,50,0.04)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "rgba(255,180,50,0.8)",
              display: "inline-block",
              boxShadow: "0 0 6px rgba(255,180,50,0.5)",
              animation: "pulse 1.4s ease-in-out infinite",
            }}
          />
          <span style={{ fontSize: "11px", color: "rgba(255,180,50,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            inactive
          </span>
        </div>

        <span
          style={{
            fontSize: "clamp(52px, 11vw, 100px)",
            fontWeight: 900,
            lineHeight: 1,
            background: "linear-gradient(135deg, #ffb432 0%, #ff6b35 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.04em",
            userSelect: "none",
          }}
        >
          410
        </span>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,180,50,0.4), transparent)",
          }}
        />

        <p
          style={{
            fontSize: "clamp(13px, 2.5vw, 17px)",
            color: "#a0aec0",
            margin: 0,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Page unavailable
        </p>

        {/* Terminal block */}
        <div
          style={{
            width: "100%",
            maxWidth: "520px",
            background: "rgba(255, 180, 50, 0.02)",
            border: "1px solid rgba(255, 180, 50, 0.1)",
            padding: "16px 20px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "12px",
              paddingBottom: "10px",
              borderBottom: "1px solid rgba(255,180,50,0.08)",
            }}
          >
            {["#ff5f56", "#ffbd2e", "#27c93f"].map((c, i) => (
              <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.6 }} />
            ))}
            <span style={{ fontSize: "11px", color: "#2d3748", marginLeft: 6, letterSpacing: "0.06em" }}>
              db_lookup.sh
            </span>
          </div>

          {lines.map((line, i) => (
            <TerminalLine key={i} line={line} dots={dots} index={i} />
          ))}
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "#4a5568",
            margin: 0,
            lineHeight: 1.8,
            maxWidth: "440px",
          }}
        >
          This page is no longer active in our database.
          <br />
          We&apos;re sorry for the inconvenience.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 24px",
              background: "transparent",
              border: "1px solid rgba(255, 180, 50, 0.4)",
              color: "rgba(255, 180, 50, 0.85)",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255, 180, 50, 0.07)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(255,180,50,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            ← Back to Home
          </Link>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 24px",
              background: "transparent",
              border: "1px solid #2d3748",
              color: "#718096",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#4a5568";
              (e.currentTarget as HTMLAnchorElement).style.color = "#a0aec0";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2d3748";
              (e.currentTarget as HTMLAnchorElement).style.color = "#718096";
            }}
          >
            Contact
          </Link>
        </div>

        <p
          style={{
            fontSize: "11px",
            color: "#2d3748",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginTop: "1rem",
          }}
        >
          afonso.gesualdi — error_code: 410 · {timestamp.slice(0, 10)}
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </main>
  );
}

function TerminalLine({
  line,
  dots,
  index,
}: {
  line: { delay: number; color: string; text: string };
  dots: string;
  index: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), line.delay);
    return () => clearTimeout(t);
  }, [line.delay]);

  if (!visible) return <div style={{ height: "20px" }} />;

  const isAnimated = index === 2;
  const displayText = isAnimated
    ? line.text.replace(dots, dots)
    : line.text;

  return (
    <div
      style={{
        fontSize: "12px",
        color: line.color,
        lineHeight: "1.9",
        transition: "opacity 0.3s ease",
      }}
    >
      {isAnimated ? `> scanning records${dots}` : displayText}
    </div>
  );
}