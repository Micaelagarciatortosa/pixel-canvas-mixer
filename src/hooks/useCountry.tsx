import type { ReactNode } from "react";
import { COUNTRIES, DEFAULT_COUNTRY } from "@/config/site";

// México is the only market. Ignore any prior country preference.
export function CountryProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function useCountry() {
  return { code: DEFAULT_COUNTRY, country: COUNTRIES.MX };
}
