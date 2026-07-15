import { config, fields, collection, singleton } from "@keystatic/core"

export default config({
  storage: { kind: "local" },
  singletons: {
    siteSeo: singleton({
      label: "SEO del sitio",
      path: "src/content/site-seo/",
      format: { data: "yaml" },
      schema: {
        siteName: fields.text({ label: "Nombre del sitio" }),
        defaultTitle: fields.text({ label: "Título por defecto" }),
        defaultDescription: fields.text({
          label: "Descripción por defecto",
          multiline: true,
        }),
        defaultOgImage: fields.image({
          label: "Imagen OG por defecto",
          description: "1200x630px recomendado",
          directory: "public/og",
          publicPath: "/og/",
        }),
        locale: fields.text({ label: "Locale OG (ej. es_MX)" }),
        founderName: fields.text({ label: "Nombre (schema Person)" }),
        founderJobTitle: fields.text({ label: "Puesto (schema Person)" }),
        email: fields.text({ label: "Email de contacto" }),
        sameAs: fields.array(
          fields.url({ label: "URL" }),
          {
            label: "Redes sociales / perfiles (sameAs)",
            itemLabel: (props) => props.value || "URL",
          }
        ),
        areaServed: fields.array(
          fields.text({ label: "Código de país (ej. MX)" }),
          {
            label: "Áreas atendidas",
            itemLabel: (props) => props.value || "País",
          }
        ),
      },
    }),
  },
  collections: {
    caseStudies: collection({
      label: "Casos de estudio",
      slugField: "headline",
      path: "src/content/case-studies/*/",
      format: { data: "yaml" },
      schema: {
        headline: fields.slug({ name: { label: "Titular (H1)" } }),
        store: fields.text({ label: "Nombre de la tienda" }),
        industry: fields.text({ label: "Industria (badge corto)" }),
        country: fields.text({ label: "País" }),
        periodStart: fields.text({ label: "Período inicio" }),
        periodEnd: fields.text({ label: "Período fin" }),
        serviceSlug: fields.select({
          label: "Servicio relacionado",
          options: [
            { label: "Auditoría SEO Técnica", value: "auditoria-seo-tecnica" },
            { label: "Estrategia de Catálogo", value: "estrategia-de-catalogo" },
            { label: "Talleres y Capacitaciones", value: "talleres-y-capacitaciones" },
          ],
          defaultValue: "auditoria-seo-tecnica",
        }),
        serviceName: fields.text({ label: "Nombre del servicio (mostrado)" }),
        summary: fields.text({ label: "Resumen", multiline: true }),
        metrics: fields.array(
          fields.object({
            label: fields.text({ label: "Métrica" }),
            before: fields.text({ label: "Antes" }),
            after: fields.text({ label: "Después" }),
            delta: fields.text({ label: "Delta (ej. +280%)" }),
          }),
          {
            label: "Métricas",
            itemLabel: (props) => props.fields.label.value || "Métrica",
          }
        ),
        context: fields.object(
          {
            industry: fields.text({ label: "Industria (detalle)" }),
            size: fields.text({ label: "Tamaño" }),
            market: fields.text({ label: "Mercado" }),
            stack: fields.text({ label: "Stack técnico" }),
            trafficBefore: fields.text({ label: "Tráfico antes" }),
            mainProblem: fields.text({ label: "Problema principal", multiline: true }),
            triedBefore: fields.text({ label: "Qué habían intentado", multiline: true }),
          },
          { label: "Contexto" }
        ),
        problems: fields.array(
          fields.object({
            title: fields.text({ label: "Título" }),
            what: fields.text({ label: "Qué era", multiline: true }),
            why: fields.text({ label: "Por qué importaba", multiline: true }),
            impact: fields.text({ label: "Impacto" }),
          }),
          {
            label: "Problemas",
            itemLabel: (props) => props.fields.title.value || "Problema",
          }
        ),
        phases: fields.array(
          fields.object({
            name: fields.text({ label: "Nombre de fase" }),
            weeks: fields.text({ label: "Semanas" }),
            actions: fields.array(
              fields.text({ label: "Acción" }),
              {
                label: "Acciones",
                itemLabel: (props) => props.value || "Acción",
              }
            ),
          }),
          {
            label: "Fases",
            itemLabel: (props) => props.fields.name.value || "Fase",
          }
        ),
        otherWins: fields.array(
          fields.text({ label: "Logro" }),
          {
            label: "Otros logros",
            itemLabel: (props) => props.value || "Logro",
          }
        ),
        testimonial: fields.conditional(
          fields.checkbox({ label: "¿Incluir testimonio?", defaultValue: false }),
          {
            true: fields.object({
              quote: fields.text({ label: "Cita", multiline: true }),
              name: fields.text({ label: "Nombre" }),
              role: fields.text({ label: "Rol" }),
              store: fields.text({ label: "Tienda" }),
            }),
            false: fields.empty(),
          }
        ),
        learnings: fields.array(
          fields.text({ label: "Aprendizaje", multiline: true }),
          {
            label: "Aprendizajes",
            itemLabel: (props) => props.value || "Aprendizaje",
          }
        ),
        seoTitle: fields.text({
          label: "Título SEO (opcional, override)",
        }),
        seoDescription: fields.text({
          label: "Meta descripción (opcional, override)",
          multiline: true,
        }),
        ogImage: fields.image({
          label: "Imagen OG (opcional, override)",
          directory: "public/og/case-studies",
          publicPath: "/og/case-studies/",
        }),
      },
    }),
  },
})
