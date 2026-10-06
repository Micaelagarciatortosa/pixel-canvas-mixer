import { FAQS } from "@/config/content";

export function Faq() {
  return (
    <section className="w-full border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4 reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-volt">Preguntas</span>
          <h2 className="mt-4 max-w-[18ch] text-balance text-[1.7rem] font-semibold leading-[1.15] text-bone sm:text-4xl">
            Lo que nos preguntan antes de empezar
          </h2>
        </div>
        <div className="lg:col-span-8">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-line reveal [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex min-h-[3.5rem] cursor-pointer list-none items-start justify-between gap-4 py-4 text-bone sm:items-center sm:gap-6">
                <span className="min-w-0 flex-1 text-pretty text-[0.95rem] font-medium leading-snug sm:text-base">
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 -my-1 place-items-center text-lg text-volt transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mb-5 max-w-[70ch] text-pretty text-sm leading-relaxed text-mist">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
