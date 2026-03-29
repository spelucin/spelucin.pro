Especificaciones Técnicas, Diseño y Copy: One-Pager Agencia B2B

1. Identidad Visual y UI (Design System)

Paleta de Colores

El sitio funciona en un modo oscuro estricto (Dark Mode) para proyectar una imagen premium y tecnológica.

Fondo Principal (Verde Noche): #06140f (Usado para el fondo base del body).

Texto Principal (Blanco Crema): #fff8eb (Usado para todo el texto, variando opacidades al 90%, 80% o 70% para jerarquías).

Color de Acento Primario (Verde Salvia): #acd8b9 (Uso exclusivo para botones principales, iconos clave, resaltados numéricos y la pastilla del slider).

Color Secundario (Naranja Arena): #F5C78E (Usado para botones secundarios, enlaces de apoyo, iconos de advertencia o contrastes cálidos que complementan al verde principal).

Color de Tarjetas (Surface): rgba(255, 248, 235, 0.03) (Para fondos de cards y contenedores).

Color de Bordes: rgba(255, 248, 235, 0.08) (Para líneas divisorias sutiles).

Tipografía

Titulares (H1, H2, H3, Botones): Lexend (Google Fonts). Pesos recomendados: 400 (Regular), 500 (Medium), 600 (SemiBold).

Cuerpo de Texto y Etiquetas: Inter (Google Fonts). Pesos recomendados: 400 (Regular).

Estilo de Interfaz (UI)

Minimalismo: Amplio uso de espacio en blanco (espacio negativo).

Bordes: Uso de radios redondeados fuertes (border-radius: 16px a 24px) en tarjetas y botones para suavizar la marca.

Transiciones: Suaves al hacer hover en botones (cambios ligeros de color o escala scale-105).

2. Arquitectura de Navegación (One-Pager)

Al ser un One-Pager, todos los enlaces del menú deben llevar a identificadores (anclas) dentro de la misma página con un desplazamiento suave (scroll-behavior: smooth).

Header Minimalista (Fijo/Sticky)

Alineación: Izquierda (Logo), Centro (Enlaces), Derecha (Botón).

Logo: Texto puro "ALEX SPELUCIN." en tipografía Lexend, bold.

