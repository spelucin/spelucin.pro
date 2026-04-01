import React from "react";
import { useTranslation } from "react-i18next";
import { Linkedin, Mail } from "lucide-react";
import { C } from "../constants";
import { Eyebrow } from "./CommonComponents";

interface BioSectionProps {
  sectionStyle: React.CSSProperties;
}

export function BioSection({ sectionStyle }: BioSectionProps) {
  const { t } = useTranslation();

  return (
    <section id="bio" style={{ ...sectionStyle, paddingTop: 120 }}>
      {/* Mobile-optimized grid: stacking for mobile, side-by-side for md+ */}
      <div
        className="flex flex-col gap-12 md:grid md:grid-cols-[1fr_1.2fr] md:gap-16 md:items-center"
      >
        {/* Photo Column — Large & Atmospheric */}
        <div style={{ position: "relative", width: "100%", maxWidth: 460, margin: "0 auto" }}>
          <div style={{
            position: "absolute",
            inset: "-20px",
            background: `radial-gradient(circle, ${C.sage}15 0%, transparent 70%)`,
            filter: "blur(40px)",
            zIndex: -1,
          }} />

          <div style={{
            borderRadius: 32,
            overflow: "hidden",
            boxShadow: `0 20px 40px -10px rgba(0,0,0,0.4)`,
            border: `1px solid ${C.border}`,
          }}
            className="md:rounded-[48px]"
          >
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
        <div style={{ padding: "12px 0", textAlign: "left" }}>
          <Eyebrow style={{ textAlign: "inherit" }}>{t('bio.eyebrow')}</Eyebrow>
          <h3
            style={{
              fontFamily: "Lexend, sans-serif",
              color: C.text,
              fontSize: "clamp(2rem, 5vw, 2.6rem)",
              fontWeight: 500,
              marginBottom: 24,
              lineHeight: 1.1,
              textAlign: "inherit",
            }}
          >
            {t('bio.title')}
          </h3>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: `${C.text}70`,
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: 32,
              textAlign: "inherit",
            }}
          >
            {t('bio.description')}
          </p>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginTop: 40,
            justifyContent: "flex-start",
          }}>
            <a
              href="https://www.linkedin.com/in/spelucin"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: `${C.text}60`,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: "0.85rem",
                fontFamily: "Lexend, sans-serif",
                textDecoration: "none",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = "0.7";
                e.currentTarget.style.color = C.text;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.color = `${C.text}60`;
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${C.text}05`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Linkedin size={18} />
              </div>
              LinkedIn
            </a>
            <a
              href="mailto:spelucinalex@gmail.com"
              style={{
                color: `${C.text}60`,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: "0.85rem",
                fontFamily: "Lexend, sans-serif",
                textDecoration: "none",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = "0.7";
                e.currentTarget.style.color = C.text;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.color = `${C.text}60`;
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${C.text}05`, display: "flex", alignItems: "center", justifyContent: "center" }}>
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

