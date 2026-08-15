import type { Translations } from './types';

export const t: Translations = {
  lang: 'es',
  htmlLang: 'es',
  ogLocale: 'es_ES',
  meta: {
    title: 'Alex Spelucin · Analista de marketing y datos',
    description:
      'Ayudo a equipos y agencias de marketing a decidir con datos confiables. Medición, reporting y analítica pensados para usarse todos los días.',
    imageAlt: 'Alex Spelucin · Analista de marketing y datos',
  },
  skipLink: 'Saltar al contenido',
  nav: [
    { label: 'Sobre mí', href: '#sobre-mi', index: '01' },
    { label: 'Enfoque', href: '#enfoque', index: '02' },
    { label: 'Herramientas', href: '#herramientas', index: '03' },
    { label: 'Proyectos', href: '#proyectos', index: '04' },
    { label: 'Contacto', href: '#contacto', index: '05' },
  ],
  header: {
    aria: 'Navegación principal',
    navAria: 'Secciones',
    langLabel: 'Cambiar idioma',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
  },
  hero: {
    badge: 'Analista digital',
    headline: 'Usa la data del marketing',
    highlight: 'a tu favor.',
    sub: 'Construyo sistemas de medición, reporting y analítica de marketing digital para equipos y agencias.',
    cta: 'Ver proyectos',
    role: 'Analista Digital',
    dashboardAlt: 'Vista de un sistema de reporting de marketing',
    stripLabel: 'Ellos confiaron en mí:',
  },
  about: {
    id: 'sobre-mi',
    index: '01',
    heading: 'Sobre mí',
    kicker: 'Quién soy',
    paragraphs: [
      'Trabajo en la intersección entre marketing y data. Mi foco es la analítica digital y los sistemas que la sostienen: medición confiable, reporting que escala y data que los equipos usan sin depender de una persona.',
      'Empecé en el SEO técnico a escala enterprise (Ripley, Intercorp Retail) y lideré analítica en agencias en Canadá, México, Argentina y Perú. En todos estos lugares, el patrón siempre es el mismo: los equipos no necesitan más data, necesitan la versión confiable y usable de la que ya tienen.',
    ],
    meta: [
      { label: 'Base', value: 'Lima, Perú' },
      { label: 'Idiomas', value: 'Español · Inglés' },
      { label: 'Enfoque', value: 'Marketing analytics & data' },
    ],
    portraitAlt: 'Retrato de Alex Spelucin',
  },
  focus: {
    id: 'enfoque',
    index: '02',
    kicker: 'Qué hago',
    heading: 'Experiencia técnica',
    highlight: 'en analítica y data.',
    intro:
      'Nueve áreas donde trabajo con criterio técnico aplicado a problemas reales de marketing. Cada una con oficio, no con teoría.',
    items: [
      {
        name: 'Planeamiento de la medición',
        tagline: 'Métricas, funnels y atribución',
        detail:
          'Defino qué métrica responde cada pregunta de negocio, de dónde sale y qué acción dispara cuando se mueve.',
        tags: ['KPI frameworks', 'Atribución', 'Funnels'],
      },
      {
        name: 'Etiquetado de eventos y conversiones',
        tagline: 'Data layer, eventos y conversiones',
        detail:
          'Diseño capas de datos y eventos que capturan lo que importa del negocio, con naming consistente y QA antes de publicar.',
        tags: ['Data Layer', 'Event design', 'QA'],
      },
      {
        name: 'Medición digital',
        tagline: 'GA4, GTM y tracking confiable',
        detail:
          'Implemento GA4 y GTM con consistencia: consent, contenedores versionados y QA. Encuentro por qué los números no cuadran entre plataformas y lo corrijo a nivel de fuente.',
        tags: ['GA4', 'GTM', 'Consent'],
      },
      {
        name: 'Dashboards ejecutivos y operativos',
        tagline: 'Reporting que se opera a escala',
        detail:
          'Construyo dashboards reutilizables con KPIs compartidos: ejecutivos para decidir y operativos para el día a día.',
        tags: ['Looker Studio', 'KPIs', 'Templates'],
      },
      {
        name: 'Reportes periódicos',
        tagline: 'Salidas consistentes y a tiempo',
        detail:
          'Reportes recurrentes con la misma lógica para múltiples clientes: menos trabajo manual y entregas a tiempo.',
        tags: ['Reporting systems', 'Automatización'],
      },
      {
        name: 'Herramientas basadas en datos',
        tagline: 'SQL y consultas confiables',
        detail:
          'Extraigo, transformo y valido data para responder preguntas reales. Documentado y reproducible, para que no dependa de una persona.',
        tags: ['SQL', 'Transformación', 'Validación'],
      },
      {
        name: 'Almacenes de datos de marketing',
        tagline: 'Data warehouse de marketing',
        detail:
          'Consolido la data de marketing en un solo lugar: pipelines de ads, CRM y web con modelos que el equipo consulta directo.',
        tags: ['BigQuery', 'GCP', 'Data warehouse'],
      },
      {
        name: 'Integraciones de marketing',
        tagline: 'Flujos de datos entre plataformas',
        detail:
          'Automatizo flujos de datos entre plataformas con Dataform y Python: scheduling, transformaciones y data confiable disponible a tiempo.',
        tags: ['Dataform', 'Python', 'Pipelines'],
      },
      {
        name: 'Observabilidad de métricas',
        tagline: 'Monitoreo de la calidad de la data',
        detail:
          'Vigilo que las métricas sigan siendo confiables con el tiempo: alertas de calidad, consistencia y trazabilidad del dato.',
        tags: ['Monitoreo', 'QA', 'Alertas'],
      },
    ],
    practice: {
      groups: [
        { name: 'Medición', itemIndexes: [0, 1, 2] },
        { name: 'Reporting', itemIndexes: [3, 4, 5] },
        { name: 'Sistemas', itemIndexes: [6, 7, 8] },
      ],
      images: [
        { alt: 'Vista de la auditoría de fuentes de datos' },
        { alt: 'Vista de la medición de eventos y conversiones corregida' },
        { alt: 'Vista del sistema de reporting y documentación del equipo' },
      ],
    },
  },
  tools: {
    id: 'herramientas',
    index: '03',
    kicker: 'Stack',
    heading: 'Herramientas',
    highlight: 'y Stack',
    intro: 'El stack con el que resuelvo medición, reporting y data de marketing desde el origen hasta el final del dato.',
    groups: [
      {
        name: 'Medición',
        items: [
          { name: 'Google Analytics 4', icon: 'simple-icons:googleanalytics' },
          { name: 'Google Tag Manager', icon: 'simple-icons:googletagmanager' },
          { name: 'JavaScript', icon: 'simple-icons:javascript' },
        ],
      },
      {
        name: 'Reportes y visualización',
        items: [
          { name: 'Google Data Studio', icon: 'simple-icons:googledatastudio' },
          { name: 'Google Sheets', icon: 'simple-icons:googlesheets' },
        ],
      },
      {
        name: 'Análisis de datos',
        items: [
          { name: 'Python', icon: 'simple-icons:python' },
          { name: 'R', icon: 'simple-icons:r' },
          { name: 'SQL', icon: 'tabler:sql' },
          { name: 'BigQuery', icon: 'simple-icons:googlebigquery' },
        ],
      },
      {
        name: 'ETL y canalizaciones',
        items: [
          { name: 'Dataform', icon: 'tabler:database' },
          { name: 'Google Cloud', icon: 'simple-icons:googlecloud' },
        ],
      },
    ],
  },
  projects: {
    id: 'proyectos',
    index: '04',
    kicker: 'Proyectos',
    heading: 'Casos',
    highlight: 'reales.',
    intro: 'Sistemas de medición y reporting que armé para agencias. Imágenes del trabajo real.',
    sliderAria: 'Galería de proyectos',
    prevLabel: 'Proyecto anterior',
    nextLabel: 'Proyecto siguiente',
    pageLabel: 'Página',
    items: [
      {
        title: 'Reportes para agencia de growth marketing',
        scope: '',
        year: '2026',
        alt: 'Vista de los reportes de tráfico orgánico y pagado de Torices Digital',
        description: 'Junto a Torices Digital, trabajamos una serie de reportes para mostrar el impacto del tráfico orgánico y pagado frente a frente, además de auditar sus principales fuentes de datos para lograr una mayor precisión en los números.',
        results: [
          { label: 'Clientes', value: '10+' },
          { label: 'Cuentas auditadas', value: '12+' },
          { label: 'Horas/semana ahorradas', value: '12' },
        ],
      },
      {
        title: 'Dashboards para agencia de growth para comercio electrónico',
        scope: '',
        year: '2024',
        alt: 'Vista de los dashboards de comercio electrónico de Owlbox',
        description: 'Owlbox se especializa en comercio electrónico para distintos clientes de LATAM. La misión fue elaborar un set de dashboards que permita visualizar las métricas principales para sus clientes: ROAS, ingresos de paid, gasto y mejores productos.',
        results: [
          { label: 'Clientes', value: '12+' },
          { label: 'Horas/semana ahorradas', value: '10' },
          { label: 'Fuentes de datos', value: '05' },
        ],
      },
      {
        title: 'Medición a escala para una agencia SEO premier',
        scope: '',
        year: '2025',
        alt: 'Vista del sistema de medición y reportes de Notebook Agency',
        description: 'Junto a Notebook Agency, desarrollamos un sistema de medición y reportes que permiten a la agencia mostrar sus resultados ante sus clientes B2B/SaaS. Además levantamos un sistema de medición de páginas conectado a cada reporte. También se desarrollaron 2 conectores de Data Studio para alimentar el dashboard con seguimiento de consultas SEO.',
        results: [
          { label: 'Clientes', value: '20+' },
          { label: 'Horas ahorradas/mes', value: '60' },
          { label: 'Conectores Data Studio custom', value: '02' },
        ],
      },
    ],
  },
  contact: {
    id: 'contacto',
    index: '06',
    kicker: 'Conversemos',
    heading: 'Todo equipo o agencia de marketing necesita datos. Que no te jueguen en contra.',
    emailLabel: 'Escríbeme',
    calLabel: 'Agendar llamada',
  },
  footer: {
    tagline: 'Analista Digital. Marketing analytics, medición, reporting y data.',
    contactNav: 'Contacto',
    legalNav: 'Legal',
    rights: '© 2026 Alex Spelucin',
    privacy: 'Privacidad',
    terms: 'Términos',
  },
};
