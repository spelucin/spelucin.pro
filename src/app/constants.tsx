// No React import needed for JSX 17+
import {
  Search,
  CheckCircle,
  BarChart2,
  Network,
} from "lucide-react";

export const C = {
  bg: "#06140f",
  text: "#fff8eb",
  sage: "#acd8b9",
  orange: "#F5C78E",
  card: "rgba(255,248,235,0.03)",
  border: "rgba(255,248,235,0.08)",
};

export const faqs = [
  {
    q: "¿Qué pasa si pierdo un cliente, mi tarifa baja?",
    a: "Exactamente. El modelo se adapta a tu realidad. Si pasas de 10 a 5 clientes activos, automáticamente bajas al Tier de menor costo. Escalas y desescalas sin riesgo.",
  },
  {
    q: "¿Tienen acceso a la facturación de mis clientes?",
    a: "No. Trabajamos bajo estrictos acuerdos de confidencialidad (NDA). Solo solicitamos acceso de visualización y edición a las plataformas técnicas (GA4, GTM, Looker), nunca a la facturación financiera de la agencia.",
  },
  {
    q: "¿Cuánto demora el Setup inicial?",
    a: "El proceso de auditoría y creación de plantillas maestras toma entre 7 y 14 días laborables, dependiendo del desorden actual de la infraestructura.",
  },
  {
    q: "¿Cómo se comunican con mi equipo?",
    a: "Nos integramos a tu flujo. Abrimos un canal compartido en Slack o Teams donde tus media buyers pueden etiquetarnos si hay discrepancias de datos o píxeles caídos.",
  },
  {
    q: "¿Es mejor esto que contratar un Analista Junior?",
    a: "Un Junior te cuesta más de $1,000 USD al mes, requiere capacitación y tiene alta rotación. Con nosotros obtienes infraestructura nivel Senior, automatización con IA y soporte continuo por una fracción del costo.",
  },
  {
    q: "¿Cómo se factura el Setup y el primer mes?",
    a: "Para iniciar el proceso de auditoría y activación, el pago del Setup ($500 USD) se abona junto con tu primera mensualidad. A partir del segundo mes, únicamente pagas tu tarifa plana basada en el volumen de tus clientes activos.",
  },
];

export const steps = [
  {
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Auditoría de Tracking",
    desc: "Revisamos que la web de tu cliente tenga el código saneado y que las plataformas reciban la data exacta mediante scripts automatizados.",
  },
  {
    icon: <CheckCircle size={22} strokeWidth={1.5} />,
    title: "Implementación e Integración",
    desc: "Ejecutamos los cambios técnicos necesarios para el rastreo y creamos las conexiones (Pipelines) con las fuentes de datos.",
  },
  {
    icon: <BarChart2 size={22} strokeWidth={1.5} />,
    title: "Diseño de Dashboards",
    desc: "Construimos paneles a medida. Útiles para el reporte mensual del cliente y para el monitoreo diario de tu equipo de media buying.",
  },
  {
    icon: <Network size={22} strokeWidth={1.5} />,
    title: "Mantenimiento y Soporte",
    desc: "Monitoreamos los conectores, creamos reportes para tus cuentas nuevas y resolvemos bugs por Slack antes de que el cliente pregunte.",
  },
];

export const agencyLogos = [
  "/img/attach.svg",
  "/img/notebook.svg",
  "/img/owlbox.png",
  "/img/picnic.svg",
];

export function getTier(clients: number) {
  if (clients <= 10)
    return { name: "Plan Boutique", price: 500, label: "/ mes", setup: 500 };
  if (clients <= 20)
    return { name: "Plan Growth", price: 1000, label: "/ mes", setup: 500 };
  if (clients <= 30) {
    const setup = clients >= 25 ? 650 : 500;
    return { name: "Plan Scale", price: 1500, label: "/ mes", setup };
  }
  return { name: "Plan Enterprise", price: 2000, label: "/ mes", setup: 650 };
}
