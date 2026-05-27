"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const cols = Math.floor(canvas.width / 18);
    const rows = Math.floor(canvas.height / 18);
    const drops: number[] = Array(cols).fill(0);

    const chars = "404NOTFOUND01";

    let frame: number;
    const draw = () => {
      ctx.fillStyle = "rgba(6, 9, 15, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 255, 128, 0.12)";
      ctx.font = "13px monospace";

      for (let i = 0; i < cols; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 18, drops[i] * 18);
        if (drops[i] * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      frame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

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
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.6,
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
        <span
          style={{
            fontSize: "clamp(96px, 20vw, 180px)",
            fontWeight: 900,
            lineHeight: 1,
            background: "linear-gradient(135deg, #00ff80 0%, #00bfff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.04em",
            userSelect: "none",
          }}
        >
          404
        </span>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #00ff80, transparent)",
            opacity: 0.4,
          }}
        />

        <p
          style={{
            fontSize: "clamp(16px, 3vw, 22px)",
            color: "#a0aec0",
            margin: 0,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Page not found
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#4a5568",
            margin: 0,
            lineHeight: 1.7,
            maxWidth: "420px",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          <br />
          Let&apos;s get you back on track.
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
              border: "1px solid #00ff80",
              color: "#00ff80",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#00ff8015";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px #00ff8030";
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
          afonso.gesualdi — {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}