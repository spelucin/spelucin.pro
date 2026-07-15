export type Service = {
  slug: string
  name: string
  price: string
  description: string
  deliverables: string[]
  content: string
  detail: {
    heroHeadline: string
    heroSubheadline: string
    problemContext: string
    pains: string[]
    deliverablesHeadline: string
    deliverablesDescription: string
    idealFor: string
    idealSituations: string[]
    processSteps: { title: string description: string }[]
    faq: { question: string answer: string }[]
    ctaHeadline: string
  }
}

export type CaseStudy = {
  slug: string
  headline: string
  store: string
  industry: string
  country: string
  periodStart: string
  periodEnd: string
  serviceSlug: string
  serviceName: string
  summary: string
  metrics: { label: string before: string after: string delta: string }[]
  context: {
    industry: string
    size: string
    market: string
    stack: string
    trafficBefore: string
    mainProblem: string
    triedBefore: string
  }
  problems: { title: string what: string why: string impact: string }[]
  phases: { name: string weeks: string actions: string[] }[]
  otherWins: string[]
  testimonial: { quote: string name: string role: string store: string } | null
  learnings: string[]
}

export const stats = [
  { value: "10+", label: "Tiendas auditadas" },
  { value: "7 años", label: "Trabajando en SEO" },
  { value: "$42K", label: "Revenue generado de SEO" },
]

