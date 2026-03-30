// No React import needed for JSX 17+
import { Linkedin, Mail } from "lucide-react";
import { C } from "../constants";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${C.border}`,
        padding: "48px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
      }}
      className="flex-col md:flex-row"
    >
      <img
        src="/img/logo.png"
        alt="Alex Spelucin"
        style={{
          height: 24,
          width: "auto",
          opacity: 0.4,
          filter: "grayscale(100%) brightness(1.5)"
        }}
        className="order-1 md:order-none"
      />
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.78rem",
          color: `${C.text}40`,
          margin: 0,
          textAlign: "center",
        }}
        className="order-3 md:order-none"
      >
        © 2026 Alex Spelucin. Data Infrastructure B2B. Todos los derechos reservados.
      </p>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }} className="order-2 md:order-none">
        <a
          href="https://www.linkedin.com/in/spelucin"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: `${C.text}50`, transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = C.sage)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = `${C.text}50`)
          }
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:spelucinalex@gmail.com"
          style={{ color: `${C.text}50`, transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = C.sage)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = `${C.text}50`)
          }
        >
          <Mail size={20} />
        </a>
      </div>
    </footer>
  );
}
