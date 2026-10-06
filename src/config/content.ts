export const PROBLEMS = [
  {
    problem: "Tienes visitas pero no ventas",
    problemText:
      "Entra gente todos los días y el número de pedidos no se mueve. La experiencia no termina de convencer.",
    solution: "Recorrido y checkout optimizados",
    solutionText:
      "Rediseñamos el camino a la compra, sacamos fricción y medimos cada paso para que cada visita valga más.",
  },
  {
    problem: "Inviertes en publicidad a ciegas",
    problemText:
      "Gastas en ads sin saber qué campaña trae ventas reales. Los datos están dispersos y nadie los conecta.",
    solution: "Medición unificada y decisiones con datos",
    solutionText:
      "Analítica bien implementada, atribución clara y reportes que muestran dónde conviene poner el próximo peso.",
  },
  {
    problem: "Haces demasiadas tareas a mano",
    problemText:
      "Cargas manuales, seguimientos, avisos de stock y mails uno por uno. El equipo apaga incendios.",
    solution: "Automatizaciones que trabajan solas",
    solutionText:
      "Flujos de marketing y operación que recuperan carritos, reactivan clientes y liberan horas del equipo.",
  },
  {
    problem: "Tu negocio creció, tu ecosistema no",
    problemText:
      "La tienda, el catálogo y los canales quedaron atados con alambre. Escalar duele.",
    solution: "Una base técnica que aguanta",
    solutionText:
      "Desarrollo rápido y escalable, catálogo ordenado y canales conectados entre sí para poder crecer sin romper nada.",
  },
];

export const ECOSYSTEM = [
  { n: "01", name: "UX", note: "Experiencia de base" },
  { n: "02", name: "Ecommerce", note: "Tienda y catálogo" },
  { n: "03", name: "Publicidad", note: "Meta, Google, Mercado Ads" },
  { n: "04", name: "Analítica", note: "GA4 y Tag Manager" },
  { n: "05", name: "Automatización", note: "Flujos y operación" },
  { n: "06", name: "Email Marketing", note: "Recompra y CRM" },
  { n: "07", name: "SEO", note: "Demanda orgánica" },
  { n: "08", name: "Conversión", note: "CRO y testing" },
];

export type Service = {
  slug: string;
  title: string;
  text: string;
  span?: boolean;
  shape: "square" | "circle" | "arrow" | "diamond" | "bars";
  /** Detalle para la página del servicio. */
  detail: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "ux-cro",
    title: "UX / CRO",
    text: "Diseñamos experiencias que facilitan la navegación y aumentan la conversión, con testing continuo sobre lo que ya tienes.",
    span: true,
    shape: "square",
    detail: [
      "Auditamos el recorrido completo de tu tienda: home, categoría, ficha de producto y checkout.",
      "Priorizamos los puntos de fricción por impacto y los resolvemos con diseño y testing.",
      "Medimos cada cambio para que la mejora quede demostrada con datos, no con opiniones.",
    ],
  },
  {
    slug: "publicidad-digital",
    title: "Publicidad Digital",
    text: "Meta Ads, Google Ads y estrategia de performance orientada a ventas, no a impresiones.",
    shape: "circle",
    detail: [
      "Estructura de campañas pensada para el margen del negocio, no para métricas de vanidad.",
      "Creatividades y mensajes testeados de forma continua por audiencia y etapa del funnel.",
      "Reportes claros: qué campaña trae ventas reales y dónde conviene poner el próximo peso.",
    ],
  },
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    text: "Sitios, landings y experiencias rápidas, escalables y medibles desde el primer día.",
    shape: "arrow",
    detail: [
      "Desarrollo enfocado en velocidad de carga, que es una de las primeras causas de pérdida de ventas.",
      "Arquitectura escalable para sumar canales, catálogo y funcionalidades sin rehacer todo.",
      "Medición integrada desde el lanzamiento, no como un parche posterior.",
    ],
  },
  {
    slug: "creacion-de-ecommerce",
    title: "Creación de Ecommerce",
    text: "Creamos tiendas online desde cero o rehacemos las existentes para que vendan mejor.",
    span: true,
    shape: "diamond",
    detail: [
      "Definimos plataforma, catálogo, medios de pago y envíos según tu operación real.",
      "Diseñamos la tienda con foco en conversión desde la primera versión.",
      "Dejamos todo medido y documentado para que tu equipo pueda operarlo.",
    ],
  },
  {
    slug: "automatizaciones",
    title: "Automatizaciones",
    text: "Procesos de marketing y operación automatizados para ahorrar tiempo y vender más.",
    shape: "bars",
    detail: [
      "Recuperación de carritos, avisos de stock y seguimientos que se ejecutan solos.",
      "Conexión entre tienda, CRM, mensajería y planillas para evitar cargas manuales.",
      "Menos tareas repetitivas para el equipo y más tiempo para lo que mueve la aguja.",
    ],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    text: "Segmentación, flujos y campañas para aumentar recompra y recuperar oportunidades.",
    shape: "circle",
    detail: [
      "Flujos de bienvenida, carrito abandonado, post compra y reactivación.",
      "Segmentación por comportamiento y valor del cliente, no envíos masivos a toda la base.",
      "Calendario de campañas alineado a tus fechas comerciales.",
    ],
  },
  {
    slug: "diseno",
    title: "Diseño",
    text: "UI y piezas digitales alineadas a la identidad de cada marca.",
    shape: "square",
    detail: [
      "Sistema visual consistente para tienda, campañas y contenidos.",
      "Piezas listas para cada canal, respetando la identidad de la marca.",
      "Diseño al servicio de la venta: claro, legible y con jerarquía.",
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    text: "Optimización técnica y de contenido para captar demanda orgánica que se sostiene.",
    span: true,
    shape: "arrow",
    detail: [
      "Auditoría técnica: indexación, velocidad, estructura y datos estructurados.",
      "Arquitectura de categorías y contenidos orientada a la intención de compra.",
      "Tráfico que se sostiene en el tiempo y baja la dependencia de la pauta.",
    ],
  },
  {
    slug: "analytics-tag-manager",
    title: "Analytics y Tag Manager",
    text: "Implementación y medición para entender qué pasa realmente en el negocio.",
    shape: "bars",
    detail: [
      "Implementación de GA4 y Tag Manager con eventos de ecommerce bien definidos.",
      "Atribución clara entre canales para decidir dónde invertir.",
      "Todo queda en tus propias cuentas, con documentación del setup.",
    ],
  },
  {
    slug: "google-merchant-center",
    title: "Google Merchant Center",
    text: "Configuración, optimización y gestión del feed de productos en Google.",
    shape: "diamond",
    detail: [
      "Feed sano: sin productos rechazados ni datos incompletos.",
      "Optimización de títulos, atributos e imágenes para mejorar la visibilidad.",
      "Base lista para campañas de Shopping y Performance Max.",
    ],
  },
  {
    slug: "mercado-ads",
    title: "Mercado Ads",
    text: "Estrategia y optimización de publicidad dentro de Mercado Libre.",
    shape: "circle",
    detail: [
      "Estrategia por publicación y categoría, según competencia y margen.",
      "Optimización continua de ACOS y participación.",
      "Coordinación con el resto de los canales para no competir contra ti mismo.",
    ],
  },
  {
    slug: "estrategia-ecommerce",
    title: "Estrategia Ecommerce",
    text: "Diagnóstico integral y un roadmap de crecimiento priorizado por impacto.",
    span: true,
    shape: "square",
    detail: [
      "Diagnóstico de canales, experiencia, operación y datos.",
      "Roadmap priorizado por impacto y esfuerzo, con responsables y plazos.",
      "Acompañamiento en la ejecución, no sólo un documento.",
    ],
  },
];

