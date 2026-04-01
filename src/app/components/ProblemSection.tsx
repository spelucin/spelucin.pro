import React from "react";
import { useTranslation } from "react-i18next";
import { AlertCircle, Clock, Network } from "lucide-react";
import { C } from "../constants";
import { Card, Eyebrow, SectionH2 } from "./CommonComponents";

interface ProblemSectionProps {
  sectionStyle: React.CSSProperties;
}

export function ProblemSection({ sectionStyle }: ProblemSectionProps) {
  const { t } = useTranslation();

  const items = [
    {
      icon: <Clock size={28} strokeWidth={1.5} />,
      title: t('problem.cards.reports.title'),
      desc: t('problem.cards.reports.desc'),
      impact: t('problem.cards.reports.impact'),
      color: C.sage
    },
    {
      icon: <AlertCircle size={28} strokeWidth={1.5} />,
      title: t('problem.cards.tracking.title'),
      desc: t('problem.cards.tracking.desc'),
      impact: t('problem.cards.tracking.impact'),
      color: C.orange
    },
    {
      icon: <Network size={28} strokeWidth={1.5} />,
      title: t('problem.cards.friction.title'),
      desc: t('problem.cards.friction.desc'),
      impact: t('problem.cards.friction.impact'),
      color: C.sage
    }
  ];

  return (
    <section style={{ ...sectionStyle, paddingTop: 40, position: "relative" }}>

      <div style={{ position: "relative", width: "100%" }}>
        <div
          style={{
            padding: "64px 0",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Eyebrow>{t('problem.eyebrow')}</Eyebrow>
          <SectionH2 style={{ marginBottom: 64, maxWidth: 650, margin: "0 auto 64px" }}>
            {t('problem.title')}
          </SectionH2>

          <div
            style={{
              display: "grid",
              gap: 24,
              textAlign: "left",
            }}
            className="custom-grid-3"
          >
            {items.map((item, i) => (
              <Card
                key={i}
                style={{
                  padding: "36px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `${item.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: item.color,
                  marginBottom: 28,
                }}>
                  {item.icon}
                </div>

                <h3 style={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "1.2rem",
                  color: C.text,
                  marginBottom: 16,
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontFamily: "Inter, sans-serif",
                  color: `${C.text}60`,
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  marginBottom: 32,
                  flex: 1,
                }}>
                  {item.desc}
                </p>

                <div style={{ marginTop: "auto" }}>
                  <span style={{
                    fontFamily: "Lexend, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: item.impact.toLowerCase().includes("in") || item.impact.toLowerCase().includes("fre") ? C.orange : C.sage,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                    background: "rgba(255,248,235,0.03)",
                    borderRadius: 6,
                    border: `1px solid ${C.border}`,
                    display: "inline-block",
                  }}>
                    {item.impact}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <p style={{
            fontFamily: "Inter, sans-serif",
            color: `${C.text}40`,
            fontSize: "0.85rem",
            marginTop: 48,
            textAlign: "center",
            lineHeight: 1.8,
            fontStyle: "italic",
          }}>
            {t('problem.footer')}
          </p>
        </div>
      </div>
    </section>
  );
}

