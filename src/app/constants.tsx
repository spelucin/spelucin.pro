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
    q: "¿Puedo contratar el servicio para un solo cliente?",
    a: "Sí. El Plan Boutique parte desde 1 cliente activo. Puedes comenzar pequeño y escalar cuando crezcas.",
  },
  {
    q: "¿Cómo funciona el proceso de onboarding?",
    a: "Comenzamos con una auditoría técnica de tu stack actual. En 2 semanas tienes tu infraestructura operativa y tus primeros dashboards funcionando.",
  },
  {
    q: "¿Qué pasa si necesito pausar el servicio?",
    a: "Puedes pausar con 30 días de aviso. No hay contratos anuales obligatorios ni penalizaciones.",
  },
  {
    q: "Trabajan con plataformas además de Google?",
    a: "Sí. Integramos Meta Ads, TikTok Ads, LinkedIn, HubSpot, Salesforce y cualquier fuente vía API o conector nativo.",
  },
  {
    q: "¿Qué tan rápido ven resultados mis clientes?",
    a: "Los primeros dashboards en tiempo real están listos en los primeros 10 días hábiles tras el setup.",
  },
  {
    q: "¿Los talleres son en vivo o grabados?",
    a: "Todos los talleres son en vivo vía Google Meet. Se entregan grabaciones para que tu equipo pueda repasar el contenido.",
  },
  {
    q: "¿Pueden construir mi equipo de datos interno?",
    a: "Sí. Además del servicio gestionado, ofrecemos consultoría para que tu agencia desarrolle capacidades internas de datos.",
  },
  {
    q: "¿Tienen soporte técnico continuo?",
    a: "Todos los planes incluyen soporte continuo vía Slack con tiempos de respuesta garantizados en días hábiles.",
  },
];

export const steps = [
  {
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Auditoría de datos",
    desc: "Revisamos que las fuentes de información se alimenten correctamente. Aseguramos que tu web tenga el tracking saneado y que las plataformas reciban la data exacta.",
  },
  {
    icon: <CheckCircle size={22} strokeWidth={1.5} />,
    title: "Implementación e integración",
    desc: "Ejecutamos los cambios técnicos para el tracking y creamos las conexiones con todas las fuentes de datos correspondientes a tu agencia.",
  },
  {
    icon: <BarChart2 size={22} strokeWidth={1.5} />,
    title: "Dashboards y reportes",
    desc: "Diseñamos reportes a medida del cliente final. Pueden usarse para presentar resultados o como paneles operativos en tiempo real.",
  },
  {
    icon: <Network size={22} strokeWidth={1.5} />,
    title: "Mantenimiento continuo",
    desc: "Mantenemos los conectores funcionando, creamos reportes para tus clientes nuevos y llevamos este estándar a cada cuenta.",
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
