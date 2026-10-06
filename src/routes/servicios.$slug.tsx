import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES } from "@/config/content";
import { SITE } from "@/config/site";
import { CountryProvider, useCountry } from "@/hooks/useCountry";
import { whatsappUrl } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { track } from "@/lib/analytics";

function findService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Servicio no encontrado | Empower Yourself" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.service.title} | Empower Yourself`;
    const description = loaderData.service.text;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/servicios/${loaderData.service.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `${SITE.url}/servicios/${loaderData.service.slug}` }],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServicePage,
});

function ServiceNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-6">
      <h1 className="text-2xl font-semibold text-bone">No encontramos ese servicio</h1>
      <Link to="/" hash="servicios" className="mt-6 inline-block text-sm font-semibold text-volt">
        ← Volver a servicios
      </Link>
    </main>
  );
}

function ServicePage() {
  return (
    <CountryProvider>
      <Header />
      <ServiceBody />
      <Footer />
      <FloatingActions />
    </CountryProvider>
  );
}

function ServiceBody() {
  const { service } = Route.useLoaderData();
  const { country } = useCountry();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <main className="pb-24 sm:pb-0">
      <section className="mx-auto max-w-4xl px-5 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <Link
          to="/"
          hash="servicios"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-mist transition-colors hover:text-bone"
        >
          ← Servicios
        </Link>

        <span className="mt-6 block text-xs uppercase tracking-[0.2em] text-volt">Servicio</span>
        <h1 className="mt-4 text-balance text-[2.1rem] font-semibold leading-[1.1] text-bone sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-5 max-w-[52ch] text-pretty text-base text-mist sm:text-lg">{service.text}</p>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line">
          {service.detail.map((item) => (
            <li key={item} className="flex gap-3 bg-ink p-5 sm:p-6">
              <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-volt" />
              <p className="text-sm text-mist sm:text-base">{item}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl bg-panel p-6 ring-1 ring-line sm:p-8">
          <h2 className="text-xl font-semibold text-bone sm:text-2xl">
            ¿Quieres avanzar con {service.title}?
          </h2>
          <p className="mt-2 text-sm text-mist">{country.copy.marketLine}</p>
          <a
            href={whatsappUrl(country)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_whatsapp", { service: service.title })}
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-volt px-6 py-3 text-sm font-semibold text-ink ring-1 ring-volt transition-shadow hover:shadow-[var(--glow-volt-strong)]"
          >
            {country.copy.ctaSecondary} →
          </a>
        </div>

        <div className="mt-14">
          <h2 className="text-sm uppercase tracking-[0.2em] text-volt">Otros servicios</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/servicios/$slug"
                params={{ slug: s.slug }}
                className="inline-flex min-h-11 items-center rounded-xl px-4 text-sm text-mist ring-1 ring-line transition-colors hover:text-bone hover:ring-volt/40"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
