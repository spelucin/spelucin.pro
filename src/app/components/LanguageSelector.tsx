import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router';
import { C } from '../constants';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Update URL path: /en for English, / for Spanish
    const newPath = lng === 'en' ? '/en' : '/';
    if (location.pathname !== newPath) {
      navigate(newPath);
    }
  };

  const activeStyle = {
    color: C.text,
    background: 'rgba(255,248,235,0.07)',
  };

  const inactiveStyle = {
    color: `${C.text}40`,
    background: 'none',
  };

  return (
    <div style={{ display: 'flex', gap: 0, border: `1px solid ${C.border}`, borderRadius: 99, padding: '2px', background: 'rgba(255,248,235,0.03)' }}>
      {['es', 'en'].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          style={{
            background: i18n.language.startsWith(lng) ? activeStyle.background : inactiveStyle.background,
            border: 'none',
            borderRadius: 99,
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 600,
            color: i18n.language.startsWith(lng) ? activeStyle.color : inactiveStyle.color,
            padding: '4px 8px',
            textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
