import { useState, useEffect } from "react";
import {
  Search,
  CheckCircle,
  BarChart2,
  Network,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Mail,
  ArrowRight,
  Menu,
  X,
  Clock,
  AlertCircle,
  Quote,
} from "lucide-react";
import {
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiLooker,
  SiGooglecloud,
  SiGooglegemini,
} from "react-icons/si";
import {
  TbApi,
} from "react-icons/tb";

// ─── Tokens ────────────────────────────────────────────────
const C = {
  bg: "#06140f",
  text: "#fff8eb",
  sage: "#acd8b9",
  orange: "#F5C78E",
  card: "rgba(255,248,235,0.03)",
  border: "rgba(255,248,235,0.08)",
};

// ─── Grid Background ──────────────────────────────────────
function GridBackground() {
  const gridColor = "rgba(255,248,235,0.15)";
  const svgGrid = `
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${gridColor}" stroke-width="1"/>
    </svg>
  `;
  const encodedGrid = btoa(svgGrid.trim());

  return (
    <>
      {/* 1. Solid Background Base */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: C.bg,
          zIndex: -2,
        }}
      />

      {/* 2. Grid & Glows Layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* The Grid itself with variable highlight mask */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml;base64,${encodedGrid}")`,
            backgroundSize: "40px 40px",
            maskImage: `
              linear-gradient(to bottom, 
                rgba(0,0,0,1) 0%, 
                rgba(0,0,0,1) 12%, 
                rgba(0,0,0,0.1) 22%, 
                rgba(0,0,0,0.1) 75%, 
                rgba(0,0,0,0.3) 85%, 
                rgba(0,0,0,0.4) 100%)
            `,
            WebkitMaskImage: `
              linear-gradient(to bottom, 
                rgba(0,0,0,1) 0%, 
                rgba(0,0,0,1) 12%, 
                rgba(0,0,0,0.1) 22%, 
                rgba(0,0,0,0.1) 75%, 
                rgba(0,0,0,0.3) 85%, 
                rgba(0,0,0,0.4) 100%)
            `,
          }}
        />

        {/* Glow Points */}
        {/* Top Hero Glow */}
        <div style={{
          position: "absolute",
          top: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          height: "40%",
          background: `radial-gradient(ellipse at center, ${C.sage}15 0%, transparent 70%)`,
          filter: "blur(100px)",
        }} />

        {/* Middle Glow */}
        <div style={{
          position: "absolute",
          top: "1200px",
          left: "-10%",
          width: "80%",
          height: "800px",
          background: `radial-gradient(circle, ${C.orange}08 0%, transparent 70%)`,
          filter: "blur(120px)",
        }} />
      </div>
    </>
  );
}

// ─── FAQ Data ─────────────────────────────────────────────
const faqs = [
  {
    q: "¿Puedo contratar el servicio para un solo cliente?",
    a: "Sí. El Plan Boutique parte desde 1 cliente activo. Puedes comenzar pequeño y escalar cuando crezcas.",
  },
  {
    q: "¿Cómo funciona el proceso de onboarding?",
    a: "Comenzamos con una auditoría técnica de tu stack actual. En 2 semanas tienes tu infraestructura operativa y tus primeros dashboards funcionando.",
  },
  {
    q: "¿Qué pasa si necesito pausar el servicio?",
    a: "Puedes pausar con 30 días de aviso. No hay contratos anuales obligatorios ni penalizaciones.",
  },
  {
    q: "Trabajan con plataformas además de Google?",
    a: "Sí. Integramos Meta Ads, TikTok Ads, LinkedIn, HubSpot, Salesforce y cualquier fuente vía API o conector nativo.",
  },
  {
    q: "¿Qué tan rápido ven resultados mis clientes?",
    a: "Los primeros dashboards en tiempo real están listos en los primeros 10 días hábiles tras el setup.",
  },
  {
    q: "¿Los talleres son en vivo o grabados?",
    a: "Todos los talleres son en vivo vía Google Meet. Se entregan grabaciones para que tu equipo pueda repasar el contenido.",
  },
  {
    q: "¿Pueden construir mi equipo de datos interno?",
    a: "Sí. Además del servicio gestionado, ofrecemos consultoría para que tu agencia desarrolle capacidades internas de datos.",
  },
  {
    q: "¿Tienen soporte técnico continuo?",
    a: "Todos los planes incluyen soporte continuo vía Slack con tiempos de respuesta garantizados en días hábiles.",
  },
];

