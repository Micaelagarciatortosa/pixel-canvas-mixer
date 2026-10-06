import { useCountry } from "@/hooks/useCountry";
import { whatsappUrl } from "@/config/site";
import { track } from "@/lib/analytics";

export function FloatingActions() {
  const { country, code } = useCountry();

  return (
    <>
      <a
        href={whatsappUrl(country)}
        target="_blank"
        rel="noopener"
        aria-label={`Escríbenos por WhatsApp (${country.name})`}
        onClick={() => track("whatsapp_click", { country: code, place: "floating" })}
        className="fixed right-4 z-50 grid size-14 place-items-center rounded-full bg-volt text-ink ring-1 ring-volt glow-volt transition-shadow hover:shadow-[var(--glow-volt-strong)] sm:bottom-6 sm:right-6 bottom-[calc(4.75rem+env(safe-area-inset-bottom))]"
      >
        <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.53 3.75 1.45 5.31L2 22l4.98-1.6a9.8 9.8 0 0 0 5.06 1.4h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.78 9.78 0 0 0 12.04 2Zm0 17.96h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1 1 1.02-3.02-.2-.31a8.1 8.1 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.86 5.8 2.41a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.19-8.4 8.19Zm4.5-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.55.12-.16.25-.63.8-.78.96-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.17 1.69 2.58 4.1 3.62.57.24 1.02.39 1.37.5.58.18 1.1.16 1.52.1.46-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.11-.22-.17-.47-.29Z" />
        </svg>
      </a>

      <a
        href="/#contacto"
        onClick={() => track("cta_sticky_mobile")}
        className="fixed inset-x-0 bottom-0 z-40 flex min-h-14 items-center justify-center gap-2 border-t border-volt/40 bg-volt pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 text-sm font-semibold text-ink sm:hidden"
      >
        {country.copy.ctaPrimary} →
      </a>
    </>
  );
}
