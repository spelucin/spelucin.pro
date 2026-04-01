// No React import needed for JSX 17+
import { C } from "../constants";

export function GridBackground() {
  const gridColor = "rgba(255,248,235,0.15)";
  const svgGrid = `
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${gridColor}" stroke-width="1"/>
    </svg>
  `;
  const encodedGrid = btoa(svgGrid.trim());

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: C.bg,
          zIndex: -2,
        }}
      />
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