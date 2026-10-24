import type { CommercialContent } from './commercialTypes';

export const commercialEs: CommercialContent = {
  servicesHub: {
    seo: {
      title: 'Servicios de analítica y datos para ecommerce | Alex Spelucin',
      description:
        'Implementación y auditoría de tracking, sistemas de datos, dashboards y análisis de negocio para tiendas online en crecimiento.',
    },
    eyebrow: 'SERVICIOS PARA ECOMMERCE',
    hero: {
      headline: 'Cuatro formas de ordenar',
      highlight: 'los datos de tu tienda.',
      sub: 'Desde medir una compra hasta conectar ventas, pauta y analítica. Elige el trabajo que responde a tu necesidad actual; no hace falta contratarlo todo.',
    },
    cardsHeading: 'Servicios para',
    cardsHighlight: 'el momento de tu tienda.',
    cardsIntro: 'Alcance y precio de partida claros. Cada servicio se puede contratar por separado.',
    cards: [
      {
        key: 'implementation',
        title: 'Implementación de tracking',
        text: 'Configuro GA4 y Google Tag Manager para medir compras; tracking server-side disponible desde US$500, sujeto a factibilidad.',
        tags: ['Desde US$300', 'Pago único', 'GA4 · GTM'],
      },
      {
        key: 'audit',
        title: 'Auditoría y corrección',
        text: 'Encuentro fallas de medición, priorizo los riesgos y corrijo una cantidad acordada de problemas.',
        tags: ['Desde US$500', 'Auditoría + correcciones'],
      },
      {
        key: 'dashboards',
        title: 'Dashboards y reporting',
        text: 'Conecto datos de tienda, analítica y pauta en un sistema de reporting con métricas validadas.',
        tags: ['Desde US$1,200', 'Hasta 3 fuentes', 'Pago único'],
      },
      {
        key: 'analysis',
        title: 'Análisis de negocio',
        text: 'Investigo una pregunta de rendimiento y convierto los hallazgos en acciones para el negocio.',
        tags: ['US$400–700', 'Proyecto definido'],
      },
    ],
    faq: {
      heading: 'Antes de',
      highlight: 'elegir un servicio.',
      items: [
        {
          q: '¿Tengo que empezar por una auditoría?',
          a: 'No. Puedes contratar implementación, reporting o análisis directamente si ya sabes qué necesitas. La llamada inicial sirve para aclarar el alcance, no para forzar una auditoría.',
        },
        {
          q: '¿Se pueden contratar por separado?',
          a: 'Sí. Cada servicio resuelve un problema distinto y se puede contratar por separado o combinar cuando tenga sentido.',
        },
        {
          q: '¿Cómo se define el precio final?',
          a: 'Los precios publicados son hipótesis de partida para los alcances descritos. Confirmo fuentes, accesos, correcciones y entregables antes de enviar una cotización cerrada.',
        },
        {
          q: '¿Trabajas solo con Shopify?',
          a: 'Shopify es el foco inicial. También estoy validando el alcance para Tiendanube y puedo revisar otras plataformas según sus accesos y datos disponibles.',
        },
      ],
    },
  },

  platformsHub: {
    seo: {
      title: 'Shopify y Tiendanube: analítica para ecommerce | Alex Spelucin',
      description:
        'Entradas por plataforma para revisar tracking, conectar ventas con GA4 y publicidad, y elegir un servicio de datos para tu tienda.',
    },
    eyebrow: 'PLATAFORMAS',
    hero: {
      headline: 'Tu plataforma de tienda,',
      highlight: 'con datos para decidir.',
      sub: 'Shopify es el foco inicial. Tiendanube es la plataforma secundaria que estoy validando con tiendas de LATAM. En ambos casos, primero confirmamos accesos y disponibilidad de datos.',
    },
    cardsHeading: 'Elige la plataforma',
    cardsHighlight: 'de tu tienda.',
    cardsIntro: 'Cada página explica qué revisar y cómo elegir entre tracking, reporting y análisis.',
    cards: [
      {
        key: 'shopify',
        title: 'Shopify',
        text: 'Punto de partida para revisar medición y conectar datos de pedidos con analítica y pauta.',
        tags: ['Foco inicial', 'Tracking · ventas · reporting'],
      },
      {
        key: 'tiendanube',
        title: 'Tiendanube',
        text: 'Alcance en validación para tiendas LATAM. La vía de conexión se define después de revisar accesos y datos.',
        tags: ['Validación LATAM', 'Alcance por tienda'],
      },
    ],
    faq: {
      heading: 'Plataformas y',
      highlight: 'alcance técnico.',
      items: [
        {
          q: '¿La conexión funciona igual para las dos plataformas?',
          a: 'No lo asumo. Reviso permisos, plan, campos disponibles y límites de cada fuente antes de proponer una vía de integración.',
        },
        {
          q: '¿Qué otras plataformas puedes evaluar?',
          a: 'Podemos revisar otras tiendas y fuentes. Confirmo la viabilidad técnica y el costo de conectores o desarrollo antes de incluirlos en el alcance.',
        },
        {
          q: '¿Qué servicio necesito?',
          a: 'Depende de la pregunta: implementar una medición nueva, corregir una existente, conectar fuentes para reporting o analizar el rendimiento.',
        },
      ],
    },
  },

  pages: {
    implementation: {
      key: 'implementation',
      seo: {
        title: 'Implementación de tracking ecommerce: GA4 y GTM | Alex Spelucin',
        description:
          'Implementación de GA4 y Google Tag Manager, eventos estándar de ecommerce y opción de tracking server-side según la arquitectura de la tienda.',
      },
      eyebrow: 'IMPLEMENTACIÓN DE TRACKING',
      hero: {
        headline: 'Mide el recorrido de compra',
        highlight: 'desde la primera visita.',
        sub: 'Configuro GA4 y Google Tag Manager para medir el recorrido de compra. Shopify es el foco inicial; confirmo Tiendanube tienda por tienda. Tracking server-side parte de US$500 como opción independiente, sujeto a validar arquitectura y accesos.',
        ctaPrimary: 'Agendar una llamada',
      },
      problem: {
        heading: 'Una compra debe quedar',
        highlight: 'medida de principio a fin.',
        intro: 'Una configuración clara permite saber qué eventos se envían y validar que la compra llegue a GA4 una sola vez.',
        items: [
          { title: 'Configuración ordenada', text: 'Una propiedad de GA4 y un contenedor de GTM para la tienda incluida en el alcance.' },
          { title: 'Eventos de ecommerce', text: 'Eventos estándar para los pasos disponibles del recorrido y el registro de compra.' },
          { title: 'Validación y documentación', text: 'Prueba básica del recorrido de compra y registro de lo que quedó implementado.' },
        ],
      },
      scope: {
        heading: 'Alcance de',
        highlight: 'la implementación.',
        intro: 'El precio de partida corresponde a una configuración acotada y acordada antes de empezar.',
        items: [
          { title: 'GA4 y GTM', text: 'Una tienda, una propiedad de GA4 y un contenedor de Google Tag Manager.' },
          { title: 'Eventos estándar', text: 'Eventos de ecommerce y purchase para los pasos que permita el recorrido estándar de compra.' },
          { title: 'Prueba y handover', text: 'Validación básica de compra, revisión de duplicados visibles y documentación de la configuración entregada.' },
          { title: 'Tracking server-side', text: 'Opción de US$500, pago único, para una tienda y un recorrido estándar; primero confirmo compatibilidad, infraestructura y accesos.' },
        ],
      },
      pricing: {
        heading: 'Precio y',
        highlight: 'límites del alcance.',
        intro: 'Una implementación nueva, de alcance estándar y con accesos disponibles.',
        amount: 'Desde US$300',
        cadence: 'pago único',
        scopeHeading: 'Alcance de partida',
        scope: [
          'Una tienda, una propiedad GA4 y un contenedor GTM.',
          'Recorrido estándar de compra y eventos de ecommerce disponibles.',
          'Validación básica y documentación de lo implementado.',
        ],
        note: 'Precio inicial sujeto a validar con clientes. Confirmo plataforma, accesos y recorrido antes de cerrar la cotización.',
        boundariesHeading: 'Se cotiza por separado',
        boundaries: [
          'Desarrollo complejo o personalizado de data layer.',
          'Checkout personalizado o pasos fuera del recorrido estándar.',
          'Integraciones extensas, múltiples tiendas, propiedades o contenedores.',
        ],
        alternative: {
          heading: 'Tracking server-side',
          amount: 'US$500',
          cadence: 'pago único · precio inicial sujeto a validar',
          detail: 'Alcance para una tienda y un recorrido estándar de compra; confirmo arquitectura, destino de datos y accesos antes de cerrar la propuesta.',
          scopeHeading: 'Alcance de partida',
          scope: [
            'Configuración de un flujo server-side para una tienda y una propiedad de GA4, sujeto a compatibilidad.',
            'Prueba básica del evento de compra y documentación del flujo entregado.',
          ],
          boundariesHeading: 'No incluye',
          boundaries: [
            'Hosting, consumo de nube, conectores ni costos de terceros.',
            'Checkout o data layer personalizado, varias tiendas o propiedades e integraciones extensas.',
          ],
        },
      },
      process: {
        heading: 'De la configuración',
        highlight: 'a una compra validada.',
        intro: 'Primero confirmo que el recorrido y los permisos caben en el alcance estándar.',
        steps: [
          { title: 'Revisar accesos', text: 'Confirmamos tienda, GA4, GTM, recorrido y, si aplica, la infraestructura server-side disponible.' },
          { title: 'Configurar eventos', text: 'Implemento los eventos web y el flujo server-side que queden definidos en el alcance.' },
          { title: 'Probar y documentar', text: 'Valido la compra y cada flujo incluido; documento la configuración entregada.' },
        ],
      },
      deliverables: {
        heading: 'Lo que',
        highlight: 'recibes.',
        intro: 'La implementación queda entendible y lista para que el equipo sepa qué se mide.',
        items: ['Configuración acordada en GA4 y GTM', 'Eventos estándar de ecommerce', 'Prueba básica de compra', 'Flujo server-side si se cotizó', 'Documento de implementación'],
      },
      fit: {
        heading: 'Cuándo',
        highlight: 'encaja.',
        goodHeading: 'Buen punto de partida',
        good: ['La tienda necesita una implementación inicial de GA4 y GTM.', 'El recorrido de compra es estándar y accesible para probar.', 'Quieres evaluar tracking server-side con accesos y arquitectura disponibles.'],
        poorHeading: 'Requiere otro alcance',
        poor: ['Checkout o data layer altamente personalizados sin alcance definido.', 'La infraestructura o los permisos necesarios no están disponibles.', 'Varias tiendas, contenedores o propiedades en el mismo proyecto.'],
      },
      faq: {
        heading: 'Preguntas',
        highlight: 'frecuentes.',
        items: [
          { q: '¿Esto incluye una auditoría completa?', a: 'No. Incluye una validación básica de la implementación y la compra. Si necesitas revisar una configuración existente en profundidad, podemos definir una auditoría aparte.' },
          { q: '¿Incluye un checkout personalizado?', a: 'No en el precio de partida. Primero revisamos el recorrido y cotizamos por separado el trabajo personalizado.' },
          { q: '¿Cuánto cuesta la implementación server-side?', a: 'La opción tiene un precio inicial de US$500, pago único, para el alcance descrito en esta página. Confirmo antes la compatibilidad, los accesos y los costos externos; no incluye hosting ni consumo de nube.' },
        ],
      },
      relatedHeading: 'También puedes',
      relatedIntro: 'Contrata solo la parte que resuelve tu necesidad actual.',
      related: ['audit', 'dashboards', 'analysis'],
    },

    audit: {
      key: 'audit',
      seo: {
        title: 'Auditoría y corrección de tracking ecommerce | Alex Spelucin',
        description:
          'Revisión de GA4, GTM y medición ecommerce con hallazgos priorizados, correcciones acotadas y validación posterior.',
      },
      eyebrow: 'AUDITORÍA Y CORRECCIÓN DE TRACKING',
      hero: {
        headline: 'Encuentra por qué',
        highlight: 'tu medición no cuadra.',
        sub: 'Reviso GA4, GTM y la medición de ecommerce, priorizo los problemas y corrijo un conjunto limitado definido antes de empezar. Una auditoría no es una implementación nueva ni una reconstrucción completa.',
        ctaPrimary: 'Revisar mi caso',
      },
      problem: {
        heading: 'Detectar el problema',
        highlight: 'antes de rehacer todo.',
        intro: 'Una revisión separa errores críticos de diferencias esperables entre herramientas y permite decidir qué corregir primero.',
        items: [
          { title: 'Eventos ausentes o duplicados', text: 'Identifico pasos de compra incompletos, eventos repetidos o parámetros que no llegan como se espera.' },
          { title: 'Fuentes que no coinciden', text: 'Reviso la definición y el origen de las métricas antes de comparar GA4, tienda y plataformas de anuncios.' },
          { title: 'Correcciones con límite claro', text: 'Acordamos cantidad y complejidad de los arreglos incluidos; el resto queda estimado aparte.' },
        ],
      },
      scope: {
        heading: 'Auditoría,',
        highlight: 'hallazgos y correcciones.',
        intro: 'El servicio parte de una configuración existente. Si no hay una base que auditar, conviene cotizar una implementación.',
        items: [
          { title: 'Revisión de fuentes', text: 'GA4, GTM, eventos de compra y medición ecommerce disponibles en el alcance acordado.' },
          { title: 'Informe priorizado', text: 'Hallazgos, impacto esperado y recomendación para resolver primero los problemas importantes.' },
          { title: 'Correcciones acotadas', text: 'Un conjunto limitado de arreglos acordado por número y complejidad antes de cotizar.' },
          { title: 'Validación posterior', text: 'Pruebo las correcciones acordadas y documento el estado final.' },
        ],
      },
      pricing: {
        heading: 'Precio y',
        highlight: 'alcance acordado.',
        intro: 'El precio de partida cubre auditoría, informe y una cantidad limitada de correcciones definidas en la propuesta.',
        amount: 'Desde US$500',
        cadence: 'pago único',
        scopeHeading: 'Antes de iniciar',
        scope: [
          'Confirmo fuentes, accesos, recorrido y objetivo de la revisión.',
          'Defino por escrito cuántas correcciones se incluyen y su complejidad.',
          'Valido después los arreglos incluidos en ese alcance.',
        ],
        note: 'Precio inicial sujeto a validar con clientes. Una auditoría identifica problemas; no implica reconstruir toda la medición.',
        boundariesHeading: 'Fuera del alcance acordado',
        boundaries: [
          'Reconstrucción completa o nueva implementación de tracking.',
          'Correcciones adicionales o de complejidad no prevista.',
          'Desarrollo personalizado de data layer, checkout o server-side.',
        ],
        alternative: {
          heading: 'Opción: auditoría sin correcciones',
          amount: 'US$250–300',
          detail: 'Revisión e informe priorizado. No incluye cambios en GA4, GTM o código.',
        },
      },
      process: {
        heading: 'Primero entender,',
        highlight: 'después corregir.',
        intro: 'No hago cambios hasta que estén claros los problemas y el conjunto de arreglos incluido.',
        steps: [
          { title: 'Definir el alcance', text: 'Confirmamos fuentes, accesos, objetivo y límite de correcciones.' },
          { title: 'Auditar y priorizar', text: 'Reviso la medición y comparto hallazgos con recomendaciones.' },
          { title: 'Corregir y validar', text: 'Aplico solo los cambios acordados y vuelvo a probarlos.' },
        ],
      },
      deliverables: {
        heading: 'Qué',
        highlight: 'queda documentado.',
        intro: 'Un registro útil para tu equipo o para cotizar una segunda etapa.',
        items: ['Mapa de fuentes y eventos revisados', 'Hallazgos priorizados', 'Límite escrito de correcciones', 'Validación de los arreglos incluidos'],
      },
      fit: {
        heading: 'Cuándo',
        highlight: 'conviene auditar.',
        goodHeading: 'Buen encaje',
        good: ['Ya existe una configuración GA4/GTM que da resultados dudosos.', 'Quieres entender riesgos antes de hacer cambios.', 'Necesitas resolver errores concretos sin rehacer todo.'],
        poorHeading: 'Mejor cotizar otro servicio',
        poor: ['Todavía no existe tracking: revisa implementación.', 'Buscas una reconstrucción completa.', 'Necesitas conectores o análisis de negocio dentro del mismo precio.'],
      },
      faq: {
        heading: 'Preguntas',
        highlight: 'frecuentes.',
        items: [
          { q: '¿Auditoría significa arreglar todo?', a: 'No. La auditoría entrega hallazgos y prioridades. Esta modalidad agrega solo las correcciones limitadas que queden escritas en la propuesta.' },
          { q: '¿Puedo contratar solo el informe?', a: 'Sí. La opción de US$250–300 es una hipótesis para auditoría e informe sin implementar cambios.' },
          { q: '¿Qué pasa si aparecen más problemas?', a: 'Los documento y priorizo. Las correcciones adicionales se cotizan por separado antes de hacerlas.' },
        ],
      },
      relatedHeading: 'Si necesitas',
      relatedIntro: 'La auditoría es una opción. También puedes contratar directamente implementación, reporting o análisis.',
      related: ['implementation', 'dashboards', 'analysis'],
    },

    dashboards: {
      key: 'dashboards',
      seo: {
        title: 'Dashboards y sistemas de datos para ecommerce | Alex Spelucin',
        description:
          'Sistema de reporting para ecommerce: conecta tienda, analítica y publicidad; valida métricas y entrega documentación.',
      },
      eyebrow: 'SISTEMAS DE DATOS Y REPORTING',
      hero: {
        headline: 'Conecta ventas, pauta',
        highlight: 'y analítica en una lectura.',
        sub: 'Construyo un sistema de datos con una vista principal de rendimiento: fuentes conectadas, métricas acordadas y documentación para que el equipo la use.',
        ctaPrimary: 'Definir mi alcance',
      },
      problem: {
        heading: 'Un dashboard útil',
        highlight: 'empieza antes del dashboard.',
        intro: 'Primero hay que acordar qué fuente responde cada pregunta y cómo se calculan los indicadores.',
        items: [
          { title: 'Fuentes sin conectar', text: 'Pedidos, gasto de anuncios y analytics viven en herramientas separadas.' },
          { title: 'Definiciones distintas', text: 'Revenue, órdenes, inversión y conversiones necesitan criterios documentados para compararse.' },
          { title: 'Trabajo manual que se repite', text: 'Una vista común reduce el armado manual, pero solo si las conexiones y validaciones se sostienen.' },
        ],
      },
      scope: {
        heading: 'Un sistema de reporting,',
        highlight: 'no solo una pantalla.',
        intro: 'El diseño técnico se ajusta a las fuentes y al uso. BigQuery y SQL se incorporan cuando mejoran la solución; no son un requisito por defecto.',
        items: [
          { title: 'Hasta tres fuentes acordadas', text: 'Alcance estándar: tienda, una fuente de analítica y una plataforma de publicidad, sujeto a disponibilidad.' },
          { title: 'Modelo y transformaciones', text: 'Defino un warehouse y transformaciones si la escala y las fuentes lo justifican; elijo la arquitectura confiable más simple.' },
          { title: 'Dashboard principal', text: 'Revenue, órdenes, gasto, ROAS, CPA, ticket promedio y rendimiento por canal/producto cuando las fuentes permiten definirlos.' },
          { title: 'Reconciliación y entrega', text: 'Valido métricas clave, documento supuestos y hago handover al equipo.' },
        ],
      },
      pricing: {
        heading: 'Precio de partida',
        highlight: 'con fuentes delimitadas.',
        intro: 'Un sistema inicial con una vista principal y hasta tres fuentes acordadas: tienda, analítica y una plataforma de anuncios.',
        amount: 'Desde US$1,200',
        cadence: 'pago único',
        scopeHeading: 'Incluido en el alcance estándar',
        scope: [
          'Hasta tres fuentes; se confirman nombres y disponibilidad antes de cotizar.',
          'Integración de ventas/pedidos con analítica y publicidad cuando los accesos lo permiten.',
          'Modelo y transformaciones si son necesarios para una solución confiable.',
          'Dashboard principal, conciliación de métricas, documentación y handover.',
        ],
        note: 'Precio inicial sujeto a validar con clientes. Revenue, órdenes, gasto, ROAS, CPA, ticket y cortes por canal/producto dependen de los datos y definiciones acordadas.',
        boundariesHeading: 'Se cotiza por separado',
        boundaries: [
          'Suscripciones de conectores, consumo de nube y costos de terceros.',
          'Fuentes adicionales, integraciones personalizadas o infraestructura compleja.',
          'Mantenimiento recurrente y cambios posteriores a la entrega.',
          'Cohortes avanzadas, CAC/LTV y análisis de negocio a medida.',
        ],
      },
      process: {
        heading: 'De las preguntas',
        highlight: 'a un sistema utilizable.',
        intro: 'Definimos fuentes y criterios antes de construir la vista.',
        steps: [
          { title: 'Acordar fuentes y métricas', text: 'Confirmamos las tres fuentes, accesos y definiciones de cada indicador.' },
          { title: 'Conectar y modelar', text: 'Elijo la arquitectura más simple que mantenga los datos y las reglas claras.' },
          { title: 'Validar y entregar', text: 'Comparo métricas con sus fuentes, documento límites y hago handover.' },
        ],
      },
      deliverables: {
        heading: 'Un sistema que',
        highlight: 'se puede mantener.',
        intro: 'El dashboard es una parte del trabajo; la lógica que lo alimenta también queda documentada.',
        items: ['Conexión de hasta tres fuentes acordadas', 'Modelo/transformaciones cuando se justifiquen', 'Dashboard principal', 'Conciliación de métricas clave', 'Documentación técnica y handover'],
      },
      fit: {
        heading: 'Cuándo',
        highlight: 'conviene construirlo.',
        goodHeading: 'Buen encaje',
        good: ['Ya inviertes en publicidad y necesitas cruzar ventas con gasto.', 'Tienes acceso a tienda, analítica y al menos una fuente de anuncios.', 'Buscas reporting repetible que el equipo pueda entender.'],
        poorHeading: 'Queda fuera del alcance estándar',
        poor: ['CAC/LTV o cohortes avanzadas.', 'Un modelo completo de rentabilidad sin costos y márgenes.', 'Muchas fuentes, desarrollos personalizados o soporte ilimitado.'],
      },
      faq: {
        heading: 'Preguntas',
        highlight: 'frecuentes.',
        items: [
          { q: '¿Siempre usas BigQuery?', a: 'No. Lo incorporo con SQL cuando la cantidad de fuentes, el historial o las transformaciones lo justifican. Si una opción más simple es confiable, uso esa.' },
          { q: '¿ROAS significa rentabilidad?', a: 'No. ROAS compara ingresos atribuidos con gasto publicitario; no descuenta costos, margen ni operación.' },
          { q: '¿Qué pasa con conectores de pago?', a: 'Las suscripciones y el consumo de nube no están incluidos en el precio de implementación; se identifican y aprueban antes.' },
          { q: '¿Incluye CAC, LTV o cohortes?', a: 'No en el alcance estándar. Se pueden definir como un análisis separado si el historial y las fuentes permiten cálculos defendibles.' },
        ],
      },
      relatedHeading: 'Puedes contratar',
      relatedIntro: 'Este sistema es independiente de una auditoría o un análisis posterior.',
      related: ['implementation', 'audit', 'analysis'],
    },

    analysis: {
      key: 'analysis',
      seo: {
        title: 'Análisis de negocio y rendimiento ecommerce | Alex Spelucin',
        description:
          'Análisis definido de adquisición, conversión, clientes y productos para convertir los datos disponibles en decisiones de negocio.',
      },
      eyebrow: 'ANÁLISIS DE NEGOCIO Y RENDIMIENTO',
      hero: {
        headline: 'Más que ver métricas:',
        highlight: 'entender qué hacer.',
        sub: 'Investigo una pregunta concreta sobre adquisición, conversión, clientes o productos. El precio y el método dependen del historial, la calidad de los datos y la decisión que necesitas tomar.',
        ctaPrimary: 'Conversar sobre un análisis',
      },
      problem: {
        heading: 'Una métrica describe.',
        highlight: 'El análisis explica y propone.',
        intro: 'Trabajo con una pregunta prioritaria para entender qué cambió, qué evidencia hay y qué conviene probar después.',
        items: [
          { title: 'Adquisición y ROAS', text: 'Compara canales y gasto con revenue atribuido; ROAS no equivale a rentabilidad.' },
          { title: 'Productos y conversión', text: 'Busca patrones por producto, categoría y etapa del funnel según la cobertura de datos.' },
          { title: 'Clientes y recurrencia', text: 'Cohortes, recompra, retención, frecuencia, CAC o LTV solo cuando el historial y las definiciones permiten sostenerlos.' },
        ],
      },
      scope: {
        heading: 'Preguntas de',
        highlight: 'rendimiento que podemos analizar.',
        intro: 'El análisis se adapta a los datos disponibles; no presento ingresos como utilidad ni estimaciones como certezas.',
        items: [
          { title: 'Adquisición', text: 'ROAS e inversión por canal, con periodos, atribución y fuentes definidos.' },
          { title: 'Productos y funnel', text: 'Desempeño por producto/categoría y conversiones por etapa cuando hay eventos suficientes.' },
          { title: 'Clientes y retención', text: 'Recompra, frecuencia y cohortes; CAC/LTV requieren historia de pedidos y costos compatibles.' },
          { title: 'Rentabilidad', text: 'Solo cuando están disponibles costos, márgenes y otros componentes acordados.' },
        ],
      },
      pricing: {
        heading: 'Precio según',
        highlight: 'pregunta y datos.',
        intro: 'Una pregunta principal, un alcance definido y recomendaciones basadas en lo que los datos pueden sostener.',
        amount: 'US$400–700',
        cadence: 'por proyecto definido',
        scopeHeading: 'Proyecto de análisis',
        scope: [
          'Una pregunta prioritaria y las fuentes acordadas para responderla.',
          'Análisis, evidencia, limitaciones y recomendaciones accionables.',
          'Alcance final según disponibilidad, complejidad y calidad de datos.',
        ],
        note: 'Rango inicial a validar con clientes. No prometo LTV preciso sin suficiente historial de clientes/pedidos. ROAS basado en revenue no es rentabilidad; para analizar utilidad necesito costos y márgenes.',
        boundariesHeading: 'Requiere cotización propia',
        boundaries: [
          'Más de una pregunta principal o fuentes adicionales.',
          'Modelado personalizado de CAC/LTV o cohortes.',
          'Rentabilidad sin costos y márgenes verificables.',
        ],
        alternative: {
          heading: 'Opción mensual en validación',
          amount: 'US$400–600/mes',
          detail: 'Una revisión de rendimiento, un foco principal de análisis y recomendaciones accionables al mes. No incluye acceso ilimitado ni análisis ad hoc sin límite.',
        },
      },
      process: {
        heading: 'Una pregunta,',
        highlight: 'un análisis con límites claros.',
        intro: 'Antes de estimar resultados, revisamos si la información alcanza para responder la pregunta.',
        steps: [
          { title: 'Definir la decisión', text: 'Acordamos la pregunta principal, periodo y cómo se usará el resultado.' },
          { title: 'Revisar los datos', text: 'Confirmo disponibilidad, definiciones, sesgos y límites del análisis.' },
          { title: 'Presentar hallazgos', text: 'Entrego evidencia, explicación y acciones posibles con sus supuestos.' },
        ],
      },
      deliverables: {
        heading: 'Una lectura',
        highlight: 'orientada a la acción.',
        intro: 'El formato puede ser un informe breve y una conversación de entrega, según el proyecto.',
        items: ['Pregunta y alcance definidos', 'Hallazgos con evidencia y limitaciones', 'Recomendaciones priorizadas', 'Sesión de entrega del análisis'],
      },
      fit: {
        heading: 'Cuándo',
        highlight: 'tiene sentido analizar.',
        goodHeading: 'Buen encaje',
        good: ['Ya tienes ventas e historial para observar patrones.', 'Necesitas explicar un cambio o decidir dónde enfocar recursos.', 'Puedes compartir costos/márgenes si la pregunta trata de rentabilidad.'],
        poorHeading: 'Primero hace falta',
        poor: ['Más historial para estimar recompra o LTV.', 'Definir ingresos, atribución, costos o márgenes.', 'Una auditoría o implementación si los datos aún no son utilizables.'],
      },
      faq: {
        heading: 'Preguntas',
        highlight: 'frecuentes.',
        items: [
          { q: '¿El análisis de ROAS muestra rentabilidad?', a: 'No. ROAS relaciona revenue atribuido con gasto publicitario. Para rentabilidad se necesitan costos, márgenes y otros costos acordados.' },
          { q: '¿Puedo pedir un LTV?', a: 'Sí, si el historial de clientes y pedidos permite una estimación defendible. Si no alcanza, explico el límite y propongo una pregunta que sí pueda responderse.' },
          { q: '¿Qué incluye la opción mensual?', a: 'Una revisión recurrente, un foco principal de análisis y recomendaciones accionables por periodo. No es acceso ilimitado al analista.' },
        ],
      },
      relatedHeading: 'El análisis puede',
      relatedIntro: 'Contratarse por sí solo o después de mejorar el tracking o el reporting.',
      related: ['implementation', 'audit', 'dashboards'],
    },

    shopify: {
      key: 'shopify',
      seo: {
        title: 'Analítica y tracking para tiendas Shopify | Alex Spelucin',
        description:
          'Revisa la medición de tu tienda Shopify y conecta, cuando el acceso lo permite, pedidos con GA4 y plataformas de anuncios.',
      },
      eyebrow: 'SHOPIFY · FOCO INICIAL',
      hero: {
        headline: 'Datos de Shopify',
        highlight: 'listos para una lectura útil.',
        sub: 'Shopify es el foco inicial de trabajo. Reviso qué datos de tienda están disponibles y cómo relacionarlos con GA4 y publicidad, sin asumir conectores o resultados que no hayamos validado.',
        ctaPrimary: 'Revisar mi tienda Shopify',
      },
      problem: {
        heading: 'La tienda registra ventas.',
        highlight: 'El reto es conectarlas bien.',
        intro: 'Pedidos, analítica y pauta usan fuentes y definiciones distintas. La conexión concreta depende de permisos, plan y datos disponibles.',
        items: [
          { title: 'Tracking de compra', text: 'Revisamos qué pasos y eventos de compra se miden en GA4 y GTM.' },
          { title: 'Lectura de ventas', text: 'Confirmamos qué campos de pedidos, productos y periodos están disponibles para el proyecto.' },
          { title: 'Rendimiento conectado', text: 'Definimos cómo comparar revenue, órdenes, gasto y adquisición sin confundir atribución con contabilidad.' },
        ],
      },
      scope: {
        heading: 'Primero validamos',
        highlight: 'qué se puede conectar.',
        intro: 'La propuesta define un método de conexión verificado para tu tienda; no presupone una integración nativa ni que todos los campos estén expuestos.',
        items: [
          { title: 'Datos de tienda', text: 'Reviso accesos y disponibilidad de pedidos, productos y campos relevantes para la pregunta.' },
          { title: 'GA4 y tracking', text: 'Reviso eventos y definiciones que estén configurados en la propiedad disponible.' },
          { title: 'Publicidad', text: 'Selecciono las fuentes de anuncios a incluir según accesos y número de fuentes acordado.' },
          { title: 'Método de integración', text: 'Confirmo el camino técnico y cualquier suscripción o costo de terceros antes de incluirlo.' },
        ],
      },
      process: {
        heading: 'Un alcance claro',
        highlight: 'para tu tienda Shopify.',
        intro: 'Empiezo por validar la pregunta de negocio y la disponibilidad real de los datos.',
        steps: [
          { title: 'Revisar el acceso', text: 'Confirmamos tienda, analytics, pauta, permisos y campos disponibles.' },
          { title: 'Elegir el servicio', text: 'Definimos si necesitas implementación, correcciones, reporting o análisis.' },
          { title: 'Proponer la conexión', text: 'Cotizo fuentes, método, costos externos y entregables antes de iniciar.' },
        ],
      },
      deliverables: {
        heading: 'La propuesta',
        highlight: 'define qué queda conectado.',
        intro: 'El resultado depende del servicio elegido y de la verificación previa de fuentes y accesos.',
        items: ['Fuentes y métricas acordadas', 'Método de conexión validado antes del proyecto', 'Costos externos identificados por separado', 'Documentación de los límites de datos'],
      },
      fit: {
        heading: 'Para tiendas que',
        highlight: 'invierten en adquisición.',
        goodHeading: 'Buen encaje',
        good: ['Vendes en Shopify y haces campañas pagadas.', 'Necesitas revisar tracking o cruzar ventas con GA4 y anuncios.', 'Puedes facilitar accesos o coordinar a quien los administra.'],
        poorHeading: 'Necesita revisión previa',
        poor: ['Se espera una integración específica sin confirmar permisos.', 'Checkout, data layer o API requieren desarrollo a medida.', 'La pregunta depende de campos no disponibles o costos aún desconocidos.'],
      },
      faq: {
        heading: 'Preguntas',
        highlight: 'sobre Shopify.',
        items: [
          { q: '¿Shopify es la única plataforma?', a: 'No. Es el foco inicial. También estoy validando Tiendanube y puedo revisar otras plataformas caso por caso.' },
          { q: '¿La conexión con GA4 o Ads ya viene lista?', a: 'No la doy por sentada. Reviso configuración, permisos y fuentes; la propuesta especifica qué conexión y validación están incluidas.' },
          { q: '¿El dashboard hace coincidir revenue de Shopify y GA4?', a: 'Las fuentes pueden medir con definiciones distintas. Acordamos periodos, zonas horarias y reglas de comparación, y documentamos diferencias.' },
        ],
      },
      relatedHeading: 'Elige el servicio',
      relatedIntro: 'Estas cuatro opciones son servicios independientes para tu tienda Shopify.',
      related: ['implementation', 'audit', 'dashboards', 'analysis'],
    },

    tiendanube: {
      key: 'tiendanube',
      seo: {
        title: 'Analítica y medición para Tiendanube | Alex Spelucin',
        description:
          'Evalúa tracking, fuentes de venta y opciones de reporting para una tienda Tiendanube. El alcance técnico se confirma tienda por tienda.',
      },
      eyebrow: 'TIENDANUBE · VALIDACIÓN LATAM',
      hero: {
        headline: 'Tiendanube con datos',
        highlight: 'que puedas contrastar.',
        sub: 'Estoy validando el alcance con tiendas de LATAM. Revisamos accesos, datos de pedidos, configuración de GA4 y fuentes de anuncios antes de proponer una implementación.',
        ctaPrimary: 'Consultar mi caso Tiendanube',
      },
      problem: {
        heading: 'Cada tienda necesita',
        highlight: 'validar su camino de datos.',
        intro: 'Plan, permisos y fuentes disponibles pueden cambiar la forma de conectar ventas, analytics y publicidad.',
        items: [
          { title: 'Eventos de compra', text: 'Confirmamos qué eventos llegan a GA4 y qué parte del recorrido se puede probar.' },
          { title: 'Datos de pedidos', text: 'Revisamos acceso y disponibilidad de campos antes de definir reportes o análisis.' },
          { title: 'Inversión publicitaria', text: 'Acordamos qué plataformas de anuncios se incluirán y cómo se compararán con las ventas.' },
        ],
      },
      scope: {
        heading: 'El alcance se define',
        highlight: 'después de validar accesos.',
        intro: 'No prometo una integración específica antes de revisar la tienda, el plan y las vías de acceso disponibles.',
        items: [
          { title: 'Acceso a la tienda', text: 'Validamos qué datos de pedidos y productos están disponibles para el proyecto.' },
          { title: 'Medición GA4/GTM', text: 'Revisamos la configuración existente o delimitamos una implementación estándar.' },
          { title: 'Fuentes de pauta', text: 'Elegimos las cuentas de anuncios incluidas y revisamos permisos y datos históricos.' },
          { title: 'Conexión verificada', text: 'Definimos el método factible y costos de conectores o desarrollo antes de cotizar.' },
        ],
      },
      process: {
        heading: 'Una validación',
        highlight: 'antes de proponer.',
        intro: 'El primer paso es conocer qué datos están realmente disponibles para tu tienda.',
        steps: [
          { title: 'Revisar plataforma y accesos', text: 'Vemos plan, permisos, campos y fuentes que participan en el recorrido.' },
          { title: 'Definir la pregunta', text: 'Acordamos si buscas implementar, corregir, reportar o analizar.' },
          { title: 'Cerrar alcance y precio', text: 'Documento método de conexión, límites, costos externos y entregables.' },
        ],
      },
      deliverables: {
        heading: 'La revisión',
        highlight: 'reduce supuestos.',
        intro: 'Antes de iniciar un proyecto queda escrito qué fuentes y métricas son viables.',
        items: ['Disponibilidad de datos revisada', 'Fuentes y permisos documentados', 'Método de conexión propuesto con límites', 'Servicio y entregables acordados'],
      },
      fit: {
        heading: 'Para tiendas',
        highlight: 'Tiendanube en LATAM.',
        goodHeading: 'Buen encaje',
        good: ['Ya vendes y haces inversión en publicidad.', 'Puedes facilitar accesos o coordinar con quien administra la tienda.', 'Estás dispuesto a validar el alcance antes de comprometer una integración.'],
        poorHeading: 'Necesita cotización aparte',
        poor: ['Se exige un conector específico antes de revisar compatibilidad.', 'La solución requiere desarrollo custom o server-side.', 'Las fuentes necesarias no están disponibles o no tienen historial suficiente.'],
      },
      faq: {
        heading: 'Preguntas',
        highlight: 'sobre Tiendanube.',
        items: [
          { q: '¿La integración ya está validada para todas las tiendas?', a: 'No. Estoy validando el alcance con clientes LATAM. Confirmo plan, permisos, campos y método antes de cotizar.' },
          { q: '¿Puedo contratar solo una auditoría?', a: 'Sí. También puedes contratar implementación, reporting o análisis si la pregunta y los datos están claros.' },
          { q: '¿Hay costos de conectores?', a: 'Si una solución requiere suscripción, nube o desarrollo de terceros, lo identifico y apruebo aparte antes de empezar.' },
        ],
      },
      relatedHeading: 'Elige el servicio',
      relatedIntro: 'Puedes contratar una sola parte; primero validamos qué fuentes admite tu caso.',
      related: ['implementation', 'audit', 'dashboards', 'analysis'],
    },
  },
};
