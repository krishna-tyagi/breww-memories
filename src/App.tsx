import { Helmet } from "react-helmet-async";
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
const ogImage = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8e69454f-d9d3-4d3e-9b6f-4303c2da02ff/id-preview-356355c8--ea7841ca-78e4-426f-94af-82af0f34ab2f.lovable.app-1779985493751.png";

export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B2419" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Breww Memories" />
        <meta name="keywords" content="corporate event planners Delhi, corporate offsite planners NCR, team outing planners Delhi, luxury corporate retreats India, event management Delhi NCR, corporate travel planners India, customized corporate experiences, employee engagement events Delhi, destination corporate retreats, premium event planners NCR" />
        <meta property="og:site_name" content="Breww Memories" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href="/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,500&family=Pinyon+Script&family=Bebas+Neue&family=Caveat:wght@600&family=DM+Serif+Display:ital@1&family=Space+Grotesk:wght@500&display=swap" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Breww Memories",
            url: "https://brewwmemories.com",
            description,
            areaServed: "India",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Delhi NCR",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8279457108",
              email: "brewwmemories@gmail.com",
              contactType: "Customer Service",
            },
            sameAs: ["https://www.instagram.com/brewwmemories"],
          })}
        </script>
      </Helmet>
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
    </>
  );
}
