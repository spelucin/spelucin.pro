import React from "react";
import { ArrowRight } from "lucide-react";
import { C } from "../constants";
import { Eyebrow } from "./CommonComponents";

interface HeroProps {
  setShowBooking: (show: boolean) => void;
  scrollTo: (id: string) => void;
  sectionStyle: React.CSSProperties;
}

export function Hero({ setShowBooking, scrollTo, sectionStyle }: HeroProps) {
  return (
    <section
      style={{
        ...sectionStyle,
        paddingTop: 240,
        paddingBottom: 80,
        textAlign: "center",
        maxWidth: 900,
        position: "relative",
      }}
    >
      <Eyebrow>Convierte tus datos en rentabilidad</Eyebrow>
      <h1
        style={{
          fontFamily: "Lexend, sans-serif",
          fontSize: "clamp(2.4rem, 6vw, 4rem)",
          fontWeight: 500,
          color: C.text,
          lineHeight: 1.15,
          margin: "0 0 24px 0",
        }}
      >
        El departamento de datos que tu agencia necesita para escalar.
      </h1>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
          color: `${C.text}70`,
          lineHeight: 1.8,
          maxWidth: 640,
          margin: "0 auto 40px auto",
        }}
      >
        Automatizamos tus reportes, saneamos tu tracking publicitario y
        demostramos el ROI real a tus clientes mediante agentes IA e
        integraciones directas.
      </p>
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setShowBooking(true)}
          style={{
            background: C.sage,
            color: C.bg,
            border: "none",
            borderRadius: 99,
            padding: "13px 28px",
            fontFamily: "Lexend, sans-serif",
            fontSize: "0.9rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "transform 0.2s",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.04)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          Agendar Llamada
          <ArrowRight size={15} />
        </button>
        <button
          onClick={() => scrollTo("paquetes")}
          style={{
            background: "transparent",
            color: C.orange,
            border: `1px solid ${C.orange}60`,
            borderRadius: 99,
            padding: "13px 28px",
            fontFamily: "Lexend, sans-serif",
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${C.orange}12`;
            e.currentTarget.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Conocer Planes
        </button>
      </div>
    </section>
  );
}
