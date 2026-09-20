"use client";

import Link from "next/link";

export default function Forbidden() {
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 80, 80, 0.06) 0%, transparent 60%),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,80,80,0.03) 39px, rgba(255,80,80,0.03) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,80,80,0.03) 39px, rgba(255,80,80,0.03) 40px)
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
          maxWidth: "600px",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            border: "1.5px solid rgba(255,80,80,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 4,
              border: "1px solid rgba(255,80,80,0.2)",
            }}
          />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,80,80,0.8)" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="11" rx="0" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            <circle cx="12" cy="16" r="1" fill="rgba(255,80,80,0.8)" />
          </svg>
        </div>

        <span
          style={{
            fontSize: "clamp(72px, 16vw, 140px)",
            fontWeight: 900,
            lineHeight: 1,
            background: "linear-gradient(135deg, #ff5050 0%, #ff8c42 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.04em",
            userSelect: "none",
          }}
        >
          403
        </span>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,80,80,0.5), transparent)",
          }}
        />

        <p
          style={{
            fontSize: "clamp(14px, 2.5vw, 18px)",
            color: "#a0aec0",
            margin: 0,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Access denied
        </p>

        <div
          style={{
            background: "rgba(255, 80, 80, 0.04)",
            border: "1px solid rgba(255, 80, 80, 0.12)",
            padding: "16px 24px",
            maxWidth: "440px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "#4a5568",
              margin: 0,
              lineHeight: 1.8,
              textAlign: "left",
            }}
          >
            <span style={{ color: "rgba(255, 80, 80, 0.6)" }}>$ </span>
            You don&apos;t have permission to access this resource.
            <br />
            <span style={{ color: "rgba(255, 80, 80, 0.6)" }}>$ </span>
            Contact the admin or return to a safe page.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 24px",
              background: "transparent",
              border: "1px solid rgba(255, 80, 80, 0.5)",
              color: "rgba(255, 80, 80, 0.8)",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255, 80, 80, 0.08)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(255,80,80,0.15)";
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
            Request Access
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
          afonso.gesualdi — error_code: 403
        </p>
      </div>
    </main>
  );
}