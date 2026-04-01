import React from "react";
import { useTranslation } from "react-i18next";
import { Search, CheckCircle, BarChart2, Network } from "lucide-react";
import { C } from "../constants";
import { Card, Eyebrow, SectionH2 } from "./CommonComponents";

interface ProcessSectionProps {
  sectionStyle: React.CSSProperties;
}

export function ProcessSection({ sectionStyle }: ProcessSectionProps) {
  const { t } = useTranslation();

  const icons = [
    <Search size={22} strokeWidth={1.5} />,
    <CheckCircle size={22} strokeWidth={1.5} />,
    <BarChart2 size={22} strokeWidth={1.5} />,
    <Network size={22} strokeWidth={1.5} />,
  ];

  const stepsData = t('process.steps', { returnObjects: true });
  const steps = (Array.isArray(stepsData) ? stepsData : []).map((step: any, i: number) => ({
    ...step,
    icon: icons[i],
  }));

  return (
    <section id="proceso" style={sectionStyle}>
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 64 }}>
        <Eyebrow>{t('process.eyebrow')}</Eyebrow>
        <SectionH2 style={{ marginBottom: 12 }}>{t('process.title')}</SectionH2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: `${C.text}60`,
            fontSize: "0.9rem",
            lineHeight: 1.7,
            maxWidth: 460,
          }}
        >
          {t('process.description')}
        </p>
      </div>

      {/* Steps — vertical timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical line — starts and ends at circle centers, not at edges */}
        <div style={{
          position: "absolute",
          left: 27,
          top: 56,
          bottom: 56,
          width: 1,
          background: `linear-gradient(to bottom, ${C.sage}35, ${C.sage}12, transparent)`,
        }} className="hidden md:block" />

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: 0,
                alignItems: "start",
              }}
            >
              {/* Step icon bubble */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 28 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: C.bg,           /* solid bg to mask the line */
                    border: `1px solid rgba(172,216,185,${0.35 - i * 0.07})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: `rgba(172,216,185,${1 - i * 0.18})`,
                    flexShrink: 0,
                    zIndex: 2,
                    position: "relative",
                    boxShadow: `0 0 0 4px ${C.bg}`,   /* extra solid halo to fully cover line */
                  }}
                >
                  {step.icon}
                </div>
              </div>

              {/* Content card — simplified back to full width */}
              <Card
                style={{
                  margin: "12px 0 12px 20px",
                  background: "rgba(255,248,235,0.02)",
                  border: `1px solid ${C.border}`,
                  borderRadius: 20,
                  padding: "24px 28px",
                  display: "block",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(172,216,185,0.25)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = C.border;
                }}
              >
                <h3
                  style={{
                    fontFamily: "Lexend, sans-serif",
                    color: C.text,
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: `${C.text}60`,
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

