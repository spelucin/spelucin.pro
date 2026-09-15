import type { Translations } from './types';

export const t: Translations = {
  lang: 'es',
  htmlLang: 'es',
  ogLocale: 'es_ES',
  meta: {
    title: 'Alex Spelucin · Analista de marketing y datos',
    description:
      'Ayudo a equipos y agencias de marketing a trabajar con datos confiables. Diseño medición y reporting que el equipo puede usar cada día.',
    imageAlt: 'Alex Spelucin · Analista de marketing y datos',
  },
  skipLink: 'Saltar al contenido',
  siteNav: [
    { label: 'Casos', href: '/case-studies' },
    { label: 'Agencias SEO', href: '/agencias-seo' },
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
      sub: 'Armo sistemas de medición y reporting para que una agencia pueda entregar sin depender de quien prepara el reporte.',
      visualAlt: 'Vista de un sistema de reporting de marketing',
    },
    trust: {
      label: 'Clientes con los que he trabajado:',
    },
    problem: {
      heading: 'El costo de armar',
      highlight: 'reportes a mano.',
      intro:
        'Si cada reporte empieza desde cero, los errores y las esperas terminan formando parte del trabajo.',
      items: [
        {
          title: 'Lo mismo, todos los meses',
          text: 'Exportar, pegar datos y ajustar formatos para cada cliente. Es tiempo que el equipo podría usar en otra cosa.',
        },
        {
          title: 'Números que no cuadran',
          text: 'Ads dice una cosa y la consola del cliente dice otra. Antes de hablar de resultados, hay que resolver cuál número vale.',
        },
        {
          title: 'Cada cliente suma trabajo',
          text: 'Un cliente nuevo trae otra hoja, otra plantilla y más horas de tu analista.',
        },
      ],
    },
    service: {
      heading: 'El Sprint del',
      highlight: 'Sistema de Reporting.',
      intro: 'En cuatro semanas ordenamos las fuentes, definimos las métricas y dejamos funcionando el sistema detrás de tus reportes.',
      weeks: [
        { title: 'Semana 1 · Auditoría', text: 'Revisamos las fuentes y los reportes. Dejamos anotadas las diferencias.' },
        { title: 'Semana 2 · Modelo y diseño', text: 'Definimos las métricas y dibujamos los dashboards antes de construirlos.' },
        { title: 'Semana 3 · Construcción', text: 'Trabajamos el warehouse, las transformaciones y los primeros dashboards.' },
        { title: 'Semana 4 · Entrega', text: 'Automatizamos, documentamos y dejamos al equipo listo para operarlo.' },
      ],
      includeHeading: 'Qué incluye',
      include: ['Un modelo de datos documentado', 'Dashboards en Looker Studio', 'Entrega automatizada', 'Docs de handover'],
      fit: {
        goodHeading: 'Buen fit',
        good: [
          'Reportas para 5+ clientes',
          'Ya usas (o quieres) Looker Studio',
          'Los números nunca acaban de cuadrar',
         'Quieres dejar de apagar incendios con cada reporte',
        ],
        poorHeading: 'No es tu caso si',
        poor: [
          'Buscas un dashboard gratis para un solo canal',
          'Eres un equipo de uno que solo quiere un reporte puntual',
         'Quieres reemplazar al equipo, no mejorar cómo trabaja',
        ],
      },
    },
    proof: {
      heading: 'Reporting para agencias de',
      highlight: 'growth, ecommerce y SEO.',
      intro: 'Trabajo con equipos que reportan para varios clientes y necesitan mantener el mismo criterio en cada entrega.',
      stats: [
        { value: '6+', label: 'años en analítica de marketing' },
        { value: '15-20', label: 'cuentas concurrentes en Notebook Agency' },
        { value: '10+', label: 'clientes en sistemas de reporting para Torices' },
        { value: '20+', label: 'dashboards entregados como freelance' },
      ],
      featured: ['notebook', 'torices', 'owlbox'],
      caseCta: 'Ver caso',
    },
    faq: {
      heading: 'Preguntas',
      highlight: 'frecuentes.',
      items: [
        {
          q: '¿Reemplazan nuestras herramientas?',
          a: 'No. Si ya usas Looker Studio, trabajamos sobre eso. BigQuery y Apps Script quedan detrás.',
        },
        {
          q: '¿Cuánto hasta el primer dashboard?',
          a: 'El primer dashboard de clientes llega durante el sprint, normalmente en la semana 3.',
        },
        {
          q: '¿Trabajan con los conectores que ya usamos?',
          a: 'Por lo general, sí. Las fuentes de Google conectan de forma nativa. Las demás pueden entrar por API al warehouse.',
        },
        {
          q: '¿Qué necesitan de nosotros?',
          a: 'Acceso de lectura a las fuentes y 30 minutos a la semana con quien hoy hace los reportes.',
        },
        {
          q: '¿Qué pasa después del sprint?',
          a: 'El sistema queda documentado y automatizado. Después puedes pedir cambios puntuales o dejarlo en manos del equipo.',
        },
      ],
    },
  },
  seoAgencies: {
    seo: {
      title: 'Sistemas de medición para agencias SEO | Alex Spelucin',
      description:
        'Medición y reporting para agencias SEO: tracking de páginas, GA4, Search Console, BigQuery y Looker Studio en un sistema que puedes repetir con cada cliente.',
    },
    hero: {
      eyebrow: 'AGENCIAS SEO',
      headline: 'Sistemas de medición para',
      highlight: 'agencias SEO.',
      sub: 'Un sistema de medición y reporting que tu agencia puede repetir con cada cliente.',
      visualAlt: 'Vista del sistema de reporting que la agencia repite con cada cliente',
      ctaPrimary: 'Agendar una revisión de medición',
    },
    credibility: {
      label: 'Hecho para el reporting de agencias',
      text: 'Soy Alex Spelucin. Diseño sistemas de medición para agencias y equipos de reporting.',
    },
    problem: {
      heading: 'Por qué las agencias se queman',
      highlight: 'con la medición.',
      intro: 'Muchas agencias no necesitan otra herramienta. Necesitan dejar de armar el mismo reporte a mano cada mes.',
      items: [
        {
          title: 'Reportes hechos a mano',
          text: 'Exportar, pegar datos y ajustar formatos. Los números terminan dependiendo de quién armó la hoja.',
        },
        {
          title: 'Números que no cuadran',
          text: 'GA4, Search Console y las herramientas del cliente no siempre cuentan lo mismo.',
        },
        {
          title: 'Cada cliente empieza desde cero',
          text: 'Sin una base común, cada cliente exige volver a montar la medición.',
        },
        {
          title: 'Crecer significa más trabajo manual',
          text: 'El trabajo crece al mismo ritmo que la cartera y tus analistas absorben la diferencia.',
        },
        {
          title: 'El conocimiento vive en una persona',
          text: 'Si la única documentación es la persona que armó los reportes, la agencia queda expuesta.',
        },
        {
          title: 'Los competidores van un paso adelante',
          text: 'Una medición que se repite permite preparar propuestas y entregas con menos trabajo manual.',
        },
      ],
    },
    system: {
      heading: 'Un solo sistema,',
      highlight: 'tres partes.',
      intro: 'Los tres pasos están conectados. Cuando llega un cliente nuevo, no hay que inventar el sistema otra vez.',
      blocks: [
        {
          title: 'Medir',
          text: 'Revisamos la medición donde nace el dato.',
          detail:
            'Cada fuente se audita una sola vez: los eventos de GA4, las páginas y consultas de Search Console y el tracking a nivel de página quedan documentados y funcionando desde el primer día.',
          image: {
            alt: 'Auditoría de las fuentes de datos del sistema de medición',
            caption: 'Auditoría de fuentes',
          },
        },
        {
          title: 'Modelar',
          text: 'Dejamos claro qué significa cada métrica.',
          detail:
            'Con la base documentada, definimos un diccionario de métricas y un marco de KPIs que el equipo puede consultar. Cada número en un reporte tiene una fuente y una definición.',
          image: {
            alt: 'Estructura de la base de datos y el etiquetado de métricas',
            caption: 'Base de datos y etiquetado',
          },
        },
        {
          title: 'Reportar y escalar',
          text: 'Reportes con la misma lógica, listos para escalar.',
          detail:
            'Los dashboards en Looker Studio se construyen una vez y se reutilizan. El reporting periódico queda documentado y cada cliente nuevo parte de una base que ya funciona.',
          image: {
            alt: 'Dashboards de reporting en Looker Studio',
            caption: 'Dashboards',
          },
        },
      ],
    },
    caseStudy: {
      heading: 'Un sistema de medición,',
      highlight: 'de verdad.',
      intro: 'Notebook Agency necesitaba sostener su estrategia con datos, mes tras mes y para varios clientes. El sistema ahora alimenta cada reporte.',
      points: [
        '30+ clientes SEO atendidos por el sistema',
        'Enfoque de auditoría GA4 primero',
        'Una base de reporting que se puede repetir',
        'Medición a nivel de página',
        'Medición a nivel de consulta',
        'Reportes nuevos sin empezar desde cero',
      ],
      cta: 'Leer el caso de estudio de Notebook',
    },
    offer: {
      heading: 'Un punto de entrada',
      highlight: 'de bajo costo.',
      name: 'Revisión de medición',
      tag: 'Punto de partida',
      paragraphs: [
        'Tomamos un cliente y un reporte. Reviso cómo funciona la medición, dónde se separan los números y qué páginas o consultas explican el resultado.',
        'Te llevas una revisión escrita para compartir con el cliente y una lista clara de lo que conviene corregir después.',
      ],
      items: [
        'Revisión de tu configuración actual de GA4 y Search Console',
        'Diferencias entre plataformas',
        'Páginas y consultas que explican el resultado',
        'Una vista a nivel de página de lo que mueve el resultado',
        'Un documento que puedes compartir con el cliente',
        'Siguientes pasos concretos',
      ],
      cta: 'Agendar una revisión de medición',
      ctaHint: '30 minutos, sin pitch.',
    },
    engagement: {
      heading: 'Empieza con un cliente,',
      highlight: 'después escala.',
      intro: 'Empezamos con un cliente. Si funciona para el equipo, lo extendemos al resto.',
      steps: [
        {
          title: 'Auditoría',
          text: 'Revisamos fuentes, eventos, páginas y consultas en un cliente. Así vemos qué está pasando antes de cambiar nada.',
        },
        {
          title: 'Modelo y diseño',
          text: 'Definimos las métricas y dejamos escrito qué significa cada número para tu equipo.',
        },
        {
          title: 'Construcción',
          text: 'Corregimos la fuente y armamos el reporting. El primer dashboard llega durante las primeras semanas.',
        },
        {
          title: 'Entrega',
          text: 'Documentamos el modelo, las fuentes y la automatización para que el próximo cliente empiece desde la misma base.',
        },
      ],
    },
    fit: {
      heading: 'Dónde',
      highlight: 'encaja.',
      goodHeading: 'Te puede servir si:',
      good: [
        'Reportas para clientes SEO y los números no terminan de cuadrar',
        'Quieres relacionar la estrategia con lo que hacen las páginas y consultas',
        'Quieres que los clientes nuevos partan de una base común',
      ],
      poorHeading: 'No es para ti si:',
      poor: [
        'Trabajas por tu cuenta con un solo cliente',
        'Buscas un dashboard gratis para resolver algo puntual',
        'Quieres contratar a un analista, no mejorar el sistema del equipo',
      ],
    },
    faq: {
      heading: 'Preguntas',
      highlight: 'frecuentes.',
      items: [
        {
          q: '¿Reemplazan nuestras herramientas actuales?',
          a: 'No. Trabajamos con tus herramientas, normalmente GA4, Search Console y Looker Studio. BigQuery y Apps Script quedan detrás.',
        },
        {
          q: '¿En qué se diferencia de contratar un analista?',
          a: 'Un analista puede resolver el reporte de este mes. El sistema deja el trabajo documentado para que el equipo pueda repetirlo.',
        },
        {
          q: '¿Necesitamos tener todo en BigQuery?',
          a: 'No. Partimos de donde vive tu data y movemos solo lo que hay que mover.',
        },
        {
          q: '¿Para qué agencias es?',
          a: 'Agencias SEO con clientes B2B o SaaS que reportan cada mes para varias cuentas. Si tienes un solo cliente, quizá sea demasiado.',
        },
        {
          q: '¿Cómo empezamos?',
          a: 'En una llamada de 20 minutos vemos un reporte que ya entregues y elegimos el primer problema que conviene resolver.',
        },
      ],
    },
    finalCta: {
      heading: '¿Tu sistema de reporting está listo',
      highlight: 'para los próximos 20 clientes?',
      sub: 'Empezamos por un cliente y dejamos una base que el equipo pueda repetir.',
      ctaPrimary: 'Agendar una revisión de medición',
    },
  },
  process: {
    heading: 'Así empieza el trabajo.',
    intro: 'Primero revisamos cómo trabajas. Después decidimos qué conviene construir.',
    steps: [
      {
        title: 'Auditoría',
        text: 'Revisamos tus fuentes, tus reportes y el origen de las diferencias.',
      },
      {
        title: 'Modelo y diseño',
        text: 'Acordamos las métricas, el modelo y los dashboards antes de construir.',
      },
      {
        title: 'Construcción',
        text: 'Construimos el warehouse, las transformaciones y los dashboards con los nombres y procesos de tu equipo.',
      },
      {
        title: 'Entrega',
        text: 'Documentamos y automatizamos el trabajo para que el equipo pueda operarlo.',
      },
    ],
  },
  stack: {
    heading: 'La parte técnica que sostiene',
    highlight: 'el reporting.',
    intro: 'La data vive en BigQuery, se transforma con SQL y llega a los dashboards de Looker Studio.',
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
          { name: 'Looker Studio', icon: 'simple-icons:googledatastudio' },
        ],
      },
    ],
  },
  ctaSection: {
    heading: 'Trae un reporte que te quite tiempo.',
    sub: 'En 20 minutos revisamos dónde se atasca el trabajo y qué se puede automatizar primero.',
    hint: 'Disponible en español e inglés.',
  },
  services: {
    seo: {
      title: 'Servicios · Sistema de reporting para agencias | Alex Spelucin',
      description:
        'Reporting y medición para agencias: fuentes revisadas, KPIs claros, dashboards y documentación para trabajar con cada cliente.',
    },
    hero: {
      badge: 'Servicios',
      headline: 'Reporting para',
      highlight: 'agencias que crecen.',
      sub: 'Reviso las fuentes, ordeno las métricas y dejo dashboards y documentación que el equipo pueda mantener.',
    },
    components: {
      heading: 'Qué necesita tu',
      highlight: 'reporting.',
      intro: 'Lo que hace falta para que un reporte deje de depender de una sola persona.',
      items: [
        {
          title: 'Auditoría de fuentes',
          text: 'Reviso las plataformas de donde salen los números de tus clientes.',
          tags: ['Fuentes', 'QA', 'Exactitud'],
        },
        {
          title: 'Modelo de datos',
          text: 'Dejamos claro de dónde sale cada número y cómo entra en el reporte.',
          tags: ['KPIs', 'Fuentes', 'Modelo'],
        },
        {
          title: 'Dashboards',
          text: 'Vistas de Looker Studio para tomar decisiones y trabajar en el día a día.',
          tags: ['Looker Studio', 'KPIs'],
        },
        {
          title: 'Entrega automatizada',
          text: 'Hojas de Google y envíos programados con Apps Script.',
          tags: ['Sheets', 'Apps Script'],
        },
        {
          title: 'Chequeos de calidad',
          text: 'Alertas cuando una métrica cambia o deja de cuadrar.',
          tags: ['Alertas', 'Monitoreo'],
        },
        {
          title: 'Documentación y handover',
          text: 'Documentación para que el equipo pueda mantener el reporting.',
          tags: ['Docs', 'Entrenamiento'],
        },
      ],
    },
    faq: {
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
          a: 'Una llamada de 20 minutos. Si tiene sentido, definimos un sprint con alcance y precio fijos.',
        },
      ],
    },
  },
  work: {
    seo: {
      title: 'Casos de estudio · Sistemas de reporting | Alex Spelucin',
      description:
        'Casos de medición y reporting para agencias, con dashboards y decisiones técnicas documentadas.',
    },
    hero: {
      eyebrow: 'Casos de Estudio',
      heading: 'Casos de estudio',
      highlight: 'reales.',
      sub: 'Casos de agencias: qué problema había, qué construimos y cómo quedó el trabajo.',
    },
    caseCta: 'Ver caso completo',
    cases: [
      {
        slug: 'torices',
        client: 'Torices Digital',
        sector: 'Growth marketing',
        year: '2026',
        title: 'Reporting orgánico y pagado cara a cara',
        summary:
          'Una serie de reportes que pone el tráfico orgánico y pagado en paralelo, con las fuentes revisadas.',
        alt: 'Vista de los reportes de tráfico orgánico y pagado de Torices Digital',
      },
      {
        slug: 'notebook',
        client: 'Notebook Agency',
        sector: 'SEO · B2B/SaaS',
        year: '2025',
        title: 'Medición conectada a cada reporte',
        summary:
          'Un sistema de medición y reporting para clientes B2B/SaaS, con datos de páginas dentro de cada reporte.',
        alt: 'Vista del sistema de medición y reportes de Notebook Agency',
      },
      {
        slug: 'owlbox',
        client: 'Owlbox',
        sector: 'Ecommerce',
        year: '2024',
        title: 'Dashboards de ecommerce para clientes LATAM',
        summary:
          'Dashboards con las métricas que sus clientes necesitan: ROAS, ingresos de paid, gasto y mejores productos.',
        alt: 'Vista de los dashboards de comercio electrónico de Owlbox',
      },
    ],
  },
  aboutPage: {
    seo: {
      title: 'Sobre mí · Analista de datos de marketing | Alex Spelucin',
      description:
        'Trabajo entre marketing y data: medición confiable, reporting que el equipo puede mantener y sistemas que se usan a diario.',
    },
    hero: {
      headline: 'De SEO enterprise a sistemas',
      highlight: 'de reporting para agencias.',
      sub: 'Analista de datos de marketing. Armo los sistemas que usan las agencias para reportar.',
    },
    capabilities: {
      heading: 'Lo que sé',
      highlight: 'hacer.',
      intro: 'Tres áreas en las que trabajo con equipos de marketing.',
    },
  },
  contactPage: {
    seo: {
      title: 'Contacto · Hablemos | Alex Spelucin',
      description: 'Una llamada de 20 minutos para ver si un sistema de reporting puede ayudar a tu agencia.',
    },
    heading: 'Hablemos de cómo trabaja tu equipo.',
    sub: 'En 20 minutos revisamos un reporte que entregues seguido y vemos dónde se está yendo el tiempo.',
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
        'Torices Digital es una agencia de growth marketing que gestiona orgánico y pagado. Necesitaba comparar ambos canales sin tener que juntar los números a mano.',
      ],
      problems: [
        {
          title: 'Orgánico y pagado en silos',
          text: 'Dos vistas del mismo embudo que no se podían comparar rápidamente.',
        },
        {
          title: 'Fuentes auditadas a mano',
          text: 'Cada fuente podía mostrar un número distinto y no había una regla común.',
        },
        {
          title: 'Reporting apilado sobre la operación',
          text: 'El reporte se hacía al final del mes, cuando el equipo ya estaba ocupado con la operación.',
        },
      ],
      built: {
        heading: 'Qué construimos',
        items: [
          {
            title: 'Reporting frente a frente',
            text: 'Una serie de reportes que pone el orgánico y el pagado en paralelo.',
          },
          {
            title: 'Auditoría de fuentes',
            text: 'Revisamos las fuentes y dejamos una lógica común para los reportes.',
          },
          {
            title: 'Un sistema reutilizable',
            text: 'La misma lógica para 10+ clientes, sin construir cada reporte desde cero.',
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
        'Notebook es una agencia SEO con clientes B2B y SaaS. Necesitaba usar datos de forma consistente en sus reportes mensuales.',
      ],
      problems: [
        {
          title: 'Reportes rearmados a mano',
          text: 'Cada reporte de cliente se armaba pieza por pieza.',
        },
        {
          title: 'Sin visibilidad a nivel de página',
          text: 'La agencia no podía ver con claridad cómo rendía cada página por cliente.',
        },
        {
          title: 'Data SEO atrapada en tools',
          text: 'El rendimiento por consulta no estaba conectado al resto del reporte.',
        },
      ],
      built: {
        heading: 'Qué construimos',
        items: [
          {
            title: 'Sistema de medición de páginas',
            text: 'Cada entrega incluye los datos de las páginas que analiza.',
          },
          {
            title: 'Seguimiento de consultas SEO',
            text: 'Las consultas SEO quedan conectadas al reporte de cada cliente.',
          },
          {
            title: 'Arquitectura de reporting',
            text: 'Una base común para crear reportes nuevos sin empezar desde cero.',
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
      'Trabajo entre marketing y data. Construyo reporting para agencias: medición confiable, KPIs claros y documentación que el equipo puede mantener.',
      'Empecé en SEO técnico a escala enterprise (Ripley, Intercorp Retail) y después lideré analítica en Notebook Agency. También construí sistemas de reporting para Torices y Owlbox. El problema suele ser el mismo: hay datos, pero no siempre está claro cuál número usar.',
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
          'Defino qué métrica responde cada pregunta, de dónde sale y cómo la usará el equipo.',
        tags: ['KPI frameworks', 'Atribución', 'Funnels'],
      },
      {
        name: 'Medición digital',
        tagline: 'GA4, GTM y tracking confiable',
        detail:
          'Implemento GA4 y GTM con naming consistente, consentimiento, versiones y QA. También reviso por qué no cuadran los números entre plataformas.',
        tags: ['GA4', 'GTM', 'Consent'],
      },
      {
        name: 'Almacenes de datos de marketing',
        tagline: 'Data warehouse de marketing',
        detail:
          'Junto la data de ads, CRM y web en modelos que el equipo puede consultar directamente.',
        tags: ['BigQuery', 'GCP', 'Data warehouse'],
      },
    ],
  },
  footer: {
    tagline: 'Analista de datos de marketing. Reporting para agencias.',
    exploreNav: 'Explorar',
    contactNav: 'Contacto',
    legalNav: 'Legal',
    rights: '© 2026 Alex Spelucin',
    legal: 'Privacidad y términos',
  },
};
