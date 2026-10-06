import { PROCESS } from "@/config/content";

export function Process() {
  return (
    <section id="proceso" className="w-full border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-volt">Cómo trabajamos</span>
          <h2 className="mt-4 max-w-[22ch] text-balance text-[1.7rem] font-semibold leading-[1.15] text-bone sm:text-4xl">
            Del diagnóstico al sistema que mejora solo
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-5">
          {PROCESS.map((step) => (
            <li key={step.n} className="border-t border-line pt-6 reveal">
              <div className="font-display text-sm font-semibold text-volt">{step.n}</div>
              <h3 className="mt-3 font-medium text-bone">{step.title}</h3>
              <p className="mt-2 text-xs text-mist">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
