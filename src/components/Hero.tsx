import { useCountry } from "@/hooks/useCountry";
import { Cta } from "@/components/Cta";
import { Mascot } from "@/components/Mascot";

export function Hero() {
  const { country } = useCountry();

  return (
    <section id="top" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_78%_30%,color-mix(in_oklab,var(--volt)_10%,transparent),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-mist ring-1 ring-line">
            <span className="size-1.5 rounded-full bg-volt anim-node" />
            {country.copy.heroKicker}
          </span>

          <h1 className="mt-7 max-w-[16ch] text-balance text-[2.35rem] font-semibold leading-[1.02] sm:leading-[0.95] text-bone sm:text-6xl lg:text-7xl">
            Potenciamos tu ecommerce para que <span className="text-volt">venda más</span>
          </h1>

          <p className="mt-6 max-w-[52ch] text-pretty text-base text-mist sm:text-lg">
            Diseñamos, desarrollamos y optimizamos todo el ecosistema digital de tu negocio: UX,
            ecommerce, publicidad, automatizaciones, email marketing, SEO y analítica.
          </p>

          <div className="mt-9">
            <Cta event="cta_primary_hero">{country.copy.ctaSecondary} →</Cta>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-mist">
            Estrategia + tecnología + performance
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl bg-panel/80 p-6 ring-1 ring-line">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--volt)_60%,transparent),transparent)]" />
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-mist">Panel vivo</span>
              <span className="text-[11px] font-medium text-volt">● en línea</span>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <Mascot size={64} />
              <div>
                <div className="font-display text-sm font-semibold text-bone">Tu negocio</div>
                <div className="mt-0.5 text-xs text-mist">conectado a todo el ecosistema</div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                { label: "Ingresos", w: "78%", tone: "bg-volt" },
                { label: "Conversión", w: "54%", tone: "bg-volt/70" },
                { label: "Recompra", w: "39%", tone: "bg-volt/50" },
              ].map((bar) => (
                <div key={bar.label} className="flex items-center gap-3">
                  <span className="w-24 shrink-0 text-[11px] text-mist">{bar.label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line/60">
                    <div className={`h-full rounded-full ${bar.tone}`} style={{ width: bar.w }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="size-2 rounded-full bg-volt anim-node" />
              <span className="relative block h-px flex-1 overflow-hidden bg-line">
                <span className="absolute inset-0 flow-line" />
              </span>
              <span className="size-2 rounded-full bg-volt/60" />
              <span className="text-[11px] text-mist">flujo de datos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
