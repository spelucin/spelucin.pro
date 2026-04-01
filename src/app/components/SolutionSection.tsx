import React from "react";
import { useTranslation } from "react-i18next";
import { Database, Crosshair, BarChart3 } from "lucide-react";
import { C } from "../constants";
import { Eyebrow, SectionH2 } from "./CommonComponents";

interface SolutionSectionProps {
  sectionStyle: React.CSSProperties;
}

export function SolutionSection({ sectionStyle }: SolutionSectionProps) {
  const { t } = useTranslation();

  const points = [
    { title: t('solution.points.connectors.title'), desc: t('solution.points.connectors.desc'), icon: <Database size={20} /> },
    { title: t('solution.points.attribution.title'), desc: t('solution.points.attribution.desc'), icon: <Crosshair size={20} /> },
    { title: t('solution.points.dashboards.title'), desc: t('solution.points.dashboards.desc'), icon: <BarChart3 size={20} /> },
  ];

  return (
    <section id="solucion" style={{ ...sectionStyle, paddingTop: 120 }}>
      {/* Mobile-optimized grid: smaller gap on mobile, md:grid for desktop */}
      <div 
        className="flex flex-col items-center gap-12 md:grid md:grid-cols-2 md:gap-20 md:items-start"
      >
        {/* Dashboard Visual — Left */}
        <div style={{ position: "relative", width: "100%", maxWidth: 500 }}>
          <div style={{
            position: "absolute",
            inset: "-30px",
            background: `radial-gradient(circle, ${C.sage}20 0%, transparent 70%)`,
            filter: "blur(50px)",
            zIndex: -1,
          }} />

          {/* Transform is removed on mobile by default, added back for md screens */}
          <div 
            style={{
              borderRadius: 32,
              overflow: "hidden",
              boxShadow: `0 40px 80px -20px rgba(0,0,0,0.6)`,
              border: `1px solid ${C.border}`,
              transition: "transform 0.5s ease",
            }}
            className="md:[transform:perspective(1000px)_rotateY(-5deg)_rotateX(2deg)] md:hover:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)]"
          >
            <img
              src="/img/example.jpg"
              alt="Dashboard Solution Spelucin"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "brightness(1.1) contrast(1.05)",
              }}
            />
          </div>
        </div>

        {/* Text Content — Right */}
        <div style={{ textAlign: "left" }}>
          <Eyebrow style={{ textAlign: "inherit" }}>{t('solution.eyebrow')}</Eyebrow>
          <SectionH2 style={{ marginBottom: 24, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", textAlign: "inherit" }}>
            {t('solution.title')}
          </SectionH2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            color: `${C.text}70`,
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: 40,
            textAlign: "inherit",
          }}>
            {t('solution.description')}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {points.map((point, i) => (
              <div key={i} style={{ display: "flex", gap: 20 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, background: `${C.sage}15`,
                  display: "flex", alignItems: "center", justifyContent: "center", color: C.sage, flexShrink: 0
                }}>
                  {point.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: "Lexend, sans-serif", color: C.text, fontSize: "1rem", marginBottom: 4 }}>{point.title}</h4>
                  <p style={{ fontFamily: "Inter, sans-serif", color: `${C.text}50`, fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

