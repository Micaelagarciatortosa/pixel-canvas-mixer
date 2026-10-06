import { useCountry } from "@/hooks/useCountry";
import { Logo } from "@/components/Logo";
import { Cta } from "@/components/Cta";


export function Header() {
  const { country } = useCountry();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-ink/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:h-20 sm:px-6 lg:px-10">
        <a href="/#top" aria-label="Empower Yourself — inicio" className="min-w-0 shrink">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm text-mist md:flex">
          <a href="/#ecosistema" className="transition-colors hover:text-bone">Ecosistema</a>
          <a href="/#servicios" className="transition-colors hover:text-bone">Servicios</a>
          <a href="/#proceso" className="transition-colors hover:text-bone">Proceso</a>
          <a href="/#casos" className="transition-colors hover:text-bone">Casos</a>
          <a href="/#contacto" className="transition-colors hover:text-bone">Contacto</a>
        </nav>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <div className="hidden md:block">
            <Cta event="cta_header" className="px-4 py-2">
              {country.copy.ctaPrimary}
            </Cta>
          </div>
        </div>
      </div>
    </header>
  );
}
