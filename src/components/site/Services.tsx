import {
  Mountain,
  Users,
  Mic,
  Plane,
  HeartHandshake,
  CalendarCheck,
  Compass,
  BedDouble,
  Wand2,
} from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

const services = [
  {
    icon: Mountain,
    title: "Corporate Retreats",
    desc: "Hill-station, beachside and boutique-property retreats that recharge teams.",
  },
  {
    icon: Users,
    title: "Team Outings",
    desc: "Day-trips, weekend escapes and themed outings designed around your team's vibe.",
  },
  {
    icon: Mic,
    title: "Conferences",
    desc: "From 50 to 1,000 — production, stage, AV, hospitality, handled end to end.",
  },
  {
    icon: Plane,
    title: "Destination Trips",
    desc: "Domestic itineraries with luxury stays and curated activities.",
  },
  {
    icon: HeartHandshake,
    title: "Employee Engagement",
    desc: "Year-round programs that build culture, recognition and belonging.",
  },
  {
    icon: CalendarCheck,
    title: "Event Planning",
    desc: "Town halls, product launches, off-sites — planned with editorial detail.",
  },
  {
    icon: Compass,
    title: "Travel Coordination",
    desc: "Flights, transfers, visas — a single point of contact for every traveler.",
  },
  {
    icon: BedDouble,
    title: "Accommodation Management",
    desc: "Hand-picked properties, negotiated rates, on-ground hospitality.",
  },
  {
    icon: Wand2,
    title: "Customized Experiences",
    desc: "Briefs that don't fit a category. We design from a blank page.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-28 lg:py-40 bg-gradient-warm grain overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16 lg:mb-20 space-y-6">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] text-balance">
              Every experience, <span className="italic text-gold">crafted by hand.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-charcoal/75 max-w-xl">
              Nine disciplines, one obsession — designing corporate moments that feel warm,
              intentional and unforgettable.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card/90 p-7 hover:bg-card transition-all duration-500 ease-luxe hover:-translate-y-1 hover:shadow-glow overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-gold/10 via-transparent to-transparent transition-opacity duration-700" />

              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-espresso text-cream shadow-soft group-hover:bg-gradient-gold group-hover:text-cream transition-all duration-500 ease-luxe">
                  <s.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-espresso mt-5">{s.title}</h3>
                <p className="text-sm text-charcoal/70 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
