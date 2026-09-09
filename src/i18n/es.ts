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
    { label: 'Trabajo', href: '/work' },
    { label: 'Servicios', href: '/services' },
    { label: 'Para agencias', href: '/agencies' },
    { label: 'Sobre mí', href: '/about' },
  ],
  ctaLabel: 'Agendar llamada',
  ctaSeeWork: 'Ver el trabajo',
  home: {
    hero: {
      badge: 'Reporting para agencias',
      headline: 'Reportes de clientes que',
      highlight: 'se hacen solos.',
      sub: 'Diseño el sistema de data y reporting detrás de los reportes de tus clientes, para que tu equipo deje de rearmarlos cada mes.',
      ctaSecondary: 'Ver el trabajo',
      visualAlt: 'Vista de un sistema de reporting de marketing',
    },
    trust: {
      label: 'Trabajando con:',
    },
    problem: {
      index: '01',
      heading: 'El reporting no debería',
      highlight: 'duplicarse con cada cliente.',
      intro:
        'Cuando cada mes se arma a mano, los errores, las esperas y la inconsistencia se vuelven parte de la operación.',
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
      heading: 'Un solo servicio:',
      highlight: 'el sistema detrás de tus reportes.',
      intro: 'Dashboards, data warehouse, entrega y automatización como un sistema, no como archivos sueltos.',
      pillars: [
        {
          title: 'Dashboards & Reporting',
          text: 'Dashboards en Looker Studio que tus clientes abren a diario: performance, pagado y orgánico frente a frente, ROAS y mejores productos.',
          tags: ['Looker Studio', 'KPIs', 'GA4 · Ads · SEO'],
        },
        {
          title: 'Warehouse & Pipelines',
          text: 'Una capa de datos limpia en BigQuery, con Dataform y Google Cloud, para que cada número salga de la misma fuente de verdad.',
          tags: ['BigQuery', 'Dataform', 'Google Cloud'],
        },
        {
          title: 'Automatización & Delivery',
          text: 'Entrega en Google Sheets y automatización con Apps Script: reportes programados, formateados y enviados sin una persona en el medio.',
          tags: ['Google Sheets', 'Apps Script', 'Scheduling'],
        },
      ],
    },
    proof: {
      index: '03',
      heading: 'Hecho para agencias de',
      highlight: 'growth, ecommerce y SEO.',
      intro: 'Sistemas ya corriendo en agencias, con horas reales devueltas a los equipos.',
      stats: [
        { value: '20+', label: 'clientes que reportan con estos sistemas' },
        { value: '60 h', label: 'ahorradas al mes en una agencia SEO' },
        { value: '12 h', label: 'ahorradas a la semana en una agencia de growth' },
        { value: '10 h', label: 'ahorradas a la semana en una agencia de ecommerce' },
      ],
      featured: ['notebook', 'torices', 'owlbox'],
    },
  },
  process: {
    index: '04',
    heading: 'Cómo funciona,',
    highlight: 'de principio a fin.',
    intro: 'Cuatro etapas, cada una con entregables claros. Nada se construye antes de acordar el modelo.',
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
    heading: 'El stack,',
    highlight: 'todo en Google.',
    intro: 'Un solo ecosistema, de la fuente al delivery. Si tus clientes reportan en Looker Studio, esto se integra directo.',
    layers: [
      {
        name: 'Fuentes de datos',
        items: [
          { name: 'Google Analytics 4', icon: 'simple-icons:googleanalytics' },
          { name: 'Google Ads', icon: 'simple-icons:googleads' },
          { name: 'Meta Ads', icon: 'simple-icons:meta' },
          { name: 'Search Console', icon: 'simple-icons:googlesearchconsole' },
          { name: 'APIs y otras fuentes', icon: 'tabler:api' },
        ],
      },
      {
        name: 'Warehouse & transformación',
        items: [
          { name: 'Google Cloud', icon: 'simple-icons:googlecloud' },
          { name: 'BigQuery', icon: 'simple-icons:googlebigquery' },
          { name: 'Dataform', icon: 'tabler:database' },
        ],
      },
      {
        name: 'Reporting & delivery',
        items: [
          { name: 'Looker Studio', icon: 'simple-icons:googledatastudio' },
          { name: 'Google Sheets', icon: 'simple-icons:googlesheets' },
        ],
      },
      {
        name: 'Automatización',
        items: [
          { name: 'Apps Script', icon: 'simple-icons:googleappsscript' },
          { name: 'Google Tag Manager', icon: 'simple-icons:googletagmanager' },
          { name: 'APIs', icon: 'tabler:plug-connected' },
        ],
      },
    ],
  },
  ctaSection: {
    heading: 'Veamos qué te puede ahorrar una llamada.',
    sub: '20 minutos, sin pitch. Trae un reporte que entregues seguido y buscamos lo primero que se puede automatizar.',
    hint: 'Disponible en español e inglés.',
  },
  agencies: {
    seo: {
      title: 'Para agencias · Sistemas de reporting | Alex Spelucin',
      description:
        'Sistemas de data y reporting para agencias: un modelo, cada cliente y cero rearmes manuales. Dashboards, warehouse y automatización en Google.',
    },
    hero: {
      badge: 'Para dueños de agencias',
      headline: 'Súmale clientes',
      highlight: 'sin el trabajo de reporting.',
      sub: 'Un sistema de data y reporting construido para agencias: un solo modelo, cada cliente, cero rearmes manuales.',
      ctaSecondary: 'Ver el sistema',
      visualAlt: 'Vista de un sistema de reporting de marketing',
    },
    takeover: {
      index: '01',
      heading: 'Los dolores que',
      highlight: 'cambian con un sistema.',
      intro: 'La operación real de una agencia que crece de 5 a 15 clientes.',
      items: [
        {
          title: 'Cada cliente nuevo es un template nuevo',
          text: 'Tu analista rearma el mismo dashboard por quinta vez, a mano.',
        },
        {
          title: 'Números que se contradicen',
          text: 'Ads, Search Console y los datos del propio cliente nunca coinciden del todo, y lo sientes en cada revisión.',
        },
        {
          title: 'La entrega es una emergencia recurrente',
          text: 'El cliente vuelve a preguntar a fin de mes y el apuro empieza de nuevo.',
        },
        {
          title: 'El reporte desluce el trabajo',
          text: 'Buen trabajo enviado en una hoja de cálculo que lo hace ver menor.',
        },
        {
          title: 'El retainer se sostiene en reportes',
          text: 'El valor que entregas cada mes aparece como un archivo, no como un sistema.',
        },
        {
          title: 'Crecer significa más de lo mismo',
          text: 'Pasar de 5 a 15 clientes no debería significar triplicar las horas de reporting.',
        },
      ],
    },
    proof: {
      index: '02',
      heading: 'Sistemas ya en marcha',
      highlight: 'en agencias.',
      intro: 'Tres agencias, tres sectores, las mismas horas devueltas al equipo.',
      stats: [
        { value: '20+', label: 'clientes que reportan con estos sistemas' },
        { value: '60 h', label: 'ahorradas al mes en una agencia SEO' },
        { value: '12 h', label: 'ahorradas a la semana en una agencia de growth' },
        { value: '10 h', label: 'ahorradas a la semana en una agencia de ecommerce' },
      ],
    },
    sprint: {
      index: '03',
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
    },
    fit: {
      index: '04',
      heading: '¿Es para',
      highlight: 'tu agencia?',
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
    faq: {
      index: '05',
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
  services: {
    seo: {
      title: 'Servicios · Sistema de reporting para agencias | Alex Spelucin',
      description:
        'Un solo servicio de punta a punta: auditoría, modelo de datos, warehouse, dashboards, entrega y automatización para el reporting de tus clientes.',
    },
    hero: {
      badge: 'Servicios',
      headline: 'El sistema detrás de los',
      highlight: 'reportes de tus clientes.',
      sub: 'Un solo servicio, de punta a punta: auditoría, modelo de datos, warehouse, dashboards, entrega y automatización.',
    },
    components: {
      index: '01',
      heading: 'Qué incluye',
      highlight: 'el sistema.',
      intro: 'Seis piezas que llegan juntas. Sin archivos sueltos ni dependencias escondidas.',
      items: [
        {
          title: 'Auditoría de fuentes',
          text: 'Cada plataforma de donde salen los números de tus clientes, auditada por exactitud.',
          tags: ['Fuentes', 'QA', 'Exactitud'],
        },
        {
          title: 'Modelo y warehouse',
          text: 'BigQuery con transformaciones en Dataform. Una sola fuente de verdad.',
          tags: ['BigQuery', 'Dataform'],
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
          text: 'Para que el sistema lo opere tu equipo, no yo.',
          tags: ['Docs', 'Entrenamiento'],
        },
      ],
    },
    proof: {
      index: '02',
      heading: 'Probado en',
      highlight: 'agencias reales.',
      intro: 'Las horas que estos sistemas devolvieron a los equipos.',
      stats: [
        { value: '20+', label: 'clientes que reportan con estos sistemas' },
        { value: '60 h', label: 'ahorradas al mes en una agencia SEO' },
        { value: '12 h', label: 'ahorradas a la semana en una agencia de growth' },
        { value: '10 h', label: 'ahorradas a la semana en una agencia de ecommerce' },
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
      title: 'Trabajo · Sistemas de reporting reales | Alex Spelucin',
      description:
        'Tres sistemas de medición y reporting construidos para agencias: dashboards reales y las horas que devolvieron a cada equipo.',
    },
    hero: {
      index: '01',
      heading: 'Sistemas de reporting',
      highlight: 'reales.',
      sub: 'Tres sistemas construidos para agencias. Mira los dashboards reales y las horas que ahorraron.',
    },
    cases: [
      {
        slug: 'torices',
        client: 'Torices Digital',
        sector: 'Growth marketing',
        year: '2026',
        title: 'Reporting orgánico y pagado cara a cara',
        summary:
          'Una serie de reportes que muestra el impacto del tráfico orgánico y pagado frente a frente, con las fuentes de datos auditadas.',
        result: '12 h ahorradas / semana',
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
          'Un sistema de medición y reportes para que la agencia muestre resultados a sus clientes B2B/SaaS, con medición de páginas por reporte y 2 conectores custom.',
        result: '60 h ahorradas / mes',
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
        result: '10 h ahorradas / semana',
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
    heading: 'Hablemos.',
    sub: 'Una llamada de 20 minutos, sin pitch. Trae un reporte que entregues seguido.',
    emailLabel: 'Escríbeme',
    calLabel: 'Agendar llamada',
    linkedinLabel: 'LinkedIn',
    availability: 'Disponible para agencias en LATAM, España y US.',
  },
  caseStudies: {
    torices: {
      slug: 'torices',
      client: 'Torices Digital',
      sector: 'Growth marketing',
      year: '2026',
      kicker: 'Caso de estudio',
      title: 'Reporting de orgánico y pagado cara a cara',
      heroResult: '12 h ahorradas / semana',
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
            text: '12+ cuentas auditadas para que los números llegaran limpios a los reportes.',
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
          { value: '12+', label: 'cuentas auditadas' },
          { value: '12 h', label: 'ahorradas por semana' },
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
      heroResult: '10 h ahorradas / semana',
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
          text: 'Los números estaban; la historia del trimestre, no.',
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
            title: '5 fuentes en un solo lugar',
            text: 'Los datos confluyen en una vista única por cliente.',
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
          { value: '12+', label: 'clientes reportando' },
          { value: '10 h', label: 'ahorradas por semana' },
          { value: '05', label: 'fuentes de datos' },
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
      heroResult: '60 h ahorradas / mes',
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
        'Notebook es una agencia SEO premier con clientes B2B y SaaS. Su reporting tenía que justificar estrategia con data, cada mes, a escala.',
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
            text: 'Conectado a cada reporte, para que cada entregable lleve la data que describe.',
          },
          {
            title: '2 conectores custom de Data Studio',
            text: 'Alimentan el dashboard con seguimiento de consultas SEO.',
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
          { value: '20+', label: 'clientes reportando' },
          { value: '60 h', label: 'ahorradas por mes' },
          { value: '02', label: 'conectores custom' },
        ],
      },
    },
  },
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
    exploreNav: 'Explorar',
    contactNav: 'Contacto',
    legalNav: 'Legal',
    rights: '© 2026 Alex Spelucin',
    privacy: 'Privacidad',
    terms: 'Términos',
  },
};
