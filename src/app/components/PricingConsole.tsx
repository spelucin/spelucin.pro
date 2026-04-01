import React from "react";
import { useTranslation } from "react-i18next";
import { AlertCircle, Database, Slack } from "lucide-react";
import { C, getTier } from "../constants";
import { Card, Eyebrow, SectionH2 } from "./CommonComponents";

interface PricingConsoleProps {
  clients: number;
  setClients: (clients: number) => void;
  sectionStyle: React.CSSProperties;
}

export function PricingConsole({ clients, setClients, sectionStyle }: PricingConsoleProps) {
  const { t, i18n } = useTranslation();
  const tier = getTier(clients);

  const benefits = [
    { text: t('pricing.benefits.support'), icon: <Slack size={16} /> },
    { text: t('pricing.benefits.connectors'), icon: <Database size={16} /> },
    { text: t('pricing.benefits.bugs'), icon: <AlertCircle size={16} /> },
  ];

  return (
    <section id="paquetes" style={sectionStyle}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <Eyebrow>{t('pricing.eyebrow')}</Eyebrow>
        <SectionH2>
          {t('pricing.title')}
        </SectionH2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: `${C.text}60`,
            fontSize: "0.95rem",
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "16px auto 0",
          }}
        >
          {t('pricing.description')}
        </p>
      </div>

      <Card style={{ 
        padding: "0", 
        textAlign: "left", 
        background: "rgba(6,20,15,0.4)", 
        overflow: "hidden",
        border: `1px solid ${C.border}`,
      }}>
        <div className="flex flex-col md:grid md:grid-cols-[1.2fr_0.8fr]">
          {/* Left: Configuration */}
          <div 
            style={{ 
              padding: "32px 24px", 
              borderRight: "none", 
              borderBottom: `1px solid ${C.border}` 
            }} 
            className="md:p-12 md:border-r md:border-b-0"
          >
            <div style={{ marginBottom: 40 }}>
              <div 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: 12, 
                  marginBottom: 20 
                }}
                className="md:flex-row md:justify-between md:items-center"
              >
                <p style={{ fontFamily: "Lexend, sans-serif", color: C.text, fontSize: "1rem", fontWeight: 500, margin: 0 }}>
                  {t('pricing.question')}
                </p>
                <span style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontSize: "0.85rem", 
                  color: C.sage, 
                  fontWeight: 600,
                  background: `${C.sage}10`,
                  padding: "4px 12px",
                  borderRadius: 99,
                  border: `1px solid ${C.sage}20`,
                  width: "fit-content"
                }}>
                  {clients >= 31 ? t('pricing.activeClientsPlus') : `${clients} ${t('pricing.activeClients')}`}
                </span>
              </div>
              
              <div style={{ position: "relative", padding: "20px 0" }}>
                <div style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "30%",
                  height: 6,
                  background: `linear-gradient(to right, transparent, ${C.orange}30)`,
                  borderRadius: 99,
                  zIndex: 0,
                }} />
                
                <input
                  type="range"
                  min={5}
                  max={31}
                  value={clients}
                  onChange={(e) => setClients(Number(e.target.value))}
                  style={{ position: "relative", zIndex: 1 }}
                />
              </div>
              
              <div style={{ display: "flex", justifyContent: "space-between", color: `${C.text}40`, fontSize: "0.75rem" }}>
                <span>{`5 ${t('pricing.clients')}`}</span>
                <span style={{ color: clients >= 30 ? C.orange : `${C.text}40`, fontWeight: clients >= 30 ? 600 : 400 }}>
                  {t('pricing.tiersInfo')}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ margin: "32px 0 24px", borderTop: `1px solid ${C.border}`, opacity: 0.5 }} />

            {/* Expanded Benefits List / No box */}
            <div style={{ padding: "0 12px", position: "relative" }}>
              <div style={{
                position: "absolute",
                left: -8,
                top: 0,
                bottom: 0,
                width: 2,
                background: `linear-gradient(to bottom, ${C.sage}, transparent)`,
                borderRadius: 99,
                opacity: 0.4
              }} />

              <p style={{ fontSize: "0.95rem", color: C.text, fontWeight: 500, marginBottom: 24, fontFamily: "Lexend, sans-serif" }}>
                {t('pricing.dataDept')}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {benefits.map((benefit, i) => (
                  <div key={i} style={{ 
                    display: "flex", 
                    gap: 16, 
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    opacity: 1
                  }}>
                    <div style={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: 8, 
                      background: `${C.sage}10`, 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      color: C.sage,
                      flexShrink: 0 
                    }}>
                      {benefit.icon}
                    </div>
                    <p style={{ fontSize: "0.85rem", color: `${C.text}60`, margin: 0, lineHeight: 1.4 }}>
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Price Console */}
          <div 
            style={{ 
              padding: "32px 24px", 
              background: "rgba(255,248,235,0.02)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            className="md:p-12"
          >
            <div>
              <p style={{ 
                fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: C.sage, 
                letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 
              }}>
                {t('pricing.monthlyInvestment')}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                <h3 
                  style={{ 
                    fontFamily: "Lexend, sans-serif", color: C.text, 
                    fontWeight: 500, margin: 0, lineHeight: 1 
                  }}
                  className="text-5xl md:text-6xl"
                >
                  ${tier.price}
                </h3>
                <span style={{ color: `${C.text}40`, fontSize: "1.1rem" }}>{t('pricing.perMonth')}</span>
              </div>
              <p style={{ color: `${C.text}40`, fontSize: "0.85rem", marginBottom: 32 }}>
                {tier.name}
              </p>

              <div style={{ 
                padding: "16px 20px", 
                background: "rgba(245,199,142,0.05)", 
                borderRadius: 12, 
                border: `1px solid ${C.orange}20`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 40
              }}>
                <span style={{ fontSize: "0.8rem", color: C.orange, fontWeight: 500 }}>{t('pricing.setupTitle')}</span>
                <span style={{ fontSize: "1.1rem", color: C.text, fontFamily: "Lexend, sans-serif", fontWeight: 600 }}>
                  ${tier.setup} <small style={{ fontSize: "0.6rem", fontWeight: 400 }}>USD</small>
                </span>
              </div>
            </div>

            {/* ROI Logic (Compact) */}
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20, marginTop: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <div style={{ color: C.orange }}><AlertCircle size={16} /></div>
                <p style={{ fontSize: "0.8rem", color: `${C.text}70`, fontWeight: 500, margin: 0 }}>{t('pricing.estimatedSaving')}</p>
              </div>
              {(() => {
                const benchmark = clients <= 10 
                  ? { label: t('pricing.benchmark.junior'), cost: 2200 }
                  : clients <= 19 
                  ? { label: t('pricing.benchmark.full'), cost: 4500 }
                  : clients <= 29 
                  ? { label: t('pricing.benchmark.dept'), cost: 8500 }
                  : { label: t('pricing.benchmark.enterprise'), cost: 15000 };
                
                return (
                  <>
                    <p style={{ fontSize: "1.35rem", color: C.sage, fontFamily: "Lexend, sans-serif", fontWeight: 600, margin: 0 }}>
                      ${((benchmark.cost - tier.price) * 12).toLocaleString(i18n.language === 'en' ? 'en-US' : 'es-ES')} <small style={{ fontSize: "0.7rem", fontWeight: 400, opacity: 0.6 }}>USD</small>
                    </p>
                    <p style={{ fontSize: "0.72rem", color: `${C.text}40`, marginTop: 2 }}>
                      {t('pricing.vs')} {benchmark.label} {t('pricing.inHouse')} (${benchmark.cost.toLocaleString(i18n.language === 'en' ? 'en-US' : 'es-ES') || "0"}/{t('pricing.perMonth').replace('/', '').trim()})
                    </p>
                  </>
                );
              })()}

              <p style={{ 
                marginTop: 16, 
                fontSize: "0.7rem", 
                color: `${C.text}30`, 
                lineHeight: 1.4, 
                fontStyle: "italic",
                borderTop: `1px solid ${C.border}40`,
                paddingTop: 10
              }}>
                {t('pricing.note')}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

