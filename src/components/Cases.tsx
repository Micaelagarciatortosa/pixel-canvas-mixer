import { FEATURED_CASE } from "@/config/content";
import { Cta } from "@/components/Cta";
import { track } from "@/lib/analytics";
import caseLogo from "@/assets/anncestral-logo.png.asset.json";
import caseEmblem from "@/assets/anncestral-emblema.png.asset.json";
import caseImage from "@/assets/anncestral-caso.jpg.asset.json";

export function Cases() {
  return (
    <section id="casos" className="w-full border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-volt">Casos</span>
          <h2 className="mt-4 max-w-[24ch] text-balance text-[1.7rem] font-semibold leading-[1.15] text-bone sm:text-4xl">
            Lo que pasa cuando potenciamos un negocio
          </h2>
        </div>

        {/* Caso destacado: Anncestral Mezcal */}
        <article className="reveal mt-12 group overflow-hidden rounded-3xl bg-panel/60 ring-1 ring-line transition-shadow hover:shadow-[var(--glow-volt)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[460px]">
              <img
                src={caseImage.url}
                alt="Botellas de Anncestral Mezcal Artesanal sobre madera"
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(195deg,transparent_45%,color-mix(in_oklab,var(--ink)_78%,transparent))]" />
              <img
                src={caseEmblem.url}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute bottom-5 left-5 h-14 opacity-90 sm:h-16 lg:hidden"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <span className="text-xs uppercase tracking-[0.2em] text-volt">
                Caso destacado
              </span>

              <img
                src={caseLogo.url}
                alt="Anncestral Mezcal Artesanal"
                loading="lazy"
                className="mt-6 h-12 w-auto sm:h-14"
              />

              <div className="mt-5 flex flex-wrap gap-2">
                {FEATURED_CASE.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-[11px] font-medium text-mist ring-1 ring-line"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-bone/70">Desafío</h3>
                  <p className="mt-2 max-w-[52ch] text-pretty text-sm text-mist">
                    {FEATURED_CASE.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-bone/70">
                    Qué hicimos
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-pretty text-sm text-mist">
                    {FEATURED_CASE.work}
                  </p>
                </div>
              </div>

              <a
                href={FEATURED_CASE.url}
                target="_blank"
                rel="noopener"
                onClick={() => track("case_anncestral")}
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-volt transition-opacity hover:opacity-80"
              >
                Ver la tienda de Anncestral →
              </a>
            </div>
          </div>
        </article>


        <div className="mt-10 reveal">
          <Cta variant="ghost" event="cta_cases">
            Analizar mi ecommerce
          </Cta>
        </div>
      </div>
    </section>
  );
}
