import { PROBLEMS } from "@/config/content";

export function Problems() {
  return (
    <section className="w-full border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="max-w-[28ch] reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-volt">Problema → Solución</span>
          <h2 className="mt-4 text-balance text-[1.7rem] font-semibold leading-[1.15] text-bone sm:text-4xl">
            Tu ecommerce puede estar haciendo mucho más
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROBLEMS.map((item) => (
            <div key={item.problem} className="grid gap-6 reveal md:grid-cols-1">
              <div className="rounded-2xl bg-panel p-8 ring-1 ring-line">
                <span className="text-[11px] uppercase tracking-[0.18em] text-mist">
                  {item.problem}
                </span>
                <p className="mt-4 max-w-[44ch] text-pretty text-bone/90">{item.problemText}</p>
              </div>
              <div className="rounded-2xl bg-volt/[0.06] p-8 ring-1 ring-volt/30">
                <span className="text-[11px] uppercase tracking-[0.18em] text-volt">
                  {item.solution}
                </span>
                <p className="mt-4 max-w-[44ch] text-pretty text-bone">{item.solutionText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
