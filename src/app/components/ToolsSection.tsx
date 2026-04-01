import React from "react";
import { useTranslation } from "react-i18next";
import { SiGoogleanalytics, SiGooglegemini, SiGooglecloud, SiGooglesheets, SiGoogletagmanager, SiLooker } from "react-icons/si";
import { TbApi, TbPlugConnected } from "react-icons/tb";
import { C } from "../constants";
import { Eyebrow, SectionH2 } from "./CommonComponents";

interface ToolsSectionProps {
  sectionStyle: React.CSSProperties;
}

export function ToolsSection({ sectionStyle }: ToolsSectionProps) {
  const { t } = useTranslation();

  const tools = [
    { name: "Looker Studio", icon: <SiLooker size={16} /> },
    { name: "Google Analytics 4", icon: <SiGoogleanalytics size={16} /> },
    { name: "Google Tag Manager", icon: <SiGoogletagmanager size={16} /> },
    { name: "Google Sheets", icon: <SiGooglesheets size={16} /> },
    { name: "Apps Script", icon: <SiGooglecloud size={16} /> },
    { name: t('tools.list.apis'), icon: <TbApi size={18} /> },
    { name: "Gemini", icon: <SiGooglegemini size={16} /> },
    { name: "Porter Metrics", icon: <TbPlugConnected size={18} /> },
  ];

  return (
    <section style={{ ...sectionStyle, paddingTop: 40, textAlign: "center" }}>
      <Eyebrow>{t('tools.eyebrow')}</Eyebrow>
      <SectionH2 style={{ marginBottom: 16 }}>{t('tools.title')}</SectionH2>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          color: `${C.text}60`,
          fontSize: "0.9rem",
          lineHeight: 1.7,
          maxWidth: 580,
          margin: "0 auto 48px",
        }}
      >
        {t('tools.description')}
      </p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 12,
        maxWidth: 900,
        margin: "0 auto",
      }}>
        {tools.map((tool, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,248,235,0.01)",
              border: `1px solid rgba(255,248,235,0.05)`,
              borderRadius: 99,
              padding: "8px 18px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: `${C.text}80`,
              fontFamily: "Lexend, sans-serif",
              fontSize: "0.82rem",
              transition: "all 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(172,216,185,0.08)";
              (e.currentTarget as HTMLDivElement).style.borderColor = C.sage;
              (e.currentTarget as HTMLDivElement).style.color = C.text;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(255,248,235,0.01)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,248,235,0.05)";
              (e.currentTarget as HTMLDivElement).style.color = `${C.text}80`;
            }}
          >
            <span style={{ color: C.sage, display: "flex", alignItems: "center" }}>
              {tool.icon}
            </span>
            {tool.name}
          </div>
        ))}
      </div>
    </section>
  );
}

