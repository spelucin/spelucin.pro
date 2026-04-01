import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Components
import { GridBackground } from "./components/GridBackground";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ProcessSection } from "./components/ProcessSection";
import { ToolsSection } from "./components/ToolsSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { BioSection } from "./components/BioSection";
import { PricingConsole } from "./components/PricingConsole";
import { FAQ, Testimonial, SectionH2, Eyebrow } from "./components/CommonComponents";
import { BannerCTA } from "./components/BannerCTA";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { LanguageSelector } from "./components/LanguageSelector";

// Constants
import { C, agencyLogos } from "./constants";

export default function App() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [clients, setClients] = useState(10);
  const [scrolled, setScrolled] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    // Sync language with URL
    if (location.pathname.startsWith("/en") && i18n.language !== "en") {
      i18n.changeLanguage("en");
    } else if (!location.pathname.startsWith("/en") && i18n.language !== "es") {
      i18n.changeLanguage("es");
    }

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
  }, [location.pathname, i18n]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.history.pushState(null, '', `#${id}`);
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const sectionStyle: React.CSSProperties = {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "96px 24px",
    background: "transparent", // Ensure transparency
  };

  return (
    <HelmetProvider>
      <div style={{ background: "transparent", color: C.text, minHeight: "100vh", position: "relative" }}>
        <Helmet>
          <title>{t('seo.title')}</title>
          <meta name="description" content={t('seo.description')} />
          <html lang={i18n.language} />
          <link rel="canonical" href={i18n.language.startsWith('en') ? "https://spelucin.pro/en" : "https://spelucin.pro/"} />
          <link rel="alternate" href="https://spelucin.pro/" hrefLang="es" />
          <link rel="alternate" href="https://spelucin.pro/en" hrefLang="en" />
          <link rel="alternate" href="https://spelucin.pro/" hrefLang="x-default" />
        </Helmet>
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
              maxWidth: 910,
              height: 52,
              background: scrolled ? "rgba(6,20,15,0.85)" : "rgba(255,248,235,0.05)",
              backdropFilter: "blur(16px)",
              border: `1px solid ${C.border}`,
              borderRadius: 99,
              padding: "0 8px 0 20px",
              transition: "all 0.3s",
              gap: 16,
            }}
          >
            <img src="/img/logo.png" alt="Alex Spelucin" style={{ height: 28, width: "auto", flexShrink: 0 }} />
  
            <nav style={{ display: "flex", gap: 4 }}>
              {[
                [t('nav.process'), "proceso"],
                [t('nav.cases'), "casos"],
                [t('nav.benefits'), "solucion"],
                [t('nav.pricing'), "paquetes"],
                [t('nav.faqs'), "faq"],
              ].map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "none",
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
                </a>
              ))}
            </nav>
  
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <LanguageSelector />
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
                {t('nav.bookCall')}
              </button>
            </div>
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
            
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <LanguageSelector />
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
                {t('nav.book')}
              </button>
            </div>
          </div>
        </header>



      {/* Main Content */}
      <Hero setShowBooking={setShowBooking} scrollTo={scrollTo} sectionStyle={sectionStyle} />
      
      <section style={{ padding: "60px 24px 100px", overflow: "hidden" }}>
        <p style={{
          fontFamily: "Inter, sans-serif", fontSize: "0.68rem", letterSpacing: "0.14em",
          color: `${C.text}30`, textTransform: "uppercase", textAlign: "center", marginBottom: 32,
        }}>
          {t('marquee.title')}
        </p>
        <Marquee items={agencyLogos} maxWidth={1100} />
      </section>

      <ProblemSection sectionStyle={sectionStyle} />
      <SolutionSection sectionStyle={sectionStyle} />
      <ProcessSection sectionStyle={sectionStyle} />
      <ToolsSection sectionStyle={sectionStyle} />
      <PortfolioSection sectionStyle={sectionStyle} />

      <section style={{ ...sectionStyle, paddingBottom: 0 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Eyebrow>{t('pricing.eyebrow')}</Eyebrow>
          <SectionH2>{t('solution.title')}</SectionH2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, alignItems: "stretch" }}>
          <Testimonial
            quote={t('testimonials.meier.quote')}
            name={t('testimonials.meier.role')}
            style={{ height: "100%" }}
          />
          <Testimonial
            quote={t('testimonials.vergara.quote')}
            name={t('testimonials.vergara.role')}
            style={{ height: "100%" }}
          />
        </div>
      </section>

      <BioSection sectionStyle={sectionStyle} />
      <PricingConsole clients={clients} setClients={setClients} sectionStyle={sectionStyle} />

      <section id="faq" style={{ ...sectionStyle, textAlign: "center" }}>
        <Eyebrow>{t('faq.eyebrow')}</Eyebrow>
        <SectionH2 style={{ marginBottom: 40 }}>{t('faq.title')}</SectionH2>
        <div>
          {(() => {
            const items = t('faq.items', { returnObjects: true });
            return Array.isArray(items) ? items.map((faq: any, i: number) => (
              <FAQ key={i} q={faq.q} a={faq.a} />
            )) : null;
          })()}
        </div>
      </section>

      <BannerCTA setShowBooking={setShowBooking} sectionStyle={sectionStyle} />
      <Footer />
      
      <BookingModal showBooking={showBooking} setShowBooking={setShowBooking} />
    </div>
    </HelmetProvider>

  );
}