import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// Each variant is the word "brew" in a different typographic voice.
const brewVariants: { word: string; font: string; style?: React.CSSProperties }[] = [
  { word: "brew", font: '"Fraunces", serif', style: { fontStyle: "italic", fontWeight: 500 } },
  { word: "brew", font: '"Playfair Display", serif', style: { fontStyle: "italic", fontWeight: 500 } },
  { word: "brew", font: '"Pinyon Script", cursive', style: { fontWeight: 400 } },
  { word: "brew", font: '"Bebas Neue", sans-serif', style: { letterSpacing: "0.04em" } },
  { word: "brew", font: '"Caveat", cursive', style: { fontWeight: 600 } },
  { word: "brew", font: '"DM Serif Display", serif', style: { fontStyle: "italic" } },
  { word: "brew", font: '"Space Grotesk", sans-serif', style: { fontWeight: 500, letterSpacing: "-0.04em" } },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % brewVariants.length), 1800);
    return () => clearInterval(t);
  }, []);

  const current = brewVariants[i];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-background grain"
    >
      {/* Soft ambient backdrop — no photo, just warm radial light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[1200px] rounded-full bg-gold/15 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-espresso/[0.06] blur-[140px]" />
      </div>

      {/* Subtle drifting particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, k) => (
          <motion.span
            key={k}
            className="absolute h-1 w-1 rounded-full bg-gold/40"
            style={{ left: `${(k * 37) % 100}%`, top: `${(k * 53) % 100}%` }}
            animate={{ y: [0, -24, 0], opacity: [0.15, 0.55, 0.15] }}
            transition={{ duration: 7 + (k % 5), repeat: Infinity, delay: k * 0.4, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-card/60 backdrop-blur-md px-4 py-1.5 text-charcoal/70 text-xs tracking-[0.25em] uppercase"
        >
          <Sparkles size={12} className="text-gold" /> Personalized Corporate Experiences
        </motion.div>

        <h1 className="mt-8 font-display text-espresso text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.02] tracking-tight max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            We don't plan events.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block text-espresso/90"
          >
            We{" "}
            <span
              className="relative inline-flex items-baseline overflow-hidden align-baseline h-[0.95em] min-w-[2.6em] sm:min-w-[2.8em] translate-y-[0.06em]"
              aria-label="brew"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-110%", opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 bottom-0 leading-[0.95] text-gold"
                  style={{ fontFamily: current.font, ...current.style }}

                >
                  {current.word}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            <span className="italic text-espresso/80">unforgettable</span> memories.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-charcoal/70 text-lg leading-relaxed"
        >
          Curated corporate experiences, retreats, and events designed with warmth,
          detail, and unforgettable execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-espresso text-cream px-7 py-4 text-sm font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500 ease-luxe"
          >
            Let's Talk
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500 ease-luxe" />
          </a>
          <a
            href="#estimate"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-md text-espresso px-7 py-4 text-sm font-medium hover:bg-card hover:-translate-y-0.5 hover:border-gold transition-all duration-500 ease-luxe"
          >
            Get an Estimate
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal/45 text-[10px] tracking-[0.4em] uppercase"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-8 w-px bg-gradient-to-b from-charcoal/45 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
