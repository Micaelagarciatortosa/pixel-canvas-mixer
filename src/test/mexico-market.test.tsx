import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { COUNTRIES, DEFAULT_COUNTRY, whatsappUrl } from "@/config/site";
import { useCountry } from "@/hooks/useCountry";

describe("Mexico-only market", () => {
  it("offers Mexico as the only market", () => {
    expect(Object.keys(COUNTRIES)).toEqual(["MX"]);
    expect(DEFAULT_COUNTRY).toBe("MX");
  });

  it("ignores a previous Argentina preference", () => {
    localStorage.setItem("ey-country", "AR");
    const { result } = renderHook(() => useCountry());
    expect(result.current.code).toBe("MX");
    expect(result.current.country).toBe(COUNTRIES.MX);
    localStorage.removeItem("ey-country");
  });

  it("routes WhatsApp contact to the original Mexico number", () => {
    expect(new URL(whatsappUrl(COUNTRIES.MX)).pathname).toBe("/5215525231351");
    expect(COUNTRIES.MX.email).toBe("hola@empoweryourself.mx");
  });
});