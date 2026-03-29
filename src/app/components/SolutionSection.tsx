import React from "react";
import { SiGooglecloud, SiGoogletagmanager, SiLooker } from "react-icons/si";
import { C } from "../constants";
import { Eyebrow, SectionH2 } from "./CommonComponents";

interface SolutionSectionProps {
  sectionStyle: React.CSSProperties;
}

export function SolutionSection({ sectionStyle }: SolutionSectionProps) {
  return (
    <section id="solucion" style={{ ...sectionStyle, paddingTop: 120 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="flex flex-col md:grid">
        {/* Dashboard Visual — Left */}
        <div style={{ position: "relative" }}>
           <div style={{
            position: "absolute",
            inset: "-30px",
            background: `radial-gradient(circle, ${C.sage}20 0%, transparent 70%)`,
            filter: "blur(50px)",
            zIndex: -1,
          }} />
          
          <div style={{ 
            borderRadius: 32, 
            overflow: "hidden", 
            boxShadow: `0 40px 80px -20px rgba(0,0,0,0.6)`,
            border: `1px solid ${C.border}`,
            transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"}
          onMouseLeave={e => e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg) rotateX(2deg)"}
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
        <div>
          <Eyebrow>La Solución</Eyebrow>
          <SectionH2 style={{ marginBottom: 24, fontSize: "clamp(1.8rem, 4vw, 2.4rem)" }}>
            Tu propia infraestructura de datos de clase mundial.
          </SectionH2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            color: `${C.text}70`,
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: 40,
          }}>
            Dejamos de jugar con Excels y empezamos a construir activos de datos 
            reales. Transformamos el caos manual en un motor de decisiones 100% automatizado.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              { title: "Dashboards en Tiempo Real", desc: "Visualiza tu rentabilidad sin esperar al lunes.", icon: <SiLooker size={20} /> },
              { title: "Tracking Unificado", desc: "Atribución perfecta en todas tus plataformas de publicidad.", icon: <SiGoogletagmanager size={20} /> },
              { title: "Escalabilidad Sin Fricción", desc: "Tu equipo enfocado en optimizar, no en limpiar filas.", icon: <SiGooglecloud size={20} /> },
            ].map((point, i) => (
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
