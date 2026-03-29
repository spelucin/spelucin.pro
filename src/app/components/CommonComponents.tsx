import React, { useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";
import { C } from "../constants";

export function Card({
  children,
  style,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: 20,
        padding: "32px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.7rem",
        letterSpacing: "0.15em",
        color: C.sage,
        textTransform: "uppercase",
        marginBottom: 12,
        fontWeight: 500,
      }}
    >
      {children}
    </p>
  );
}

export function SectionH2({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      style={{
        fontFamily: "Lexend, sans-serif",
        color: C.text,
        fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
        fontWeight: 500,
        lineHeight: 1.25,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

export function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left"
      style={{
        background: open ? C.card : "transparent",
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        padding: "20px 24px",
        cursor: "pointer",
        transition: "all 0.2s",
        marginBottom: 8,
        display: "block",
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          style={{
            fontFamily: "Lexend, sans-serif",
            color: C.text,
            fontSize: "0.95rem",
          }}
        >
          {q}
        </span>
        {open ? (
          <ChevronUp size={16} color={C.sage} style={{ flexShrink: 0 }} />
        ) : (
          <ChevronDown
            size={16}
            color={`${C.text}60`}
            style={{ flexShrink: 0 }}
          />
        )}
      </div>
      {open && (
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: `${C.text}80`,
            fontSize: "0.875rem",
            marginTop: 12,
            lineHeight: 1.7,
          }}
        >
          {a}
        </p>
      )}
    </button>
  );
}

export function Testimonial({ quote, name }: { quote: string; name: string }) {
  return (
    <Card style={{ padding: "40px", position: "relative" }}>
      <Quote
        size={42}
        color={C.sage}
        style={{
          opacity: 0.1,
          position: "absolute",
          top: 24,
          left: 24,
        }}
        fill={C.sage}
      />
      <div style={{ position: "relative", zIndex: 1, paddingTop: 16 }}>
        <p
          style={{
            fontFamily: "Lexend, sans-serif",
            color: C.text,
            fontSize: "1.1rem",
            lineHeight: 1.6,
            margin: "0 0 24px 0",
          }}
        >
          "{quote}"
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 24, height: 1, background: `${C.sage}40` }} />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: `${C.text}50`,
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {name}
          </p>
        </div>
      </div>
    </Card>
  );
}
