import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  event?: string;
  className?: string;
};

export function Cta({ children, href = "#contacto", variant = "primary", event, className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-shadow";
  const styles =
    variant === "primary"
      ? "bg-volt text-ink ring-1 ring-volt hover:shadow-[var(--glow-volt-strong)]"
      : "text-bone ring-1 ring-line hover:ring-mist transition-colors";

  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      onClick={() => event && track(event)}
    >
      {children}
    </a>
  );
}
