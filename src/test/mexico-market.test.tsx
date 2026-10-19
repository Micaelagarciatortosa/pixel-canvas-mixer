import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { COUNTRIES, DEFAULT_COUNTRY, whatsappUrl, telUrl } from "@/config/site";
import { useCountry } from "@/hooks/useCountry";

describe("Regional messaging and contact data", () => {
  it("keeps a single market configuration", () => {
    expect(Object.keys(COUNTRIES)).toEqual(["MX"]);
    expect(DEFAULT_COUNTRY).toBe("MX");
  });

  it("uses regional messaging without an exclusive-country claim", () => {
    expect(COUNTRIES.MX.copy.heroKicker.toLowerCase()).not.toContain("méxico");
    expect(COUNTRIES.MX.copy.marketLine.toLowerCase()).not.toContain("mexicanas");
  });

  it("exposes the new phone with a working tel: link", () => {
    expect(COUNTRIES.MX.phone).toBe("+52 1 55 1653 8728");
    expect(telUrl(COUNTRIES.MX)).toBe("tel:+5215516538728");
  });

  it("uses the new contact email", () => {
    expect(COUNTRIES.MX.email).toBe("contacto@empoweryourself.com.mx");
  });

  it("routes WhatsApp to the new number in international format", () => {
    expect(new URL(whatsappUrl(COUNTRIES.MX)).pathname).toBe("/5215516538728");
  });

  it("ignores any previous country preference", () => {
    localStorage.setItem("ey-country", "AR");
    const { result } = renderHook(() => useCountry());
    expect(result.current.code).toBe("MX");
    expect(result.current.country).toBe(COUNTRIES.MX);
    localStorage.removeItem("ey-country");
  });
});