// ─── Pricing tiers ────────────────────────────────────────
function getTier(clients: number) {
  if (clients <= 5)
    return { name: "Plan Boutique", price: "$400 USD", label: "/ mes" };
  if (clients <= 15)
    return { name: "Plan Growth", price: "$900 USD", label: "/ mes" };
  return { name: "Plan Scale", price: "$1,800 USD", label: "/ mes" };
}

// ─── Process Steps ────────────────────────────────────────
const steps = [
  {
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Auditoría de datos",
    desc: "Revisamos que las fuentes de información se alimenten correctamente. Aseguramos que tu web tenga el tracking saneado y que las plataformas reciban la data exacta.",
  },
  {
    icon: <CheckCircle size={22} strokeWidth={1.5} />,
    title: "Implementación e integración",
    desc: "Ejecutamos los cambios técnicos para el tracking y creamos las conexiones con todas las fuentes de datos correspondientes a tu agencia.",
  },
  {
    icon: <BarChart2 size={22} strokeWidth={1.5} />,
    title: "Dashboards y reportes",
    desc: "Diseñamos reportes a medida del cliente final. Pueden usarse para presentar resultados o como paneles operativos en tiempo real.",
  },
  {
    icon: <Network size={22} strokeWidth={1.5} />,
    title: "Mantenimiento continuo",
    desc: "Mantenemos los conectores funcionando, creamos reportes para tus clientes nuevos y llevamos este estándar a cada cuenta.",
  },
];

// ─── Tool logos (text-based) ───────────────────────────────


// ─── Agency logos (text-based placeholders) ────────────────
const agencyLogos = [
  "PixelAgency",
  "DataWave",
  "ScaleLabs",
  "GrowthCo",
  "MediaCore",
  "PerfectClick",
  "Andes Digital",
  "TurboPerfm",
];

// ─── FAQ Accordion ─────────────────────────────────────────
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left"
      style={{
        background: open ? C.card : "transparent",
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        padding: "20px 24px",
        cursor: "pointer",
        transition: "all 0.2s",
        marginBottom: 8,
        display: "block",
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          style={{
            fontFamily: "Lexend, sans-serif",
            color: C.text,
            fontSize: "0.95rem",
          }}
        >
          {q}
        </span>
        {open ? (
          <ChevronUp size={16} color={C.sage} style={{ flexShrink: 0 }} />
        ) : (
          <ChevronDown
            size={16}
            color={`${C.text}60`}
            style={{ flexShrink: 0 }}
          />
        )}
      </div>
      {open && (
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: `${C.text}80`,
            fontSize: "0.875rem",
            marginTop: 12,
            lineHeight: 1.7,
          }}
        >
          {a}
        </p>
      )}
    </button>
  );
}

// ─── Eyebrow label ─────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "0.7rem",
        letterSpacing: "0.15em",
        color: C.sage,
        textTransform: "uppercase",
        marginBottom: 12,
        fontWeight: 500,
      }}
    >
      {children}
    </p>
  );
}

