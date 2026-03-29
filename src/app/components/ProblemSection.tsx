import React from "react";
import { AlertCircle, Clock, Network } from "lucide-react";
import { C } from "../constants";
import { Card, Eyebrow, SectionH2 } from "./CommonComponents";

interface ProblemSectionProps {
  sectionStyle: React.CSSProperties;
}

export function ProblemSection({ sectionStyle }: ProblemSectionProps) {
  return (
    <section style={{ ...sectionStyle, paddingTop: 40, position: "relative" }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml;base64,${btoa(`<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><path d='M 40 0 L 0 0 0 40' fill='none' stroke='white' stroke-opacity='0.15' stroke-width='1'/></svg>`)}")`,
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(circle at center, black 0%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 100%)",
        zIndex: -1,
        opacity: 0.6,
      }} />

      <div style={{ position: "relative", width: "100%" }}>
        <div
          style={{
            padding: "64px 0",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Eyebrow>El Problema</Eyebrow>
          <SectionH2 style={{ marginBottom: 64, maxWidth: 650, margin: "0 auto 64px" }}>
            Tu equipo pierde horas en tareas manuales y tus clientes dudan de los resultados.
          </SectionH2>

          <div
            style={{
              display: "grid",
              gap: 24,
              textAlign: "left",
            }}
            className="custom-grid-3"
          >
            {[
              {
                icon: <Clock size={28} strokeWidth={1.5} />,
                title: "Reportes Manuales",
                desc: "Tus ejecutivos pierden el viernes entero cruzando datos de Meta y GA4 en lugar de optimizar las campañas publicitarias.",
                impact: "Pérdida de Margen",
                color: C.sage
              },
              {
                icon: <AlertCircle size={28} strokeWidth={1.5} />,
                title: "Tracking Roto",
                desc: "Fugas de información, conversiones duplicadas y píxeles que dejan de medir de la noche a la mañana sin que nadie lo note a tiempo.",
                impact: "Datos Corruptos",
                color: C.orange
              },
              {
                icon: <Network size={28} strokeWidth={1.5} />,
                title: "Fricción con Clientes",
                desc: "Cuando los números de la agencia no cuadran con el CRM del cliente, la confianza se rompe y la cuenta se pierde.",
                impact: "Riesgo de Churn",
                color: C.sage
              }
            ].map((item, i) => (
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
                    color: item.impact.includes("In") || item.impact.includes("Fre") ? C.orange : C.sage,
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
            Nosotros eliminamos la fricción técnica. Mientras tus ejecutivos escalan, nosotros
            garantizamos que los números cuadren a la perfección.
          </p>
        </div>
      </div>
    </section>
  );
}
