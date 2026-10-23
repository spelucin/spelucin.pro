import type { Translations } from './types';

export const es: Translations = {
  lang: 'es',
  htmlLang: 'es',
  ogLocale: 'es_ES',
  meta: {
    title: 'Alex Spelucin · Datos para ecommerce',
    description:
      'Analítica y sistemas de datos para tiendas LATAM en crecimiento que invierten en publicidad: tracking, reporting y análisis de negocio.',
    imageAlt: 'Alex Spelucin, datos y analítica para ecommerce',
  },
  skipLink: 'Saltar al contenido',

  siteNav: [
    { label: 'Servicios', href: '/servicios' },
    { label: 'Plataformas', href: '/plataformas' },
    { label: 'Casos', href: '/case-studies' },
    { label: 'Sobre mí', href: '/about' },
  ],
  ctaLabel: 'Agendar llamada',
  ctaSeeWork: 'Ver casos',
  calModal: {
    label: 'Agendar una llamada',
    close: 'Cerrar',
  },

  home: {
    hero: {
      headline: 'Medición para ecommerce',
      highlight: 'que ayuda a decidir mejor.',
      sub: 'Implementación y auditoría de tracking, reporting conectado y análisis de rendimiento para tiendas LATAM en crecimiento que invierten en publicidad. Shopify es el foco inicial; Tiendanube se valida con tiendas locales.',
    },
    problem: {
      heading: 'El problema no es la falta de datos.',
      highlight: 'Es la falta de claridad.',
      intro: 'La tienda, el analytics y la publicidad hablan idiomas distintos. El equipo termina decidiendo con la versión que tenga más a mano.',
      items: [
        {
          title: 'Números que no cuadran',
          text: 'Shopify, GA4 y ads muestran resultados distintos para el mismo periodo.',
        },
        {
          title: 'Reportes hechos a mano',
          text: 'Cada revisión empieza exportando, limpiando y armando la misma vista otra vez.',
        },
        {
          title: 'Decisiones a ciegas',
          text: 'Los cambios se intuyen, pero no hay evidencia para confirmar qué funcionó.',
        },
        {
          title: 'Medición incompleta',
          text: 'Eventos, píxeles y consentimiento dejan huecos que distorsionan la lectura.',
        },
      ],
    },
    offers: {
      heading: 'Lo que puedo',
      highlight: 'ordenar.',
      intro: 'Cuatro servicios independientes. Empieza por el que responde a tu necesidad actual; combínalos solo cuando aporte valor.',
    },
    process: {
      heading: 'Un proceso',
      highlight: 'sin cajas negras.',
      intro: 'Primero entiendo el negocio y después construyo lo que hace falta.',
      weeks: [
        {
          title: 'Contexto',
          text: 'Revisamos la tienda, las fuentes disponibles y la decisión que necesitas tomar.',
        },
        {
          title: 'Definir el alcance',
          text: 'Elegimos implementación, correcciones, reporting o análisis según la necesidad real.',
        },
        {
          title: 'Hacer el trabajo acordado',
          text: 'Configuro, corrijo, conecto o analizo solo lo incluido en el proyecto.',
        },
        {
          title: 'Handover',
          text: 'Documento supuestos y entregables para que el equipo pueda usar el resultado.',
        },
      ],
      includeHeading: 'Qué incluye',
      include: [
        'Tracking configurado o revisado',
        'Métricas con definiciones documentadas',
        'Reporting conectado cuando hace falta',
        'Validación de datos clave',
        'Handover claro',
      ],
      fit: {
        goodHeading: 'Buen fit si',
        good: [
          'Ya vendes y tienes tráfico',
          'Usas Shopify, Tiendanube, GA4 o ads',
          'Quieres decisiones basadas en datos',
          'Necesitas una lectura que se sostenga',
        ],
        poorHeading: 'No es tu caso si',
        poor: [
          'Todavía no tienes operación',
          'Buscas una garantía de ventas',
          'Solo necesitas una captura para una presentación',
        ],
      },
    },
    proof: {
      heading: 'Datos ordenados,',
      highlight: 'decisiones distintas.',
      intro: 'Un caso de ecommerce donde el trabajo fue unir métricas dispersas en una lectura compartida.',
      stats: [
        { value: '10+', label: 'clientes atendidos en el caso' },
        { value: '03', label: 'tipos de fuentes revisadas' },
        { value: '01', label: 'vista de reporting por cliente' },
      ],
      featured: ['owlbox'],
      caseCta: 'Leer el caso',
    },
    faq: {
      heading: 'Preguntas',
      highlight: 'frecuentes.',
      items: [
        {
          q: '¿Trabajas con tiendas pequeñas?',
          a: 'Sí, siempre que ya haya ventas, tráfico y datos que valga la pena revisar. El alcance se adapta al tamaño de la operación.',
        },
        {
          q: '¿Puedo contratar solo una parte?',
          a: 'Sí. Implementación, correcciones, reporting y análisis son servicios independientes. No necesitas una auditoría si no responde a tu necesidad.',
        },
        {
          q: '¿Trabajas con Shopify y Tiendanube?',
          a: 'Shopify es el foco inicial. Tiendanube se está validando con tiendas LATAM. En ambos casos, el alcance depende de permisos y datos disponibles.',
        },
        {
          q: '¿Garantizas más ventas?',
          a: 'No. Mejoro la calidad de los datos y de las decisiones. No prometo ventas, ROAS ni recuperación de ingresos.',
        },
      ],
    },
  },

  process: {
    heading: 'Así empieza el trabajo.',
    intro: 'Una conversación corta para entender el contexto y decidir qué conviene resolver primero.',
    steps: [
      {
        title: 'Llamada',
        text: 'Revisamos la tienda, las fuentes y la pregunta que hoy no puedes responder.',
      },
      {
        title: 'Alcance',
        text: 'Elegimos implementación, correcciones, reporting o análisis según la necesidad; la auditoría es opcional.',
      },
      {
        title: 'Trabajo',
        text: 'Construyo sobre las fuentes y herramientas que tu equipo ya usa.',
      },
      {
        title: 'Entrega',
        text: 'Documento el sistema y dejo claro cómo usarlo después.',
      },
    ],
  },

  stack: {
    heading: 'Bajo el capó',
    highlight: 'de los datos.',
    intro: 'Elijo la arquitectura confiable más simple para las fuentes y la pregunta. Uso BigQuery cuando la escala y las transformaciones lo justifican.',
    layers: [
      {
        name: 'Tienda y medición',
        items: [
          { name: 'Shopify', icon: 'simple-icons:shopify' },
          { name: 'Tiendanube' },
          { name: 'GA4', icon: 'simple-icons:googleanalytics' },
          { name: 'GTM', icon: 'simple-icons:googletagmanager' },
        ],
      },
      {
        name: 'Adquisición y reporting',
        items: [
          { name: 'Meta Ads', icon: 'simple-icons:meta' },
          { name: 'Google Ads', icon: 'simple-icons:googleads' },
          { name: 'Looker Studio', icon: 'simple-icons:googledatastudio' },
          { name: 'BigQuery', icon: 'simple-icons:googlecloud' },
        ],
      },
    ],
  },

  ctaSection: {
    heading: '¿Tus números de ecommerce no cuadran?',
    sub: 'En 20 minutos revisamos qué fuentes tienes y por dónde conviene empezar.',
    hint: 'Disponible en español e inglés.',
  },

  work: {
    seo: {
      title: 'Casos de datos para ecommerce | Alex Spelucin',
      description:
        'Un caso de ecommerce donde dashboards y fuentes conectadas reemplazaron una revisión manual de métricas.',
    },
    hero: {
      eyebrow: 'CASOS',
      heading: 'Datos que terminaron',
      highlight: 'en una decisión.',
      sub: 'Una mirada al problema, el trabajo y lo que quedó funcionando.',
    },
    caseCta: 'Ver caso completo',
    cases: [
      {
        slug: 'owlbox',
        client: 'Owlbox',
        sector: 'Ecommerce',
        year: '2024',
        title: 'Dashboards de ecommerce para clientes LATAM',
        summary:
          'Dashboards con las métricas que sus clientes necesitaban: ROAS, ingresos de paid, gasto y mejores productos.',
        alt: 'Vista de los dashboards de comercio electrónico de Owlbox',
      },
    ],
  },

  aboutPage: {
    seo: {
      title: 'Sobre mí · Datos para ecommerce | Alex Spelucin',
      description:
        'Trabajo entre ecommerce y data: medición confiable, dashboards claros y análisis que el equipo puede usar.',
    },
    hero: {
      headline: 'De la medición',
      highlight: 'a la decisión.',
      sub: 'Analista de datos enfocado en ecommerce. Ordeno la medición, construyo dashboards y ayudo a leer los resultados.',
    },
    capabilities: {
      heading: 'Cómo ayudo a',
      highlight: 'equipos de ecommerce.',
      intro: 'Cuatro servicios independientes que conectan medición, reporting y decisiones de negocio.',
    },
  },

  contactPage: {
    seo: {
      title: 'Contacto · Hablemos de tus datos | Alex Spelucin',
      description: 'Una llamada de 20 minutos para revisar tus fuentes y ver qué conviene ordenar primero.',
    },
    heading: 'Hablemos de los datos de tu tienda.',
    sub: 'En 20 minutos revisamos qué fuentes tienes, qué no cuadra y por dónde conviene empezar.',
    emailLabel: 'Escríbeme',
    calLabel: 'Agendar llamada',
    linkedinLabel: 'LinkedIn',
    availability: 'Disponible para tiendas en LATAM, España y Estados Unidos.',
  },

  caseStudies: {
    challengeHeading: 'El desafío',
    contextHeading: 'Contexto',
    galleryHeading: 'El trabajo',
    moreHeading: 'Más casos',
    backToWork: 'Volver a los casos',
    outcomeLabel: 'Resultado clave',
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
        'Owlbox es una agencia de growth para ecommerce con clientes en toda LATAM. Necesitaba tener las métricas principales en un mismo lugar durante las revisiones.',
      ],
      problems: [
        {
          title: 'Métricas clave dispersas',
          text: 'ROAS, ingresos de paid, gasto y top products estaban repartidos en varias vistas.',
        },
        {
          title: 'Sin una vista compartida por cliente',
          text: 'Cada revisión empezaba juntando números de distintos lugares.',
        },
        {
          title: 'Las métricas no estaban juntas',
          text: 'La revisión dependía de volver a reunir los datos cada vez.',
        },
      ],
      built: {
        heading: 'Qué construimos',
        items: [
          {
            title: 'Set de dashboards por cliente',
            text: 'Dashboards con ROAS, ingresos de paid, gasto y mejores productos por cliente.',
          },
          {
            title: 'Una vista compartida por cliente',
            text: 'Meta Ads, CRM y GA4 aparecen en el mismo contexto para cada cliente.',
          },
          {
            title: 'Plantilla que se repite',
            text: 'La misma estructura para cada cliente nuevo.',
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
  },

  header: {
    langLabel: 'Cambiar idioma',
  },
  hero: {
    role: 'Analista de datos para ecommerce',
  },
  about: {
    heading: 'Sobre mí',
    kicker: 'Quién soy',
    paragraphs: [
      'Trabajo entre ecommerce y data. Ordeno la medición, construyo dashboards y ayudo a que los equipos lean sus resultados sin depender de planillas.',
      'Empecé en analítica digital y después lideré medición y analítica en equipos de growth para ecommerce. El problema suele repetirse: hay datos, pero no siempre está claro cuál número usar.',
    ],
    meta: [
      { label: 'Base', value: 'Lima, Perú' },
      { label: 'Idiomas', value: 'Español · Inglés' },
      { label: 'Enfoque', value: 'Ecommerce analytics' },
    ],
    portraitAlt: 'Retrato de Alex Spelucin',
  },
  focus: {
    items: [
      {
        name: 'Implementación de tracking',
        tagline: 'GA4, GTM y eventos de ecommerce',
        detail:
          'Configuro eventos estándar de ecommerce y compras, valido el recorrido estándar y documento la implementación.',
        tags: ['GA4', 'GTM', 'Compra'],
      },
      {
        name: 'Auditoría y corrección de tracking',
        tagline: 'Hallazgos, prioridades y arreglos acordados',
        detail:
          'Reviso la medición existente, defino qué corregir y valido solo los arreglos limitados incluidos en el alcance.',
        tags: ['GA4', 'GTM', 'QA'],
      },
      {
        name: 'Sistemas de datos y reporting',
        tagline: 'Una vista conectada para el equipo',
        detail:
          'Conecto datos de tienda, analytics y publicidad con la arquitectura confiable más simple y reglas de métricas documentadas.',
        tags: ['Fuentes', 'Dashboards', 'SQL cuando hace falta'],
      },
      {
        name: 'Análisis de negocio',
        tagline: 'Evidencia, explicación y próximos pasos',
        detail:
          'Investigo una pregunta de rendimiento definida. CAC, LTV y rentabilidad requieren suficiente historial y datos de costos relevantes.',
        tags: ['Adquisición', 'Retención', 'Productos'],
      },
    ],
  },
  footer: {
    tagline: 'Tracking, sistemas de datos y análisis para ecommerce.',
    exploreNav: 'Explorar',
    contactNav: 'Contacto',
    legalNav: 'Legal',
    rights: '© 2026 Alex Spelucin',
    legal: 'Privacidad y términos',
  },
};

export const t = es;
