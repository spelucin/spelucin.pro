import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Linkedin, Mail } from "lucide-react";
import { C } from "../constants";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        borderTop: `1px solid ${C.border}`,
        padding: "40px 24px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/img/logo.png"
            alt="Alex Spelucin"
            style={{
              height: 20,
              width: "auto",
              opacity: 0.3,
              filter: "grayscale(100%)",
              transition: "opacity 0.3s",
            }}
            className="hover:opacity-100 transition-opacity"
          />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.7rem",
              color: `${C.text}30`,
              margin: 0,
            }}
          >
            {t('footer.rights')}
          </p>
        </div>

        {/* Right Side: Utils */}
        <div className="flex items-center gap-8">
          <div style={{ display: "flex", gap: 12 }}>
            <Link to="/" style={{ fontSize: "0.7rem", color: `${C.text}30`, textDecoration: "none" }} className="hover:text-white transition-colors">ES</Link>
            <span style={{ color: `${C.text}10`, fontSize: "0.7rem" }}>/</span>
            <Link to="/en" style={{ fontSize: "0.7rem", color: `${C.text}30`, textDecoration: "none" }} className="hover:text-white transition-colors">EN</Link>
          </div>
          
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a
              href="https://www.linkedin.com/in/spelucin"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `${C.text}30`, transition: "all 0.2s" }}
              className="hover:text-[#acd8b9]"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:spelucinalex@gmail.com"
              style={{ color: `${C.text}30`, transition: "all 0.2s" }}
              className="hover:text-[#acd8b9]"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
