/**
 * Capa fina de eventos. Envía a dataLayer (GTM/GA4) y a Meta Pixel si están cargados.
 * Los IDs se configuran en src/config/site.ts (ANALYTICS).
 */

type Payload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: string, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
  window.fbq?.("trackCustom", event, payload);
}

/** Eventos de scroll 50% / 90%. */
export function initScrollTracking() {
  if (typeof window === "undefined") return () => {};
  const fired = new Set<number>();
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    const pct = (window.scrollY / max) * 100;
    for (const mark of [50, 90]) {
      if (pct >= mark && !fired.has(mark)) {
        fired.add(mark);
        track(`scroll_${mark}`);
      }
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}
