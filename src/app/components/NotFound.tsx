
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GridBackground } from './GridBackground';
import { SectionH2 } from './CommonComponents';
import { C } from '../constants';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <title>404 | {t('notFound.title')}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "transparent", color: C.text, textAlign: "center", padding: 24 }}>
        <GridBackground />
        
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "4rem", fontWeight: 700, color: C.sage, marginBottom: 16, lineHeight: 1 }}>
          404
        </span>
        <SectionH2 style={{ marginBottom: 16 }}>{t('notFound.title')}</SectionH2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: `${C.text}70`, maxWidth: 400, marginBottom: 40 }}>
          {t('notFound.description')}
        </p>
        
        <Link 
          to="/"
          style={{
            background: "transparent",
            color: C.sage,
            border: `1px solid ${C.sage}`,
            borderRadius: 99,
            padding: "12px 28px",
            fontFamily: "Lexend, sans-serif",
            fontSize: "0.95rem",
            fontWeight: 500,
            textDecoration: "none",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = C.sage;
            e.currentTarget.style.color = C.bg;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = C.sage;
          }}
        >
          {t('notFound.back')}
        </Link>
      </div>
    </HelmetProvider>
  );
}
