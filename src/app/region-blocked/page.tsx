"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RegionBlocked() {
  const [coords, setCoords] = useState({ lat: "—", lon: "—" });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoords({
            lat: pos.coords.latitude.toFixed(2),
            lon: pos.coords.longitude.toFixed(2),
          });
        },
        () => {}
      );
    }
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 191, 255, 0.05) 0%, transparent 60%),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,191,255,0.025) 39px, rgba(0,191,255,0.025) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,191,255,0.025) 39px, rgba(0,191,255,0.025) 40px)
          `,
          pointerEvents: "none",
        }}
      />

      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          pointerEvents: "none",
        }}
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="400" cy="300" r="120" fill="none" stroke="#00bfff" strokeWidth="1" />
        <circle cx="400" cy="300" r="200" fill="none" stroke="#00bfff" strokeWidth="1" />
        <circle cx="400" cy="300" r="280" fill="none" stroke="#00bfff" strokeWidth="1" />
        <circle cx="400" cy="300" r="360" fill="none" stroke="#00bfff" strokeWidth="1" />
        <line x1="0" y1="300" x2="800" y2="300" stroke="#00bfff" strokeWidth="0.5" />
        <line x1="400" y1="0" x2="400" y2="600" stroke="#00bfff" strokeWidth="0.5" />
      </svg>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          textAlign: "center",
          maxWidth: "620px",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            border: "1.5px solid rgba(0,191,255,0.3)",
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
              border: "1px solid rgba(0,191,255,0.15)",
            }}
          />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(0,191,255,0.7)" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
          <span
            style={{
              fontSize: "clamp(48px, 10vw, 88px)",
              fontWeight: 900,
              lineHeight: 1,
              background: "linear-gradient(135deg, #00bfff 0%, #7b68ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.04em",
              userSelect: "none",
            }}
          >
            451
          </span>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.4), transparent)",
            }}
          />
        </div>

        <p
          style={{
            fontSize: "clamp(13px, 2.5vw, 17px)",
            color: "#a0aec0",
            margin: 0,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Unavailable in your region
        </p>

        <div
          style={{
            background: "rgba(0, 191, 255, 0.03)",
            border: "1px solid rgba(0, 191, 255, 0.1)",
            padding: "16px 24px",
            width: "100%",
            maxWidth: "480px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              fontSize: "12px",
              textAlign: "left",
            }}
          >
            {[
              ["status", "geo_blocked"],
              ["error_code", "451"],
              ["lat", coords.lat],
              ["lon", coords.lon],
            ].map(([key, val]) => (
              <div key={key}>
                <span style={{ color: "#2d3748", display: "block", marginBottom: "2px", letterSpacing: "0.06em" }}>
                  {key}
                </span>
                <span style={{ color: "#4a5568" }}>{val}</span>
              </div>
            ))}
          </div>
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
          This link is not available in your country or region
          due to legal or licensing restrictions.
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
              border: "1px solid rgba(0, 191, 255, 0.4)",
              color: "rgba(0, 191, 255, 0.8)",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0, 191, 255, 0.06)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(0,191,255,0.12)";
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
          afonso.gesualdi — error_code: 451
        </p>
      </div>
    </main>
  );
}