// ─── Section heading ──────────────────// ─── Testimonial (Editorial Style) ────────────────────────
function Testimonial({ quote, name }: { quote: string; name: string }) {
  return (
    <div
      style={{
        padding: "0 0 48px 0",
        position: "relative",
      }}
    >
      <Quote
        size={42}
        color={C.sage}
        style={{
          opacity: 0.1,
          position: "absolute",
          top: -10,
          left: -10,
        }}
        fill={C.sage}
      />
      <p
        style={{
          fontFamily: "Lexend, sans-serif",
          color: C.text,
          fontSize: "1.15rem",
          lineHeight: 1.6,
          margin: "0 0 16px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        "{quote}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 24, height: 1, background: `${C.sage}40` }} />
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            color: `${C.text}50`,
            fontSize: "0.85rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

// ─── Section heading ───────────────────────────────────────
function SectionH2({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      style={{
        fontFamily: "Lexend, sans-serif",
        color: C.text,
        fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
        fontWeight: 500,
        lineHeight: 1.25,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

// ─── Card container ────────────────────────────────────────
function Card({
  children,
  style,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: 20,
        padding: "32px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Marquee helper ────────────────────────────────────────
function Marquee({ items, maxWidth }: { items: string[]; maxWidth?: number }) {
  const doubled = [...items, ...items, ...items, ...items]; // More buffers
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        maxWidth: maxWidth || "None",
        margin: "0 auto",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 64,
          animation: "marquee 40s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "Lexend, sans-serif",
              color: `${C.text}20`,
              fontSize: "0.8rem",
              whiteSpace: "nowrap",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main App ──────────────────────────────────────────────
export default function App() {
  const [clients, setClients] = useState(10);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tier = getTier(clients);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionStyle: React.CSSProperties = {
    maxWidth: 900,
    margin: "0 auto",
    padding: "96px 24px",
  };

  return (
    <div style={{ minHeight: "100vh", color: C.text, position: "relative", overflowX: "clip" }}>
      <GridBackground />
      {/* Global styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeTools {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
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
        input[type="range"]::-webkit-slider-thumb:hover {
          box-shadow: 0 0 20px rgba(245,199,142,0.6);
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #acd8b9;
          box-shadow: 0 0 12px rgba(172,216,185,0.5);
          cursor: pointer;
          border: none;
        }
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s",
        }}
      >
        {/* Pill navbar */}
        <div
          className="hidden md:flex"
          style={{
            width: "100%",
            maxWidth: 860,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: scrolled
              ? "rgba(6,20,15,0.85)"
              : "rgba(255,248,235,0.05)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${C.border}`,
            borderRadius: 99,
            padding: "0 8px 0 20px",
            transition: "all 0.3s",
          }}
        >
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Alex Spelucin"
            style={{
              height: 28,
              width: "auto",
              flexShrink: 0
            }}
          />

          {/* Nav links */}
          <nav style={{ display: "flex", gap: 4 }}>
            {[
              ["Proceso", "proceso"],
              ["Suscripción", "paquetes"],
              ["Sobre Mí", "bio"],
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

          {/* CTA */}
          <button
            onClick={() => scrollTo("contacto")}
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
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Contacto
          </button>
        </div>

        {/* Mobile row */}
        <div
          className="flex md:hidden"
          style={{
            width: "100%",
            height: 52,
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(255,248,235,0.05)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${C.border}`,
            borderRadius: 99,
            padding: "0 8px 0 20px",
          }}
        >
          <span
            style={{
              fontFamily: "Lexend, sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              color: C.text,
            }}
          >
            ALEX SPELUCIN.
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: C.text,
              padding: "8px 12px",
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            background: `rgba(6,20,15,0.97)`,
            backdropFilter: "blur(16px)",
            zIndex: 49,
            padding: "24px",
            borderBottom: `1px solid ${C.border}`,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {[
            ["Proceso", "proceso"],
            ["Suscripción", "paquetes"],
            ["Sobre Mí", "bio"],
            ["FAQs", "faq"],
            ["Contacto", "contacto"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                color: C.text,
                textAlign: "left",
                padding: "4px 0",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* ── HERO ───────────────────────────────────────── */}
      <section
        style={{
          ...sectionStyle,
          paddingTop: 160,
          paddingBottom: 80,
          textAlign: "center",
          maxWidth: 800,
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
            maxWidth: 580,
            margin: "0 auto 40px auto",
          }}
        >
          Automatizamos tus reportes, saneamos tu tracking y demostramos el ROI
          real a tus clientes. Eliminamos el trabajo manual para que tu equipo
          se enfoque exclusivamente en optimizar campañas.
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
            onClick={() => scrollTo("contacto")}
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
            Separa una Cita
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
            Calcula tu Inversión
          </button>
        </div>
      </section>

      {/* ── SOCIAL PROOF ───────────────────────────────── */}
      <section style={{ padding: "60px 24px 100px", overflow: "hidden" }}>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            color: `${C.text}30`,
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          Agencias que escalan con nosotros
        </p>
        <Marquee items={agencyLogos} maxWidth={900} />
      </section>

      {/* ── EL PROBLEMA (AUDIT CONSOLE) ───────────────── */}
      <section style={{ ...sectionStyle, paddingTop: 40 }}>
        <div style={{ position: "relative", width: "100%" }}>
          {/* Subtle background glow */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "60%",
            background: `radial-gradient(circle, ${C.sage}20 0%, transparent 70%)`,
            filter: "blur(60px)",
            zIndex: -1,
          }} />

          <div
            style={{
              padding: "64px 0",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <Eyebrow>Status Quo</Eyebrow>
            <SectionH2 style={{ marginBottom: 64, maxWidth: 650, margin: "0 auto 64px" }}>
              Tu equipo pierde horas en Excel y tus clientes dudan de los resultados.
            </SectionH2>

            <Card style={{ padding: 0, overflow: "hidden", textAlign: "left", background: "rgba(255,248,235,0.01)" }}>
              {[
                { 
                  icon: <Clock size={28} strokeWidth={1.5} />, 
                  title: "Horas perdidas en Excel", 
                  desc: "Tu equipo pasa más tiempo limpiando celdas que analizando campañas. El error humano es inevitable.", 
                  impact: "Pérdida de Margen",
                  color: C.sage
                },
                { 
                  icon: <AlertCircle size={28} strokeWidth={1.5} />, 
                  title: "Reportes ignorados", 
                  desc: "Clientes que no entienden el impacto de tus campañas. Sin claridad, es imposible escalar.", 
                  impact: "Crecimiento Frenado",
                  color: C.orange
                },
                { 
                  icon: <Network size={28} strokeWidth={1.5} />, 
                  title: "Tracking descalibrado", 
                  desc: "Conexiones que fallan, eventos mal configurados y pérdida de atribución real.", 
                  impact: "Inversión Ineficiente",
                  color: C.sage
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr 200px",
                    gap: 32,
                    alignItems: "center",
                    padding: "40px 48px",
                    borderBottom: i === 2 ? "none" : `1px solid ${C.border}`,
                    transition: "background 0.2s ease",
                  }}
                  className="flex flex-col md:grid"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,248,235,0.02)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "transparent";
                  }}
                >
                  {/* Column 1: Icon */}
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: `${item.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                  }}>
                    {item.icon}
                  </div>

                  {/* Column 2: Context */}
                  <div>
                    <h3 style={{
                      fontFamily: "Lexend, sans-serif",
                      fontSize: "1.2rem",
                      color: C.text,
                      marginBottom: 8,
                      fontWeight: 500,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontFamily: "Inter, sans-serif",
                      color: `${C.text}60`,
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      margin: 0,
                      maxWidth: 480,
                    }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Column 3: Impact */}
                  <div style={{ textAlign: "right" }} className="md:text-right">
                    <span style={{
                      fontFamily: "Lexend, sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: item.impact.includes("In") || item.impact.includes("Fre") ? C.orange : C.sage,
                      letterSpacing: "0.02em",
                      padding: "8px 16px",
                      background: "rgba(255,248,235,0.03)",
                      borderRadius: 8,
                      border: `1px solid ${C.border}`,
                    }}>
                      {item.impact}
                    </span>
                  </div>
                </div>
              ))}
            </Card>

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

      {/* ── PROCESO ────────────────────────────────────── */}
      <section id="proceso" style={sectionStyle}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <Eyebrow>Nuestro proceso</Eyebrow>
          <SectionH2 style={{ marginBottom: 12 }}>¿Cómo funciona?</SectionH2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: `${C.text}60`,
              fontSize: "0.9rem",
              lineHeight: 1.7,
              maxWidth: 460,
            }}
          >
            Un flujo de 4 pasos diseñado para integrar tu infraestructura de datos
            sin interrumpir tus operaciones.
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

                {/* Content card — back with individual items */}
                <Card
                  style={{
                    margin: "12px 0 12px 20px",
                    background: "rgba(255,248,235,0.02)",
                    border: `1px solid ${C.border}`,
                    borderRadius: 20,
                    padding: "24px 28px 24px 28px",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "0 24px",
                    alignItems: "start",
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
                  <div>
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
                        maxWidth: 560,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  <span
                    style={{
                      fontFamily: "Lexend, sans-serif",
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: `${C.text}06`,
                      lineHeight: 1,
                      userSelect: "none",
                      flexShrink: 0,
                      alignSelf: "center",
                    }}
                  >
                    0{i + 1}
                  </span>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERRAMIENTAS ──────────────────────────────── */}
      <section style={{ ...sectionStyle, paddingTop: 40, textAlign: "center" }}>
        <Eyebrow>Tecnología de última generación</Eyebrow>
        <SectionH2 style={{ marginBottom: 16 }}>Nuestras herramientas</SectionH2>
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
          No improvisamos. Utilizamos el stack líder de la industria para garantizar
          que tu infraestructura sea escalable, segura y 100% automatizada.
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 16,
          maxWidth: 800,
          margin: "0 auto",
        }}>
          {[
            { name: "Looker Studio", icon: <SiLooker size={16} /> },
            { name: "Google Analytics 4", icon: <SiGoogleanalytics size={16} /> },
            { name: "Google Tag Manager", icon: <SiGoogletagmanager size={16} /> },
            { name: "Apps Script", icon: <SiGooglecloud size={16} /> },
            { name: "APIs y Webhooks", icon: <TbApi size={20} /> },
            { name: "Gemini", icon: <SiGooglegemini size={16} /> },
          ].map((tool, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,248,235,0.01)", // Extremely subtle
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

      {/* ── TESTIMONIOS ─────────────────────────────── */}
      <section style={{ ...sectionStyle, paddingBottom: 0 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Eyebrow>Resultados comprobados</Eyebrow>
          <SectionH2>Lo que dicen nuestros partners.</SectionH2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          <Testimonial
            quote="Pasamos de reportar manualmente cada semana a tener dashboards en tiempo real. Mi equipo ahorra horas de trabajo en minutos, no en días."
            name="Director de Operaciones, Agencia de Performance"
          />
          <Testimonial
            quote="Nos ayudaron a integrar múltiples fuentes de datos en un solo lugar. La claridad que tenemos ahora para reportar a nuestros clientes es de otro nivel."
            name="Head of Data, Agencia B2B"
          />
        </div>
      </section>

      {/* ── SOBRE MÍ (OPEN EDITORIAL) ────────────────── */}
      <section id="bio" style={{ ...sectionStyle, paddingTop: 120 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 64,
            alignItems: "center",
          }}
          className="flex flex-col md:grid"
        >
          {/* Photo Column — Large & Atmospheric */}
          <div style={{ position: "relative" }}>
            {/* Soft decorative glow behind photo */}
            <div style={{
              position: "absolute",
              inset: "-20px",
              background: `radial-gradient(circle, ${C.sage}15 0%, transparent 70%)`,
              filter: "blur(40px)",
              zIndex: -1,
            }} />

            <div style={{
              borderRadius: 48,
              overflow: "hidden",
              boxShadow: `0 20px 40px -10px rgba(0,0,0,0.4)`,
              border: `1px solid ${C.border}`,
            }}>
              <img
                src="/pfp.jpg"
                alt="Alex Spelucin"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  display: "block",
                  filter: "contrast(1.02) brightness(1.05)",
                }}
              />
            </div>
          </div>

          {/* Content Column — High-end Typography */}
          <div style={{ padding: "12px 0" }}>
            <Eyebrow>Tu próximo Data Lead</Eyebrow>
            <h3
              style={{
                fontFamily: "Lexend, sans-serif",
                color: C.text,
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 500,
                marginBottom: 24,
                lineHeight: 1.1,
              }}
            >
              Alex Spelucin.
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: `${C.text}70`,
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              Llevo años construyendo departamentos de datos para agencias en LATAM.
              Mi objetivo no es venderte un software más, sino actuar como tu socio
              estratégico <em style={{ color: C.sage }}>in-house</em> para que tu agencia
              escale con claridad y sin depender de procesos manuales.
            </p>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginTop: 40,
            }}>
              <a
                href="#"
                style={{
                  color: C.text,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: "0.85rem",
                  fontFamily: "Lexend, sans-serif",
                  textDecoration: "none",
                  transition: "opacity 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${C.text}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Linkedin size={18} />
                </div>
                LinkedIn
              </a>
              <a
                href="mailto:alex@spelucin.com"
                style={{
                  color: C.text,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: "0.85rem",
                  fontFamily: "Lexend, sans-serif",
                  textDecoration: "none",
                  transition: "opacity 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${C.text}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={18} />
                </div>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALCULADORA ────────────────────────────────── */}
      <section id="paquetes" style={sectionStyle}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Eyebrow>Modelo de suscripción B2B</Eyebrow>
          <SectionH2>
            Precios que escalan junto con tu cartera de clientes.
          </SectionH2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: `${C.text}60`,
              fontSize: "0.9rem",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "16px auto 0",
            }}
          >
            Un modelo predecible y transparente. Pagas un setup inicial para
            ordenar tu infraestructura y una tarifa mensual plana basada en la
            cantidad de clientes activos que gestionamos.
          </p>
        </div>

        <Card style={{ padding: "48px 40px", textAlign: "left" }}>
          {/* Slider Row */}
          <div style={{ marginBottom: 48 }}>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: `${C.text}70`,
                fontSize: "0.875rem",
                marginBottom: 16,
              }}
            >
              ¿Cuántos clientes activos gestionamos?
            </p>
            <div style={{ position: "relative", marginBottom: 12 }}>
              <input
                type="range"
                min={5}
                max={31}
                value={clients}
                onChange={(e) => setClients(Number(e.target.value))}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: `${C.text}40`,
                fontSize: "0.75rem",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span>5 clientes</span>
              <span style={{ color: C.sage, fontWeight: 600, fontSize: "0.85rem" }}>
                {clients >= 31 ? "30+" : clients} clientes activos
              </span>
              <span>30+ clientes</span>
            </div>
          </div>

          {/* Pricing Console Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 40,
              alignItems: "center",
              padding: "32px 0",
              borderTop: `1px solid ${C.border}`,
              borderBottom: `1px solid ${C.border}`,
              marginBottom: 32,
            }}
            className="flex flex-col md:grid"
          >
            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.72rem",
                  color: C.sage,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Inversión Mensual ({tier.name})
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <h3
                  style={{
                    fontFamily: "Lexend, sans-serif",
                    color: C.text,
                    fontSize: "3.5rem",
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </h3>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: `${C.text}40`,
                    fontSize: "1.1rem",
                  }}
                >
                  {tier.label}
                </span>
              </div>
            </div>

            <div
              style={{
                padding: "20px 24px",
                background: "rgba(255,248,235,0.03)",
                borderRadius: 16,
                border: `1px solid ${C.border}`,
                minWidth: 200,
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: "0.65rem", color: `${C.text}40`, textTransform: "uppercase", marginBottom: 4 }}>Setup Inicial</p>
                <p style={{ fontSize: "1.2rem", color: C.orange, fontFamily: "Lexend, sans-serif", fontWeight: 500 }}>$500 USD</p>
              </div>
              <p style={{ fontSize: "0.78rem", color: `${C.text}60`, lineHeight: 1.5, fontFamily: "Inter, sans-serif" }}>
                Setup total de tu agencia, plantillas y auditoría 1:1
              </p>
            </div>
          </div>

          {/* Comparison Footer */}
          <div
            style={{
              background: `rgba(245,199,142,0.04)`,
              borderRadius: 14,
              padding: "20px 24px",
              display: "flex",
              gap: 16,
              alignItems: "center",
            }}
          >
            <div style={{ color: C.orange, flexShrink: 0 }}>
              <AlertCircle size={20} strokeWidth={1.5} />
            </div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: `${C.text}60`,
                fontSize: "0.85rem",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Un Analista Junior in-house te cuesta un promedio de{" "}
              <strong style={{ color: C.orange }}>$1,200 USD/mes</strong>. Nuestro modelo
              te entrega infraestructura Senior por una fracción del costo y sin riesgo de rotación.
            </p>
          </div>
        </Card>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section id="faq" style={sectionStyle}>
        <Eyebrow>Preguntas frecuentes</Eyebrow>
        <SectionH2 style={{ marginBottom: 40 }}>¿Tienes dudas?</SectionH2>
        <div>
          {faqs.map((faq, i) => (
            <FAQ key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ── CONTACTO / CTA ─────────────────────────────── */}
      <section id="contacto" style={{ ...sectionStyle, textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <Eyebrow>¿Listo para escalar?</Eyebrow>
          <SectionH2 style={{ marginBottom: 16 }}>
            Escala tu agencia sin contratar más analistas.
          </SectionH2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: `${C.text}60`,
              fontSize: "0.9rem",
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            Agendamos 20 minutos para revisar tu stack actual y activar tu
            Setup.
          </p>

          {/* TidyCal embed placeholder */}
          {/* TidyCal embed container — in a Card as requested */}
          <Card
            style={{
              padding: "48px 32px",
              marginBottom: 24,
              textAlign: "center",
              background: "rgba(255,248,235,0.02)",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: `rgba(172,216,185,0.1)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <span style={{ fontSize: "1.4rem" }}>📅</span>
            </div>
            <p
              style={{
                fontFamily: "Lexend, sans-serif",
                color: C.text,
                fontSize: "1rem",
                fontWeight: 500,
                marginBottom: 8,
              }}
            >
              Agenda tu sesión de diagnóstico gratuito
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                color: `${C.text}50`,
                fontSize: "0.82rem",
                marginBottom: 28,
                lineHeight: 1.6,
              }}
            >
              Aquí va el embed de TidyCal. Reemplaza la URL de data-path con tu
              enlace de TidyCal.
            </p>
            {/* TidyCal embed */}
            <div
              className="tidycal-embed"
              data-path="tu-usuario/sesion-diagnostico"
              style={{ minHeight: 60 }}
            />
            <button
              style={{
                background: C.sage,
                color: C.bg,
                border: "none",
                borderRadius: 99,
                padding: "13px 32px",
                fontFamily: "Lexend, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "transform 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={() =>
                window.open("https://tidycal.com", "_blank")
              }
            >
              Reservar sesión gratuita
              <ArrowRight size={15} />
            </button>
          </Card>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: `${C.text}40`,
              fontSize: "0.78rem",
            }}
          >
            Sin compromisos. Sin contratos anuales.
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${C.border}`,
          padding: "32px 24px",
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <img
          src="/logo.png"
          alt="Alex Spelucin"
          style={{
            height: 24,
            width: "auto",
            opacity: 0.4,
            filter: "grayscale(100%) brightness(1.5)"
          }}
        />
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.78rem",
            color: `${C.text}40`,
            margin: 0,
            textAlign: "center",
          }}
        >
          © 2026 Data Infrastructure B2B. Todos los derechos reservados.
        </p>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: `${C.text}50`, transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.sage)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = `${C.text}50`)
            }
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:alex@spelucin.com"
            style={{ color: `${C.text}50`, transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.sage)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = `${C.text}50`)
            }
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>

      {/* TidyCal script */}
      <script
        src="https://assets.tidycal.com/js/embed.js"
        async
      />
    </div>
  );
}