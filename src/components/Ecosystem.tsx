import { Button } from "@/components/ui/button";
import { useRef, type PointerEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ECOSYSTEM, SERVICES, type Service } from "@/config/content";
import { track } from "@/lib/analytics";

function Glyph({ shape }: { shape: Service["shape"] }) {
  const inner: Record<Service["shape"], React.ReactNode> = {
    square: <span className="size-3 rounded-[2px] bg-volt" />,
    circle: <span className="size-3 rounded-full bg-volt" />,
    arrow: <span className="size-3 rotate-45 border-r-2 border-t-2 border-volt" />,
    diamond: <span className="size-3 rotate-45 rounded-[2px] bg-volt" />,
    bars: (
      <span className="flex items-end gap-0.5">
        <span className="h-1.5 w-[3px] bg-volt" />
        <span className="h-3 w-[3px] bg-volt" />
        <span className="h-2 w-[3px] bg-volt" />
      </span>
    ),
  };
  return (
    <span
      aria-hidden="true"
      className="grid size-9 place-items-center rounded-lg bg-volt/10 ring-1 ring-volt/25 transition-transform duration-300 group-hover:scale-110"
    >
      {inner[shape]}
    </span>
  );
}

const CARD_WIDTH = 272;

export function Ecosystem() {
  
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, moved: 0, startX: 0, scrollLeft: 0 });

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return; // en táctil, scroll nativo
    const el = trackRef.current;
    if (!el) return;
    drag.current = { down: true, moved: 0, startX: e.clientX, scrollLeft: el.scrollLeft };
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    if (trackRef.current) trackRef.current.scrollLeft = drag.current.scrollLeft - dx;
  }

  function endDrag() {
    drag.current.down = false;
  }

  function scrollBy(dir: number) {
    trackRef.current?.scrollBy({ left: dir * CARD_WIDTH, behavior: "smooth" });
  }

  return (
    <section id="ecosistema" className="w-full border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="flex flex-col gap-6 reveal md:flex-row md:items-end md:justify-between">
          <div className="max-w-[34ch]">
            <span className="text-xs uppercase tracking-[0.2em] text-volt">Ecosistema</span>
            <h2 className="mt-4 text-balance text-[1.7rem] font-semibold leading-[1.15] text-bone sm:text-4xl">
              Construimos un ecosistema para que tu ecommerce crezca
            </h2>
          </div>
          <p className="max-w-[42ch] text-pretty text-sm text-mist">
            Ocho piezas que se alimentan entre sí. Cuando una mejora, el resto del sistema lo
            aprovecha.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line md:grid-cols-4">
          {ECOSYSTEM.map((node) => (
            <li
              key={node.name}
              className="bg-ink p-5 transition-colors hover:bg-panel sm:p-6 reveal"
            >
              <span className="text-[11px] font-medium text-volt">{node.n}</span>
              <h3 className="mt-2.5 font-display font-medium text-bone">{node.name}</h3>
              <p className="mt-1 text-xs text-mist">{node.note}</p>
            </li>
          ))}
        </ul>

        <div id="servicios" className="mt-14 scroll-mt-24">
          <div className="flex items-end justify-between reveal">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-volt">Servicios</span>
              <h3 className="mt-3 max-w-[26ch] text-balance text-xl font-semibold text-bone sm:text-2xl">
                Todo lo que tu ecommerce necesita para crecer
              </h3>
            </div>
            <div className="hidden gap-2 md:flex">
              <Button variant="empowerOutline" size="icon"
                type="button"
                aria-label="Servicios anteriores"
                onClick={() => scrollBy(-1)}
                className="grid size-11 place-items-center rounded-xl ring-1 ring-line text-mist transition-colors hover:ring-volt/40 hover:text-bone"
              >
                <span aria-hidden="true">←</span>
              </Button>
              <Button variant="empowerOutline" size="icon"
                type="button"
                aria-label="Servicios siguientes"
                onClick={() => scrollBy(1)}
                className="grid size-11 place-items-center rounded-xl ring-1 ring-line text-mist transition-colors hover:ring-volt/40 hover:text-bone"
              >
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className="no-scrollbar mt-6 flex cursor-grab select-none snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 [touch-action:pan-y_pinch-zoom] active:cursor-grabbing reveal"
          >
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to="/servicios/$slug"
                params={{ slug: service.slug }}
                onClickCapture={(e) => {
                  if (drag.current.moved > 8) e.preventDefault();
                }}
                onClick={() => track("cta_service", { service: service.title })}
                className="group block w-[78vw] max-w-[300px] shrink-0 snap-start rounded-2xl bg-panel p-5 ring-1 ring-line transition-all hover:ring-volt/40 hover:shadow-[var(--glow-volt)] sm:w-[272px]"
              >
                <Glyph shape={service.shape} />
                <h4 className="mt-4 text-lg font-semibold text-bone">{service.title}</h4>
                <p className="mt-2 text-sm text-mist">{service.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-volt transition-opacity group-hover:opacity-80">
                  Ver más →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
