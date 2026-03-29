import React from "react";
import { Linkedin, Mail } from "lucide-react";
import { C } from "../constants";
import { Eyebrow } from "./CommonComponents";

interface BioSectionProps {
  sectionStyle: React.CSSProperties;
}

export function BioSection({ sectionStyle }: BioSectionProps) {
  return (
    <section id="bio" style={{ ...sectionStyle, paddingTop: 120 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 64,
          alignItems: "center",
        }}
        className="flex flex-col md:grid"
      >
        {/* Photo Column — Large & Atmospheric */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute",
            inset: "-20px",
            background: `radial-gradient(circle, ${C.sage}15 0%, transparent 70%)`,
            filter: "blur(40px)",
            zIndex: -1,
          }} />

          <div style={{
            borderRadius: 48,
            overflow: "hidden",
            boxShadow: `0 20px 40px -10px rgba(0,0,0,0.4)`,
            border: `1px solid ${C.border}`,
          }}>
            <img
              src="/img/pfp.jpg"
              alt="Alex Spelucin"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "4/5",
                objectFit: "cover",
                display: "block",
                filter: "contrast(1.02) brightness(1.05)",
              }}
            />
          </div>
        </div>

        {/* Content Column — High-end Typography */}
        <div style={{ padding: "12px 0" }}>
          <Eyebrow>Tu próximo Data Lead</Eyebrow>
          <h3
            style={{
              fontFamily: "Lexend, sans-serif",
              color: C.text,
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 500,
              marginBottom: 24,
              lineHeight: 1.1,
            }}
          >
            Alex Spelucin.
          </h3>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: `${C.text}70`,
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            Llevo años construyendo departamentos de datos para agencias en LATAM.
            Mi objetivo no es venderte un software más, sino actuar como tu socio
            estratégico <em style={{ color: C.sage }}>in-house</em> para que tu agencia
            escale con claridad y sin depender de procesos manuales.
          </p>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginTop: 40,
          }}>
            <a
              href="#"
              style={{
                color: C.text,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: "0.85rem",
                fontFamily: "Lexend, sans-serif",
                textDecoration: "none",
                transition: "opacity 0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${C.text}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Linkedin size={18} />
              </div>
              LinkedIn
            </a>
            <a
              href="mailto:alex@spelucin.com"
              style={{
                color: C.text,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: "0.85rem",
                fontFamily: "Lexend, sans-serif",
                textDecoration: "none",
                transition: "opacity 0.2s"
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${C.text}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Mail size={18} />
              </div>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
