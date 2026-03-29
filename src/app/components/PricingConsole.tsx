import React from "react";
import { AlertCircle, BarChart3, Clock, Database, Slack } from "lucide-react";
import { C, getTier } from "../constants";
import { Card, Eyebrow, SectionH2 } from "./CommonComponents";

interface PricingConsoleProps {
  clients: number;
  setClients: (clients: number) => void;
  sectionStyle: React.CSSProperties;
}

export function PricingConsole({ clients, setClients, sectionStyle }: PricingConsoleProps) {
  const tier = getTier(clients);

  return (
    <section id="paquetes" style={sectionStyle}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <Eyebrow>Modelo de suscripción B2B</Eyebrow>
        <SectionH2>
          Precios que escalan junto con tu cartera de clientes.
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
          Un modelo predecible de analítica fraccionada. Sin contratos a largo plazo, 
          diseñado para agencias que necesitan infraestructura de datos sin el costo de un equipo in-house.
        </p>
      </div>

      <Card style={{ 
        padding: "0", 
        textAlign: "left", 
        background: "rgba(6,20,15,0.4)", 
        overflow: "hidden",
        border: `1px solid ${C.border}`,
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr" }} className="flex flex-col md:grid">
          {/* Left: Configuration */}
          <div style={{ padding: "48px 40px", borderRight: `1px solid ${C.border}` }}>
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <p style={{ fontFamily: "Lexend, sans-serif", color: C.text, fontSize: "1rem", fontWeight: 500 }}>
                  Capacidad de Clientes
                </p>
                <span style={{ 
                  fontFamily: "Inter, sans-serif", 
                  fontSize: "0.85rem", 
                  color: C.sage, 
                  fontWeight: 600,
                  background: `${C.sage}10`,
                  padding: "4px 12px",
                  borderRadius: 99,
                  border: `1px solid ${C.sage}20`
                }}>
                  {clients >= 31 ? "30+" : clients} Clientes Activos
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
                <span>5 Clientes</span>
                <span style={{ color: clients >= 30 ? C.orange : `${C.text}40`, fontWeight: clients >= 30 ? 600 : 400 }}>
                  Scale / Enterprise
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ margin: "40px 0 24px", borderTop: `1px solid ${C.border}`, opacity: 0.5 }} />

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
                {clients <= 10 ? "Estructura Base" : clients <= 20 ? "Crecimiento Acelerado" : "Infraestructura Enterprise"}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { text: "Dashboards operativos en tiempo real.", icon: <BarChart3 size={16} /> },
                  { text: "Centralización de fuentes de datos.", icon: <Database size={16} /> },
                  { text: "Soporte vía Slack para consultas técnicas.", icon: <Slack size={16} /> },
                  { 
                    text: `SLA: ${
                      clients <= 10 ? "24 hrs" 
                      : clients <= 20 ? "12 hrs" 
                      : clients <= 30 ? "12 hrs" 
                      : "8 hrs"
                    }`, 
                    icon: <Clock size={16} /> 
                  }
                ].map((benefit, i) => (
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
          <div style={{ 
            padding: "48px 40px", 
            background: "rgba(255,248,235,0.02)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <p style={{ 
                fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: C.sage, 
                letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 
              }}>
                Inversión Mensual
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                <h3 style={{ 
                  fontFamily: "Lexend, sans-serif", color: C.text, fontSize: "4rem", 
                  fontWeight: 500, margin: 0, lineHeight: 1 
                }}>
                  ${tier.price}
                </h3>
                <span style={{ color: `${C.text}40`, fontSize: "1.1rem" }}>/ mes</span>
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
                <span style={{ fontSize: "0.8rem", color: C.orange, fontWeight: 500 }}>Setup de Activación</span>
                <span style={{ fontSize: "1.1rem", color: C.text, fontFamily: "Lexend, sans-serif", fontWeight: 600 }}>
                  ${tier.setup} <small style={{ fontSize: "0.6rem", fontWeight: 400 }}>USD</small>
                </span>
              </div>
            </div>

            {/* ROI Logic (Compact) */}
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20, marginTop: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <div style={{ color: C.orange }}><AlertCircle size={16} /></div>
                <p style={{ fontSize: "0.8rem", color: `${C.text}70`, fontWeight: 500, margin: 0 }}>Ahorro estimado anual</p>
              </div>
              {(() => {
                const benchmark = clients <= 10 
                  ? { label: "Junior Support", cost: 2200 }
                  : clients <= 19 
                  ? { label: "Full Operations", cost: 4500 }
                  : clients <= 29 
                  ? { label: "Data Dept.", cost: 8500 }
                  : { label: "Enterprise Scale", cost: 15000 };
                
                return (
                  <>
                    <p style={{ fontSize: "1.35rem", color: C.sage, fontFamily: "Lexend, sans-serif", fontWeight: 600, margin: 0 }}>
                      ${((benchmark.cost - tier.price) * 12).toLocaleString("en-US")} <small style={{ fontSize: "0.7rem", fontWeight: 400, opacity: 0.6 }}>USD</small>
                    </p>
                    <p style={{ fontSize: "0.72rem", color: `${C.text}40`, marginTop: 2 }}>
                      vs. {benchmark.label} in-house (${benchmark.cost.toLocaleString("en-US") || "0"}/mes)
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
                Nota: La comparativa incluye el costo cargado de personal (salario + beneficios) 
                y el costo de oportunidad del tiempo manual de gestión.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
