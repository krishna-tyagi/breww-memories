import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// Each variant is the word "brew" in a different typographic voice.
const brewVariants: { word: string; font: string; style?: React.CSSProperties }[] = [
  { word: "brew", font: '"Fraunces", serif', style: { fontStyle: "italic", fontWeight: 500 } },
  {
    word: "brew",
    font: '"Playfair Display", serif',
    style: { fontStyle: "italic", fontWeight: 500 },
  },
  { word: "brew", font: '"Pinyon Script", cursive', style: { fontWeight: 400 } },
  { word: "brew", font: '"Bebas Neue", sans-serif', style: { letterSpacing: "0.04em" } },
  { word: "brew", font: '"Caveat", cursive', style: { fontWeight: 600 } },
  { word: "brew", font: '"DM Serif Display", serif', style: { fontStyle: "italic" } },
  {
    word: "brew",
    font: '"Space Grotesk", sans-serif',
    style: { fontWeight: 500, letterSpacing: "-0.04em" },
  },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % brewVariants.length), 1800);
    return () => clearInterval(t);
  }, []);

  const current = brewVariants[i];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-background grain">
      <div className="absolute inset-0 pointer-events-none hero-ambient" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-card/90 px-4 py-1.5 text-charcoal/70 text-xs tracking-[0.25em] uppercase">
          <Sparkles size={12} className="text-gold" /> Personalized Corporate Experiences
        </div>

        <h1 className="mt-8 font-display text-espresso text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.02] tracking-tight max-w-5xl">
          <span className="block">We don't plan events.</span>
          <span className="block text-espresso/90">
            We{" "}
            <span
              className="relative inline-flex items-baseline overflow-hidden align-baseline h-[0.95em] min-w-[2.6em] sm:min-w-[2.8em] translate-y-[0.06em]"
              aria-label="brew"
            >
              <span
                key={i}
                className="absolute left-0 bottom-0 leading-[0.95] text-gold"
                style={{ fontFamily: current.font, ...current.style }}
              >
                {current.word}
              </span>
            </span>{" "}
            <span className="italic text-espresso/80">unforgettable</span> memories.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-charcoal/70 text-lg leading-relaxed">
          Curated corporate experiences, retreats, and events designed with warmth, detail, and
          unforgettable execution.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-espresso text-cream px-7 py-4 text-sm font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500 ease-luxe"
          >
            Let's Talk
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-500 ease-luxe"
            />
          </a>
          <a
            href="#estimate"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 text-espresso px-7 py-4 text-sm font-medium hover:bg-card hover:-translate-y-0.5 hover:border-gold transition-all duration-500 ease-luxe"
          >
            Get an Estimate
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal/45 text-[10px] tracking-[0.4em] uppercase">
          Scroll
          <span className="block h-8 w-px bg-gradient-to-b from-charcoal/45 to-transparent" />
        </div>
      </div>
    </section>
  );
}
