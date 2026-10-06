import { COUNTRIES, SITE, whatsappUrl } from "@/config/site";
import { Logo } from "@/components/Logo";
import { track } from "@/lib/analytics";

const SERVICE_LINKS = [
  "Ecommerce",
  "UX",
  "Publicidad Digital",
  "Desarrollo",
  "Automatizaciones",
  "Email Marketing",
  "SEO",
  "Analytics",
  "Google Merchant Center",
  "Mercado Ads",
];

export function Footer() {
  return (
    <footer className="w-full border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 sm:py-14 md:grid-cols-3 lg:px-10">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-[36ch] text-pretty text-sm text-mist">
            {SITE.tagline} Potenciamos negocios digitales en México.
          </p>
          <div className="mt-5 flex gap-4 text-sm text-mist">
            <a href={SITE.social.linkedin} target="_blank" rel="noopener" className="hover:text-bone">LinkedIn</a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener" className="hover:text-bone">Instagram</a>
          </div>
        </div>

        <nav aria-label="Servicios" className="md:col-span-1">
          <h2 className="text-xs uppercase tracking-[0.18em] text-mist">Servicios</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-mist">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="/#servicios" className="hover:text-bone">{s}</a>
              </li>
            ))}
          </ul>
        </nav>

        {Object.values(COUNTRIES).map((c) => (
          <div key={c.code}>
            <h2 className="text-xs uppercase tracking-[0.18em] text-mist">{c.name}</h2>
            <p className="mt-3 text-sm text-mist">{c.city}</p>
            <a
              href={whatsappUrl(c)}
              target="_blank"
              rel="noopener"
              onClick={() => track("whatsapp_click", { country: c.code, place: "footer" })}
              className="mt-2 block text-sm text-bone hover:text-volt"
            >
              WhatsApp {c.phone}
            </a>
            <a href={`mailto:${c.email}`} className="mt-1 block text-sm text-mist hover:text-bone">
              {c.email}
            </a>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 text-xs sm:px-6 text-mist lg:px-10">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bone">Privacidad</a>
            <a href="#" className="hover:text-bone">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