export const PROCESS = [
  { n: "01", title: "Diagnosticamos", text: "Entendemos tu negocio, tus datos y tus oportunidades." },
  { n: "02", title: "Diseñamos", text: "Definimos estrategia, experiencia y soluciones." },
  { n: "03", title: "Implementamos", text: "Desarrollamos, configuramos y activamos." },
  { n: "04", title: "Medimos", text: "Medimos cada etapa del funnel." },
  { n: "05", title: "Optimizamos", text: "Aprendemos, testeamos y mejoramos de forma continua." },
];

/** Placeholders: reemplazar por métricas reales de clientes. */
export const METRICS = [
  { value: "+XX%", label: "Conversión" },
  { value: "-XX%", label: "Costo de adquisición" },
  { value: "+XX%", label: "ROAS" },
  { value: "+XX%", label: "Facturación" },
];

/** Caso destacado real: Anncestral Mezcal. Sin métricas inventadas. */
export const FEATURED_CASE = {
  client: "Anncestral Mezcal",
  origin: "Mezcal artesanal · México",
  tagline: "Ecommerce + Publicidad + Automatización",
  tags: ["Ecommerce", "Publicidad", "Automatización"],
  challenge:
    "Convertir tráfico digital en oportunidades de compra y construir un recorrido más eficiente hacia la conversión y la recompra.",
  work: "Estrategia de ecommerce, performance, experiencia de usuario y automatización conversacional.",
  url: "https://www.anncestral.com.mx/tienda",
};

/** Estructura lista para cargar casos reales. */
export type CaseStudy = {
  client: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
};

export const CASES: CaseStudy[] = [
  {
    client: "Caso 01",
    industry: "Ecommerce",
    problem: "Tráfico alto y conversión baja.",
    solution: "Rediseño de ficha de producto y checkout.",
    result: "+XX% conversión",
  },
  {
    client: "Caso 02",
    industry: "Publicidad",
    problem: "Inversión sin atribución clara.",
    solution: "Medición unificada y reestructura de campañas.",
    result: "+XX% ROAS",
  },
];

export const FAQS = [
  {
    q: "¿Trabajan con tiendas que ya están funcionando?",
    a: "Sí. La mayoría de los proyectos arranca sobre una tienda que ya vende: diagnosticamos, priorizamos y potenciamos lo que ya existe antes de proponer nada nuevo.",
  },
  {
    q: "¿Con qué plataformas de ecommerce trabajan?",
    a: "Trabajamos con las plataformas más usadas en México, además de desarrollos a medida cuando el negocio lo necesita.",
  },
  {
    q: "¿Puedo contratar un solo servicio?",
    a: "Sí. Puedes empezar por publicidad, UX o automatizaciones. Igual siempre miramos cómo ese canal se conecta con el resto del ecosistema.",
  },
  {
    q: "¿Cómo se mide el resultado del trabajo?",
    a: "Definimos métricas antes de empezar: conversión, costo de adquisición, ROAS y facturación. Todo queda medido en tu propia cuenta de analítica.",
  },
];

export const NEEDS = [
  "Ecommerce",
  "Publicidad",
  "UX",
  "Desarrollo web",
  "Automatizaciones",
  "SEO",
  "Email Marketing",
  "Analítica",
  "Otro",
];
