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
  siteNav: [
    { label: 'Inicio', href: '/' },
    { label: 'Casos', href: '/case-studies' },
    { label: 'Contacto', href: '/contact' },
  ],
  ctaLabel: 'Agendar llamada',
  ctaSeeWork: 'Ver casos',
  calModal: {
    label: 'Agenda una llamada',
    close: 'Cerrar el calendario',
  },
  home: {
    hero: {
      headline: 'El reporting de tus clientes',
      highlight: 'no debería rehacerse cada mes.',
      sub: 'Construyo sistemas de medición y reporting para agencias que necesitan entregar resultados sin depender de una sola persona.',
      visualAlt: 'Vista de un sistema de reporting de marketing',
    },
    trust: {
      label: 'Clientes con los que he trabajado:',
    },
    problem: {
      index: '01',
      heading: 'El costo de armar',
      highlight: 'reportes a mano.',
      intro:
        'Cuando el reporte se arma a mano cada mes, los errores y las esperas pasan a formar parte del trabajo.',
      items: [
        {
          title: 'Manual todos los meses',
          text: 'Exportar por aquí, pegar por allá, ajustar formatos. Todos los clientes, todos los meses, en manos de alguien que tiene mejores cosas que hacer.',
        },
        {
          title: 'Números que no cuadran',
          text: 'Ads dice una cosa y la consola del cliente dice otra. Pierdes la discusión antes de plantearla.',
        },
        {
          title: 'No escala con el crecimiento',
          text: 'Un cliente nuevo es una hoja nueva, una plantilla nueva, otro mes de horas de tu analista.',
        },
      ],
    },
    service: {
      index: '02',
      heading: 'El Sprint del',
      highlight: 'Sistema de Reporting.',
      intro: 'Un engagement fijo de 4 semanas para diseñar y construir el sistema detrás de los reportes de tus clientes.',
      weeks: [
        { title: 'Semana 1 · Auditoría', text: 'Todas las fuentes y reportes mapeados, inconsistencias listadas.' },
        { title: 'Semana 2 · Modelo y diseño', text: 'Un único modelo de métricas y los wireframes de los dashboards.' },
        { title: 'Semana 3 · Construcción', text: 'Warehouse, transformaciones y los primeros dashboards en vivo.' },
        { title: 'Semana 4 · Entrega', text: 'Automatización, documentación y el equipo entrenado.' },
      ],
      includeHeading: 'Qué incluye',
      include: ['Un modelo de datos documentado', 'Dashboards en Looker Studio', 'Entrega automatizada', 'Docs de handover'],
      fit: {
        goodHeading: 'Buen fit',
        good: [
          'Reportas para 5+ clientes',
          'Ya usas (o quieres) Looker Studio',
          'Los números nunca acaban de cuadrar',
          'Quieres que el reporting deje de ser un incendio',
        ],
        poorHeading: 'No es tu caso si',
        poor: [
          'Buscas un dashboard gratis para un solo canal',
          'Eres un equipo de uno que solo quiere un reporte puntual',
          'Buscas reemplazar a tu equipo, no su sistema',
        ],
      },
    },
    proof: {
      index: '03',
      heading: 'Reporting para agencias de',
      highlight: 'growth, ecommerce y SEO.',
      intro: 'Trabajo con equipos que necesitan repetir el reporting sin perder criterio ni contexto.',
      stats: [
        { value: '6+', label: 'años en analítica de marketing' },
        { value: '15-20', label: 'cuentas concurrentes en Notebook Agency' },
        { value: '10+', label: 'clientes en sistemas de reporting para Torices' },
        { value: '20+', label: 'dashboards entregados como freelance' },
      ],
      featured: ['notebook', 'torices', 'owlbox'],
    },
    faq: {
      index: '04',
      heading: 'Preguntas',
      highlight: 'frecuentes.',
      items: [
        {
          q: '¿Reemplazan nuestras herramientas?',
          a: 'No. Si tu equipo reporta en Looker Studio, construimos sobre eso. BigQuery y Apps Script quedan detrás, invisibles.',
        },
        {
          q: '¿Cuánto hasta el primer dashboard?',
          a: 'El primer dashboard de clientes llega durante el sprint, normalmente en la semana 3.',
        },
        {
          q: '¿Trabajan con los conectores que ya usamos?',
          a: 'Habitualmente sí. Las fuentes de Google conectan nativo; otras plataformas entran por APIs hacia el warehouse.',
        },
        {
          q: '¿Qué necesitan de nosotros?',
          a: 'Acceso de lectura a las fuentes y 30 minutos a la semana con quien hoy hace los reportes.',
        },
        {
          q: '¿Qué pasa después del sprint?',
          a: 'El sistema queda documentado y automatizado. Podemos seguir en un retainer de cambios o lo opera tu equipo.',
        },
      ],
    },
  },
  process: {
    index: '04',
    heading: 'Cómo funciona,',
    highlight: 'de principio a fin.',
    intro: 'Cuatro etapas, con entregables claros en cada una. Primero acordamos el modelo; después construimos.',
    steps: [
      {
        title: 'Auditoría',
        text: 'Mapeamos tus fuentes, tus reportes de clientes y de dónde vienen las inconsistencias.',
      },
      {
        title: 'Diseño',
        text: 'Acordamos métricas, modelo de datos y dashboards antes de construir nada.',
      },
      {
        title: 'Construcción',
        text: 'Warehouse, transformaciones y dashboards con el naming y los procesos de tu equipo.',
      },
      {
        title: 'Entrega',
        text: 'Documentación y automatización para que el sistema funcione sin ti.',
      },
    ],
  },
  stack: {
    index: '05',
    heading: 'La parte técnica que sostiene',
    highlight: 'el reporting.',
    intro: 'Todo el stack gira alrededor de la nube de Google: la data vive en BigQuery, se transforma con SQL y el reporting sale por Looker Studio.',
    layers: [
      {
        name: 'Datos & transformación',
        items: [
          { name: 'Python', icon: 'simple-icons:python' },
          { name: 'SQL', icon: 'tabler:sql' },
          { name: 'Dataform', icon: 'tabler:transform' },
        ],
      },
      {
        name: 'Google Cloud & reporting',
        items: [
          { name: 'Google Cloud', icon: 'simple-icons:googlecloud' },
          { name: 'Apps Script', icon: 'simple-icons:googleappsscript' },
          { name: 'Data Studio', icon: 'simple-icons:googledatastudio' },
        ],
      },
    ],
  },
  ctaSection: {
    heading: 'Veamos qué te puede ahorrar una llamada.',
    sub: '20 minutos, sin pitch. Trae un reporte que entregues seguido y buscamos lo primero que se puede automatizar.',
    hint: 'Disponible en español e inglés.',
  },
  services: {
    seo: {
      title: 'Servicios · Sistema de reporting para agencias | Alex Spelucin',
      description:
        'Reporting y medición para agencias: fuentes auditadas, KPIs claros, dashboards y documentación para repetir el trabajo con cada cliente.',
    },
    hero: {
      badge: 'Servicios',
      headline: 'Reporting para',
      highlight: 'agencias que crecen.',
      sub: 'Auditoría, medición, KPIs, dashboards y documentación para que el equipo pueda repetir el trabajo con cada cliente.',
    },
    components: {
      index: '01',
      heading: 'Qué necesita tu',
      highlight: 'reporting.',
      intro: 'Las piezas que ordenan la medición y hacen que el trabajo se pueda repetir.',
      items: [
        {
          title: 'Auditoría de fuentes',
          text: 'Cada plataforma de donde salen los números de tus clientes, auditada por exactitud.',
          tags: ['Fuentes', 'QA', 'Exactitud'],
        },
        {
          title: 'Modelo de datos',
          text: 'Un modelo que explica de dónde sale cada número y cómo se usa en el reporting.',
          tags: ['KPIs', 'Fuentes', 'Modelo'],
        },
        {
          title: 'Dashboards',
          text: 'Vistas en Looker Studio para ejecutivos y para el equipo operativo.',
          tags: ['Looker Studio', 'KPIs'],
        },
        {
          title: 'Entrega automatizada',
          text: 'Google Sheets y envíos programados con Apps Script.',
          tags: ['Sheets', 'Apps Script'],
        },
        {
          title: 'Chequeos de calidad',
          text: 'Alertas cuando un número deja de tener sentido.',
          tags: ['Alertas', 'Monitoreo'],
        },
        {
          title: 'Documentación y handover',
          text: 'Para que el equipo pueda mantener el reporting sin depender de una sola persona.',
          tags: ['Docs', 'Entrenamiento'],
        },
      ],
    },
    proof: {
      index: '02',
      heading: 'Trabajo hecho para',
      highlight: 'agencias reales.',
      intro: 'Reporting y medición construidos para equipos con varios clientes.',
      stats: [
        { value: '6+', label: 'años en analítica de marketing' },
        { value: '15-20', label: 'cuentas concurrentes en Notebook Agency' },
        { value: '10+', label: 'clientes en sistemas de reporting para Torices' },
        { value: '20+', label: 'dashboards entregados como freelance' },
      ],
    },
    faq: {
      index: '03',
      heading: 'Preguntas',
      highlight: 'frecuentes.',
      items: [
        {
          q: '¿Qué recibo exactamente?',
          a: 'Un modelo de datos documentado, dashboards, entrega automatizada y la documentación para operarlo.',
        },
        {
          q: '¿Tengo que cambiar de herramientas?',
          a: 'No. Construimos sobre Looker Studio; el trabajo pesado ocurre en Google Cloud, detrás.',
        },
        {
          q: '¿Y si mis datos son un desastre?',
          a: 'Para eso es la auditoría. Limpiamos las fuentes antes de construir nada.',
        },
        {
          q: '¿Trabajas con agencias fuera de LATAM?',
          a: 'Sí. Español e inglés, remoto y con horarios compatibles.',
        },
        {
          q: '¿Cómo empezamos?',
          a: 'Una llamada de 20 minutos. Si conecta, el sprint tiene alcance y precio fijos.',
        },
      ],
    },
  },
  work: {
    seo: {
      title: 'Casos de estudio · Sistemas de reporting | Alex Spelucin',
      description:
        'Casos de medición y reporting construidos para agencias, con dashboards y decisiones técnicas documentadas.',
    },
    hero: {
      index: '01',
      heading: 'Casos de estudio',
      highlight: 'reales.',
      sub: 'Sistemas construidos para agencias. Mira qué problema había, qué se construyó y cómo quedó la operación.',
    },
    cases: [
      {
        slug: 'torices',
        client: 'Torices Digital',
        sector: 'Growth marketing',
        year: '2026',
        title: 'Reporting orgánico y pagado cara a cara',
        summary:
          'Una serie de reportes que muestra el tráfico orgánico y pagado en paralelo, con las fuentes revisadas para sostener la lectura.',
        result: 'Sistema para 10+ clientes',
        alt: 'Vista de los reportes de tráfico orgánico y pagado de Torices Digital',
        imagesAlt: [
          'Vista del reporte orgánico y pagado: portada',
          'Vista del reporte: métricas de tráfico',
          'Vista del reporte: sesiones y páginas',
          'Vista del reporte: canales de adquisición',
          'Vista del reporte: resumen mensual',
        ],
      },
      {
        slug: 'notebook',
        client: 'Notebook Agency',
        sector: 'SEO · B2B/SaaS',
        year: '2025',
        title: 'Medición conectada a cada reporte',
        summary:
          'Un sistema de medición y reporting para clientes B2B/SaaS, con seguimiento de páginas conectado a cada reporte.',
        result: 'Sistema para 30+ clientes',
        alt: 'Vista del sistema de medición y reportes de Notebook Agency',
        imagesAlt: [
          'Vista del sistema de medición: vista general',
          'Vista del sistema de medición: métricas clave',
          'Vista del sistema de medición: detalle de páginas',
          'Vista del sistema de medición: consultas SEO',
          'Vista del sistema de medición: resúmenes',
          'Vista del sistema de medición: reporte final',
        ],
      },
      {
        slug: 'owlbox',
        client: 'Owlbox',
        sector: 'Ecommerce',
        year: '2024',
        title: 'Dashboards de ecommerce para clientes LATAM',
        summary:
          'Un set de dashboards con las métricas que sus clientes necesitan: ROAS, ingresos de paid, gasto y mejores productos.',
        result: 'Reporting para 10+ clientes',
        alt: 'Vista de los dashboards de comercio electrónico de Owlbox',
        imagesAlt: [
          'Vista del dashboard de ecommerce de Owlbox: vista general',
          'Vista del dashboard de ecommerce de Owlbox: ingresos y gasto',
          'Vista del dashboard de ecommerce de Owlbox: mejores productos',
          'Vista del dashboard de ecommerce de Owlbox: resumen ejecutivo',
        ],
      },
    ],
  },
  aboutPage: {
    seo: {
      title: 'Sobre mí · Analista de datos de marketing | Alex Spelucin',
      description:
        'Trabajo en la intersección entre marketing y data: medición confiable, reporting que escala y sistemas que los equipos usan a diario.',
    },
    hero: {
      index: '01',
      headline: 'De SEO enterprise a sistemas',
      highlight: 'de reporting para agencias.',
      sub: 'Analista de datos de marketing. Construyo los sistemas que sostienen el reporting de agencias y equipos.',
    },
    capabilities: {
      index: '02',
      heading: 'Lo que sé',
      highlight: 'hacer.',
      intro: 'Nueve áreas con criterio técnico aplicado a problemas reales de marketing.',
    },
  },
  contactPage: {
    seo: {
      title: 'Contacto · Hablemos | Alex Spelucin',
      description: 'Una llamada de 20 minutos, sin pitch. Veamos si un sistema de reporting tiene sentido para tu agencia.',
    },
    heading: 'Construyamos algo que tu equipo pueda usar.',
    sub: 'Una llamada de 20 minutos, sin pitch. Trae un reporte que entregues seguido y revisamos dónde se está yendo el tiempo.',
    emailLabel: 'Escríbeme',
    calLabel: 'Agendar llamada',
    linkedinLabel: 'LinkedIn',
    availability: 'Disponible para agencias en LATAM, España y Estados Unidos.',
  },
  caseStudies: {
    challengeHeading: 'El desafío',
    contextHeading: 'Contexto',
    galleryHeading: 'El trabajo',
    moreHeading: 'Más casos',
    backToWork: 'Volver a los casos',
    torices: {
      slug: 'torices',
      client: 'Torices Digital',
      sector: 'Growth marketing',
      year: '2026',
      kicker: 'Caso de estudio',
      title: 'Reporting de orgánico y pagado cara a cara',
      heroResult: 'Sistema para 10+ clientes',
      alt: 'Vista de los reportes de tráfico orgánico y pagado de Torices Digital',
      imagesAlt: [
        'Vista del reporte orgánico y pagado: portada',
        'Vista del reporte: métricas de tráfico',
        'Vista del reporte: sesiones y páginas',
        'Vista del reporte: canales de adquisición',
        'Vista del reporte: resumen mensual',
      ],
      context: [
        'Torices Digital es una agencia de growth marketing que gestiona orgánico y pagado para sus clientes. Sus reportes debían mostrar el impacto acumulado de ambos canales sin dejar dudas sobre los números.',
      ],
      problems: [
        {
          title: 'Orgánico y pagado en silos',
          text: 'Dos miradas del mismo embudo, imposibles de comparar de un vistazo.',
        },
        {
          title: 'Fuentes auditadas a mano',
          text: 'Los números valían lo que la fuente de turno; no había consistencia.',
        },
        {
          title: 'Reporting apilado sobre la operación',
          text: 'Cada mes, después del trabajo, cuando el equipo ya estaba agotado.',
        },
      ],
      built: {
        heading: 'Qué construimos',
        items: [
          {
            title: 'Reporting frente a frente',
            text: 'Una serie de reportes que muestra el impacto del orgánico y el pagado en paralelo.',
          },
          {
            title: 'Auditoría de fuentes',
            text: 'Fuentes revisadas para que los números llegaran con una lógica consistente a los reportes.',
          },
          {
            title: 'Un sistema reutilizable',
            text: 'La misma lógica para 10+ clientes: un cliente nuevo deja de ser una construcción desde cero.',
          },
        ],
      },
      results: {
        heading: 'Resultados',
        stats: [
          { value: '10+', label: 'clientes reportando' },
          { value: '01', label: 'sistema de reporting' },
          { value: '10+', label: 'clientes atendidos' },
        ],
      },
    },
    owlbox: {
      slug: 'owlbox',
      client: 'Owlbox',
      sector: 'Ecommerce',
      year: '2024',
      kicker: 'Caso de estudio',
      title: 'Dashboards de ecommerce para clientes LATAM',
      heroResult: 'Reporting para 10+ clientes',
      alt: 'Vista de los dashboards de comercio electrónico de Owlbox',
      imagesAlt: [
        'Vista del dashboard de ecommerce de Owlbox: vista general',
        'Vista del dashboard de ecommerce de Owlbox: ingresos y gasto',
        'Vista del dashboard de ecommerce de Owlbox: mejores productos',
        'Vista del dashboard de ecommerce de Owlbox: resumen ejecutivo',
      ],
      context: [
        'Owlbox es una agencia de growth para comercio electrónico, con clientes en toda LATAM. Sus revisiones necesitaban las métricas clave del negocio a la vista, sin cazar números en varias pantallas.',
      ],
      problems: [
        {
          title: 'Métricas clave dispersas',
          text: 'ROAS, ingresos de paid, gasto y top products vivían en distintas vistas.',
        },
        {
          title: 'Sin una vista compartida por cliente',
          text: 'Cada revisión significaba juntar números desde varios lugares.',
        },
        {
          title: 'El reporte no contaba la historia',
          text: 'Las métricas estaban repartidas y cada revisión necesitaba volver a juntarlas.',
        },
      ],
      built: {
        heading: 'Qué construimos',
        items: [
          {
            title: 'Set de dashboards por cliente',
            text: 'Dashboards con ROAS, ingresos de paid, gasto y mejores productos para cada cliente.',
          },
          {
            title: 'Una vista compartida por cliente',
            text: 'La información de Meta Ads, CRM y GA4 se revisa en un mismo contexto por cliente.',
          },
          {
            title: 'Plantilla que se repite',
            text: 'La misma estructura para cada cliente nuevo, sin empezar de cero.',
          },
        ],
      },
      results: {
        heading: 'Resultados',
        stats: [
          { value: '10+', label: 'clientes soportados' },
          { value: '03', label: 'plataformas contrastadas' },
          { value: '01', label: 'vista de reporting por cliente' },
        ],
      },
    },
    notebook: {
      slug: 'notebook',
      client: 'Notebook Agency',
      sector: 'SEO · B2B/SaaS',
      year: '2025',
      kicker: 'Caso de estudio',
      title: 'Medición conectada a cada reporte SEO',
      heroResult: 'Sistema para 30+ clientes',
      alt: 'Vista del sistema de medición y reportes de Notebook Agency',
      imagesAlt: [
        'Vista del sistema de medición: vista general',
        'Vista del sistema de medición: métricas clave',
        'Vista del sistema de medición: detalle de páginas',
        'Vista del sistema de medición: consultas SEO',
        'Vista del sistema de medición: resúmenes',
        'Vista del sistema de medición: reporte final',
      ],
      context: [
        'Notebook es una agencia SEO con clientes B2B y SaaS. Su reporting tenía que sostener la estrategia con data, cada mes y para varios clientes.',
      ],
      problems: [
        {
          title: 'Reportes rearmados a mano',
          text: 'Cada reporte de cliente significaba armarlo pieza por pieza.',
        },
        {
          title: 'Sin visibilidad a nivel de página',
          text: 'La agencia no podía mostrar cómo rendía cada página por cliente.',
        },
        {
          title: 'Data SEO atrapada en tools',
          text: 'No había un camino limpio para el rendimiento por consulta más allá de los dashboards.',
        },
      ],
      built: {
        heading: 'Qué construimos',
        items: [
          {
            title: 'Sistema de medición de páginas',
            text: 'Conectado a cada reporte para que cada entrega incluya la data de las páginas que analiza.',
          },
          {
            title: 'Seguimiento de consultas SEO',
            text: 'La información de consultas SEO queda conectada al reporting de cada cliente.',
          },
          {
            title: 'Arquitectura de reporting',
            text: 'Un enfoque compartido entre clientes: reportes nuevos sin construirse desde cero.',
          },
        ],
      },
      results: {
        heading: 'Resultados',
        stats: [
          { value: '30+', label: 'clientes servidos por el sistema' },
          { value: '10', label: 'cuentas GA4 auditadas' },
          { value: '15-20', label: 'cuentas concurrentes gestionadas' },
        ],
      },
    },
  },
  header: {
    langLabel: 'Cambiar idioma',
  },
  hero: {
    role: 'Analista Digital',
  },
  about: {
    heading: 'Sobre mí',
    kicker: 'Quién soy',
    paragraphs: [
      'Trabajo entre marketing y data. Construyo reporting para agencias: medición confiable, KPIs claros y documentación para que el equipo pueda mantener el trabajo.',
      'Empecé en el SEO técnico a escala enterprise (Ripley, Intercorp Retail) y después lideré analítica en Notebook Agency. También construí sistemas de reporting para Torices y Owlbox. El problema se repite: los equipos no necesitan más data, necesitan saber cuál número pueden usar.',
    ],
    meta: [
      { label: 'Base', value: 'Lima, Perú' },
      { label: 'Idiomas', value: 'Español · Inglés' },
      { label: 'Enfoque', value: 'Marketing analytics & data' },
    ],
    portraitAlt: 'Retrato de Alex Spelucin',
  },
  focus: {
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
  },
  footer: {
    tagline: 'Analista de datos de marketing. Sistemas de reporting para agencias.',
    exploreNav: 'Explorar',
    contactNav: 'Contacto',
    legalNav: 'Legal',
    rights: '© 2026 Alex Spelucin',
    privacy: 'Privacidad',
    terms: 'Términos',
  },
};
