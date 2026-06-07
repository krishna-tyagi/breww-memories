import { Eyebrow, Reveal } from "./Section";
import { Quote } from "lucide-react";

const quotes = [
  {
    q: "They turned a routine annual offsite into something our team still talks about. Every small detail — the welcome notes, the playlist, the dinner setup — felt intentional.",
    a: "People Lead, Fintech startup",
  },
  {
    q: "What stood out was how calm everything felt on the ground. We never had to chase a vendor or worry about logistics. We just enjoyed our team.",
    a: "Founder, D2C brand",
  },
  {
    q: "Genuine hospitality is rare in this industry. Breww Memories made our 200-person conference feel like a boutique experience for every guest.",
    a: "Marketing Director, SaaS company",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16 space-y-6">
          <Reveal><Eyebrow>In their words</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] text-balance">
              Quiet praise from <span className="italic text-gold">the people we've hosted.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="h-full rounded-2xl border border-border bg-card/60 backdrop-blur-md p-8 lg:p-9 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-500 ease-luxe">
                <Quote size={28} className="text-gold" strokeWidth={1.4} />
                <blockquote className="mt-5 text-charcoal/85 leading-relaxed font-display text-xl">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground border-t border-border pt-4">
                  {t.a}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
