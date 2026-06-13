import { Eyebrow, Reveal } from "./Section";
import { Coffee, Feather, Heart, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: Feather,
    title: "Personalised planning",
    desc: "Briefs are never copy-pasted. Every itinerary is sketched from scratch around your team.",
  },
  {
    icon: Coffee,
    title: "Warm hospitality",
    desc: "We treat your team like our guests — with the same care a boutique hotel gives a single suite.",
  },
  {
    icon: ShieldCheck,
    title: "Stress-free coordination",
    desc: "One point of contact. Vetted vendors. Quiet, calm execution behind the scenes.",
  },
  {
    icon: Heart,
    title: "Emotionally memorable",
    desc: "We design for the moments people retell at the dinner table, not the line items in a quote.",
  },
];

export function Why() {
  return (
    <section
      id="why"
      className="relative py-28 lg:py-40 bg-gradient-espresso text-cream overflow-hidden"
    >
      <div className="absolute inset-0 grain opacity-100" />
      <div className="absolute inset-0 why-ambient pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-20 space-y-6">
          <Reveal>
            <Eyebrow>Why Breww Memories</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.02] text-balance">
              Not packages. <span className="italic text-gold">Experiences.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-cream/70 max-w-xl">
              Other planners optimise for margin. We optimise for the goosebumps your team feels
              when they walk into the room.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-cream/10 rounded-3xl overflow-hidden border border-cream/10">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="bg-espresso p-10 lg:p-12 h-full hover:bg-espresso/80 transition-colors duration-500 ease-luxe group">
                <p.icon
                  size={28}
                  strokeWidth={1.4}
                  className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500 ease-luxe"
                />
                <h3 className="font-display text-2xl lg:text-3xl">{p.title}</h3>
                <p className="text-cream/65 mt-3 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
