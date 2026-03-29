import React, { useState, useEffect } from "react";

// Components
import { GridBackground } from "./components/GridBackground";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ProcessSection } from "./components/ProcessSection";
import { ToolsSection } from "./components/ToolsSection";
import { BioSection } from "./components/BioSection";
import { PricingConsole } from "./components/PricingConsole";
import { FAQ, Testimonial, SectionH2, Eyebrow } from "./components/CommonComponents";
import { BannerCTA } from "./components/BannerCTA";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";

// Constants
import { C, faqs, agencyLogos } from "./constants";

export default function App() {
  const [clients, setClients] = useState(10);
  const [scrolled, setScrolled] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);

    // Initialize Cal.com
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          api.q = api.q || [];
          const namespace = ar[1];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionStyle: React.CSSProperties = {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "96px 24px",
  };

  return (
    <div style={{ minHeight: "100vh", color: C.text, position: "relative", overflowX: "clip" }}>
      <GridBackground />
      
      {/* Global styles */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeTools { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        * { box-sizing: border-box; }
        html { 
          scroll-behavior: smooth; 
          scrollbar-gutter: stable;
        }
        body {
          margin: 0;
          overflow-x: hidden;
        }
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 3px;
          background: rgba(172,216,185,0.2);
          border-radius: 99px;
          outline: none;
          cursor: pointer;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #acd8b9;
          box-shadow: 0 0 12px rgba(172,216,185,0.5);
          cursor: pointer;
          transition: box-shadow 0.2s;
        }
        input[type="range"]::-webkit-slider-thumb:hover { box-shadow: 0 0 20px rgba(245,199,142,0.6); }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #acd8b9;
          box-shadow: 0 0 12px rgba(172,216,185,0.5);
          cursor: pointer;
          border: none;
        }
        @media (min-width: 768px) { .custom-grid-3 { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 767px) { .custom-grid-3 { grid-template-columns: 1fr !important; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>

      {/* ── HEADER ─────────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "12px 24px",
          transition: "all 0.3s",
        }}
        className="flex items-center justify-center"
      >
        {/* Pill navbar */}
        <div
          className="hidden md:flex items-center justify-between"
          style={{
            width: "100%",
            maxWidth: 860,
            height: 52,
            background: scrolled ? "rgba(6,20,15,0.85)" : "rgba(255,248,235,0.05)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${C.border}`,
            borderRadius: 99,
            padding: "0 8px 0 20px",
            transition: "all 0.3s",
          }}
        >
          <img src="/img/logo.png" alt="Alex Spelucin" style={{ height: 28, width: "auto", flexShrink: 0 }} />

          <nav style={{ display: "flex", gap: 4 }}>
            {[
              ["Proceso", "proceso"],
              ["Beneficios", "solucion"],
              ["Precios", "paquetes"],
              ["FAQs", "faq"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.82rem",
                  color: `${C.text}70`,
                  transition: "all 0.2s",
                  padding: "7px 16px",
                  borderRadius: 99,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.text;
                  e.currentTarget.style.background = "rgba(255,248,235,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = `${C.text}70`;
                  e.currentTarget.style.background = "none";
                }}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setShowBooking(true)}
            style={{
              background: C.sage,
              color: C.bg,
              border: "none",
              borderRadius: 99,
              padding: "9px 20px",
              fontFamily: "Lexend, sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "transform 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Agendar Llamada
          </button>
        </div>

        {/* Mobile row */}
        <div
          className="flex md:hidden items-center justify-between"
          style={{
            width: "100%",
            height: 52,
            background: "rgba(255,248,235,0.05)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${C.border}`,
            borderRadius: 99,
            padding: "0 8px 0 20px",
          }}
        >
          <img src="/img/logo.png" alt="Alex Spelucin" style={{ height: 20, width: "auto", flexShrink: 0 }} />
          
          <button
            onClick={() => setShowBooking(true)}
            style={{
              background: C.sage,
              color: C.bg,
              border: "none",
              borderRadius: 99,
              padding: "7px 16px",
              fontFamily: "Lexend, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Agendar
          </button>
        </div>
      </header>


      {/* Main Content */}
      <Hero setShowBooking={setShowBooking} scrollTo={scrollTo} sectionStyle={sectionStyle} />
      
      <section style={{ padding: "60px 24px 100px", overflow: "hidden" }}>
        <p style={{
          fontFamily: "Inter, sans-serif", fontSize: "0.68rem", letterSpacing: "0.14em",
          color: `${C.text}30`, textTransform: "uppercase", textAlign: "center", marginBottom: 32,
        }}>
          AGENCIAS QUE YA ESCALAN CON NOSOTROS
        </p>
        <Marquee items={agencyLogos} maxWidth={1100} />
      </section>

      <ProblemSection sectionStyle={sectionStyle} />
      <SolutionSection sectionStyle={sectionStyle} />
      <ProcessSection sectionStyle={sectionStyle} />
      <ToolsSection sectionStyle={sectionStyle} />

      <section style={{ ...sectionStyle, paddingBottom: 0 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Eyebrow>RESULTADOS</Eyebrow>
          <SectionH2>Lo que dicen nuestros partners.</SectionH2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, alignItems: "stretch" }}>
          <Testimonial
            quote="Creó nuestro dashboard de analytics asegurándose de que todo estuviera estructurado y funcionando a la perfección. Resolvió problemas de tracking que no teníamos mapeados y dejó todas las conexiones listas. ¡Totalmente recomendado!"
            name="Milagros Meier, Growth Lead en Laboratoria"
            style={{ height: "100%" }}
          />
          <Testimonial
            quote="Su extenso conocimiento técnico logra intersecciones fascinantes entre SEO y tecnología. Automatizó nuestra reportería manteniendo siempre el foco en el crecimiento del negocio y los objetivos del cliente."
            name="Darío Vergara, SEO Lead Attach Media"
            style={{ height: "100%" }}
          />
        </div>
      </section>

      <BioSection sectionStyle={sectionStyle} />
      <PricingConsole clients={clients} setClients={setClients} sectionStyle={sectionStyle} />

      <section id="faq" style={{ ...sectionStyle, textAlign: "center" }}>
        <Eyebrow>RESOLVAMOS DUDAS</Eyebrow>
        <SectionH2 style={{ marginBottom: 40 }}>¿Tienes dudas?</SectionH2>
        <div>
          {faqs.map((faq, i) => (
            <FAQ key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <BannerCTA setShowBooking={setShowBooking} sectionStyle={sectionStyle} />
      <Footer />
      
      <BookingModal showBooking={showBooking} setShowBooking={setShowBooking} />
    </div>
  );
}