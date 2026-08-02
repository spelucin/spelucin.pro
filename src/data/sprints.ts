export type SprintListItem = { text: string; icon?: string }
export type SprintDeliverable = { eyebrow: string; title: string; description: string; tag: string; link?: { text: string; href: string } }
export type SprintStep = { title: string; description: string; icon: string }
export type SprintFaq = { question: string; answer: string }

export type Sprint = {
  slug: string
  eyebrow: string
  title: string
  description: string
  ctaText: string
  priceLabel: string
  price: string
  badge?: string
  mockupVariant: string
  compact?: boolean
  showPositioning?: boolean
  positioningIcon?: string
  positioningTitle?: string
  positioningDescription?: string
  problemTitle: string
  problemDescription: string
  pains: SprintListItem[]
  outcomesTitle: string
  outcomes: SprintListItem[]
  deliverablesTitle: string
  deliverables: SprintDeliverable[]
  audienceTitle: string
  audience: SprintListItem[]
  process: SprintStep[]
  faqs: SprintFaq[]
  ctaHeading: string
  ctaDescription: string
  ctaButtonText: string
  schemaDescription: string
}

export const sprints: Sprint[] = [
  {
    slug: 'shopify-seo-sprint',
    eyebrow: 'Shopify SEO Sprint',
    title: 'Tu tienda tiene problemas de SEO. ¿Sabes cuáles están frenando su crecimiento?',
    description: 'Un proyecto de una semana para identificar los problemas, oportunidades y prioridades que afectan el crecimiento orgánico de tu tienda Shopify.',
    ctaText: 'Agendar el Sprint',
    priceLabel: 'Precio de lanzamiento',
    price: '$500',
    badge: 'Lanzamiento',
    mockupVariant: 'shopify-seo-sprint',
    compact: true,
    showPositioning: false,
    problemTitle: 'Más contenido no compensa una estrategia sin prioridades',
    problemDescription: 'Tu blog puede posicionar para consultas que deberían llevar a categorías o productos, mientras Shopify genera páginas duplicadas y tu equipo produce contenido sin una prioridad clara. El resultado es más contenido, pero no necesariamente más visibilidad ni mejores decisiones.',
    pains: [
      { text: 'Has producido mucho contenido, pero parte de él compite entre sí por las mismas búsquedas' },
      { text: 'El blog posiciona para consultas que deberían llevar a categorías o productos de tu tienda' },
      { text: 'Shopify genera páginas duplicadas o innecesarias que diluyen tu autoridad en Google' },
      { text: 'No está claro qué categorías, productos o temas tienen demanda real en el mercado' },
      { text: 'El equipo sigue produciendo contenido sin saber qué debería reescribirse o consolidarse' },
      { text: 'Google Search Console muestra oportunidades, pero no existe una forma clara de priorizarlas' },
    ],
    outcomesTitle: 'Decisiones claras para los próximos 90 días',
    outcomes: [
      { text: 'Qué está frenando tu crecimiento orgánico: problemas técnicos, estructurales y de contenido' },
      { text: 'Qué páginas están compitiendo entre sí y cuáles conviene consolidar' },
      { text: 'Qué contenido deberías reescribir por estar desactualizado o desalineado' },
      { text: 'Qué contenido deberías consolidar para convertir varias páginas débiles en un recurso más fuerte' },
      { text: 'Dónde existe demanda que todavía no estás aprovechando' },
      { text: 'Qué debería hacer tu equipo durante los próximos 90 días, en orden de impacto y esfuerzo' },
    ],
    deliverablesTitle: 'Una visión completa de tu tienda, no otro informe aislado',
    deliverables: [
      { eyebrow: 'AUDITORÍA', title: 'Auditoría SEO Técnica', description: 'Identificamos los problemas técnicos y de Shopify que impiden que Google descubra, entienda e indexe tu tienda: indexación, contenido duplicado, rastreo, enlazado interno, datos estructurados y configuración de Shopify.', tag: 'Informe completo', link: { text: 'Ver servicio completo', href: '/servicios/auditoria-seo-tecnica/' } },
      { eyebrow: 'ESTRATEGIA', title: 'Estrategia de Catálogo', description: 'Identificamos qué buscan tus clientes y cómo esa demanda debería reflejarse en tu catálogo: investigación de palabras clave, intención de búsqueda, temas y oportunidades de categorías, productos y contenido.', tag: 'Plan de implementación', link: { text: 'Ver servicio completo', href: '/servicios/estrategia-de-catalogo/' } },
      { eyebrow: 'PLAN DE ACCIÓN', title: 'Plan priorizado a 90 días', description: 'Recibes exactamente qué hacer durante los próximos 90 días, ordenado por impacto potencial y esfuerzo de implementación.', tag: 'Acciones inmediatas y mediano plazo' },
      { eyebrow: 'CONTENIDO', title: 'Recomendaciones de consolidación', description: 'Recomendaciones precisas sobre qué páginas reescribir, consolidar, expandir, eliminar o mantener. El objetivo no es crear más contenido, sino construir el contenido correcto.', tag: 'Auditoría de contenido' },
      { eyebrow: 'SESIÓN', title: 'Sesión de revisión de 60 minutos', description: 'Recorremos los hallazgos, el plan de acción y las recomendaciones. Resolvemos dudas y alineamos prioridades con tu equipo.', tag: 'Videollamada' },
    ],
    audienceTitle: 'Para tiendas Shopify que ya tienen datos, pero no una prioridad clara',
    audience: [
      { text: 'Tu tráfico orgánico lleva meses estancado y no sabes por qué' },
      { text: 'Tienes problemas técnicos y sospechas que tu estructura de catálogo tampoco ayuda' },
      { text: 'Quieres una visión completa antes de invertir en contenido nuevo o rediseñar la tienda' },
      { text: 'No sabes si tu prioridad debe ser técnica, estratégica o ambas' },
    ],
    process: [
      { title: 'Reunión inicial', description: 'Entiendo tu tienda, tus prioridades, tu catálogo y la situación actual de SEO. Coordinamos accesos a GSC, GA4 y Shopify.', icon: 'ph:handshake' },
      { title: 'Investigación y análisis', description: 'Reviso técnicamente la tienda, analizo la demanda de búsqueda y evalúo Search Console, contenido y catálogo.', icon: 'ph:magnifying-glass' },
      { title: 'Estrategia y prioridades', description: 'Convierto los hallazgos en acciones concretas para los próximos 90 días: qué corregir, consolidar, crear y en qué orden.', icon: 'ph:tree-structure' },
      { title: 'Sesión de revisión', description: 'Explico los hallazgos, las recomendaciones y las prioridades. Resolvemos dudas y alineamos al equipo.', icon: 'ph:presentation-chart' },
    ],
    faqs: [
      { question: '¿Qué incluye exactamente el Shopify SEO Sprint?', answer: 'Combina una Auditoría SEO Técnica con una Estrategia de Catálogo en un solo proyecto. Recibes un informe técnico completo, un plan de contenido y arquitectura, un plan de acción a 90 días, recomendaciones de consolidación y una sesión de revisión de 60 minutos.' },
      { question: '¿Para qué tipo de tiendas Shopify es?', answer: 'Para tiendas Shopify con más de 50 productos que ya tienen tráfico orgánico pero sienten que están estancadas, que no saben si su problema es técnico, de contenido o de estructura de catálogo. No es para tiendas que recién empiezan sin datos en GSC.' },
      { question: '¿Necesito tener los dos servicios por separado para contratar el Sprint?', answer: 'No. El Sprint integra ambos diagnósticos en un solo entregable con un plan de acción unificado. Es más claro que contratar los dos servicios por separado.' },
      { question: '¿Cuánto tiempo dura el Sprint?', answer: 'Una semana aproximadamente, desde la reunión inicial hasta la entrega del plan de acción. La sesión de revisión se agenda dentro de los 5 días hábiles posteriores.' },
      { question: '¿Necesito acceso a Google Search Console?', answer: 'Sí. GSC es la fuente principal de datos para el análisis. También necesito acceso de solo lectura a GA4 y acceso colaborador en Shopify. No requiero acceso a checkout ni datos de clientes.' },
      { question: '¿Incluye implementación de los cambios?', answer: 'No. El entregable incluye informes y planes listos para que tu equipo implemente. Si necesitas ayuda con la implementación, podemos cotizarlo como proyecto aparte.' },
      { question: '¿Por qué el precio de lanzamiento es $500?', answer: 'Estoy convirtiendo mi proceso de consultoría SEO para Shopify en un formato más claro. Durante esta fase de lanzamiento, ofrezco el Sprint completo a un precio especial mientras refino el proceso y recojo retroalimentación de los primeros clientes.' },
    ],
    ctaHeading: '¿No sabes si este Sprint es para tu tienda?',
    ctaDescription: 'Llamada gratuita de 30 minutos. Evaluamos tu situación y confirmamos si este Sprint es el proyecto adecuado.',
    ctaButtonText: 'Hablar sobre mi tienda',
    schemaDescription: 'Proyecto combinado de Auditoría SEO Técnica y Estrategia de Catálogo con un plan de acción priorizado para Shopify.',
  },
  {
    slug: 'tiendas-nuevas',
    eyebrow: 'Tiendas nuevas',
    title: 'Tu tienda merece la estructura correcta desde el día uno',
    description: 'Arquitectura de catálogo, contenidos y estructura de URLs optimizados para que Google entienda tu tienda desde el primer crawl. Sin tener que reestructurar todo después.',
    ctaText: 'Agendar el Sprint',
    priceLabel: 'Precio del Sprint',
    price: '$900',
    mockupVariant: 'tiendas-nuevas',
    positioningIcon: 'ph:storefront',
    positioningTitle: 'Lo más caro en SEO no es hacerlo bien. Es reestructurar después de tener miles de URLs.',
    positioningDescription: 'La mayoría de tiendas nuevas lanzan con colecciones nombradas internamente, URLs generadas automáticamente y páginas sin contenido. Google empieza a rastrear sobre una base frágil, y cada cambio posterior cuesta más caro mientras más páginas tenga el catálogo. Este Sprint está diseñado para que tu tienda arranque con una arquitectura de catálogo pensada para búsqueda desde el día uno.',
    problemTitle: 'Una tienda nueva puede quedar mal estructurada desde el primer día',
    problemDescription: 'Las colecciones suelen empezar con nombres internos, las URLs se generan sin jerarquía y las páginas salen sin contenido suficiente para que Google las entienda. Si además los filtros crean duplicados, cada cambio posterior cuesta más mientras crece el catálogo.',
    pains: [
      { text: 'Las colecciones se crean con nombres internos que no coinciden con lo que busca tu cliente en Google' },
      { text: 'Las URLs se generan automáticamente sin una estructura jerárquica pensada para SEO' },
      { text: 'Las páginas de colección no tienen contenido: solo un grid de productos sin contexto para Google' },
      { text: 'Los filtros y facetas generan cientos de URLs duplicadas desde el primer día' },
      { text: 'No hay una jerarquía clara entre colecciones principales y subcolecciones' },
      { text: 'El enlazado interno no existe porque la tienda nunca tuvo un plan de arquitectura' },
    ],
    outcomesTitle: 'Una arquitectura que puede crecer sin rehacerse',
    outcomes: [
      { text: 'Qué colecciones deberían existir y en qué orden jerárquico, según la demanda real del mercado' },
      { text: 'Cómo nombrar cada colección para capturar lo que tus clientes buscan en Google' },
      { text: 'Qué estructura de URLs evitará duplicación masiva desde el día uno' },
      { text: 'Qué contenido necesita cada colección para que Google la entienda y la posicione' },
      { text: 'Cómo manejar filtros y facetas sin generar páginas duplicadas' },
      { text: 'Qué enlaces internos distribuir para maximizar la autoridad de tu catálogo' },
    ],
    deliverablesTitle: 'Todo lo que necesitas para lanzar con la estructura correcta',
    deliverables: [
      { eyebrow: 'INVESTIGACIÓN', title: 'Investigación de palabras clave', description: 'Análisis completo de demanda real para tu categoría: volúmenes, intención de búsqueda y oportunidades que tu tienda no está aprovechando.', tag: 'Documento vivo' },
      { eyebrow: 'ANÁLISIS', title: 'Análisis de competidores', description: 'Benchmarking de estructura, naming y posicionamiento de competidores clave en tu vertical. Sabes contra quién compites y cómo diferenciarte.', tag: 'Insights accionables' },
      { eyebrow: 'ESTRUCTURA', title: 'Jerarquía de colecciones y subcolecciones', description: 'Mapa documentado de categorías, relaciones semánticas y naming optimizado para que Google entienda tu catálogo desde el primer crawl.', tag: 'Figma + CSV' },
      { eyebrow: 'URLS', title: 'Estructura de URLs y naming', description: 'Reglas de URLs, manejo de facetas y filtros para evitar duplicación masiva y maximizar la indexación de tus páginas importantes.', tag: 'Plan de implementación' },
      { eyebrow: 'CONTENIDOS', title: 'Contenido de colecciones', description: 'Título, descripción y metadata optimizada para cada colección. Listo para implementar directamente en Shopify.', tag: 'Copy + SEO' },
      { eyebrow: 'ENLACES', title: 'Plan de enlaces internos', description: 'Mapa de enlaces internos que distribuye autoridad hacia tus páginas de mayor potencial comercial.', tag: 'Arquitectura' },
      { eyebrow: 'SESIÓN', title: 'Sesión de revisión', description: 'Reunión para validar la propuesta, resolver dudas de implementación y alinear a tu equipo técnico.', tag: 'Videollamada' },
    ],
    audienceTitle: 'Para tiendas nuevas, migraciones y catálogos que están por crecer',
    audience: [
      { text: 'Estás armando tu catálogo en Shopify y quieres que la estructura esté optimizada desde el primer día' },
      { text: 'Tienes productos cargados pero la tienda todavía no está en vivo' },
      { text: 'Migraste de otra plataforma y quieres aprovechar para reestructurar bien' },
      { text: 'Vas a expandir tu catálogo con nuevas categorías y necesitas una base sólida' },
      { text: 'Quieres evitar el trabajo de reestructurar después de tener miles de URLs' },
      { text: 'Los filtros de tu tienda generan páginas duplicadas sin que lo sepas' },
    ],
    process: [
      { title: 'Reunión inicial', description: 'Entiendo tu vertical, tus competidores, los productos que vas a vender y el estado actual de tu tienda. Defino el alcance del catálogo.', icon: 'ph:handshake' },
      { title: 'Investigación y análisis', description: 'Investigo cómo buscan tus clientes potenciales, analizo competidores y mapeo la demanda real para tu vertical y categorías.', icon: 'ph:magnifying-glass' },
      { title: 'Arquitectura y contenido', description: 'Diseño la jerarquía de colecciones, estructura de URLs, plan de facetas, contenido optimizado y mapa de enlaces internos.', icon: 'ph:tree-structure' },
      { title: 'Entrega y revisión', description: 'Recibes el plan completo con todo listo para implementar. Revisamos la propuesta, resolvemos dudas y alineamos a tu equipo.', icon: 'ph:presentation-chart' },
    ],
    faqs: [
      { question: '¿Cuándo debo contratar este Sprint?', answer: 'Idealmente 4 a 6 semanas antes del lanzamiento. Así la arquitectura está lista cuando tu tienda empiece a recibir tráfico y Google comience a rastrear. Si ya lanzaste pero tienes poco contenido y mala estructura, también funciona: el cambio es más barato ahora que con 10,000 URLs indexadas.' },
      { question: '¿Necesito tener los productos cargados?', answer: 'No necesariamente. Trabajamos con tu catálogo planificado, incluso en una planilla, para definir la jerarquía y las URLs. Si ya tienes productos cargados, mejor: analizamos la estructura actual y proponemos la versión optimizada.' },
      { question: '¿Qué recibo al final del Sprint?', answer: 'Un plan documentado con investigación de palabras clave, jerarquía de colecciones y subcolecciones, estructura de URLs con manejo de facetas, contenido optimizado y un mapa de enlaces internos. Todo listo para implementar en Shopify.' },
      { question: '¿El Sprint incluye la implementación en Shopify?', answer: 'No. El entregable es el plan documentado. La implementación la hace tu equipo o tu desarrollador. Si necesitas ayuda con eso, podemos cotizarlo aparte.' },
      { question: '¿Cuánto tiempo toma?', answer: 'Entre 8 y 12 días hábiles, según la cantidad de categorías. Tiendas con menos de 20 colecciones principales suelen estar listas en 8 días.' },
      { question: '¿Funciona para tiendas multiidioma o multirregión?', answer: 'Sí, pero el alcance depende de la cantidad de mercados. Lo definimos en la llamada inicial para cotizar correctamente.' },
      { question: '¿Sirve si mi tienda ya está en vivo?', answer: 'Sí, sobre todo si tu tienda tiene pocas URLs indexadas. Mientras menos páginas tenga Google indexadas, más barato y rápido es reestructurar.' },
      { question: '¿Esto es solo para tiendas nuevas en Shopify?', answer: 'Es para cualquier tienda que necesite definir o redefinir su arquitectura de catálogo desde cero. Funciona igual para tiendas nuevas, migraciones desde otras plataformas o expansiones de catálogo.' },
    ],
    ctaHeading: 'Arranca con la estructura correcta',
    ctaDescription: 'Llamada gratuita de 30 minutos. Evaluamos tu catálogo y te proponemos el camino.',
    ctaButtonText: 'Agendar llamada',
    schemaDescription: 'Arquitectura de catálogo y contenidos para tiendas Shopify que están por lanzar. Investigación de palabras clave, jerarquía de colecciones, estructura de URLs y contenido optimizado.',
  },
]

export const sprintBySlug = Object.fromEntries(sprints.map((sprint) => [sprint.slug, sprint])) as Record<string, Sprint>
