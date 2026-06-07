import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Why } from "@/components/site/Why";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { Estimate } from "@/components/site/Estimate";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Breww Memories — Luxury Corporate Experiences, Retreats & Events";
const description =
  "Breww Memories curates premium corporate retreats, conferences, team outings and destination trips across Delhi NCR and India. We don't plan events — we brew memories.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "corporate event planners Delhi, corporate offsite planners NCR, team outing planners Delhi, luxury corporate retreats India, event management Delhi NCR, corporate travel planners India, customized corporate experiences, employee engagement events Delhi, destination corporate retreats, premium event planners NCR" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Breww Memories",
          url: "https://brewwmemories.com",
          description,
          areaServed: "India",
          address: { "@type": "PostalAddress", addressRegion: "Delhi NCR", addressCountry: "IN" },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8279457108",
            email: "brewwmemories@gmail.com",
            contactType: "Customer Service",
          },
          sameAs: ["https://www.instagram.com/brewwmemories"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Re-scroll to hash after images/layout settle (lazy images push sections down).
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    };
    const t1 = window.setTimeout(scrollToTarget, 100);
    const t2 = window.setTimeout(scrollToTarget, 600);
    const onLoad = () => scrollToTarget();
    window.addEventListener("load", onLoad);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Why />
      <Process />
      <Portfolio />
      <Testimonials />
      <Estimate />
      <Contact />
      <Footer />
    </main>
  );
}
