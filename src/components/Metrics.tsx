import { useEffect, useRef, useState } from "react";
import { METRICS } from "@/config/content";

/**
 * Rangos demo de las métricas animadas.
 * Elemento visual/demostrativo de la web, no resultados atribuidos a un cliente.
 */
const DEMO: Record<
  string,
  { min: number; max: number; decimals: number; sign: "+" | "-"; suffix: string }
> = {
  Conversión: { min: 15, max: 28, decimals: 0, sign: "+", suffix: "%" },
  "Costo de adquisición": { min: 10, max: 20, decimals: 0, sign: "-", suffix: "%" },
  ROAS: { min: 2.2, max: 3.2, decimals: 1, sign: "+", suffix: "x" },
  Facturación: { min: 25, max: 42, decimals: 0, sign: "+", suffix: "%" },
};

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function format(value: number, decimals: number, sign: "+" | "-", suffix: string) {
  return `${sign}${value.toFixed(decimals)}${suffix}`;
}

const FALLBACK = { min: 10, max: 20, decimals: 0, sign: "+" as const, suffix: "%" };

function DemoMetric({ label, index }: { label: string; index: number }) {
  const cfg = DEMO[label] ?? FALLBACK;
  const initial = cfg.min + (cfg.max - cfg.min) * 0.42;
  const [value, setValue] = useState(initial);
  const [tick, setTick] = useState(0);
  const anim = useRef({ from: initial, target: initial, raf: 0 });

  useEffect(() => {
    if (REDUCED_MOTION) return;

    const tween = () => {
      cancelAnimationFrame(anim.current.raf);
      let t0: number | undefined;
      const step = (now: number) => {
        if (t0 === undefined) t0 = now;
        const p = Math.min(1, (now - t0) / 650);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(anim.current.from + (anim.current.target - anim.current.from) * eased);
        if (p < 1) anim.current.raf = requestAnimationFrame(step);
      };
      anim.current.raf = requestAnimationFrame(step);
    };

    // Cada métrica respira a su propio ritmo, desincronizada del resto.
    const intervalId = window.setInterval(
      () => {
        if (Math.random() > 0.7) return;
        const span = cfg.max - cfg.min;
        const drift = (Math.random() - 0.47) * span * 0.28;
        const next = Math.min(cfg.max, Math.max(cfg.min, anim.current.target + drift));
        anim.current.from = anim.current.target;
        anim.current.target = next;
        setTick((t) => t + 1);
        tween();
      },
      1000 + index * 230,
    );

    return () => {
      window.clearInterval(intervalId);
      cancelAnimationFrame(anim.current.raf);
    };
  }, [cfg, index]);

  return (
    <div className="bg-ink p-8 reveal">
      <dt className="sr-only">{label}</dt>
      <dd>
        <span
          key={tick}
          className="block font-display text-4xl font-semibold text-bone anim-tick tabular-nums"
        >
          {format(value, cfg.decimals, cfg.sign, cfg.suffix)}
        </span>
        <span className="mt-2 block text-xs text-mist">{label}</span>
      </dd>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="w-full border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-10">
        <h2 className="sr-only">Resultados</h2>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <DemoMetric key={metric.label} label={metric.label} index={i} />
          ))}
        </dl>
      </div>
    </section>
  );
}
