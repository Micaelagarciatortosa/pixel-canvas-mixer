import { Button } from "@/components/ui/button";
import { useCountry } from "@/hooks/useCountry";
import { Mascot } from "@/components/Mascot";
import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/config/site";

export function Contact() {
  const { country, code } = useCountry();

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
                No necesitas hacer más. Necesitas que todo funcione mejor. Escríbenos y armamos un
                plan claro.
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

            <div className="flex flex-col items-start gap-6 rounded-3xl bg-panel p-6 ring-1 ring-line reveal sm:p-8">
              <p className="text-pretty text-sm text-mist">
                Cuéntanos dónde está tu ecommerce hoy y te proponemos los próximos pasos.
                Respondemos en menos de 24 horas hábiles.
              </p>
              <Button asChild variant="empower" className="w-full">
                <a
                  href={whatsappUrl(country)}
                  target="_blank"
                  rel="noopener"
                  onClick={() =>
                    track("whatsapp_click", { country: code, place: "contacto_cta" })
                  }
                >
                  {country.copy.finalCta}
                </a>
              </Button>
              <p className="text-xs text-mist">
                O escríbenos directo a{" "}
                <a href={`mailto:${country.email}`} className="text-bone hover:text-volt">
                  {country.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