Enlaces Ancla: Proceso (#proceso), Paquetes (#paquetes), Talleres (#talleres).

Botón CTA: "Contacto" (Lleva a #contacto), fondo Verde Salvia, texto Verde Noche.

Comportamiento: Fondo con desenfoque (backdrop-blur) y ligera transparencia al hacer scroll.

Footer Minimalista

Alineación: Flexbox distribuido (Logo a la izquierda, Copyright al centro, Iconos sociales a la derecha).

Contenido:

Logo de texto.

Texto: "© 2026 Data Infrastructure B2B. Todos los derechos reservados."

Iconos: LinkedIn y Email (usando Phosphor Icons).

Separación: Una línea sutil en la parte superior del footer.

3. Estructura de Secciones y Copy Web

3.1 Hero Section

Layout: H1 gigante centrado.

Eyebrow: CONVIERTE TUS DATOS EN RENTABILIDAD

H1: El departamento de datos que tu agencia necesita para escalar.

Párrafo: Automatizamos tus reportes, saneamos tu tracking y demostramos el ROI real a tus clientes. Eliminamos el trabajo manual para que tu equipo se enfoque exclusivamente en optimizar campañas.

Botones: "Separa una Cita" (Acento Verde Salvia, lleva a #contacto) y "Calcula tu Inversión" (Secundario Naranja Arena #F5C78E, lleva a #paquetes).

3.2 Social Proof (Logo Slider)

Layout: Cinta infinita automática (marquee con CSS puro). Logos en color Crema con baja opacidad (50%).

Texto sutil: AGENCIAS QUE ESCALAN CON NOSOTROS

Logos: [Insertar Logos de agencias]

3.3 El Problema

Layout: Una sola tarjeta ancha centrada destacando el dolor.

H2: Tu equipo pierde horas en Excel y tus clientes dudan de los resultados.

Cuerpo de texto: La gestión manual de información destruye los márgenes de tu agencia. Nosotros eliminamos la fricción técnica. Mientras tus ejecutivos escalan la pauta, nosotros garantizamos que los números cuadren a la perfección.

3.4 El Proceso Core (#proceso)

Layout: Grilla de 4 columnas (o 2x2 en móviles). Cada paso con un icono minimalista en Verde Salvia.

Paso 1 (Icono Lupa): Auditoría de datos. Revisamos que las fuentes de información se alimenten correctamente. Aseguramos que la web tenga el tracking saneado y que las plataformas reciban la data exacta.

Paso 2 (Icono Check): Implementación e integración. Ejecutamos los cambios técnicos necesarios para el tracking y creamos las conexiones con las fuentes de datos correspondientes.

Paso 3 (Icono Gráfico): Diseño de dashboards y reportes. Diseñamos reportes a medida del cliente final. Se pueden usar para presentar resultados o como paneles operativos en tiempo real.

Paso 4 (Icono Nodos): Mantenimiento continuo. Mantenemos los conectores funcionando sin interrupciones, creamos reportes para tus clientes nuevos y llevamos este mismo estándar a cada cuenta.

3.5 Testimonios y Biografía

Layout: 2 columnas. Izquierda (Testimonios apilados). Derecha (Tarjeta de Biografía).

Columna Izquierda (Testimonios):

Eyebrow: RESULTADOS COMPROBADOS

H2: Lo que dicen nuestros partners.

Testimonio 1: "Pasamos de reportar manualmente cada semana a tener dashboards en tiempo real. Mi equipo ahorra horas de trabajo en minutos, no en días." (Director de Operaciones, Agencia de Performance)

Testimonio 2: "Nos ayudaron a integrar múltiples fuentes de datos en un solo lugar. La claridad que tenemos ahora para reportar a nuestros clientes es de otro nivel." (Head of Data, Agencia B2B)

Columna Derecha (Biografía):

Imagen: [Fotografía profesional de Alex Spelucin]

Eyebrow: TU PRÓXIMO DATA LEAD

H3: Hola, soy Alex Spelucin.

Párrafo: Llevo años construyendo departamentos de datos para agencias en LATAM. Conozco desde adentro cómo la falta de medición correcta frena la rentabilidad y desgasta a los equipos. Mi objetivo no es venderte un software más, sino actuar como tu socio estratégico in-house para que tu agencia pueda escalar con absoluta claridad, confianza y sin depender de procesos manuales.

3.6 Calculadora de Inversión (#paquetes)

Layout: Contenedor interactivo destacado. Ver sección 4 para la lógica del slider.

Eyebrow: MODELO DE SUSCRIPCIÓN B2B

H2: Precios que escalan junto con tu cartera de clientes.

Párrafo: Un modelo predecible y transparente. Pagas un setup inicial para ordenar tu infraestructura y una tarifa mensual plana basada en la cantidad de clientes activos que gestionamos.

Texto Slider: "¿Cuántos clientes activos necesitan reportes y tracking en tu agencia?"

Columna Izquierda (Resultado Dinámico):

H3: Tu Departamento de Datos

Texto Inferior: Soporte continuo, mantenimiento de conectores y resolución de discrepancias en tracking para [N] clientes.

Columna Derecha (Setup):

H3: Setup Inicial de Agencia

Precio: $500 USD (Pago Único)

Texto Inferior: Auditoría total de tu stack, estandarización técnica de cuentas y creación de las plantillas maestras en Looker Studio.

Bloque de Contraste (Fondo sutil inferior): Un Analista Junior in-house te cuesta en promedio $1,200 USD al mes sumado al riesgo de rotación constante. Nuestro modelo te entrega infraestructura de nivel Senior por una fracción del costo y con riesgo cero.

3.7 Talleres Corporativos (#talleres)

Layout: 2 columnas. Izquierda (Temáticas). Derecha (Slider de herramientas).

Eyebrow: CAPACITACIÓN REMOTA

H2: Estandariza el conocimiento de tu equipo.

Párrafo principal: Talleres intensivos vía Google Meet para agencias que necesitan que sus especialistas dominen la medición y la toma de decisiones basada en datos.

Columna Izquierda (Temáticas):

Análisis de datos en el contexto de agencia.

Uso de datos para tomas de decisiones.

IA para el análisis de datos de marketing.

Uso de GA4 para analizar datos web.

Análisis de datos para SEO.

Párrafo a medida: ¿Tu equipo tiene retos específicos? Puedes cotizar un taller totalmente personalizado eligiendo las temáticas o el stack de herramientas exacto que tu agencia necesita dominar hoy. Modalidad: Bootcamp Privado en vivo.

Columna Derecha (Slider Infinito de Herramientas): Logos de GA4, Looker Studio, Gemini, BigQuery, Google Tag Manager.

3.8 Cierre y Agendamiento (#contacto)

Layout: Contenedor centralizado para el widget de TidyCal.

H2: Escala tu agencia sin contratar más analistas.

Párrafo: Agendemos 20 minutos para revisar tu stack actual y activar tu Setup.

Elemento: [Contenedor de TidyCal Embed]

4. Requisitos de la Calculadora de Inversión

Este es el módulo técnico más importante de la web. Requiere JavaScript básico para actualizar el DOM en tiempo real basado en un <input type="range">.

UI del Slider

Input Range: Debe tener apariencia personalizada (CSS -webkit-appearance: none).

Track (Línea): Color base semitransparente.

Thumb (Botón deslizable): Círculo en Verde Salvia con un ligero resplandor (box-shadow).

Hover/Active State: Al interactuar con el slider, el color de la pastilla o el borde puede emitir un brillo sutil usando el Naranja Arena (#F5C78E) para feedback visual.

Rango: min="1", max="30", value="10" (valor por defecto al cargar).

Lógica JavaScript (Tiers)

El script debe escuchar el evento input del slider y actualizar tres elementos en pantalla: El número de clientes mostrados, el precio mensual y el nombre del plan.

Tier 1 (Boutique): Si el slider está entre 1 y 5 clientes.

Precio a mostrar: $400 USD / mes

Nombre del plan: Plan Boutique

Tier 2 (Growth): Si el slider está entre 6 y 15 clientes.

Precio a mostrar: $900 USD / mes

Nombre del plan: Plan Growth

Tier 3 (Scale): Si el slider está entre 16 y 30 clientes.

Precio a mostrar: $1,800 USD / mes

Nombre del plan: Plan Scale

(El setup inicial de $500 USD es un texto estático que no cambia con el slider).

5. Integración TidyCal

En la sección #contacto, se debe embeber el código proporcionado por TidyCal.

Script requerido: <script src="https://assets.tidycal.com/js/embed.js" async></script>

Contenedor: <div class="tidycal-embed" data-path="[TU_ENLACE_AQUI]"></div>

Estilo: Asegurar que el iframe o contenedor tenga un fondo oscuro que se integre bien con el color Verde Noche de la página.