export const services: Service[] = [
  {
    slug: "auditoria-seo-tecnica",
    name: "Auditoría SEO Técnica",
    price: "Desde $1,200",
    description:
      "Reporte técnico de 60–120 páginas que cubre indexación, performance, schema, arquitectura y recomendaciones priorizadas por impacto.",
    deliverables: [
      "Análisis de indexación y crawl",
      "Core Web Vitals y performance",
      "Schema markup y datos estructurados",
      "Arquitectura de URLs y enlaces internos",
      "Hoja de ruta priorizada",
    ],
    content:
      "La Auditoría SEO Técnica es un análisis profundo del código, estructura y configuración de tu tienda Shopify. Me aseguro de que Google pueda rastrear e indexar tu catálogo de forma eficiente. Detectamos cuellos de botella en el rendimiento, problemas de canibalización y errores de schema markup que impiden que tus productos destaquen en los resultados de búsqueda. El entregable final no es un PDF automatizado, sino un plan de acción detallado y priorizado según el impacto en tus ingresos.",
    detail: {
      heroHeadline:
        "Google rastrea tu tienda - pero probablemente no como crees",
      heroSubheadline:
        "Auditoría técnica profunda de tu Shopify para identificar exactamente qué bloquea tu indexación, tu rendimiento y tus rankings.",
      problemContext:
        "La mayoría de tiendas Shopify tienen problemas técnicos críticos que ni siquiera saben que existen.",
      pains: [
        "Tu catálogo tiene miles de URLs pero Google indexa solo una fracción de ellas",
        "Los Core Web Vitals están en rojo y afectan tu posición sin que lo notes en el día a día",
        "El schema markup está mal configurado y tus productos no aparecen en los rich results de Google Shopping",
        "Hay canibalización de keywords entre colecciones que fragmenta tu autoridad y confunde al rastreador",
      ],
      deliverablesHeadline: "Qué obtienes con la auditoría",
      deliverablesDescription:
        "Un reporte técnico de 60 a 120 páginas con hallazgos, evidencia y acciones priorizadas por impacto en revenue - no una lista de errores sin contexto.",
      idealFor: "Ideal para: tiendas con tráfico estancado o en caída",
      idealSituations: [
        "Llevas más de 6 meses sin ver crecimiento en tráfico orgánico y no sabes por qué",
        "Hiciste cambios en el tema, migraste de versión o cambiaste de agencia y el tráfico bajó",
        "Lanzas productos nuevos constantemente pero no aparecen en Google",
        "Tienes más de 500 SKUs y sospechas que hay problemas de crawl budget o duplicados",
      ],
      processSteps: [
        {
          title: "Llamada inicial (30 min)",
          description:
            "Entendemos la situación actual de tu tienda, el contexto de negocio y qué métricas te preocupan.",
        },
        {
          title: "Propuesta y acceso",
          description:
            "Te envío una propuesta detallada. Con tu aprobación, solicito acceso a GSC, GA4 y Shopify (solo lectura).",
        },
        {
          title: "Auditoría y análisis",
          description:
            "Crawleo la tienda, analizo logs si están disponibles, reviso Core Web Vitals, schema, arquitectura y canibalización.",
        },
        {
          title: "Entrega y sesión de revisión",
          description:
            "Recibes el reporte completo y agendamos una sesión de 60 min para revisar hallazgos y resolver dudas.",
        },
      ],
      faq: [
        {
          question: "¿Cuánto tiempo tarda la auditoría?",
          answer:
            "Entre 10 y 15 días hábiles desde que confirmamos el inicio y recibo los accesos. Tiendas muy grandes pueden requerir un plazo adicional.",
        },
        {
          question: "¿Qué accesos necesito darles?",
          answer:
            "Solo lectura a Google Search Console, Google Analytics 4 y acceso colaborador en Shopify (sin acceso a checkout ni datos de clientes).",
        },
        {
          question: "¿El reporte incluye prioridades claras?",
          answer:
            "Sí. Cada hallazgo tiene un nivel de impacto (alto, medio, bajo) y un nivel de dificultad de implementación, para que puedas ordenar el trabajo con tu equipo.",
        },
        {
          question: "¿También implementan las correcciones?",
          answer:
            "La auditoría es un entregable separado. Si necesitas ayuda con la implementación, podemos cotizar eso en un proyecto aparte una vez que tengas el diagnóstico.",
        },
      ],
      ctaHeadline: "Tu tienda merece un diagnóstico honesto.",
    },
  },
  {
    slug: "estrategia-de-catalogo",
    name: "Estrategia de Catálogo",
    price: "Desde $900",
    description:
      "Análisis de mercado y estructura de navegación basado en keyword research, competencia, volúmenes de búsqueda y jerarquía de categorías.",
    deliverables: [
      "Keyword research vertical",
      "Análisis de competidores",
      "Jerarquía y naming de categorías",
      "Estructura de URLs y facetas",
      "Plan de enlaces internos",
    ],
    content:
      "Una mala estructura de catálogo cuesta miles de dólares en ventas perdidas. En este servicio analizamos cómo buscan tus clientes y reestructuramos tus colecciones, subcolecciones y filtros (facetas) en Shopify para capturar esa demanda. Optimizamos el enlazado interno para distribuir la autoridad y creamos una jerarquía de URLs semántica y escalable. Ideal para tiendas que planean expandir su inventario o migrar hacia Shopify.",
    detail: {
      heroHeadline: "Tus clientes buscan. Tu catálogo no aparece.",
      heroSubheadline:
        "Reestructura colecciones, filtros y navegación en Shopify para capturar la demanda real del mercado con datos, no suposiciones.",
      problemContext:
        "La mayoría de tiendas pierden ventas porque su arquitectura no coincide con cómo busca su cliente.",
      pains: [
        "Tus colecciones tienen los nombres que tú usas internamente, no los que escribe tu cliente en Google",
        "Los filtros (facetas) generan cientos de URLs duplicadas que confunden al rastreador y diluyen tu autoridad",
        "No hay jerarquía semántica clara entre categorías principales y subcategorías - todo está al mismo nivel",
        "El enlazado interno distribuye autoridad al azar en lugar de reforzar las páginas con mayor potencial comercial",
      ],
      deliverablesHeadline: "Qué obtienes con la estrategia",
      deliverablesDescription:
        "Un plan completo con keyword research, jerarquía de colecciones, estructura de URLs, manejo de facetas y mapa de enlaces internos - listo para implementar.",
      idealFor: "Ideal para: tiendas que quieren escalar su catálogo",
      idealSituations: [
        "Planeas lanzar nuevas categorías o líneas de productos en los próximos meses",
        "Migraste a Shopify y la estructura quedó igual que antes, sin optimizar para SEO",
        "Tienes muchos productos pero poca visibilidad orgánica en colecciones clave",
        "Quieres entrar a nuevos mercados, idiomas o países y necesitas una base sólida",
      ],
      processSteps: [
        {
          title: "Llamada inicial (30 min)",
          description:
            "Revisamos tu vertical, los competidores relevantes, los mercados que quieres atacar y el estado actual de tu catálogo.",
        },
        {
          title: "Propuesta y alcance",
          description:
            "Defino el alcance exacto: cantidad de categorías, idiomas, profundidad del análisis. Enviamos propuesta para tu aprobación.",
        },
        {
          title: "Investigación y arquitectura",
          description:
            "Keyword research profundo, análisis de competidores, diseño de jerarquía de URLs, estrategia de facetas y mapa de enlaces internos.",
        },
        {
          title: "Entrega y sesión de revisión",
          description:
            "Recibes todos los entregables y agendamos una sesión para revisar la propuesta de estructura y resolver consultas de implementación.",
        },
      ],
      faq: [
        {
          question: "¿Necesito tener un keyword research previo?",
          answer:
            "No. El keyword research está incluido en el servicio. Yo me encargo del relevamiento de demanda desde cero para tu vertical.",
        },
        {
          question: "¿Tocan el código o la tienda directamente?",
          answer:
            "No. El entregable es estratégico: un plan documentado con las recomendaciones. La implementación la hace tu equipo o tu desarrollador.",
        },
        {
          question: "¿Sirve para tiendas multiidioma o multiregión?",
          answer:
            "Sí, pero el alcance depende de la cantidad de mercados. Lo definimos en la llamada inicial para cotizar correctamente.",
        },
        {
          question: "¿Cuánto tiempo tarda el proyecto?",
          answer:
            "Entre 8 y 12 días hábiles según la complejidad del catálogo. Tiendas con más de 20 categorías principales pueden requerir más tiempo.",
        },
      ],
      ctaHeadline: "Tu catálogo puede ser tu mejor herramienta de captación.",
    },
  },
  {
    slug: "talleres-y-capacitaciones",
    name: "Talleres y Capacitaciones",
    price: "Desde $300",
    description:
      "Sesiones prácticas para equipos de ecommerce en SEO técnico, arquitectura de catálogo o analítica aplicada a tiendas Shopify.",
    deliverables: [
      "SEO técnico para equipos",
      "Arquitectura de catálogo",
      "Analítica para ecommerce",
      "Formato a medida (2–4 hs)",
      "Material y grabación incluidos",
    ],
    content:
      "Transfiere mi conocimiento a tu equipo in-house. Diseñamos talleres a medida de 2 a 4 horas donde tu equipo de marketing o desarrollo aprenderá a implementar buenas prácticas de SEO en el día a día de la operación de Shopify. Desde cómo optimizar el lanzamiento de nuevas colecciones, hasta cómo interpretar los datos de Google Search Console para tomar decisiones de negocio informadas.",
    detail: {
      heroHeadline:
        "Tu equipo toma decisiones SEO todos los días - sin saberlo.",
      heroSubheadline:
        "Talleres prácticos para equipos de ecommerce que quieren implementar SEO correctamente en Shopify desde el primer día.",
      problemContext:
        "La mayoría de equipos de marketing aplican SEO genérico que no funciona en Shopify.",
      pains: [
        "Publican colecciones sin optimizar metadatos, H1 ni URLs - y se preguntan por qué no rankean",
        "No entienden cómo funciona el crawl en Shopify y generan contenido duplicado sin querer",
        "Tienen Google Search Console pero no saben qué mirar ni cómo actuar sobre esa data",
        "Dependen del consultor o la agencia para cada cambio mínimo, lo que frena la velocidad de operación",
      ],
      deliverablesHeadline: "Qué incluye el taller",
      deliverablesDescription:
        "Una sesión práctica diseñada a medida de tu equipo, con casos reales de tu tienda, material de apoyo y grabación para consultar después.",
      idealFor: "Ideal para: equipos que quieren ganar autonomía en SEO",
      idealSituations: [
        "Tienes un equipo de marketing que actualiza contenido y lanza colecciones regularmente",
        "Acabas de contratar a alguien para llevar el SEO y necesita formación especializada en Shopify",
        "Tu agencia se va y quieres internalizar el conocimiento antes de que se vayan",
        "Quieres que todo el equipo hable el mismo idioma SEO y tome mejores decisiones desde el día a día",
      ],
      processSteps: [
        {
          title: "Llamada de diagnóstico (30 min)",
          description:
            "Entendemos el nivel del equipo, las herramientas que usan y qué procesos diarios queremos impactar con el taller.",
        },
        {
          title: "Diseño del taller",
          description:
            "Preparo el contenido a medida: casos de uso reales de tu tienda, ejercicios prácticos y material de apoyo.",
        },
        {
          title: "Sesión en vivo (2–4 horas)",
          description:
            "Dictamos el taller en formato remoto o presencial, con espacio para preguntas y ejercicios sobre tu propio Shopify.",
        },
        {
          title: "Seguimiento post-taller",
          description:
            "Recibes la grabación, el material y una sesión de Q&A de 30 minutos para resolver dudas de implementación.",
        },
      ],
      faq: [
        {
          question: "¿El taller es en vivo o puedo comprarlo grabado?",
          answer:
            "Es en vivo y a medida. No vendo cursos grabados genéricos. El valor está en que el contenido se adapta a tu equipo y tu tienda.",
        },
        {
          question: "¿Qué herramientas necesita el equipo?",
          answer:
            "Acceso a Google Search Console y GA4 como mínimo. Si quieres incluir herramientas de pago (Ahrefs, Semrush), lo coordinamos antes.",
        },
        {
          question: "¿Cuántos participantes pueden asistir?",
          answer:
            "No hay un límite estricto, pero recomiendo grupos de hasta 8 personas para mantener la dinámica interactiva y el tiempo de preguntas.",
        },
        {
          question: "¿Hacen seguimiento después del taller?",
          answer:
            "Sí. Incluye una sesión de Q&A de 30 minutos dentro de los 30 días posteriores al taller para resolver dudas de implementación.",
        },
      ],
      ctaHeadline: "Invertís una vez. Tu equipo mejora para siempre.",
    },
  },
]

export const rule = {
  height: "1px",
  background: "rgba(21,96,189,0.10)",
} as const
