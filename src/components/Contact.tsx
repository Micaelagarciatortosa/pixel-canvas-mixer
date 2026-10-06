import { useState, type FormEvent } from "react";
import { NEEDS } from "@/config/content";
import { Button } from "@/components/ui/button";
import { useCountry } from "@/hooks/useCountry";
import { Mascot } from "@/components/Mascot";
import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/config/site";

const field =
  "mt-1.5 w-full rounded-lg bg-ink px-3.5 py-2.5 text-sm text-bone ring-1 ring-line placeholder:text-mist/60 focus:outline-none focus:ring-volt";

export function Contact() {
  const { country, code } = useCountry();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    track("form_submit", { country: code });
    setSent(true);
  }

  return (
    <section id="contacto" className="w-full border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-[1.5rem] p-5 bg-[radial-gradient(500px_300px_at_20%_0%,color-mix(in_oklab,var(--volt)_12%,transparent),transparent)] ring-1 ring-line sm:p-8 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal">
              <Mascot size={52} />
              <h2 className="mt-6 max-w-[20ch] text-balance text-[1.7rem] font-semibold leading-[1.15] text-bone sm:text-4xl">
                ¿Listo para potenciar tu ecommerce?
              </h2>
              <p className="mt-4 max-w-[42ch] text-pretty text-mist">
                No necesitas hacer más. Necesitas que todo funcione mejor. Cuéntanos dónde estás hoy
                y armamos un plan claro.
              </p>
              <div className="mt-8 space-y-2 text-sm">
                <p className="text-mist">
                  WhatsApp {country.name}:{" "}
                  <a
                    href={whatsappUrl(country)}
                    target="_blank"
                    rel="noopener"
                    onClick={() => track("whatsapp_click", { country: code, place: "contacto" })}
                    className="font-medium text-volt hover:opacity-80"
                  >
                    {country.phone}
                  </a>
                </p>
                <p className="text-mist">
                  Email:{" "}
                  <a href={`mailto:${country.email}`} className="text-bone hover:text-volt">
                    {country.email}
                  </a>
                </p>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-3xl bg-panel p-6 ring-1 ring-line reveal"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="text-xs text-mist">Nombre</label>
                  <input id="nombre" name="nombre" required placeholder="Tu nombre" className={field} />
                </div>
                <div>
                  <label htmlFor="empresa" className="text-xs text-mist">Empresa</label>
                  <input id="empresa" name="empresa" placeholder="Tu marca" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs text-mist">Email</label>
                  <input id="email" name="email" type="email" required placeholder="tu@email.com" className={field} />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="text-xs text-mist">WhatsApp</label>
                  <input id="whatsapp" name="whatsapp" inputMode="tel" placeholder={country.phone} className={field} />
                </div>
                <input type="hidden" name="pais" value="MX" />
                <div>
                  <label htmlFor="necesidad" className="text-xs text-mist">¿Qué necesitas potenciar?</label>
                  <select id="necesidad" name="necesidad" className={field}>
                    {NEEDS.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                variant="empower"
                type="submit"
                className="w-full"
              >
                {country.copy.finalCta}
              </Button>

              <p aria-live="polite" className="min-h-5 text-xs text-mist">
                {sent
                  ? "¡Gracias! Recibimos tus datos y te escribimos a la brevedad."
                  : "Te respondemos en menos de 24 horas hábiles."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
