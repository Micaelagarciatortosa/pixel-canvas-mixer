/**
 * Configuración central de Empower Yourself.
 * Editar acá: WhatsApp, teléfonos, emails, redes e IDs de analytics.
 */

export type CountryCode = "MX";

export interface CountryConfig {
  code: CountryCode;
  label: string;
  name: string;
  flag: string;
  /** Número de WhatsApp en formato internacional, sólo dígitos. */
  whatsapp: string;
  /** Teléfono mostrado al usuario. */
  phone: string;
  email: string;
  city: string;
  currencyNote: string;
  whatsappMessage: string;
  /** Ajustes de copy por mercado */
  copy: {
    heroKicker: string;
    ctaPrimary: string;
    ctaSecondary: string;
    finalCta: string;
    marketLine: string;
  };
}

export const COUNTRIES: Record<CountryCode, CountryConfig> = {
  MX: {
    code: "MX",
    label: "MX",
    name: "México",
    flag: "🇲🇽",
    whatsapp: "5215525231351",
    phone: "+52 1 55 2523 1351",
    email: "holaempoweryourself@gmail.com",
    city: "Ciudad de México",
    currencyNote: "Trabajamos con marcas de toda la República",
    whatsappMessage:
      "Hola! Quiero potenciar mi ecommerce y me gustaría conocer más sobre Empower Yourself.",
    copy: {
      heroKicker: "Agencia de ecommerce y growth · México",
      ctaPrimary: "Potencia tu ecommerce",
      ctaSecondary: "Hablar con un experto",
      finalCta: "Quiero potenciar mi ecommerce",
      marketLine: "Meta Ads, Google Ads y Mercado Ads para marcas mexicanas",
    },
  },
};

export const DEFAULT_COUNTRY: CountryCode = "MX";

export const SITE = {
  name: "Empower Yourself",
  tagline: "Tu ecommerce. Potenciado.",
  url: "https://empoweryourself.com.mx",
  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
};

/**
 * IDs de medición. Dejar vacío hasta tener los IDs reales.
 * NO inventar IDs.
 */
export const ANALYTICS = {
  GA4_ID: "", // p. ej. "G-XXXXXXX"
  GTM_ID: "", // p. ej. "GTM-XXXXXXX"
  META_PIXEL_ID: "", // p. ej. "000000000000000"
};

export function whatsappUrl(country: CountryConfig) {
  return `https://wa.me/${country.whatsapp}?text=${encodeURIComponent(country.whatsappMessage)}`;
}
