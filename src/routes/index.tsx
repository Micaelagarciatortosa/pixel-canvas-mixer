import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { CountryProvider } from "@/hooks/useCountry";
import { useReveal } from "@/hooks/useReveal";
import { initScrollTracking } from "@/lib/analytics";
import { SITE } from "@/config/site";
import { FAQS, SERVICES } from "@/config/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Ecosystem } from "@/components/Ecosystem";

import { Process } from "@/components/Process";
import { Metrics } from "@/components/Metrics";
import { Cases } from "@/components/Cases";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const title = "Empower Yourself | Agencia de ecommerce en México";
const description =
  "Potenciamos tu ecommerce para que venda más: UX, publicidad digital, desarrollo, automatizaciones, email marketing, SEO y analítica en México.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}#organization`,
      name: SITE.name,
      url: SITE.url,
      description,
      areaServed: ["MX"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "es",
      publisher: { "@id": `${SITE.url}#organization` },
    },
    ...SERVICES.map((s) => ({
      "@type": "Service",
      name: s.title,
      description: s.text,
      provider: { "@id": `${SITE.url}#organization` },
      areaServed: ["MX"],
    })),
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "es_MX" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: SITE.url + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  useReveal();
  useEffect(() => initScrollTracking(), []);

  return (
    <CountryProvider>
      <Header />
      <main className="pb-24 sm:pb-0">
        <Hero />
        <Problems />
        <Ecosystem />
        
        <Process />
        <Metrics />
        <Cases />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </CountryProvider>
  );
}
