import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { C } from "../constants";
import { Card, Eyebrow } from "./CommonComponents";

interface BannerCTAProps {
  setShowBooking: (show: boolean) => void;
  sectionStyle: React.CSSProperties;
}

export function BannerCTA({ setShowBooking, sectionStyle }: BannerCTAProps) {
  const { t } = useTranslation();

  return (
    <section id="banner-cta" style={{ ...sectionStyle, paddingBottom: 120 }}>
      <Card
        style={{
          padding: "80px 48px",
          textAlign: "center",
          background: `linear-gradient(135deg, ${C.bg} 0%, rgba(172,216,185,0.08) 100%)`,
          border: `1px solid ${C.sage}20`,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{
          position: "absolute",
          top: "-50%",
          left: "-20%",
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle, ${C.sage}10 0%, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0
        }} />
        
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
          <Eyebrow>{t('ctaBanner.eyebrow')}</Eyebrow>
          <h2
            style={{
              fontFamily: "Lexend, sans-serif",
              color: C.text,
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              fontWeight: 500,
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            {t('ctaBanner.title')}
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: `${C.text}70`,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginBottom: 48,
            }}
          >
            {t('ctaBanner.description')}
          </p>
          <button
            onClick={() => setShowBooking(true)}
            style={{
              background: C.sage,
              color: C.bg,
              border: "none",
              borderRadius: 99,
              padding: "16px 40px",
              fontFamily: "Lexend, sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: `0 10px 30px -10px ${C.sage}50`,
              display: "inline-flex",
              alignItems: "center",
              gap: 12
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 15px 40px -10px ${C.sage}70`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 10px 30px -10px ${C.sage}50`;
            }}
          >
            {t('ctaBanner.cta')}
            <ArrowRight size={18} />
          </button>
          <p style={{ marginTop: 24, fontSize: "0.8rem", color: `${C.text}30`, fontFamily: "Inter, sans-serif" }}>
            {t('ctaBanner.footer')}
          </p>
        </div>
      </Card>
    </section>
  );
}

